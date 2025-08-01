import { Response } from "express";
import { ClientProfileService } from "@src/services";
import { AuthenticatedRequest } from "@src/types";

const clientProfileService = new ClientProfileService();

export async function getClientProfileByEmailHandler(req: AuthenticatedRequest, res: Response) {
  try {
    const { email } = req.params;
    const profile = await clientProfileService.getProfileByEmail(email);
    res.json(profile);
  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}

export async function updateClientProfileByEmailHandler(req: AuthenticatedRequest, res: Response) {
  try {
    const { email } = req.params;
    const profile = await clientProfileService.updateProfileByEmail(email, req.body);
    res.json({ message: "Perfil de cliente actualizado", profile });
  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}
