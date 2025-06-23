import jwt from "jsonwebtoken";

import { CONFIG, ROLES } from "@src/constants/config-global";

import { NextFunction, Response, Request } from "express";
import { AuthService, UserService } from "@src/services";

// ----------------------------------------------------------------

/**
 * Middleware function to validate JWT tokens.
 *
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @param next - The Express next function.
 *
 * @returns {void}
 *
 * @throws Will throw an error if the token is not valid or not provided.
 *
 * @remarks
 * This middleware function extracts the JWT token from the request header,
 * verifies it, and fetches the user data from the database.
 * If the token is valid and the user exists, it attaches the user data to the request object.
 * If the token is not valid or the user does not exist, it returns a 401 Unauthorized response.
 */
export async function validateJWTMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const header = req.header("Authorization") || "";
        const token = header.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "No hay token en la petición",
            });
        }

        const payload = jwt.verify(token, CONFIG.JWT_SECRET || "") as {
            uid?: string;
            authId?: string;
        };

        const authService = new AuthService();
        const userService = new UserService();

        if (payload.uid) {
            const foundUser = await userService.findUserById(payload.uid);

            if (!foundUser) {
                return res.status(401).json({
                    status: 'error',
                    message: "Token no válido/usuario no encontrado",
                });
            }

            req.uid = foundUser.id;

            req.roleCode = foundUser.role?.code || ROLES.OPERATOR;

            req.isSuperAdmin = foundUser.role?.code === ROLES.SUPERADMIN;
        }
        else if (payload.authId) {

            const foundAuthUser = await authService.findAuthById(payload.authId);
            if (!foundAuthUser)
                return res.status(401).json({
                    status: 'error',
                    message: "Token no válido/auth no encontrado",
                });

            req.authId = payload.authId;
            req.email = foundAuthUser.email;

        } else {
            return res.status(401).json(
                {
                    status: "error",
                    message: "Token sin datos de identificación",
                });
        }

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Token no válido",
            error
        });
    }
}
