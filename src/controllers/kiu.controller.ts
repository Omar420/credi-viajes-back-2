import { Request, Response } from 'express';
import { KiuService } from '@src/services/kiu.service';
import { KiuAvailabilityFlightsRequest, KiuSmartSearchRequest } from '@src/types/kiu.type';
import { CustomError } from '@src/utils/custom-exception.error';
import { ERROR_MESSAGES } from '@src/constants/messages.global';
import { ISmartBookingRequest } from '@src/types/booking.type';

const kiuService = new KiuService();

export const getAvailabilityFlights = async (req: Request, res: Response) => {
  try {
    const data: KiuAvailabilityFlightsRequest = req.body;
    const response = await kiuService.getAvailabilityFlights(data);
    res.status(200).json(response);
  } catch (error: any) {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ message: error.message, errors: error.getErrors() });
    }
    return res.status(500).json({ message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, error: error.message });
  }
};

export const getSmartSearch = async (req: Request, res: Response) => {
  try {
    const data: ISmartBookingRequest = req.body;
    const response = await kiuService.getSmartSearch(data);
    res.status(200).json(response);
  } catch (error: any) {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ message: error.message, errors: error.getErrors() });
    }
    return res.status(500).json({ message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, error: error.message });
  }
};
