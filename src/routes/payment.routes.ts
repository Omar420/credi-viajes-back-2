import { Router } from "express";
import { check } from "express-validator";
import { createPayment, getInstallmentsForBooking } from "@src/controllers/payment.controller";
import { validateFieldsMiddleware, validateJWTMiddleware } from "@src/middlewares";
import { ERROR_MESSAGES } from "@src/constants/messages.global";

const router = Router();

// All payment routes are protected
router.use(validateJWTMiddleware);

// Route to create a new payment
router.post(
    "/",
    [
        check("installment_id", "El ID de la cuota es obligatorio y debe ser un UUID.").isUUID(),
        check("amount_paid", "El monto pagado es obligatorio y debe ser un número positivo.").isFloat({ gt: 0 }),
        check("payment_method", "El método de pago es obligatorio.").notEmpty().isString(),
        check("payment_reference", "La referencia del pago es opcional.").optional().isString(),
        validateFieldsMiddleware,
    ],
    createPayment
);

// Route to get all installments for a specific booking
router.get(
    "/booking/:bookingId/installments",
    [
        check("bookingId", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
        validateFieldsMiddleware,
    ],
    getInstallmentsForBooking
);

export default router;
