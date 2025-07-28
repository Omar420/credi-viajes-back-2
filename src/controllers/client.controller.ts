import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { ClientService } from "@src/services/client.service";
import { AuthService, UserService } from "@src/services";

const clientService = new ClientService();
const userService = new UserService();
const authService = new AuthService();

export async function registerClientHandler(req: Request, res: Response) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({
            status: 'error',
            errors: errors.array()
        });

        const { email } = req.body;

        const authData = await authService.findAuthByEmail(email);

        if (authData) {
            const client = await clientService.findClientByAuthId(authData.id);

            const validate = {
                email: true,
                emailVerify: authData.isEmailVerified,
                password: authData.isPasswordCreated,
                phone: authData.isPhoneVerified,
                phoneVerify: authData.isPhoneVerified,
                profile: !!client,
            };

            const { accessToken } = await clientService.register(email, true);

            return res.status(200).json({
                status: 'success',
                message: "El correo ya se encuentra registrado, puede continuar con el proceso.",
                validate,
                accessToken
            });
        }

        const { auth, accessToken } = await clientService.register(email);

        const { createdAt, updatedAt, ...authInfo } = auth;

        return res.status(201).json(
            {
                status: 'success',
                message: "Registro exitoso, revisa tu correo electrónico",
                auth: authData,
                accessToken
            });

    } catch (err: any) {
        return res.status(500).json({
            status: 'error',
            message: err.message,
        });
    }
}

export async function verifyPhoneHandler(req: Request, res: Response) {
    try {
        const { otpCode } = req.body;
        const authId = (req as any).authId;

        await clientService.verifyPhoneNumber({ authId, otpCode });

        return res.status(200).json(
            {
                status: "success",
                message: `Teléfono verificado correctamente`
            }
        );

    } catch (err: any) {
        return res.status(500).json({
            status: 'error',
            message: err.message,
        });
    }
}

export async function sendPhoneHandler(req: Request, res: Response) {
    try {
        const { phoneNumber, countryPrefix, email } = req.body;
        const authId = (req as any).authId;

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

        await clientService.sendPhoneNumber({ authId: currentAuthId, phoneNumber, countryPrefix });

        return res.status(200).json(
            {
                status: "success",
                message: `OTP SMS enviado a ${countryPrefix}-${phoneNumber}`
            }
        );

    } catch (err: any) {
        return res.status(500).json({
            status: 'error',
            message: err.message,
        });
    }
}

export async function saveProfileHandler(req: Request, res: Response) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const authId = (req as any).authId;
        const { email } = req.body;

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

        const data = req.body;

        const profile = await clientService.saveProfile({ authId: currentAuthId, ...data });

        res.json({ message: "Perfil guardado", profile });
    } catch (err: any) {
        return res.status(500).json({
            status: 'error',
            message: err.message,
        });
    }
}

export async function saveDocumentsHandler(req: Request, res: Response) {
    try {
        const authId = (req as any).authId;
        let files;
        const body = req.body;
        const docs = await clientService.saveDocuments(authId, files, body);
        res.json({ message: "Documentos guardados", docs });
    } catch (err: any) {
        return res.status(500).json({
            status: 'error',
            message: err.message,
        });
    }
}
