import { Request, Response } from 'express';
import { PaymentService } from '@src/services/payment.service';

const paymentService = new PaymentService();

export const createPayment = async (req: Request, res: Response) => {
  try {
    const payment = await paymentService.create(req.body);
    res.status(201).json(payment);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
