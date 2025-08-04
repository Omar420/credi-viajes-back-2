import Installment from '@src/models/payment/installment.model';
import CreditPurchase from '@src/models/payment/credit-purchase.model';

export class InstallmentService {
  async pay(id: string) {
    const installment = await Installment.findByPk(id);
    if (installment) {
      await installment.update({ status: 'paid', paid_at: new Date() });
      const purchase = await CreditPurchase.findByPk(installment.getDataValue('credit_purchase_id'));
      if (purchase) {
        const totalPaid = purchase.getDataValue('total_paid') + installment.getDataValue('amount_due');
        const isFullyPaid = totalPaid >= purchase.getDataValue('total_with_interest');
        await purchase.update({ total_paid: totalPaid, is_fully_paid: isFullyPaid });
      }
    }
    return installment;
  }
}
