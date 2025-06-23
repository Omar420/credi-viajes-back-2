import { RequestHandler } from "express";
import { AuthService } from "@src/services/auth.service";
import { AuthFlag } from "@src/types";


export function checkAuthFlag(
    flag: AuthFlag,
    shouldBe: boolean,
    message: string
): RequestHandler {
    const authService = new AuthService();

    return async (req, res, next) => {
        try {
            const authId = (req as any).authId;
            const { email } = req.body;
            let auth;

            if (authId) {
                auth = await authService.findAuthById(authId);
            } else if (email) {
                auth = await authService.findAuthByEmail(email);
            } else {
                return res.status(401).json({ status: "error", message: "No hay authId/email en la petición" });
            }

            if (!auth) {
                return res.status(404).json({ status: "error", message: "Auth no encontrado" });
            }

            const current = (auth as any)[flag] as boolean;
            if (current === shouldBe) {
                return res.status(400).json({ status: "error", message });
            }

            next();
        } catch (err: any) {
            return res.status(500).json({ status: "error", message: err.message });
        }
    };
}
