import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { PassengersModel } from "../clients";
import { BookingModel } from ".";

const BookingsPassengers = sequelize.define(
    "bookingsPassengers",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "BookingsPassengers",
    }
);

// relationship Booking
BookingModel.hasMany(BookingsPassengers, {
    foreignKey: 'fk_booking_id',
    sourceKey: 'id',
});
BookingsPassengers.belongsTo(BookingModel, {
    foreignKey: 'fk_booking_id',
    targetKey: 'id',
});

// relationship Passenger
PassengersModel.hasMany(BookingsPassengers, {
    foreignKey: 'fk_passenger_id',
    sourceKey: 'id',
});
BookingsPassengers.belongsTo(PassengersModel, {
    foreignKey: 'fk_passenger_id',
    targetKey: 'id',
});

export default BookingsPassengers;
