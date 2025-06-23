import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { AddressesModel, ClientModel } from ".";

const ClientsAddress = sequelize.define(
    "clientsAddress",
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
        tableName: "ClientsAddresses",
    }
);

// relationship Client
ClientModel.hasMany(ClientsAddress, {
    foreignKey: 'fk_client_id',
    sourceKey: 'id',
});
ClientsAddress.belongsTo(ClientModel, {
    foreignKey: 'fk_client_id',
    targetKey: 'id',
});

// relationship Address
AddressesModel.hasMany(ClientsAddress, {
    foreignKey: 'fk_address_id',
    sourceKey: 'id',
});
ClientsAddress.belongsTo(AddressesModel, {
    foreignKey: 'fk_address_id',
    targetKey: 'id',
});

export default ClientsAddress;
