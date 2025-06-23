import { createPasswordHandler, loginHandler, postSingIn, refreshTokenHandler, retryEmailOTPHandler, retrySmsOTPHandler, verifyEmailOTPHandler, verifySmsOTPHandler } from "@src/controllers";
import { checkAuthFlag, checkUserByEmailMiddleware, validateApiKeyMiddleware, validateFieldsMiddleware, validateJWTMiddleware } from "@src/middlewares";
import { Router } from "express";
import { check } from "express-validator";


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
        check("verifyCode").isLength({ min: 6, max: 6 })
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
    check("password").isLength({ min: 6 })],
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
        check("verifyCode").isLength({ min: 6, max: 6 })
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



export default router;
