import { Request, Response } from "express";
import { RoleService, UserService } from "@src/services";
import { encryptData } from "@src/helpers";
import { ROLES, USER_TYPE } from "@src/constants/config-global";
import { AuthenticatedRequest } from "@src/types";

const userService = new UserService();
const roleService = new RoleService();


/** POST /api/users/admin */
export async function createAdmin(req: AuthenticatedRequest, res: Response) {
    try {
        const { uid } = req;
        const role = await roleService.findRoleByCode(ROLES.ADMIN);
        if (!role) return res.status(404).json({ message: "Rol admin no existe" });

        const data = req.body;
        const createdUser = await userService.createUser({
            ...data,
            type: USER_TYPE.USER,
            password: encryptData(data.password),
            roleId: role.getDataValue("id"),
            createdBy: uid
        });

        res.status(201).json({
            success: true,
            message: "Admin creado exitosamente",
            data: createdUser
        });
    } catch (error: any) {
        console.error("🚀 ~ error:", error)
        return res.status(500).json({
            message: "Error al crear usuario administrador",
            error: error?.message,
        })
    }
}

/** POST /api/users/operator */
export async function createOperator(req: AuthenticatedRequest, res: Response) {
    try {
        const { uid } = req;
        const role = await roleService.findRoleByCode(ROLES.OPERATOR);
        if (!role) return res.status(404).json({ message: "Rol operator no existe" });

        const data = req.body;
        const createdUser = await userService.createUser({
            ...data,
            password: encryptData(data.password),
            roleId: role.getDataValue("id"),
            createdBy: uid
        });

        res.status(201).json({
            success: true,
            message: "Operador creado exitosamente",
            data: createdUser
        });
    } catch (error: any) {
        console.error("🚀 ~ error:", error)
        return res.status(500).json({
            message: "Error al crear operador.",
            error: error?.message,
        })
    }
}

/** GET /api/users/operators?page=&limit= */
export async function getOperatorsPaginated(req: AuthenticatedRequest, res: Response) {
    try {
        const { query } = req;

        const result = await userService.findAllAndCountOperatorUsers({
            ...query
        });

        res.status(200).json({
            message: "Operadores listados correctamente.",
            data: result.rows,
            meta: { total: result.count },
        });
    } catch (error: any) {
        console.error("🚀 ~ error:", error)
        return res.status(500).json({
            message: "Error al listar a los operadores.",
            error: error?.message,
        })
    }
}

/** GET /api/users/admins?page=&limit= */
export async function getAdminsPaginated(req: AuthenticatedRequest, res: Response) {
    try {
        const { query } = req;

        const result = await userService.findAllAndCountUsers({
            ...query,
            roleCode: [ROLES.ADMIN, ROLES.SUPERADMIN],
        });

        res.status(200).json({
            message: "Admins listados",
            data: result.rows,
            meta: { total: result.count },
        });
    } catch (error: any) {
        console.error("🚀 ~ error:", error)
        return res.status(500).json({
            message: "Error al listar los administradores.",
            error: error?.message,
        })
    }
}

/** PATCH /api/users/:id */
export async function patchUpdateUser(req: AuthenticatedRequest, res: Response) {
    try {
        const { id } = req.params;
        const { uid, roleCode } = req;
        const { username, password, ...data } = req.body;

        if (username) {
            const foundUsername = await userService.findUserByUsername(username);
            if (foundUsername && foundUsername.getDataValue("id") !== id)
                return res.status(400).json({ message: "El nombre de usuario no disponible" });
        }

        const isSelf = id === uid;

        switch (roleCode) {
            case ROLES.SUPERADMIN:
                break;

            case ROLES.ADMIN:
                if (!isSelf && roleCode !== ROLES.OPERATOR) {
                    return res.status(403).json({ message: "Solo puedes modificar operadores o a ti mismo" });
                }
                break;

            case ROLES.OPERATOR:
                if (!isSelf) {
                    return res.status(403).json({ message: "Solo puedes modificar tu propio usuario" });
                }
                break;

            default:
                return res.status(403).json({ message: "Rol no autorizado para actualizar usuarios" });
        }

        const updated = await userService.updateUserAndAuth(
            id,
            {
                ...data,
                ...(password && {
                    password: encryptData(password),
                }),
                ...(username && { username }),
                updatedBy: uid,
            }
        );

        if (!updated) return res.status(404).json({
            success: false,
            message: "Usuario no encontrado y no pudo ser actualizado"
        });

        res.status(200).json({
            success: true,
            message: "Usuario actualizado correctamente",
            data: null
        });
    } catch (error: any) {
        console.error("🚀 ~ error:", error)
        return res.status(500).json({
            message: "Error al actualizar usuario",
            error: error?.message,
        })
    }
}

