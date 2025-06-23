import { CONFIG, MAIL, ROLES } from "@src/constants/config-global";
import { ERROR_MESSAGES } from "@src/constants/messages.global";
import { encryptData, getBCryptCompare } from "@src/helpers";
import { generatorJWT } from "@src/helpers/generator-jwt";
import { AuthService, UserService } from "@src/services";
import { validateIsEmail } from "@src/utils/validate-is-email";
import { Request, Response } from "express";
import { validationResult } from "express-validator";


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

/** =============================== CLient =================================*/

const authService = new AuthService();


export async function loginHandler(req: Request, res: Response) {
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

export async function verifyEmailOTPHandler(req: Request, res: Response) {
    try {
        const { authId, email } = req;
        const { verifyCode } = req.body;

        if (!authId) {
            return res.status(401).json({
                status: 'error',
                message: "Token no válido",
            });
        }

        await authService.verifyEmailOTP(authId, verifyCode);

        return res.status(200).json(
            {
                headerTitle: "Verificación de correo electrónico",
                title: "Felicidades",
                message: `Tu correo electrónico ${email} se ha vinculado a tu cuenta. Ahora puedes usar esta dirección para inciar sesión.`,
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
        const { password } = req.body;

        await authService.createPassword(authId,
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
            phoneNumber,
            verifyCode
        } = req.body;

        const isVerified = await authService.verifyPhoneOTP(authId, verifyCode);

        return res.status(200).json(
            {
                status: "success",
                headerTitle: "Verificación exitosa",
                title: "Verificación exitosa",
                message: `Tu número ${countryPrefix}-${phoneNumber} se ha vinculado a tu cuenta.`,
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

