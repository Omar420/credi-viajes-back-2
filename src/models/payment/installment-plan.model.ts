import { DataTypes, Model } from 'sequelize';
import sequelize from '@src/config/connection';

class InstallmentPlan extends Model {}

InstallmentPlan.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  installments_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  interest_rate: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  sequelize,
  modelName: 'InstallmentPlan',
  tableName: 'installment_plans',
  timestamps: true,
});

export default InstallmentPlan;
