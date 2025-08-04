import { DataTypes, Model } from 'sequelize';
import sequelize from '@src/config/connection';
import BookingModel from '../booking/booking.model';
import InstallmentPlan from './installment-plan.model';

class CreditPurchase extends Model {}

CreditPurchase.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  reservation_id: {
    type: DataTypes.UUID,
    references: {
      model: BookingModel,
      key: 'id',
    },
  },
  installment_plan_id: {
    type: DataTypes.UUID,
    references: {
      model: InstallmentPlan,
      key: 'id',
    },
  },
  total_with_interest: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  total_paid: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  is_fully_paid: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize,
  modelName: 'CreditPurchase',
  tableName: 'credit_purchases',
  timestamps: true,
});

export default CreditPurchase;
