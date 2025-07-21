import { Router } from "express";
import { check, body } from "express-validator";
import { 
    createBooking, 
    getBookingById, 
    getUserBookings, 
    getAllBookings, 
    updateBookingStatus,
    cancelBooking
} from "@src/controllers/booking.controller";
import { validateFieldsMiddleware, validateJWTMiddleware } from "@src/middlewares";
import { ERROR_MESSAGES } from "@src/constants/messages.global";
import { PassengerType } from "@src/types";
import { ROLES } from "@src/constants/config-global";

const router = Router();

// Apply JWT validation to all booking routes
router.use(validateJWTMiddleware);

// Create a new booking
router.post(
    "/",
    [
        // Booking validations
        check("departureDate", "La fecha de salida es obligatoria y debe ser una fecha válida").isISO8601().toDate(),
        check("returnDate", "La fecha de regreso debe ser una fecha válida").optional({ nullable: true }).isISO8601().toDate(),
        check("fk_origin_id", "El ID del origen es obligatorio y debe ser un UUID").isUUID(),
        check("fk_destination_id", "El ID del destino es obligatorio y debe ser un UUID").isUUID(),
        check("totalAmount", "El monto total debe ser un número positivo").optional().isFloat({ gt: 0 }),
        check("notes", "Las notas deben ser un texto").optional().isString().trim(),
        check("name", "El nombre de la reserva debe ser un texto").optional().isString().trim(),
        check("description", "La descripción de la reserva debe ser un texto").optional().isString().trim(),

        // Passengers validations
        check("passengers", "Se requiere un array de pasajeros (1-9)").isArray({ min: 1, max: 9 }),
        check("passengers.*.firstName", "El nombre del pasajero es obligatorio").notEmpty().isString().trim(),
        check("passengers.*.firstSurname", "El apellido del pasajero es obligatorio").notEmpty().isString().trim(),
        check("passengers.*.middleName", "El segundo nombre del pasajero debe ser un texto").optional().isString().trim(),
        check("passengers.*.secondSurname", "El segundo apellido del pasajero debe ser un texto").optional().isString().trim(),
        check("passengers.*.fk_gender_id", "El ID de género del pasajero es obligatorio y debe ser un UUID").isUUID(),
        check("passengers.*.dateOfBirth", "La fecha de nacimiento del pasajero es obligatoria (YYYY-MM-DD)").isDate(),
        check("passengers.*.fk_nationality_country_id", "El ID de nacionalidad es obligatorio y debe ser un UUID").isUUID(),
        check("passengers.*.fk_doc_type_id", "El ID del tipo de documento es obligatorio y debe ser un UUID").isUUID(),
        check("passengers.*.documentNumber", "El número de documento es obligatorio").notEmpty().isString().trim(),
        check("passengers.*.passengerType", "El tipo de pasajero es obligatorio (adult, child, infant)")
            .isIn(['adult', 'child', 'infant'] as PassengerType[]),
        check("passengers.*.associatedAdultId", "El ID del adulto asociado debe ser un UUID")
            .optional().isUUID(),
        validateFieldsMiddleware
    ],
    createBooking
);

// Get authenticated user's bookings
router.get("/", getUserBookings);

// Get all bookings (Admin only)
router.get(
    "/all",
    [
        // Add role check if needed
        validateFieldsMiddleware
    ],
    getAllBookings
);

// Get specific booking by ID
router.get(
    "/:id",
    [
        check("id", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
        validateFieldsMiddleware
    ],
    getBookingById
);

// Update booking status
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

// Cancel booking
router.put(
    "/:id/cancel",
    [
        check("id", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
        validateFieldsMiddleware
    ],
    cancelBooking
);

export default router;