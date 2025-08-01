import { Response } from "express";
import { validationResult } from "express-validator";

import { ProfileService } from "@src/services";
import { AuthenticatedRequest } from "@src/types";

const profileService = new ProfileService();

export async function getProfileHandler(req: AuthenticatedRequest, res: Response) {
  try {
    const { authId } = req;
    if (!authId) return res.status(401).json({ message: "No autorizado" });
    const profile = await profileService.getProfile(authId);
    res.json(profile);
  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}

export async function getProfileByEmailHandler(req: AuthenticatedRequest, res: Response) {
  try {
    const { email } = req.params;
    const profile = await profileService.getProfileByEmail(email);
    res.json(profile);
  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}

export async function updateProfileByEmailHandler(req: AuthenticatedRequest, res: Response) {
  try {
    const { email } = req.params;
    const profile = await profileService.updateProfileByEmail(email, req.body);
    res.json({ message: "Perfil actualizado", profile });
  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}

export async function changePasswordHandler(req: AuthenticatedRequest, res: Response) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({
        status: "error",
        errors: errors.array(),
      });

    const { authId } = req;
    if (!authId) return res.status(401).json({ message: "No autorizado" });
    const { oldPassword, newPassword } = req.body;
    await profileService.changePassword(authId, oldPassword, newPassword);
    res.json({ message: "Contraseña actualizada" });
  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}
