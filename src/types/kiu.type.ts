import { IAirItineraryInformation } from "./booking.type";

export interface IKiuPassenger {
    surname: string;
    name: string;
    gender: string;
    foid_type: string;
    document_type: string;
    foid_id: string;
    date_of_birth: string;
    passenger_type_code: string;
    nationality: string;
    issue_country: string;
    expiration_date: string;
    representative?: string;
}

export interface IKiuSmartBookingPayload {
    email: string;
    phone: string;
    countryCode: string;
    carrier: string;
    passengers: IKiuPassenger[];
    air_itinerary_information: IAirItineraryInformation[];
}


export interface KiuSearch {
  adults: number;
  children: number;
  infants: number;
  origin: string;
  destination: string;
  departure_date: string;
  return_date: string;
}

export interface KiuSmartSearch {
  adults: number;
  children: number;
  infants: number;
  origin: string;
  destination: string;
  departure_date: string;
  return_date: string;
  flight_numbers: string[];
  carrier: string;
}

export interface KiuAvailabilityFlightsRequest extends KiuSearch {}

export interface KiuSmartSearchRequest extends KiuSmartSearch {}

export interface KiuAvailabilityFlightsResponse {
  ok: boolean;
  message: string;
  flights: any[];
}

export interface KiuSmartSearchResponse {
  status: number;
  flights: any[];
  message: string;
  ok: boolean;
}
