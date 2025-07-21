import { NextFunction, Response } from "express";
import { ClientService } from "@src/services";
import { AuthenticatedRequest } from "@src/types/custom-request.type";

export async function checkExistenceClientMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const { authId } = req;

  const clientService = new ClientService();
  const foundClient = await clientService.findClientByAuthId(authId!);

  if (foundClient) {
    return res.status(409).json({
      status: "error",
      message: "El cliente se encuentra registrado",
    });
  }

  next();
}
