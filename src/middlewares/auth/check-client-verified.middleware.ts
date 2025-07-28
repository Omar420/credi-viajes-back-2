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
            }

            if (!auth) {
                // If the auth record is not found, we can't check the flag, so we let the request continue.
                // The handler will then be responsible for managing the case where the auth record does not exist.
                return next();
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
