import { DataTypes, Sequelize } from "sequelize";
import sequelize from "@src/config/connection";
import BookingModel from "./booking.model";
import PassengerModel from "../clients/passengers.model"; 

const BookingPassengers = sequelize.define(
    "BookingPassengers", // Nombre del modelo debe ser singular o igual al exportado consistentemente
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        fk_booking_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Bookings', // Nombre de la tabla
                key: 'id',
            }
        },
        fk_passenger_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Passengers', // Nombre de la tabla
                key: 'id',
            }
        },
        // Campos adicionales específicos de la relación:
        // passengerTypeAtBooking: DataTypes.ENUM('adult', 'child', 'infant'), // Podría ser útil si el tipo de pasajero puede cambiar pero para la reserva era específico
        // pricePaid: DataTypes.DECIMAL(10, 2), // Si el precio se desglosa por pasajero
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
    },
    {
        tableName: "BookingsPassengers",
        timestamps: true,
        freezeTableName: true, // Evita que Sequelize pluralice automáticamente el nombre de la tabla si es diferente al del modelo
    }
);

// Definir las asociaciones fuera y después de la definición de ambos modelos principales
// Estas asociaciones ya se definieron en los modelos BookingModel y PassengerModel (o deberían estar allí)
// Sin embargo, es común definirlas aquí también para la tabla de unión.
// Asegurarse de que los alias no colisionen si se definen en múltiples lugares.

// BookingModel.belongsToMany(PassengerModel, {
//     through: BookingPassengers,
//     foreignKey: 'fk_booking_id',
//     otherKey: 'fk_passenger_id',
//     as: 'passengers', // Asegurar que este alias sea consistente
// });

// PassengerModel.belongsToMany(BookingModel, {
//     through: BookingPassengers,
//     foreignKey: 'fk_passenger_id',
//     otherKey: 'fk_booking_id',
//     as: 'bookings', // Asegurar que este alias sea consistente
// });

export default BookingPassengers;
