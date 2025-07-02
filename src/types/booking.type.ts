import { IPassengerData, IPassengerDetails } from "./passenger.type";
import { 
    BookingStatusModel, 
    ClientModel, 
    DestinationsModel, 
    UserModel 
} from "@src/models"; // Asumiendo importación para tipos

export interface IBookingCreationPayload {
    // Campos directos de BookingModel
    name?: string; // Opcional, podría generarse o dejarse al usuario
    description?: string; // Notas adicionales del usuario
    // price?: number; // El precio base, si se proporciona; sino se calcula. totalAmount es el principal.
    totalAmount?: number; // Si el frontend ya lo calculó, sino se calcula en backend. Obligatorio al final.
    // passengerCount?: number; // Se puede derivar del array de passengers.
    paymentSuccessful?: boolean; // Default false. Se actualiza post-pago.
    bookingReference?: string; // Podría ser generado por el backend.
    notes?: string; // Detalles adicionales.
    departureDate: string; // Formato YYYY-MM-DD o ISO String
    returnDate?: string | null; // Formato YYYY-MM-DD o ISO String
    
    fk_status_id?: string; // Opcional en creación, se puede poner uno por defecto (ej. 'PENDIENTE')
    fk_origin_id: string; // UUID del destino de origen
    fk_destination_id: string; // UUID del destino de destino
    // fk_client_id se tomará del usuario autenticado, no se envía en payload.
    // fk_created_by_id y fk_updated_by_id se toman del usuario autenticado.

    // Array de pasajeros para esta reserva
    passengers: IPassengerData[]; 
}

export interface IBookingUpdatePayload {
    name?: string;
    description?: string;
    totalAmount?: number;
    paymentSuccessful?: boolean;
    notes?: string;
    departureDate?: string; 
    returnDate?: string | null;
    fk_status_id?: string; 
    fk_origin_id?: string; 
    fk_destination_id?: string; 
    // No se debería poder cambiar passengerCount directamente, se recalcula si cambia la lista de pasajeros.
    // La actualización de pasajeros sería un endpoint separado o una lógica más compleja aquí.
}


export interface IBookingDetails {
    id: string;
    name?: string | null;
    description?: string | null;
    price?: number | null; // Precio base
    totalAmount: number;
    passengerCount: number;
    paymentSuccessful: boolean;
    bookingReference: string;
    notes?: string | null;
    departureDate: Date; // En respuestas, usualmente se serializa a string ISO
    returnDate?: Date | null;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;

    // Foreign Keys
    fk_status_id: string;
    fk_origin_id: string;
    fk_destination_id: string;
    fk_client_id: string;
    fk_created_by_id: string;
    fk_updated_by_id: string;

    // Relaciones pobladas (objetos completos)
    status?: BookingStatusModel; // O un tipo IBookingStatusDetails más simple
    origin?: DestinationsModel; // O un tipo IDestinationDetails
    destination?: DestinationsModel; // O un tipo IDestinationDetails
    client?: ClientModel; // O un tipo IClientDetails
    createdBy?: UserModel; // O un tipo IUserDetails
    updatedBy?: UserModel; // O un tipo IUserDetails
    passengers?: IPassengerDetails[]; // Array de pasajeros con todos sus detalles
}

// Un tipo más simple para listas de reservas donde no se necesitan todos los detalles
export interface IBookingSummary {
    id: string;
    name?: string | null;
    bookingReference: string;
    totalAmount: number;
    passengerCount: number;
    departureDate: Date;
    returnDate?: Date | null;
    status?: { id: string, name: string }; // Ejemplo de objeto anidado simple
    destination?: { id: string, name: string, code?: string }; // Ejemplo
}
