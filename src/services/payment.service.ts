import Payment from '@src/models/payment/payment.model';
import { InstallmentService } from './installment.service';

const installmentService = new InstallmentService();

export class PaymentService {
  async create(data: {
    installment_id: string;
    amount_paid: number;
    payment_method: string;
    payment_reference: string;
  }) {
    const payment = await Payment.create(data);
    await installmentService.pay(data.installment_id);
    return payment;
  }
}
