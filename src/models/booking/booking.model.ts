import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { ClientModel } from "../clients";
import { DestinationsModel } from "../shared";
import { BookingStatusModel } from ".";
import { UserModel } from "../users";

const Booking = sequelize.define(
    "booking",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        price: { 
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        totalAmount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        passengerCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        paymentSuccessful: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        bookingReference: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        departureDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        returnDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        kiu_response: {
            type: DataTypes.JSONB,
            allowNull: true,
        },
        fk_created_by_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        fk_updated_by_id: {
            type: DataTypes.UUID,
            allowNull: false,
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
        tableName: "Bookings",
    }
);

BookingStatusModel.hasMany(Booking, {
    foreignKey: 'fk_status_id',
    sourceKey: 'id',
    as: 'bookings'
});
Booking.belongsTo(BookingStatusModel, {
    foreignKey: 'fk_status_id',
    targetKey: 'id',
    as: 'status'
});

Booking.belongsTo(DestinationsModel, {
    foreignKey: 'fk_origin_id',
    targetKey: 'id',
    as: 'origin',
});

Booking.belongsTo(DestinationsModel, {
    foreignKey: 'fk_destination_id',
    targetKey: 'id',
    as: 'destination',
});

Booking.belongsTo(ClientModel, {
    foreignKey: 'fk_client_id',
    targetKey: 'id',
    as: 'client'
});

Booking.belongsTo(UserModel, {
    foreignKey: 'fk_created_by_id',
    as: 'createdBy',
    targetKey: 'id'
});
UserModel.hasMany(Booking, {
    foreignKey: 'fk_created_by_id',
    sourceKey: 'id',
    as: 'createdBookings'
});

Booking.belongsTo(UserModel, {
    foreignKey: 'fk_updated_by_id',
    as: 'updatedBy',
    targetKey: 'id'
});
UserModel.hasMany(Booking, {
    foreignKey: 'fk_updated_by_id',
    sourceKey: 'id',
    as: 'updatedBookings'
});

export default Booking;
