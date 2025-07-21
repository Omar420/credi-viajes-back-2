import { KiuSearch } from "@src/models/Kiu/Kiu-search.model";
import { KiuSmartSearch } from "@src/models/Kiu/Kiu-smart-search.model";

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
