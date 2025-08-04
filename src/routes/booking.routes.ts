import { Router } from "express";
import { check, body } from "express-validator";
import { 
    getBookingById, 
    getUserBookings, 
    getAllBookings, 
    updateBookingStatus,
    cancelBooking,
    createSmartBooking
} from "@src/controllers/booking.controller";
import { validateFieldsMiddleware, validateJWTMiddleware } from "@src/middlewares";
import { ERROR_MESSAGES } from "@src/constants/messages.global";
import { ROLES } from "@src/constants/config-global";

const router = Router();

// All booking routes are protected
router.use(validateJWTMiddleware);

// Route to create a new smart booking
router.post("/", createSmartBooking);

// Route to get all bookings for the authenticated user
router.get("/", getUserBookings);

// Route for admins to get all bookings in the system
router.get(
    "/all",
    getAllBookings
);

// Route to get a specific booking by its ID
router.get(
    "/:id",
    [
        check("id", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
        validateFieldsMiddleware
    ],
    getBookingById
);

// Route to update the status of a booking
router.patch(
    "/:id/status",
    [
        check("id", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
        check("fk_status_id", "El ID del estado debe ser un UUID").optional().isUUID(),
        check("paymentSuccessful", "El estado de pago debe ser booleano").optional().isBoolean(),
        body().custom((_, { req }) => {
            if (req.body.fk_status_id === undefined && req.body.paymentSuccessful === undefined) {
                throw new Error('Se requiere fk_status_id o paymentSuccessful');
            }
            return true;
        }),
        validateFieldsMiddleware
    ],
    updateBookingStatus
);

// Route to cancel a booking
router.put(
    "/:id/cancel",
    [
        check("id", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
        validateFieldsMiddleware
    ],
    cancelBooking
);

export default router;