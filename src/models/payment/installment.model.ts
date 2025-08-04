import { DataTypes, Model } from 'sequelize';
import sequelize from '@src/config/connection';
import CreditPurchase from './credit-purchase.model';
import BookingModel from '../booking/booking.model';

class Installment extends Model {}

Installment.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  credit_purchase_id: {
    type: DataTypes.UUID,
    allowNull: true, // Can be null if it's for a booking
    references: {
      model: 'credit_purchases',
      key: 'id',
    },
  },
  fk_booking_id: {
    type: DataTypes.UUID,
    allowNull: true, // Can be null if it's for a credit purchase
    references: {
      model: 'Bookings',
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

// Relationship with Booking
BookingModel.hasMany(Installment, {
  foreignKey: 'fk_booking_id',
  sourceKey: 'id',
  as: 'installments'
});
Installment.belongsTo(BookingModel, {
  foreignKey: 'fk_booking_id',
  targetKey: 'id',
  as: 'booking'
});

// Relationship with CreditPurchase
CreditPurchase.hasMany(Installment, {
    foreignKey: 'credit_purchase_id',
    as: 'installments'
});
Installment.belongsTo(CreditPurchase, {
    foreignKey: 'credit_purchase_id',
    as: 'creditPurchase'
});

export default Installment;
