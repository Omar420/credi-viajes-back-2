import { DataTypes, Sequelize } from "sequelize";
import sequelize from "@src/config/connection";
import { CountriesModel, GenderModel } from "../shared";
// import { AddressesModel, ClientModel } from "."; // ClientModel y AddressesModel no parecen necesarios aquí si el pasajero es específico de la reserva
import { DocumentTypesModel } from "../documents";

const Passenger = sequelize.define(
    "passenger",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        // Apellido (Requerido) -> firstSurname
        firstSurname: { 
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        // País de emisión del documento (Requerido) -> fk_issue_country_id
        fk_issue_country_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        // Nombre (Requerido) -> firstName
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        // Nombre de pila (Requerido) -> se puede usar secondName o crear uno nuevo si la semántica es distinta
        // Si "Nombre de pila" es el "Given Name" y "firstName" es parte del "Given Name",
        // y "firstSurname" es el "Family Name".
        // Usaremos `middleName` para "Nombre de pila" si es un segundo nombre o nombre del medio.
        // Si "Nombre de pila" es el nombre principal y "firstName" no se usa, ajustar.
        // Asumiendo que "Nombre de pila" es un segundo nombre o nombre del medio:
        middleName: { // Anteriormente secondName
            type: DataTypes.STRING(50),
            allowNull: true, // Puede ser opcional si no todos tienen nombre de pila/segundo nombre
        },
        // secondSurname no fue explícitamente pedido, pero puede mantenerse si es útil para la región
        secondSurname: {
            type: DataTypes.STRING(50),
            allowNull: true, // Hacerlo opcional
        },
        // Género (Requerido) -> fk_gender_id
        fk_gender_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        // Fecha de nacimiento (Requerido)
        dateOfBirth: {
            type: DataTypes.DATEONLY, // Solo fecha, sin hora
            allowNull: false,
        },
        // Nacionalidad (Requerido) -> fk_nationality_country_id
        fk_nationality_country_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        // Tipo de identificación o tipo de documento (Requerido) -> fk_doc_type_id
        fk_doc_type_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        // Número de identificación o numero del documento (Requerido)
        documentNumber: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        // Tipo de Pasajero (adulto, niño, infante) - crucial para lógica de negocio y precios
        passengerType: {
            type: DataTypes.ENUM('adult', 'child', 'infant'),
            allowNull: false,
        },
        // Para infantes, ID del adulto asociado en la misma reserva
        associatedAdultId: { // Referencia a otro pasajero (adulto) en la misma reserva
            type: DataTypes.UUID,
            allowNull: true, // Solo para infantes
            references: {
                model: 'Passengers', // Se auto-referencia a la misma tabla
                key: 'id',
            }
        },
        // Campos eliminados por no ser explícitamente necesarios para "pasajero de una reserva":
        // email, phoneNumber, expirationDate (de documento?), fk_client_id, fk_address_id
        // Estos parecen más de un perfil de usuario/cliente que de un pasajero puntual de una reserva.
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
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
        tableName: "Passengers",
        timestamps: true, // Habilitar Sequelize para manejar createdAt y updatedAt
    }
);

// Relación con GenderModel
Passenger.belongsTo(GenderModel, {
    foreignKey: 'fk_gender_id',
    as: 'gender', // Alias añadido
    targetKey: 'id',
});
// GenderModel.hasMany(Passenger, { // Ya está definido en GenderModel
//     foreignKey: 'fk_gender_id',
//     sourceKey: 'id',
// });


// Relación con DocumentTypesModel
Passenger.belongsTo(DocumentTypesModel, {
    foreignKey: 'fk_doc_type_id',
    as: 'documentType', // Alias añadido
    targetKey: 'id',
});
// DocumentTypesModel.hasMany(Passenger, { // Ya está definido en DocumentTypesModel
//     foreignKey: 'fk_doc_type_id',
//     sourceKey: 'id',
// });

// Relación con CountriesModel para Nacionalidad
Passenger.belongsTo(CountriesModel, {
    foreignKey: 'fk_nationality_country_id',
    as: 'nationality', // Alias añadido
    targetKey: 'id',
});

// Relación con CountriesModel para País de Emisión del Documento
Passenger.belongsTo(CountriesModel, {
    foreignKey: 'fk_issue_country_id',
    as: 'issueCountry',
    targetKey: 'id',
});
// CountriesModel.hasMany(Passenger, { // Se necesitaría añadir en CountriesModel si se quiere la relación inversa explícita
//     foreignKey: 'fk_nationality_country_id',
//     sourceKey: 'id',
//     as: 'nationalPassengers'
// });

// Auto-referencia para associatedAdultId
Passenger.belongsTo(Passenger, {
    foreignKey: 'associatedAdultId',
    as: 'associatedAdult',
    targetKey: 'id',
    constraints: false, // Desactivar restricciones automáticas si pueden causar ciclos o problemas en la creación
});
// Passenger.hasMany(Passenger, { // Para obtener los infantes asociados a un adulto
//     foreignKey: 'associatedAdultId',
//     as: 'associatedInfants',
//     sourceKey: 'id',
// });


// La relación N:M con Bookings se definirá a través de BookingPassengersModel
// o en un archivo central de asociaciones.
// Comentamos estas líneas aquí si ya están en BookingPassengersModel.ts

// import BookingModel from "../booking/booking.model"; // Necesario si se define aquí
// import BookingPassengersModel from "../booking/booking-passengers.model"; // Necesario si se define aquí

// Passenger.belongsToMany(BookingModel, {
//     through: BookingPassengersModel,
//     foreignKey: 'fk_passenger_id',
//     otherKey: 'fk_booking_id',
//     as: 'bookings'
// });


export default Passenger;
