import { IPassengerDataInput,  IPassengerSummary, ISmartBookingPassenger, IPassengerAttributes } from "./passenger.type";
import { 
    IBookingStatusSummary, 
    IClientSummary, 
    IDestinationSummary, 
    IUserSummary,
    ICountrySummary
} from "./shared.type";

export interface IKiuBookingResponse {
    message: string;
    status: number;
    booking: IKiuBooking;
    ok: boolean;
}

export interface IKiuBooking {
    passengers: any[];
    flights: any[];
    pricing: any;
    contacts: any[];
    booking: {
        recordLocator: string;
        confirmed: boolean;
        cancelled: boolean;
        pendingItems: any;
    };
    bookingOffice: any;
    pointOfSale: any;
}

export interface ISmartBookingRequest {
    authEmail: string; // Email for identifying the Auth user
    email: string; // Email for contact purposes
    phone: string;
    fk_contact_country_id: string;
    totalAmount: number;
    carrier: string;
    passengers: ISmartBookingPassenger[];
    air_itinerary_information: IAirItineraryInformation[];
}

export interface IAirItineraryInformation {
    order: number;
    departure_information: IDepartureInformation;
    arrival_information: IArrivalInformation;
    flight_number: number;
    reservation_booking_designator_code: string;
    number_in_party: number;
    carrier: string;
}

export interface IDepartureInformation {
    location_code: string;
    date: string;
    time: string;
}

export interface IArrivalInformation {
    location_code: string;
}


// In your @src/types/booking.type.ts file
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

export interface IBookingServiceCreatePayload extends IBookingCreationPayload {
    fk_client_id: string;
    passengerCount: number;
    fk_created_by_id: string;
    fk_updated_by_id: string;
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

// ... rest of your types remain the same

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
    // passengers?: IPassengerDetails[]; // Array de pasajeros con todos sus detalles
}

export interface IBookingSummary extends IBookingBase {
    // Relaciones resumidas específicas para la lista
    status?: IBookingStatusSummary; 
    destination?: IDestinationSummary; // Solo el destino principal, por ejemplo
    // No incluiríamos createdBy, updatedBy, client, o lista detallada de pasajeros aquí
    // a menos que sea explícitamente necesario para el resumen.
}

// Represents the direct attributes of the BookingModel, often used by services
export interface IBookingAttributes {
    id: string;
    name?: string | null;
    description?: string | null;
    price?: number | null;
    totalAmount: number;
    passengerCount: number;
    paymentSuccessful: boolean;
    bookingReference: string;
    notes?: string | null;
    departureDate: Date;
    returnDate?: Date | null;
    deleted: boolean;
    contactEmail: string;
    contactPhone: string;
    fk_contact_country_id: string;
    fk_auth_id: string;
    fk_status_id: string;
    fk_origin_id?: string | null; // Can be optional if not a flight booking
    fk_destination_id?: string | null; // Can be optional
    fk_created_by_id: string;
    fk_updated_by_id: string;
    createdAt?: Date;
    updatedAt?: Date;

    // Optional populated associations, matching service includes
    status?: IBookingStatusSummary;
    origin?: IDestinationSummary;
    destination?: IDestinationSummary;
    auth?: any; // Replace with a proper IAuthSummary if available
    contactCountry?: ICountrySummary;
    createdBy?: IUserSummary;
    updatedBy?: IUserSummary;
    passengers?: IPassengerAttributes[];
    airItineraryInformation?: IAirItineraryInformation[];
}

// For BookingService.createBooking method - data strictly for the Booking table
export type ICoreBookingCreationPayload = Omit<IBookingCreationPayload, 'passengers'> & {
    fk_client_id: string;
    passengerCount: number;
    // Ensure all fields expected by BookingModel.create are here, minus what service auto-generates (like bookingReference)
    // Add audit fields if they are passed from controller to service create method
    fk_created_by_id: string;
    fk_updated_by_id: string;
};
