import { ERROR_MESSAGES } from "@src/constants/messages.global";
import { MailService, OTPService, UserService } from ".";
import { getBCryptCompare } from "@src/helpers";
import { validateIsEmail } from "@src/utils/validate-is-email";
import { generatorJWT } from "@src/helpers/generator-jwt";
import { CONFIG, ROLES } from "@src/constants/config-global";
import { AuthModel } from "@src/models";
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
}