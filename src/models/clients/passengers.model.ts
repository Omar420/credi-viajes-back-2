import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { GenderModel } from "../shared";
import { AddressesModel, ClientModel } from ".";
import { DocumentTypesModel } from "../documents";

const Passenger = sequelize.define(
    "passenger",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        secondName: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        firstSurname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        secondSurname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expirationDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fk_client_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        fk_address_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    },
    {
        tableName: "Passengers",
    }
);

// relationship Gender
GenderModel.hasMany(Passenger, {
    foreignKey: 'fk_gender_id',
    sourceKey: 'id',
});
Passenger.belongsTo(GenderModel, {
    foreignKey: 'fk_gender_id',
    targetKey: 'id',
});

// relationship DocumentType
DocumentTypesModel.hasMany(Passenger, {
    foreignKey: 'fk_doc_type_id',
    sourceKey: 'id',
});
Passenger.belongsTo(DocumentTypesModel, {
    foreignKey: 'fk_doc_type_id',
    targetKey: 'id',
});

// relationship Client
ClientModel.hasMany(Passenger, {
    foreignKey: 'fk_client_id',
    sourceKey: 'id',
});
Passenger.belongsTo(ClientModel, {
    foreignKey: 'fk_client_id',
    targetKey: 'id',
});

// relationship Address
AddressesModel.hasOne(Passenger, {
    foreignKey: 'fk_address_id',
    sourceKey: 'id',
});
Passenger.belongsTo(AddressesModel, {
    foreignKey: 'fk_address_id',
    targetKey: 'id',
});

export default Passenger;
