import { Router } from "express";
import { check } from "express-validator";

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
        check("firstName", "Nombre es obligatorio").notEmpty(),
        check("firstSurname", "Primer apellido es obligatorio").notEmpty(),
        check("birthdayDate", "Fecha de nacimiento es obligatorio").notEmpty(),
        check("birthdayDate", "Fecha de nacimiento inválido").isISO8601(),
        check("genderId", "El género es obligatorio").notEmpty(),
        check("genderId")
            .isUUID(4)
            .withMessage("El genderId debe ser un UUID válido"),
        check("countryPrefix", "El código del teléfono es obligatorio").notEmpty(),
        check("phoneNumber", "El número de teléfono ").isMobilePhone("any"),

        check("addresses.*.countryId", "El país es obligatorio").notEmpty(),
        check("addresses.*.countryId")
            .isUUID(4)
            .withMessage("El addresses.countryId debe ser un UUID válido"),
        check("addresses.*.stateId", "El estado es obligatorio").notEmpty(),
        check("addresses.*.stateId")
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
