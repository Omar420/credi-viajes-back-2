import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { ProfileService } from "@src/services";

const profileService = new ProfileService();

export async function getProfileHandler(req: Request, res: Response) {
  try {
    const { authId } = req;
    const profile = await profileService.getProfile(authId);
    res.json(profile);
  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}

export async function updateProfileHandler(req: Request, res: Response) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({
        status: "error",
        errors: errors.array(),
      });

    const { authId } = req;
    const profile = await profileService.updateProfile(authId, req.body);
    res.json({ message: "Perfil actualizado", profile });
  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}

export async function changePasswordHandler(req: Request, res: Response) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({
        status: "error",
        errors: errors.array(),
      });

    const { authId } = req;
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
