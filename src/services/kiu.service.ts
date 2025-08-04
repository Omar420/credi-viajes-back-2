import axios from 'axios';
import { KiuAvailabilityFlightsRequest, KiuSmartSearchRequest, IKiuSmartBookingPayload } from '@src/types/kiu.type';

const API_BASE_URL_KIU = process.env.API_BASE_URL_KIU;
const API_KEY_KIU = process.env.API_KEY_KIU;
const KIU_INTEGRATION_ID = process.env.KIU_INTEGRATION_ID;

export class KiuService {
  async getAvailabilityFlights(data: KiuAvailabilityFlightsRequest) {
    const response = await axios.post(
      `${API_BASE_URL_KIU}/kiu/availability-flights?integrationID=${KIU_INTEGRATION_ID}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY_KIU,
        },
      }
    );
    return response.data;
  }

  async getSmartSearch(data: KiuSmartSearchRequest) {
    const response = await axios.post(
      `${API_BASE_URL_KIU}/kiu/smart-search?integrationID=${KIU_INTEGRATION_ID}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY_KIU,
        },
      }
    );
    return response.data;
  }

  async createSmartBooking(data: IKiuSmartBookingPayload) {
    const response = await axios.post(
      `${API_BASE_URL_KIU}/kiu/smart-booking?integrationID=${KIU_INTEGRATION_ID}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY_KIU,
        },
      }
    );
    return response.data;
  }
}
