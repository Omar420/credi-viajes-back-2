import { Router } from "express";
import { check, body } from "express-validator";
import {
  getProfileHandler,
  updateProfileHandler,
  changePasswordHandler,
} from "@src/controllers/profile.controller";
import {
  validateFieldsMiddleware,
  validateJWTMiddleware,
} from "@src/middlewares";

const router = Router();

router.get("/", [validateJWTMiddleware], getProfileHandler);

router.put(
  "/",
  [
    validateJWTMiddleware,
    body("firstName").notEmpty().withMessage("El nombre es obligatorio"),
    body("firstSurname")
      .notEmpty()
      .withMessage("El primer apellido es obligatorio"),
    body("birthdayDate")
      .notEmpty()
      .withMessage("La fecha de nacimiento es obligatoria")
      .isISO8601()
      .withMessage("La fecha de nacimiento debe ser una fecha válida"),
    validateFieldsMiddleware,
  ],
  updateProfileHandler
);

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
