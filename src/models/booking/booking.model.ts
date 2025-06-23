import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { ClientModel } from "../clients";
import { DestinationsModel } from "../shared";
import { BookingStatusModel } from ".";

const Booking = sequelize.define(
    "booking",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(50),
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        departureDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        returnDate: {
            type: DataTypes.DATE,
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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

// relationship BookingStatus
BookingStatusModel.hasMany(Booking, {
    foreignKey: 'fk_status_id',
    sourceKey: 'id',
});
Booking.belongsTo(BookingStatusModel, {
    foreignKey: 'fk_status_id',
    targetKey: 'id',
});

// relationship Origin
DestinationsModel.hasMany(Booking, {
    foreignKey: 'fk_origin_id',
    sourceKey: 'id',
});
Booking.belongsTo(DestinationsModel, {
    foreignKey: 'fk_origin_id',
    targetKey: 'id',
    as: 'origin',
});

// relationship Destination
DestinationsModel.hasMany(Booking, {
    foreignKey: 'fk_destination_id',
    sourceKey: 'id',
});
Booking.belongsTo(DestinationsModel, {
    foreignKey: 'fk_destination_id',
    targetKey: 'id',
    as: 'destination',
});

// relationship Client
ClientModel.hasMany(Booking, {
    foreignKey: 'fk_client_id',
    sourceKey: 'id',
});
Booking.belongsTo(ClientModel, {
    foreignKey: 'fk_client_id',
    targetKey: 'id',
});


export default Booking;
