
export const ERROR_MESSAGES = {
    // General
    ERROR_INVALID_CREDENTIALS: "Las credenciales proporcionadas son inválidas.",
    ERROR_RESOURCE_NOT_FOUND: "El recurso solicitado no fue encontrado.",
    ERROR_INTERNAL_SERVER: "Ocurrió un error interno en el servidor. Por favor, intente de nuevo más tarde.",
    ERROR_UNAUTHORIZED_ACCESS: "Acceso no autorizado. Se requiere autenticación.",
    ERROR_FORBIDDEN_ACCESS: "Acceso prohibido. No tiene los permisos necesarios.",
    ERROR_VALIDATION: "Error de validación. Por favor, revise los datos enviados.",
    ERROR_BAD_REQUEST: "La solicitud es incorrecta o está malformada.",

    // Auth & User
    ERROR_EMAIL_PASSWORD: "Correo electrónico o contraseña inválida.", // Puede ser redundante con INVALID_CREDENTIALS
    ERROR_USER_NOT_FOUND: "Usuario no registrado",
    ERROR_USER_DISABLED: "Usuario desactivado. Contacte a su administrador.",
    ERROR_USER_ALREADY_EXISTS: "Ya existe un usuario con este correo electrónico.",
    ERROR_EMAIL_NOT_VERIFIED: "El correo electrónico no ha sido verificado.",
    ERROR_OTP_INVALID_OR_EXPIRED: "El código OTP es inválido o ha expirado.",

    // Products
    ERROR_PRODUCT_NOT_FOUND: "Producto no encontrado.",
    ERROR_PRODUCT_CREATION_FAILED: "No se pudo crear el producto.",
    ERROR_PRODUCT_UPDATE_FAILED: "No se pudo actualizar el producto.",
    ERROR_PRODUCT_DELETION_FAILED: "No se pudo eliminar el producto.",
    ERROR_PRODUCT_STOCK_INSUFFICIENT: "Stock insuficiente para el producto solicitado.",
    ERROR_CATEGORY_NOT_FOUND: "Categoría no encontrada para el producto.",

    // Bookings
    ERROR_BOOKING_NOT_FOUND: "Reserva no encontrada.",
    ERROR_BOOKING_CREATION_FAILED: "No se pudo crear la reserva.",
    ERROR_BOOKING_UPDATE_FAILED: "No se pudo actualizar la reserva.",
    ERROR_BOOKING_CANCELLATION_FAILED: "No se pudo cancelar la reserva.",
    ERROR_BOOKING_ALREADY_CANCELLED_OR_COMPLETED: "La reserva ya está cancelada o completada y no se puede modificar.",
    ERROR_BOOKING_STATUS_NOT_FOUND: "Estado de reserva no encontrado o no válido.",
    ERROR_PASSENGER_VALIDATION_ERROR: "Error en la validación de los datos de pasajeros.", // Mensaje genérico para lógica de pasajeros
    ERROR_INVALID_PASSENGER_COUNT: "El número de pasajeros no cumple con los límites permitidos (1-9).",
    ERROR_MISSING_ADULT_FOR_CHILD_OR_INFANT: "Se requiere al menos un pasajero adulto si viajan niños o infantes.",
    ERROR_TOO_MANY_INFANTS_PER_ADULT: "Hay demasiados infantes para el número de adultos en la reserva.",
    ERROR_BOOKING_REFERENCE_GENERATION_FAILED: "No se pudo generar una referencia de reserva única.",


    // Shared
    ERROR_ID_NOT_PROVIDED: "No se proporcionó un ID válido.",
    ERROR_INVALID_ID_FORMAT: "El formato del ID proporcionado es inválido."

};

export const SUCCESS_MESSAGES = {
    // General
    SUCCESS_OPERATION: "Operación realizada con éxito.",
    SUCCESS_RESOURCE_CREATED: "Recurso creado exitosamente.",
    SUCCESS_RESOURCE_UPDATED: "Recurso actualizado exitosamente.",
    SUCCESS_RESOURCE_DELETED: "Recurso eliminado exitosamente.",

    // Auth & User
    SUCCESS_LOGIN: "Inicio de sesión exitoso.",
    SUCCESS_REGISTRATION: "Usuario registrado exitosamente. Por favor, verifique su correo electrónico.",
    SUCCESS_PASSWORD_RESET_SENT: "Se ha enviado un código para restablecer su contraseña a su correo electrónico.",
    SUCCESS_PASSWORD_CHANGED: "Contraseña actualizada exitosamente.",
    SUCCESS_EMAIL_VERIFIED: "Correo electrónico verificado exitosamente.",
    SUCCESS_OTP_SENT: "Código OTP enviado exitosamente.",

    // Products
    SUCCESS_PRODUCT_CREATED: "Producto creado exitosamente.",
    SUCCESS_PRODUCT_UPDATED: "Producto actualizado exitosamente.",
    SUCCESS_PRODUCT_DELETED: "Producto eliminado exitosamente.",
    SUCCESS_PRODUCTS_FETCHED: "Productos obtenidos exitosamente.",
    SUCCESS_PRODUCT_FETCHED: "Producto obtenido exitosamente.",

    // Bookings
    SUCCESS_BOOKING_CREATED: "Reserva creada exitosamente.",
    SUCCESS_BOOKING_UPDATED: "Reserva actualizada exitosamente.",
    SUCCESS_BOOKING_DELETED: "Reserva eliminada exitosamente.", 
    SUCCESS_BOOKING_CANCELLED: "Reserva cancelada exitosamente.",
    SUCCESS_BOOKINGS_FETCHED: "Reservas obtenidas exitosamente.",
    SUCCESS_BOOKING_FETCHED: "Reserva obtenida exitosamente."

};

export const INFO_MESSAGES = {
    NO_RECORDS_FOUND: "No se encontraron registros.",
    NO_BOOKINGS_FOUND: "No se encontraron reservas para este usuario.",
    // Add other informational messages as needed
};