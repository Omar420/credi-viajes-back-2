import { Router } from "express";
import { body } from "express-validator";
import { changePasswordHandler } from "@src/controllers/password.controller";
import {
  validateFieldsMiddleware,
  validateJWTMiddleware,
} from "@src/middlewares";

const router = Router();

router.post(
  "/change",
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
