import InstallmentPlan from '@src/models/payment/installment-plan.model';

export class InstallmentPlanService {
  async create(data: any) {
    return await InstallmentPlan.create(data);
  }

  async findAll() {
    return await InstallmentPlan.findAll({ where: { is_active: true } });
  }

  async findOne(id: string) {
    return await InstallmentPlan.findByPk(id);
  }

  async update(id: string, data: any) {
    const plan = await InstallmentPlan.findByPk(id);
    if (plan) {
      return await plan.update(data);
    }
    return null;
  }

  async delete(id: string) {
    const plan = await InstallmentPlan.findByPk(id);
    if (plan) {
      await plan.destroy();
      return true;
    }
    return false;
  }
}
