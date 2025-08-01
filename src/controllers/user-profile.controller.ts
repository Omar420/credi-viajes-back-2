import { Response } from "express";
import { UserProfileService } from "@src/services";
import { AuthenticatedRequest } from "@src/types";

const userProfileService = new UserProfileService();

export async function getUserProfileByEmailHandler(req: AuthenticatedRequest, res: Response) {
  try {
    const { email } = req.params;
    const profile = await userProfileService.getProfileByEmail(email);
    res.json(profile);
  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}

export async function updateUserProfileByEmailHandler(req: AuthenticatedRequest, res: Response) {
  try {
    const { email } = req.params;
    const profile = await userProfileService.updateProfileByEmail(email, req.body);
    res.json({ message: "Perfil de usuario actualizado", profile });
  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}
