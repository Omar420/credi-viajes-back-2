import { Router } from "express";
import { check } from "express-validator";

import {
    registerClientHandler,
    sendPhoneHandler,
    saveProfileHandler,
    saveDocumentsHandler
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
    "/profile",
    [
        validateJWTMiddleware,
        check("firstName", "Nombre es obligatorio").notEmpty(),
        check("firstSurname", "Primer apellido es obligatorio").notEmpty(),
        check("birthdayDate", "Fecha de nacimiento es obligatorio").notEmpty(),
        check("birthdayDate", "Fecha de nacimiento inválido").isISO8601(),
        check("genderId", "El género es obligatorio").optional().notEmpty(),
        check("genderId")
            .optional()
            .isUUID(4)
            .withMessage("El genderId debe ser un UUID válido"),
        check("countryPrefix", "El código del teléfono es obligatorio").optional().notEmpty(),
        check("phoneNumber", "El número de teléfono ").optional().isMobilePhone("any"),

        check("addresses.*.countryId", "El país es obligatorio").if(check("addresses").exists()).notEmpty(),
        check("addresses.*.countryId")
            .if(check("addresses").exists())
            .isUUID(4)
            .withMessage("El addresses.countryId debe ser un UUID válido"),
        check("addresses.*.stateId", "El estado es obligatorio").if(check("addresses").exists()).notEmpty(),
        check("addresses.*.stateId")
            .if(check("addresses").exists())
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
