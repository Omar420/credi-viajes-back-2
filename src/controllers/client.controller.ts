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

        const emailRegistered =
            await userService.findUserByEmail(email)
            || await authService.findAuthByEmail(email);

        if (emailRegistered) {
            return res.status(409).json(
                {
                    status: 'error',
                    message: "Este correo ya se encuentra registrado.",
                });
        }

        const { auth, accessToken } = await clientService.register(email);

        return res.status(201).json(
            {
                status: 'success',
                message: "Registro exitoso, revisa tu correo electrónico",
                auth,
                accessToken
            });

    } catch (err: any) {
        return res.status(500).json({
            status: 'error',
            message: err.message,
        });
    }
}

export async function sendPhoneHandler(req: Request, res: Response) {
    try {
        const { phoneNumber, countryPrefix } = req.body;
        const authId = (req as any).authId;

        await clientService.sendPhoneNumber({ authId, phoneNumber, countryPrefix });

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

        const data = req.body;

        const profile = await clientService.saveProfile({ authId, ...data });

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
