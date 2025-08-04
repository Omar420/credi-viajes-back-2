import { DataTypes, Model } from 'sequelize';
import sequelize from '@src/config/connection';

class AirItineraryInformation extends Model {}

AirItineraryInformation.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  fk_booking_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  departure_location_code: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  departure_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  departure_time: {
    type: DataTypes.STRING(4),
    allowNull: false,
  },
  arrival_location_code: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  flight_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reservation_booking_designator_code: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  number_in_party: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  carrier: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'AirItineraryInformation',
  tableName: 'AirItineraryInformation',
  timestamps: true,
});

export default AirItineraryInformation;
