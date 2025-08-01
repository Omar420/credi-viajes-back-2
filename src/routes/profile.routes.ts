import { Router } from "express";
import { check, body } from "express-validator";
import {
  getProfileHandler,
  updateProfileByEmailHandler,
  changePasswordHandler,
  getProfileByEmailHandler,
} from "@src/controllers/profile.controller";
import {
  validateFieldsMiddleware,
  validateJWTMiddleware,
} from "@src/middlewares";

const router = Router();

router.get("/", [validateJWTMiddleware], getProfileHandler);

router.get("/:email", [validateJWTMiddleware], getProfileByEmailHandler);

router.patch("/:email", [validateJWTMiddleware], updateProfileByEmailHandler);

router.post(
  "/change-password",
  [
    validateJWTMiddleware,
    body("oldPassword").notEmpty().withMessage("La contraseña es obligatoria"),
    body("newPassword")
      .notEmpty()
      .withMessage("La nueva contraseña es obligatoria"),
    validateFieldsMiddleware,
  ],
  changePasswordHandler
);

export default router;
