import { NextFunction, Response, Request } from "express";
import { ClientService } from "@src/services";

export async function checkExistenceClientMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const { authId } = req;
  const clientService = new ClientService();
  const foundClient = await clientService.findClientByAuthId(authId!)

  if (foundClient) {
    return res.status(409).json({
      status: 'error',
      message: "El cliente se encuentra registrado",
    });

  }

  next();
}
