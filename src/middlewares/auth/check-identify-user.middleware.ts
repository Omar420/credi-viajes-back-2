import { Request, Response, NextFunction } from "express";
import { UserService, AuthService, ClientService } from "@src/services";

/**
 * Middleware para obtener IDs de usuario/autenticación/cliente usando el email.
 * Asigna los identificadores a `req` para usarlos en controladores posteriores.
 */
export async function checkUserByEmailMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const email = req.body.email || req.query.email || req.params.email;

        if (!email) {
            return res.status(400).json({
                status: 'error',
                message: "Email requerido para refrescar token",
            });
        }

        const userService = new UserService();
        const authService = new AuthService();
        const clientService = new ClientService();

        const user = await userService.findUserByEmail?.(email);
        const auth = await authService.findAuthByEmail?.(email);
        const client = await clientService.findClientByEmail?.(email);

        if (!user && !auth && !client) {
            return res.status(404).json({
                status: 'error',
                message: "No se encontró ningún usuario con ese correo",
            });
        }

        if (user) (req as any).uid = user.getDataValue("id");
        if (auth) (req as any).authId = auth.id;
        if (client) (req as any).clientId = client.getDataValue("id");

        (req as any).email = email;

        next();

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Error al identificar usuario por correo",
            error
        });
    }
}
