import { IBookingAttributes, IBookingDetails } from "./booking.type"; // Assuming IBookingAttributes or IBookingDetails for populated booking
import { IPassengerAttributes } from "./passenger.type"; // Assuming IPassengerAttributes or IPassengerDetails for populated passenger

// Attributes of the BookingPassengers model instance (the join table record itself)
export interface IBookingPassengersAttributes {
    id: string;
    fk_booking_id: string;
    fk_passenger_id: string;
    // Add any other custom attributes that exist on the join table itself, for example:
    // seatNumber?: string | null;
    // specialRequests?: string | null;
    createdAt: Date;
    updatedAt: Date;

    // Optional populated associations
    bookingDetails?: IBookingDetails; // Or IBookingAttributes
    passengerDetails?: IPassengerAttributes; // Or IPassengerAttributes
}

// Attributes needed for creating a new BookingPassengers link
// Typically, just the foreign keys and any custom attributes on the join table.
export type IBookingPassengersCreationAttributes = Pick<IBookingPassengersAttributes, 'fk_booking_id' | 'fk_passenger_id'> & {
    // Add any other custom attributes for creation, e.g.:
    // seatNumber?: string;
    // specialRequests?: string;
};

// For controller request bodies, if they differ slightly from CreationAttributes
export interface IBookingPassengerPayload {
    fk_booking_id: string;
    fk_passenger_id: string;
    // seatNumber?: string;
    // specialRequests?: string;
}
