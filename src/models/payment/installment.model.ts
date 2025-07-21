import { DataTypes, Model } from 'sequelize';
import sequelize from '@src/config/connection';
import CreditPurchase from './credit-purchase.model';

class Installment extends Model {}

Installment.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  credit_purchase_id: {
    type: DataTypes.UUID,
    references: {
      model: CreditPurchase,
      key: 'id',
    },
  },
  amount_due: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  due_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  paid_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('pending', 'paid', 'overdue'),
    defaultValue: 'pending',
  },
}, {
  sequelize,
  modelName: 'Installment',
  tableName: 'installments',
  timestamps: true,
});

export default Installment;
