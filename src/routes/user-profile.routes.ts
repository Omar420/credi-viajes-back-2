import { Router } from "express";
import {
  getUserProfileByEmailHandler,
  updateUserProfileByEmailHandler,
} from "@src/controllers/user-profile.controller";
import { validateJWTMiddleware } from "@src/middlewares";

const router = Router();

router.get("/:email", [validateJWTMiddleware], getUserProfileByEmailHandler);

router.patch("/:email", [validateJWTMiddleware], updateUserProfileByEmailHandler);

export default router;
