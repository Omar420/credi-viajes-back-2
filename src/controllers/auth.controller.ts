import { CONFIG, MAIL, ROLES } from "@src/constants/config-global";
import { ERROR_MESSAGES } from "@src/constants/messages.global";
import { encryptData, getBCryptCompare } from "@src/helpers";
import { generatorJWT } from "@src/helpers/generator-jwt";
import { AuthService, UserService } from "@src/services";
import { validateIsEmail } from "@src/utils/validate-is-email";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { AuthModel, OTPEmailVerificationsModel, UserModel } from "@src/models";
import { MailService } from "@src/services/mail.service"; 
import { AuthenticatedRequest } from "@src/types"; 
// Se importa CONFIG como GlobalConfig para evitar colisión con la variable CONFIG ya importada en la parte superior del archivo.
import { CONFIG as GlobalConfig, MAIL as GlobalMail } from "@src/constants/config-global"; 
import { SUCCESS_MESSAGES as SM, ERROR_MESSAGES as EM } from "@src/constants/messages.global";
import { generateSixDigitCode } from "@src/utils/generate-six-digit-code";


/**
 * Handles the sign-in process for an existing user.
 *
 * This function takes a request containing user credentials, verifies them, generates an access token,
 * and retrieves the logged-in user's information.
 *
 * @param req - The Express request object containing the user's email and password.
 * @param res - The Express response object to send the response.
 *
 * @returns - An HTTP response with status 200 (OK) and the logged-in user's information,
 * access token, and a success message.
 *
 * @throws Will throw an error if the user credentials are invalid or if any of the operations fail.
 */
export async function postSingIn(
    req: Request,
    res: Response
) {
    try {
        const username = req.body.username.trim().toLowerCase();
        const password = req.body.password;

        const userService = new UserService();
        let foundUser = null

        if (validateIsEmail(username)) {
            foundUser = await userService.findUserByEmail(username);
        } else {
            foundUser = await userService.findUserByUsername(username);
        }

        if (!foundUser) return res.status(404).json({ message: ERROR_MESSAGES.ERROR_USER_NOT_FOUND });
        if (foundUser.getDataValue("deleted")) return res.status(401).json({ message: ERROR_MESSAGES.ERROR_USER_DISABLED });

        const currentUser = foundUser.get({ plain: true });

        if (!getBCryptCompare(password, currentUser?.auth?.password!)) {
            return res.status(401).json({
                message: "Correo electrónico o contraseña inválida",
            });
        }

        const accessToken = await generatorJWT({
            payload: {
                uid: currentUser.id,
                roleCode: currentUser?.role?.code,
            },
            expiresIn: `${currentUser?.auth?.sessionLimit}h`,
        });

        const userLogged = await userService.findUserLoggedById(currentUser.id);

        return res.status(200).json({
            message: "Inicio de sesión correctamente",
            data: userLogged,
            accessToken,
        });

    } catch (error: any) {
        console.error("🚀 ~ postLoginUser ~ error:", error);
        return res.status(500).json({
            message: "Error en el inicio de sesión",
            error,
        });
    }
}

// Nuevos métodos para cambio y reseteo de contraseña
// Añadidos al final del archivo.


// Helper para validar la fortaleza de la contraseña (ejemplo básico)
const isPasswordStrong = (password: string): boolean => {
    return password.length >= 8;
};

export const changePasswordLoggedInHandler = async (req: AuthenticatedRequest, res: Response) => {
    const { oldPassword, newPassword, confirmNewPassword } = req.body;
    const userId = req.userId; 

    if (!userId) {
        return res.status(401).json({ message: EM.ERROR_UNAUTHORIZED_ACCESS });
    }

    if (!newPassword || !confirmNewPassword || !oldPassword) {
        return res.status(400).json({ message: "Todos los campos son requeridos: contraseña actual, nueva contraseña y confirmación." });
    }

    if (newPassword !== confirmNewPassword) {
        return res.status(400).json({ message: "La nueva contraseña y su confirmación no coinciden." });
    }

    if (!isPasswordStrong(newPassword)) {
        return res.status(400).json({ message: "La nueva contraseña debe tener al menos 8 caracteres." });
    }

    try {
        const userService = new UserService(); 
        const userWithAuth = await userService.findUserById(userId);

        if (!userWithAuth || !userWithAuth.auth) {
            return res.status(404).json({ message: EM.ERROR_USER_NOT_FOUND });
        }

        const authRecord = userWithAuth.auth;

        if (!authRecord.password) { 
             return res.status(400).json({ message: "No hay una contraseña configurada para esta cuenta." });
        }

        const isOldPasswordCorrect = await getBCryptCompare(oldPassword, authRecord.password);
        if (!isOldPasswordCorrect) {
            return res.status(400).json({ message: "La contraseña actual es incorrecta." });
        }

        const hashedNewPassword = encryptData(newPassword);
        const authToUpdate = await AuthModel.findByPk(authRecord.id);
        if (authToUpdate) {
            await authToUpdate.update({ password: hashedNewPassword, isPasswordCreated: true }); 
        } else {
            throw new Error("Registro de autenticación no encontrado para el usuario durante la actualización.");
        }
        
        return res.status(200).json({ message: SM.SUCCESS_PASSWORD_CHANGED });

    } catch (error: any) {
        console.error("Error changing password (logged in):", error);
        return res.status(500).json({ message: EM.ERROR_INTERNAL_SERVER, error: error.message });
    }
};

export const forgotPasswordRequestHandler = async (req: Request, res: Response) => {
    const { email } = req.body;

    if (!email || !validateIsEmail(email)) {
        return res.status(400).json({ message: "Se requiere un correo electrónico válido." });
    }

    try {
        const authRecord = await authService.findAuthByEmail(email); // authService ya existe

        if (!authRecord || !authRecord.isEmailVerified) {
            console.log(`Intento de reseteo para email no encontrado o no verificado: ${email}`);
            return res.status(200).json({ message: "Si existe una cuenta verificada asociada a este correo, se enviará un código de reseteo." });
        }
        
        const otpCode = generateSixDigitCode();
        const expiresAt = new Date(Date.now() + GlobalConfig.OTP_EXPIRATION_MINUTES * 60 * 1000);

         await OTPEmailVerificationsModel.update(
            { used: true },
            { where: { authId: authRecord.id, used: false  } } 
        );

        await OTPEmailVerificationsModel.create({
            authId: authRecord.id,
            code: otpCode,
            expiresAt,
            used: false,            
        });
        
        const mailService = new MailService(); 
        await mailService.sendMail({
            to: authRecord.email,
            subject: GlobalMail.SUBJECT.PASSWORD_RESET || "Tu código para restablecer la contraseña", 
            template: GlobalMail.TEMPLATES.PASSWORD_RESET || "password-reset-otp-code", 
            context: {
                userName: authRecord.username || authRecord.email.split('@')[0],
                otpCode,
                expirationTime: `${GlobalConfig.OTP_EXPIRATION_MINUTES} minutos`,
            },
        });

        return res.status(200).json({ message: "Si existe una cuenta verificada asociada a este correo, se enviará un código de reseteo." });

    } catch (error: any) {
        console.error("Error en forgot password request:", error);
        return res.status(500).json({ message: EM.ERROR_INTERNAL_SERVER, error: error.message });
    }
};

export const resetPasswordWithTokenHandler = async (req: AuthenticatedRequest, res: Response) => {
    const { email, token, newPassword, confirmNewPassword } = req.body;

    if (!email || !validateIsEmail(email)) {
        return res.status(400).json({ message: "Se requiere un correo electrónico válido." });
    }
    if (!token) {
        return res.status(400).json({ message: "Se requiere el código OTP." });
    }
    if (!newPassword || !confirmNewPassword) {
        return res.status(400).json({ message: "La nueva contraseña y su confirmación son requeridas." });
    }
    if (newPassword !== confirmNewPassword) {
        return res.status(400).json({ message: "La nueva contraseña y su confirmación no coinciden." });
    }
    if (!isPasswordStrong(newPassword)) {
        return res.status(400).json({ message: "La nueva contraseña debe tener al menos 8 caracteres." });
    }

    try {
        const authRecord = await authService.findAuthByEmail(email);
        if (!authRecord) {
            return res.status(400).json({ message: EM.ERROR_OTP_INVALID_OR_EXPIRED });
        }

        const otpEntry = await OTPEmailVerificationsModel.findOne({
            where: {
                authId: authRecord.id,
                code: token,
                used: false,
            },
        });

        if (!otpEntry) {
            return res.status(400).json({ message: EM.ERROR_OTP_INVALID_OR_EXPIRED });
        }

        // Solución para expiresAt - usar get()
        const expiresAt = otpEntry.get('expiresAt') as Date | string | number | null;
        if (!expiresAt || new Date() > new Date(expiresAt)) {
            await OTPEmailVerificationsModel.update({ used: true }, { where: { id: otpEntry.get('id') } });
            return res.status(400).json({ message: EM.ERROR_OTP_INVALID_OR_EXPIRED });
        }

        const hashedNewPassword = encryptData(newPassword);
        
        // Solución para update - usar el modelo directamente
        await AuthModel.update(
            { 
                password: hashedNewPassword, 
                isPasswordCreated: true 
            },
            { 
                where: { id: authRecord.id } 
            }
        );
        
        await OTPEmailVerificationsModel.update(
            { used: true },
            { where: { id: otpEntry.get('id') } }
        );
        
        const mailService = new MailService();
        await mailService.sendMail({
            to: authRecord.email,
            subject: GlobalMail.SUBJECT.PASSWORD_CHANGED_CONFIRMATION || "Confirmación de Cambio de Contraseña", 
            template: MAIL.TEMPLATES.PASSWORD_CHANGED_CONFIRMATION || "password-changed-confirmation", 
            context: {
                userName: authRecord.username || authRecord.email.split('@')[0],
            }
        });

        return res.status(200).json({ message: SM.SUCCESS_PASSWORD_CHANGED });

    } catch (error: any) {
        console.error("Error reseting password with token:", error);
        return res.status(500).json({ message: EM.ERROR_INTERNAL_SERVER, error: error.message });
    }
};
/** =============================== CLient =================================*/

const authService = new AuthService();


export async function loginHandler(req: AuthenticatedRequest, res: Response) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({
            status: 'error',
            errors: errors.array()
        });

        const { email, password } = req.body;

        const { user, accessToken } = await authService.login(email, password);
        res.status(200).json(
            {
                status: 'success',
                message: "Login exitoso",
                data: user,
                accessToken
            });
    } catch (err: any) {
        res.status(err.status || 500).json(
            {
                status: 'error',
                message: err.message || "Error en login"
            });
    }
}

export async function refreshTokenHandler(req: Request, res: Response) {
    try {
        const { uid, authId, clientId } = req as any;

        const token = await authService.refresh({ uid, authId, clientId });

        return res.status(200).json(
            {
                status: 'success',
                message: "Token actualizado correctamente",
                accessToken: token
            });
    } catch (err: any) {
        return res.status(err.status || 500).json(
            {
                status: 'error',
                message: err.message || "Error al refrescar token"
            });
    }
}

export async function verifyEmailOTPHandler(req: AuthenticatedRequest, res: Response) {
    try {
        const { authId } = req;
        const { verifyCode, email } = req.body;

        let currentAuthId = authId;
        if (!currentAuthId) {
            const auth = await authService.findAuthByEmail(email);
            if (!auth) {
                return res.status(404).json({
                    status: 'error',
                    message: "Correo no encontrado",
                });
            }
            currentAuthId = auth.id;
        }

        await authService.verifyEmailOTP(currentAuthId!, verifyCode);

        const auth = await authService.findAuthById(currentAuthId!);

        return res.status(200).json({
            headerTitle: "Verificación de correo electrónico",
            title: "Felicidades",
            message: `Tu correo electrónico ${auth?.email} se ha vinculado a tu cuenta. Ahora puedes usar esta dirección para inciar sesión.`,
            action: {
                buttonText: "Continuar",
                buttonCallback: "CreatePassword"
            }
        });

    } catch (err: any) {
        const code = err.statusCode || 500;
        const state = 'error';
        const msg = err.message || 'Error inesperado';
        return res.status(code).json({ status: state, message: msg });
    }
}

export async function retryEmailOTPHandler(req: Request, res: Response) {
    try {
        const { email } = req.body;

        const auth = await authService.findAuthByEmail(email);

        if (auth) {
            await authService.sendEmailOTP(auth.id,
                MAIL.TEMPLATES.EMAIL_VERIFICATION,
                MAIL.SUBJECT.EMAIL_VERIFICATION,
            );
        }
        else
            return res.status(404).json(
                {
                    status: 'error',
                    message: "El correo no se encuentra registrado.",
                });

        const accessToken = await generatorJWT(
            {
                payload: {
                    authId: auth.id,
                    uid: null
                },
                expiresIn: auth.sessionLimit ? `${auth.sessionLimit}h` : CONFIG.EXPIRATED_LAPSE_TIME
            });

        return res.status(200).json({
            status: 'success',
            message: "Nuevo código enviado por email.",
            accessToken
        });
    } catch (err: any) {

        return res.status(500).json(
            {
                status: 'error',
                message: err.message
            });
    }
}

export async function createPasswordHandler(req: Request, res: Response) {
    try {
        const authId = (req as any).authId;
        const { password, email } = req.body;

        let currentAuthId = authId;
        if (!currentAuthId) {
            const auth = await authService.findAuthByEmail(email);
            if (!auth) {
                return res.status(404).json({
                    status: 'error',
                    message: "Correo no encontrado",
                });
            }
            currentAuthId = auth.id;
        }


        await authService.createPassword(currentAuthId,
            encryptData(password)
        );

        return res.json(
            {
                headerTitle: "¡Su contraseña se ha creado correctamente!",
                title: "Felicidades",
                message: `Ahora puedes usarla para iniciar sesión en tu cuenta`,
                action: {
                    buttonText: "Continuar",
                    buttonCallback: "--"
                }
            });
    } catch (err: any) {
        const code = err.statusCode || 500;
        const state = 'error';
        const msg = err.message || 'Error inesperado';
        return res.status(code).json({ status: state, message: msg });
    }
}

export async function verifySmsOTPHandler(req: Request, res: Response) {
    try {
        const authId = (req as any).authId;
        const {
            countryPrefix,
            phonNumber,
            verifyCode,
            email
        } = req.body;

        let currentAuthId = authId;
        if (!currentAuthId) {
            const auth = await authService.findAuthByEmail(email);
            if (!auth) {
                return res.status(404).json({
                    status: 'error',
                    message: "Correo no encontrado",
                });
            }
            currentAuthId = auth.id;
        }

        const isVerified = await authService.verifyPhoneOTP(currentAuthId, verifyCode);

        return res.status(200).json(
            {
                status: "success",
                headerTitle: "Verificación exitosa",
                title: "Verificación exitosa",
                message: `Tu número ${countryPrefix}-${phonNumber} se ha vinculado a tu cuenta.`,
                action: {
                    buttonText: "Continuar",
                    buttonCallback: "--"
                }
            });

    } catch (err: any) {
        const code = err.statusCode || 500;
        const state = 'error';
        const msg = err.message || 'Error inesperado';
        return res.status(code).json({ status: state, message: msg });
    }
}

export async function retrySmsOTPHandler(req: Request, res: Response) {
    try {
        const authId = (req as any).authId;
        const { countryPrefix, phoneNumber } = req.body;

        await authService.retryPhoneOTP(authId, phoneNumber, countryPrefix);

        return res.status(200).json(
            {
                status: "success",
                message: "Nuevo código enviado por SMS."
            });
    } catch (err: any) {
        return res.status(500).json({
            status: 'error',
            message: err.message,
        });
    }
}

