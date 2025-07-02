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
import { validateJWT, checkRoles } from "@src/middlewares/auth";
import { validateFields } from "@src/middlewares/shared";
import { ERROR_MESSAGES } from "@src/constants/messages.global";
import { PassengerType } from "@src/types"; // Para validar passengerType

const router = Router();

// Todas las rutas de bookings requieren autenticación JWT
router.use(validateJWT);

// Crear una nueva reserva
router.post(
    "/",
    [
        // Validaciones para BookingCreationPayload
        check("departureDate", "La fecha de salida es obligatoria y debe ser una fecha válida.").isISO8601().toDate(),
        check("returnDate", "La fecha de regreso debe ser una fecha válida.").optional({ nullable: true }).isISO8601().toDate(),
        check("fk_origin_id", "El ID del origen es obligatorio y debe ser un UUID.").isUUID(),
        check("fk_destination_id", "El ID del destino es obligatorio y debe ser un UUID.").isUUID(),
        check("totalAmount", "El monto total debe ser un número positivo.").optional().isFloat({ gt: 0 }),
        check("notes", "Las notas deben ser un texto.").optional().isString().trim(),
        check("name", "El nombre de la reserva debe ser un texto.").optional().isString().trim(),
        check("description", "La descripción de la reserva debe ser un texto.").optional().isString().trim(),

        // Validaciones para el array de pasajeros
        check("passengers", "Se requiere un array de pasajeros.").isArray({ min: 1, max: 9 }),
        check("passengers.*.firstName", "El nombre del pasajero es obligatorio.").notEmpty().isString().trim(),
        check("passengers.*.firstSurname", "El apellido del pasajero es obligatorio.").notEmpty().isString().trim(),
        check("passengers.*.middleName", "El segundo nombre del pasajero debe ser un texto.").optional({nullable: true}).isString().trim(),
        check("passengers.*.secondSurname", "El segundo apellido del pasajero debe ser un texto.").optional({nullable: true}).isString().trim(),
        check("passengers.*.fk_gender_id", "El ID de género del pasajero es obligatorio y debe ser un UUID.").isUUID(),
        check("passengers.*.dateOfBirth", "La fecha de nacimiento del pasajero es obligatoria y debe ser en formato YYYY-MM-DD.").isDate(),
        check("passengers.*.fk_nationality_country_id", "El ID de nacionalidad del pasajero es obligatorio y debe ser un UUID.").isUUID(),
        check("passengers.*.fk_doc_type_id", "El ID del tipo de documento es obligatorio y debe ser un UUID.").isUUID(),
        check("passengers.*.documentNumber", "El número de documento es obligatorio.").notEmpty().isString().trim(),
        check("passengers.*.passengerType", "El tipo de pasajero es obligatorio y debe ser 'adult', 'child', o 'infant'.")
            .isIn(['adult', 'child', 'infant'] as PassengerType[]),
        check("passengers.*.associatedAdultId", "El ID del adulto asociado debe ser un UUID.")
            .optional({ nullable: true }).isUUID(),
        validateFields,
    ],
    createBooking
);

// Obtener las reservas del usuario logueado
router.get("/", getUserBookings);

// Obtener todas las reservas (Solo Admin)
router.get(
    "/all",
    [
        checkRoles(["admin"]), // Solo administradores pueden ver todas las reservas
        validateFields,
    ],
    getAllBookings
);

// Obtener una reserva específica por ID
router.get(
    "/:id",
    [
        check("id", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
        validateFields,
    ],
    getBookingById
);

// Actualizar el estado de una reserva (ej. pago confirmado, cambio de estado manual por admin)
router.patch( // Usamos PATCH porque es una actualización parcial
    "/:id/status",
    [
        // checkRoles(["admin", "otra_rol_gestion"]), // Definir qué roles pueden cambiar estados
        check("id", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
        check("fk_status_id", "El ID del estado debe ser un UUID.").optional().isUUID(),
        check("paymentSuccessful", "El estado de pago debe ser booleano.").optional().isBoolean(),
        // Asegurar que al menos uno de los campos opcionales esté presente
        body().custom((_value, { req }) => { // Se cambia 'value' por '_value' para indicar que no se usa
            if (req.body.fk_status_id === undefined && req.body.paymentSuccessful === undefined) {
                throw new Error('Se debe proporcionar al menos fk_status_id o paymentSuccessful.');
            }
            return true;
        }),
        validateFields,
    ],
    updateBookingStatus
);

// Cancelar una reserva
router.put( // Podría ser PATCH también, PUT si se considera reemplazar el estado de la reserva a "cancelado"
    "/:id/cancel",
    [
        // checkRoles(["admin", "usuario_dueño"]), // Lógica de permisos en controlador
        check("id", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
        validateFields,
    ],
    cancelBooking
);


export default router;
