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
