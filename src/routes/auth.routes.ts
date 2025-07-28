import { clientLoginHandler, clientRefreshTokenHandler, createPasswordHandler, loginHandler, postSingIn, refreshTokenHandler, retryEmailOTPHandler, retrySmsOTPHandler, verifyEmailOTPHandler, verifySmsOTPHandler } from "@src/controllers";
import { checkAuthFlag, checkUserByEmailMiddleware, validateApiKeyMiddleware, validateFieldsMiddleware, validateJWTMiddleware } from "@src/middlewares";
import { Router } from "express";
import { check } from "express-validator";
import { 
    changePasswordLoggedInHandler, 
    forgotPasswordRequestHandler, 
    resetPasswordWithTokenHandler 
} from "@src/controllers/auth.controller";

const router = Router();

router.post(
    "/sign-in",
    [
        check("username", "El Usuarios o Correo electrónico es obligatorio").not().isEmpty(),
        check("password", "Contraseña es obligatorio").not().isEmpty(),
        validateFieldsMiddleware,
        validateApiKeyMiddleware
    ],
    postSingIn
);

// refresh token
router.post("/refresh", [
    checkUserByEmailMiddleware],
    refreshTokenHandler);

/** ==================== CLIENT ============================= */


router.post("/login", [
    check("email").isEmail(),
    check("password").isLength({ min: 6 })],
    loginHandler);

router
    .route("/email/verify")
    .post([validateJWTMiddleware,
        checkAuthFlag("isEmailVerified", true, "El correo ya fue verificado"),
        check("verifyCode").isLength({ min: 6, max: 6 }),
        check("email").isEmail().optional(),
        validateFieldsMiddleware
    ],
        verifyEmailOTPHandler);

router
    .route("/email/resend")
    .post([
        validateApiKeyMiddleware,
        checkAuthFlag("isEmailVerified", true, "El correo ya fue verificado"),
        check("email").isEmail()
    ],
        retryEmailOTPHandler);

router.post("/password", [
    validateJWTMiddleware,
    checkAuthFlag("isEmailVerified", false, "El correo debe ser verificado"),
    checkAuthFlag("isPasswordCreated", true, "El password ya fue verificado"),
    check("password").isLength({ min: 6 }),
    check("email").isEmail().optional(),
    validateFieldsMiddleware
],
    createPasswordHandler);


router
    .route("/phone/verify")
    .post([validateJWTMiddleware,
        checkAuthFlag("isEmailVerified", false, "El correo debe ser verificado"),
        checkAuthFlag("isPasswordCreated", false, "El password debe ser verificado"),
        check("countryPrefix")
            .matches(/^\+[1-9]\d{0,2}$/)
            .withMessage("El prefijo debe tener el formato +<código internacional> (1–3 dígitos, sin ceros iniciales)"),
        check("countryPrefix").notEmpty(),
        check("phoneNumber").isMobilePhone("any"),
        check("verifyCode").isLength({ min: 6, max: 6 }),
        check("email").isEmail().optional(),
        validateFieldsMiddleware
    ],
        verifySmsOTPHandler);

router
    .route("/phone/resend")
    .post([validateJWTMiddleware,
        checkAuthFlag("isPhoneVerified", true, "El teléfono ya fue verificado"),
        check("countryPrefix")
            .matches(/^\+[1-9]\d{0,2}$/)
            .withMessage("El prefijo debe tener el formato +<código internacional> (1–3 dígitos, sin ceros iniciales)"),
        check("countryPrefix").notEmpty(),
        check("phoneNumber").isMobilePhone("any"),
        check("verifyCode").isLength({ min: 6, max: 6 })
    ],
        retrySmsOTPHandler);

// Nuevas rutas para cambio y reseteo de contraseña
 // Asegurar que los imports estén correctos al inicio del archivo si se mueven allí

// Cambiar contraseña (usuario logueado)
router.post(
    "/change-password",
    [
        validateJWTMiddleware, // Usuario debe estar logueado
        check("oldPassword", "La contraseña actual es obligatoria.").notEmpty(),
        check("newPassword", "La nueva contraseña es obligatoria y debe tener al menos 8 caracteres.")
            .isLength({ min: 8 }),
        check("confirmNewPassword", "La confirmación de la nueva contraseña es obligatoria.")
            .notEmpty()
            .custom((value: any, { req }: any) => {
                if (value !== req.body.newPassword) {
                    throw new Error("La nueva contraseña y su confirmación no coinciden.");
                }
                return true;
            }),
        validateFieldsMiddleware,
    ],
    changePasswordLoggedInHandler
);

// Solicitar reseteo de contraseña (olvidó contraseña - público)
router.post(
    "/forgot-password",
    [
        validateApiKeyMiddleware, // Opcional, si se quiere proteger este endpoint de alguna manera
        check("email", "Se requiere un correo electrónico válido.").isEmail(),
        validateFieldsMiddleware,
    ],
    forgotPasswordRequestHandler
);

// Resetear contraseña con token/OTP (público)
router.post(
    "/reset-password",
    [
        validateApiKeyMiddleware, // Opcional
        check("email", "Se requiere un correo electrónico válido.").isEmail(),
        check("token", "El código OTP es obligatorio y debe tener 6 dígitos.")
            .isLength({ min: 6, max: 6 })
            .isNumeric(),
        check("newPassword", "La nueva contraseña es obligatoria y debe tener al menos 8 caracteres.")
            .isLength({ min: 8 }),
        check("confirmNewPassword", "La confirmación de la nueva contraseña es obligatoria.")
            .notEmpty()
            .custom((value: any, { req }: any) => {
                if (value !== req.body.newPassword) {
                    throw new Error("La nueva contraseña y su confirmación no coinciden.");
                }
                return true;
            }),
        validateFieldsMiddleware,
    ],
    resetPasswordWithTokenHandler
);

router.post(
    "/client/sign-in",
    [
        check("email", "El Correo electrónico es obligatorio").not().isEmpty(),
        check("password", "Contraseña es obligatorio").not().isEmpty(),
        validateFieldsMiddleware,
        validateApiKeyMiddleware
    ],
    clientLoginHandler
);

router.post(
    "/client/refresh",
    [
        check("email", "El Correo electrónico es obligatorio").not().isEmpty(),
        validateFieldsMiddleware,
        validateApiKeyMiddleware
    ],
    clientRefreshTokenHandler
);

export default router;
