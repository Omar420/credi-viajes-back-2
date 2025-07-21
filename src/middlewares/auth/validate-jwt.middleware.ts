// src/middlewares/validate-jwt.ts
import jwt from "jsonwebtoken";
import { CONFIG, ROLES } from "@src/constants/config-global";
import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "@src/types/custom-request.type";
import { AuthService, UserService } from "@src/services";

export async function validateJWTMiddleware(
  req: AuthenticatedRequest,
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
          status: "error",
          message: "Token no válido/usuario no encontrado",
        });
      }

      req.uid = foundUser.id;
      req.roleCode = foundUser.role?.code || ROLES.OPERATOR;
      req.isSuperAdmin = foundUser.role?.code === ROLES.SUPERADMIN;

    } else if (payload.authId) {
      const foundAuthUser = await authService.findAuthById(payload.authId);

      if (!foundAuthUser) {
        return res.status(401).json({
          status: "error",
          message: "Token no válido/auth no encontrado",
        });
      }

      req.authId = payload.authId;
      req.email = foundAuthUser.email;

    } else {
      return res.status(401).json({
        status: "error",
        message: "Token sin datos de identificación",
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token no válido",
      error,
    });
  }
}
