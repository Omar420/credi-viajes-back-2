import { UserService } from "@src/services";
import { AuthenticatedRequest } from "@src/types";
import { Request, Response, NextFunction } from "express";

/**
 * Middleware para verificar si el usuario tiene un rol permitido.
 * Consulta el rol directamente desde la base de datos por seguridad.
 */
export const checkRole = (allowedRoles: string[]) => {
    return async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        try {
            const uid = req.uid;

            if (!uid) {
                return res.status(401).json({ message: "Usuario no autenticado" });
            }
            const userService = new UserService();

            const foundUser = await userService.findUserById(uid);

            if (!foundUser) {
                return res.status(401).json({
                    message: "Token no válido/usuario no encontrado",
                    data: foundUser,
                });
            }

            const roleCode = foundUser.role?.code;

            if (!roleCode) {
                return res.status(403).json({ message: "Rol no asignado" });
            }

            if (!allowedRoles.includes(roleCode)) {
                return res.status(403).json({ message: "Permiso insuficiente para acceder al recurso" });
            }

            req.roleCode = roleCode;

            next();
        } catch (error) {
            console.error("Error en middleware checkRole:", error);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
    };
};

