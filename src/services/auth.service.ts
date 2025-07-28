import { ERROR_MESSAGES } from "@src/constants/messages.global";
import { MailService, OTPService, UserService } from ".";
import { getBCryptCompare } from "@src/helpers";
import { validateIsEmail } from "@src/utils/validate-is-email";
import { generatorJWT } from "@src/helpers/generator-jwt";
import { CONFIG, MAIL, ROLES } from "@src/constants/config-global";
import { AuthModel, OTPEmailVerificationsModel } from "@src/models";
import { AuthCreateEditAttributes, IAuthAttributes, IAuthParams } from "@src/types";
import { CustomError } from "@src/utils/custom-exception.error";
import { ClientService } from './client.service';

export class AuthService {
    private userService = new UserService();
    private clientService = new ClientService();

    constructor() { }

    async findAuthByEmail(email: string): Promise<IAuthAttributes | null> {
        const auth = await AuthModel.findOne({
            where: { email },
        });
        return auth?.get({ plain: true });
    }

    async findAuthById(id: string): Promise<IAuthAttributes | null> {
        const auth = await AuthModel.findByPk(id);
        return auth?.get({ plain: true });
    }

    async updateAuth(id: string, partial: Partial<AuthCreateEditAttributes>) {
        const { ...fields } = partial;

        const auth = await AuthModel.findByPk(id);
        if (!auth) {
            throw new CustomError(
                'Auth no encontrado',
                404
            );
        }
        await auth.update(fields);
        return auth;
    }

    /** Login: verifica credenciales y devuelve usuario + token */
    public async login(username: string, password: string) {
        const normalized = username.trim().toLowerCase();
        let foundUser = null
        if (validateIsEmail(username)) {
            foundUser = await this.userService.findUserByEmail(normalized);
        } else {
            foundUser = await this.userService.findUserByUsername(normalized);
        }

        if (!foundUser) throw { status: 404, message: ERROR_MESSAGES.ERROR_USER_NOT_FOUND };
        if (foundUser.getDataValue("deleted")) throw { status: 401, message: ERROR_MESSAGES.ERROR_USER_DISABLED };

        const current = foundUser.get({ plain: true });
        if (!getBCryptCompare(password, current?.auth?.password!)) {
            throw { status: 401, message: "Correo electrónico o contraseña inválida" };
        }

        const token = await generatorJWT({
            payload: {
                uid: current.id,
            },
            expiresIn: `${current?.auth?.sessionLimit}h`,
        });

        const userLogged = await this.userService.findUserLoggedById(current.id);
        return { user: userLogged, accessToken: token };
    }

    public async clientLogin(email: string, password: string) {
        const auth = await this.findAuthByEmail(email);
        if (!auth) {
            throw new CustomError("Cliente no registrado", 404);
        }

        if (!getBCryptCompare(password, auth.password!)) {
            throw new CustomError("Correo electrónico o contraseña inválida", 401);
        }

        const client = await this.clientService.findClientByAuthId(auth.id);

        const token = await generatorJWT({
            payload: {
                authId: auth.id,
                clientId: client?.getDataValue('id'),
            },
            expiresIn: `${auth.sessionLimit}h`,
        });

        return { client, accessToken: token };
    }

    public async refresh({
        uid,
        authId,
        clientId,
    }: IAuthParams): Promise<string> {

        let payload: Record<string, string> = {};
        let expiresIn = CONFIG.EXPIRATED_LAPSE_TIME;

        switch (true) {
            case Boolean(uid): {
                const foundUser = await this.userService.findUserLoggedById(uid!);
                if (!foundUser) throw { status: 401, message: "Usuario no encontrado" };

                const sessionLimit = foundUser.getDataValue("auth")?.sessionLimit;
                if (sessionLimit) {
                    expiresIn = `${sessionLimit}h`;
                }

                payload.uid = foundUser.getDataValue("id");
                payload.roleCode = foundUser.getDataValue("role")?.code ?? ROLES.OPERATOR;

                break;
            }

            case Boolean(authId): {
                const foundAuth = await this.findAuthById(authId!);
                if (!foundAuth) throw { status: 401, message: "Auth no encontrado" };

                const sessionLimit = foundAuth.sessionLimit;
                if (sessionLimit) {
                    expiresIn = `${sessionLimit}h`;
                }

                payload.authId = foundAuth.id;

                break;
            }

            case Boolean(clientId): {
                const foundClient = await this.clientService.findClientById(clientId!);
                if (!foundClient) throw { status: 401, message: "Cliente no encontrado" };

                payload.clientId = foundClient.getDataValue("id");
                break;
            }

            default:
                throw {
                    status: 400,
                    message: "Debe proporcionar uid, authId o clientId"
                };
        }

        const token = await generatorJWT({
            payload,
            expiresIn,
        });

        return token;
    }


    /** Verifica código enviado al correo */
    public async verifyEmailOTP(authId: string, code: string) {
        const resp = await OTPService.verifyEmailOTP(authId, code);
        if (resp) {
            this.updateAuth(authId, { isEmailVerified: true })
        }
    }

    /** Reenvía nuevo código al correo */
    public async retryEmailOTP(authId: string) {
        await OTPService.createEmailOTP(authId);
    }

    /** Verifica código SMS */
    public async verifyPhoneOTP(authId: string, code: string): Promise<boolean> {

        const resp = await OTPService.verifySMSOTP(authId, code);
        if (resp) {
            this.updateAuth(authId, { isPhoneVerified: true })
        }
        return resp;
    }

    /** Reenvía nuevo código SMS */
    public async retryPhoneOTP(authId: string, phone: string, prefix: string) {
        await OTPService.createSendSmsOTP(authId, phone, prefix);
    }

    /** Permite crear/actualizar contraseña en Auth */
    public async createPassword(authId: string, password: string) {

        const userAuth = await AuthModel.findByPk(authId);
        if (!userAuth) throw { status: 404, message: "Auth no encontrado" };

        this.updateAuth(authId, { password, isPasswordCreated: true })
    }

    public async sendEmailOTP(
        authId: string,
        template: string,
        subject: string
    ) {
        // 1. Generar/actualizar OTP y obtener el registro
        const record = await OTPService.createEmailOTP(authId);

        // 2. Recuperar email del usuario
        const auth = await AuthModel.findByPk(authId);
        const email = auth?.getDataValue("email");

        // 3. Enviar correo con el código
        const mailService = new MailService();

        await mailService.sendMail({
            to: email,
            template,
            context: { code: record.getDataValue("code") },
            subject
        });

        return record;
    }

    // --- Nuevos Métodos para Cambio y Reseteo de Contraseña ---

    public async changePasswordLoggedIn(userId: string, oldPasswordAttempt: string, newPasswordRaw: string): Promise<void> {
        const user = await this.userService.findUserById(userId); // Este método ya incluye 'auth'
        if (!user || !user.auth) {
            throw new CustomError(ERROR_MESSAGES.ERROR_USER_NOT_FOUND, 404);
        }

        const authRecord = user.auth;
        if (!authRecord.password) {
            throw new CustomError("La cuenta no tiene una contraseña configurada.", 400);
        }

        const isMatch = await getBCryptCompare(oldPasswordAttempt, authRecord.password);
        if (!isMatch) {
            throw new CustomError(ERROR_MESSAGES.ERROR_OLD_PASSWORD_INCORRECT, 400);
        }

        // El controlador ya valida la fortaleza y coincidencia de newPasswordRaw
        // La función CONFIG.ENCRYPT_DATA ya debería manejar el hasheo.
        // No es necesario comparar con getBCryptCompare aquí.
        // const newPasswordHash =  CONFIG.ENCRYPT_DATA(newPasswordRaw);
        
        await this.updateAuth(authRecord.id, { password: newPasswordRaw, isPasswordCreated: true });
    }

    public async requestPasswordReset(email: string): Promise<void> {
        const authRecord = await this.findAuthByEmail(email);

        if (!authRecord || !authRecord.isEmailVerified) {
            // No lanzar error para no revelar si el email existe o está verificado
            console.warn(`Solicitud de reseteo de contraseña para email no encontrado o no verificado: ${email}`);
            return; // Simplemente retorna, el controlador enviará mensaje genérico
        }

        const otpRecord = await OTPService.createEmailOTP(authRecord.id);
        
        const mailService = new MailService();
        await mailService.sendMail({
            to: authRecord.email,
            subject: MAIL.SUBJECT.PASSWORD_RESET_OTP || "Tu código para restablecer la contraseña",
            template: MAIL.TEMPLATES.PASSWORD_RESET_OTP_CODE || "password-reset-otp-code",
            context: {
                userName: authRecord.username || authRecord.email.split('@')[0],
                otpCode: otpRecord.getDataValue("code"),
                expirationTime: `${CONFIG.OTP_EXPIRATION_MINUTES} minutos`,
            },
        });
    }

    public async resetPasswordWithOtp(email: string, otpCode: string, newPasswordRaw: string): Promise<void> {
        const authRecord = await this.findAuthByEmail(email);
        if (!authRecord) {
            throw new CustomError(ERROR_MESSAGES.ERROR_OTP_INVALID_OR_EXPIRED, 400);
        }

        const otpIsValid = await OTPService.verifyEmailOTP(authRecord.id, otpCode);
        if (!otpIsValid) {
            // verifyEmailOTP ya lanza CustomError si es inválido o expirado, así que esta línea podría no ser necesaria
            // o podría ser un doble chequeo. Si verifyEmailOTP devuelve false en lugar de lanzar error, entonces sí es necesaria.
            // Asumiendo que verifyEmailOTP lanza error si no es válido:
            // throw new CustomError(ERROR_MESSAGES.OTP_INVALID_OR_EXPIRED, 400);
        }
        // Si OTPService.verifyEmailOTP lanza error, la ejecución no llegará aquí.
        // Si devuelve booleano y es false, entonces:
        if (!otpIsValid) throw new CustomError(ERROR_MESSAGES.ERROR_OTP_INVALID_OR_EXPIRED, 400);


        // const newPasswordHash = CONFIG.ENCRYPT_DATA(newPasswordRaw);
        await this.updateAuth(authRecord.id, { password: newPasswordRaw, isPasswordCreated: true });

        // Opcional: invalidar el OTP específico si verifyEmailOTP no lo hace (aunque ya lo hace)
        const otpRecord = await OTPEmailVerificationsModel.findOne({ where: { authId: authRecord.id, code: otpCode} });
        if (otpRecord) await otpRecord.update({ used: true });

        const mailService = new MailService();
        await mailService.sendMail({
            to: authRecord.email,
            subject: MAIL.SUBJECT.PASSWORD_CHANGED_CONFIRMATION || "Confirmación de Cambio de Contraseña",
            template: MAIL.TEMPLATES.PASSWORD_CHANGED_CONFIRMATION || "password-changed-confirmation",
            context: {
                userName: authRecord.username || authRecord.email.split('@')[0],
            },
        });
    }
}