import CreditPurchase from '@src/models/payment/credit-purchase.model';
import Installment from '@src/models/payment/installment.model';
import InstallmentPlan from '@src/models/payment/installment-plan.model';

export class CreditPurchaseService {
  async create(data: {
    reservation_id: string;
    installment_plan_id: string;
    total_with_interest: number;
  }) {
    const purchase = await CreditPurchase.create(data);
    const plan = await InstallmentPlan.findByPk(data.installment_plan_id);

    if (plan) {
      const installments = [];
      const installmentAmount = data.total_with_interest / plan.getDataValue('installments_count');
      for (let i = 0; i < plan.getDataValue('installments_count'); i++) {
        installments.push({
          credit_purchase_id: purchase.getDataValue('id'),
          amount_due: installmentAmount,
          due_date: new Date(new Date().setMonth(new Date().getMonth() + i + 1)),
        });
      }
      await Installment.bulkCreate(installments);
    }

    return purchase;
  }
}
