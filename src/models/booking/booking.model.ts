import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";

const Booking = sequelize.define(
    "booking",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        contactEmail: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        contactPhone: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        fk_contact_country_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        fk_auth_id: {
            type: DataTypes.UUID,
            allowNull: false,
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
        fk_status_id: { // Added this FK which was missing from the definition but present in relationships
            type: DataTypes.UUID,
            allowNull: false,
        },
        fk_origin_id: { // Added this FK
            type: DataTypes.UUID,
            allowNull: true,
        },
        fk_destination_id: { // Added this FK
            type: DataTypes.UUID,
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

export default Booking;
