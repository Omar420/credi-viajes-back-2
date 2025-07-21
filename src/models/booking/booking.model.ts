import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { ClientModel } from "../clients"; // Asumo que ClientModel está vinculado a UserModel
import { DestinationsModel } from "../shared"; // UserModel para fk_created_by_id
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
        // name y description pueden ser eliminados si no son necesarios,
        // o usados para un nombre corto de la reserva (ej. "Viaje a Paris")
        name: { // Podría ser un resumen o título de la reserva
            type: DataTypes.STRING(100),
            allowNull: true, // O false si siempre se quiere un nombre
        },
        description: { // Detalles adicionales o notas del usuario
            type: DataTypes.TEXT, // Cambiado a TEXT para más espacio que STRING(50)
            allowNull: true,
        },
        // price podría ser el precio base antes de calcular el totalAmount
        price: { 
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true, // Puede ser calculado y guardado en totalAmount
        },
        totalAmount: { // Costo total de la reserva
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        passengerCount: { // Cantidad de pasajeros
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        paymentSuccessful: { // Estado del pago
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        bookingReference: { // Código único de la reserva
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        notes: { // Para el campo "detalle" adicional si description no es suficiente
            type: DataTypes.TEXT,
            allowNull: true,
        },
        departureDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        returnDate: {
            type: DataTypes.DATE,
            allowNull: true, // Puede ser un viaje solo de ida
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        // fk_origin_id y fk_destination_id ya existen y apuntan a DestinationsModel
        // fk_status_id ya existe y apunta a BookingStatusModel
        // fk_client_id ya existe y apunta a ClientModel (asociado al usuario que reserva)

        // Campos de auditoría
        fk_created_by_id: { // Usuario que creó la reserva (puede ser el mismo client u otro)
            type: DataTypes.UUID,
            allowNull: false,
        },
        fk_updated_by_id: { // Último usuario que actualizó la reserva
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

// Relación con BookingStatus (ya definida)
BookingStatusModel.hasMany(Booking, {
    foreignKey: 'fk_status_id',
    sourceKey: 'id',
    as: 'bookings' // Alias añadido
});
Booking.belongsTo(BookingStatusModel, {
    foreignKey: 'fk_status_id',
    targetKey: 'id',
    as: 'status' // Alias añadido
});

// Relación con Origin (DestinationsModel) (ya definida)
// DestinationsModel.hasMany(Booking, { // Ya está definido en el modelo Destination
//     foreignKey: 'fk_origin_id',
//     sourceKey: 'id',
// });
Booking.belongsTo(DestinationsModel, {
    foreignKey: 'fk_origin_id',
    targetKey: 'id',
    as: 'origin',
});

// Relación con Destination (DestinationsModel) (ya definida)
// DestinationsModel.hasMany(Booking, { // Ya está definido en el modelo Destination
//     foreignKey: 'fk_destination_id',
//     sourceKey: 'id',
// });
Booking.belongsTo(DestinationsModel, {
    foreignKey: 'fk_destination_id',
    targetKey: 'id',
    as: 'destination',
});

// Relación con Client (quien hace la reserva) (ya definida)
// ClientModel.hasMany(Booking, { // Ya está definido en el modelo Client
//     foreignKey: 'fk_client_id',
//     sourceKey: 'id',
// });
Booking.belongsTo(ClientModel, {
    foreignKey: 'fk_client_id',
    targetKey: 'id',
    as: 'client' // Alias añadido
});

// Relaciones de Auditoría con UserModel
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

// TODO: Crear modelo BookingPassengers y definir la relación N:M con PassengersModel
// La definición de belongsToMany se hará en el archivo de la tabla de unión (BookingPassengersModel)
// o en un archivo central de asociaciones para evitar dependencias circulares.
// Por ahora, comentamos estas líneas aquí si ya están en BookingPassengersModel.ts

// import PassengerModel from "../clients/passengers.model"; // Necesario si se define aquí
// import BookingPassengersModel from "./booking-passengers.model"; // Necesario si se define aquí

// Booking.belongsToMany(PassengerModel, {
//     through: BookingPassengersModel,
//     foreignKey: 'fk_booking_id',
//     otherKey: 'fk_passenger_id',
//     as: 'passengers',
// });


export default Booking;
