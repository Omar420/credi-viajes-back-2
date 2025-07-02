import { IPassengerDataInput, IPassengerDetails, IPassengerSummary } from "./passenger.type";
import { 
    IBookingStatusSummary, 
    IClientSummary, 
    IDestinationSummary, 
    IUserSummary 
} from "./shared.type";

export interface IBookingCreationPayload {
    name?: string; 
    description?: string; 
    totalAmount?: number; 
    paymentSuccessful?: boolean; 
    bookingReference?: string; 
    notes?: string; 
    departureDate: string; 
    returnDate?: string | null; 
    fk_status_id?: string; 
    fk_origin_id: string; 
    fk_destination_id: string; 
    passengers: IPassengerDataInput[]; 
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
}

export interface IBookingBase { // Campos comunes entre Details y Summary
    id: string;
    name?: string | null;
    bookingReference: string;
    totalAmount: number;
    passengerCount: number;
    departureDate: string; // Usar string para consistencia en entrada/salida JSON
    returnDate?: string | null;
    paymentSuccessful: boolean;
}

export interface IBookingDetails extends IBookingBase {
    description?: string | null;
    price?: number | null; // Precio base si existiera y fuera diferente de totalAmount
    notes?: string | null;
    deleted: boolean;
    createdAt: string; // Usar string para consistencia en entrada/salida JSON
    updatedAt: string;

    // Foreign Keys (útil tenerlos aunque los objetos estén poblados)
    fk_status_id: string;
    fk_origin_id: string;
    fk_destination_id: string;
    fk_client_id: string;
    fk_created_by_id: string;
    fk_updated_by_id: string;

    // Relaciones pobladas con tipos resumidos/específicos
    status?: IBookingStatusSummary;
    origin?: IDestinationSummary;
    destination?: IDestinationSummary;
    client?: IClientSummary;
    createdBy?: IUserSummary;
    updatedBy?: IUserSummary;
    passengers?: IPassengerDetails[]; // Array de pasajeros con todos sus detalles
}

export interface IBookingSummary extends IBookingBase {
    // Relaciones resumidas específicas para la lista
    status?: IBookingStatusSummary; 
    destination?: IDestinationSummary; // Solo el destino principal, por ejemplo
    // No incluiríamos createdBy, updatedBy, client, o lista detallada de pasajeros aquí
    // a menos que sea explícitamente necesario para el resumen.
}
