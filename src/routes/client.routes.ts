import { Router } from "express";
import { check, body } from "express-validator";

import {
  registerClientHandler,
  sendPhoneHandler,
  saveProfileHandler,
  saveDocumentsHandler,
  verifyPhoneHandler
} from "@src/controllers/client.controller";
import { checkAuthFlag, checkExistenceClientMiddleware, validateApiKeyMiddleware, validateFieldsMiddleware, validateJWTMiddleware } from "@src/middlewares";

const router = Router();

router.post("/", [
  validateApiKeyMiddleware,
  check("email").isEmail(),
  validateFieldsMiddleware
], registerClientHandler);

router.post(
  "/phone",
  [
    validateJWTMiddleware,
    checkAuthFlag("isEmailVerified", false, "El correo debe ser verificado"),
    checkAuthFlag("isPasswordCreated", false, "El password debe verificado"),
    checkAuthFlag("isPhoneVerified", true, "El teléfono ya fue verificado"),
    check("countryPrefix")
      .matches(/^\+[1-9]\d{0,2}$/)
      .withMessage("El prefijo debe tener el formato +<código internacional> (1–3 dígitos, sin ceros iniciales)"),
    check("countryPrefix").notEmpty(),
    check("email").isEmail().optional(),
    validateFieldsMiddleware,
    // check("phoneNumber").isMobilePhone("any"),
    // validateFieldsMiddleware
  ],
  sendPhoneHandler
);

router.post(
  "/phone/verify",
  [
    validateJWTMiddleware,
    check("otpCode", "El código OTP es obligatorio").notEmpty(),
    validateFieldsMiddleware,
  ],
  verifyPhoneHandler
);

router.post(
  "/profile",
  [
    validateJWTMiddleware,
    body("firstName").notEmpty().withMessage("El nombre es obligatorio"),
    body("firstSurname").notEmpty().withMessage("El primer apellido es obligatorio"),
    body("birthdayDate")
      .notEmpty()
      .withMessage("La fecha de nacimiento es obligatoria")
      .isISO8601()
      .withMessage("La fecha de nacimiento debe ser una fecha válida"),
    body("genderId")
      .notEmpty()
      .withMessage("El género es obligatorio")
      .isUUID(4)
      .withMessage("El genderId debe ser un UUID válido"),
    body("addresses").isArray().withMessage("Las direcciones deben ser un arreglo"),
    body("addresses.*.countryId")
      .notEmpty()
      .withMessage("El país es obligatorio")
      .isUUID(4)
      .withMessage("El addresses.countryId debe ser un UUID válido"),
    body("addresses.*.stateId")
      .notEmpty()
      .withMessage("El estado es obligatorio")
      .isUUID(4)
      .withMessage("El addresses.stateId debe ser un UUID válido"),
    check("email").isEmail().optional(),
    validateFieldsMiddleware,
    checkExistenceClientMiddleware
  ],
  saveProfileHandler
);

router.post(
  "/documents",
  validateJWTMiddleware,
  saveDocumentsHandler
);

export default router;
