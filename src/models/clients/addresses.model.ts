import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { CountriesModel, StatesModel } from "../shared";

const Address = sequelize.define(
    "address",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        city: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        zipCode: {
            type: DataTypes.STRING(50),
            allowNull: false,
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
    },
    {
        tableName: "Addresses",
    }
);

// relationship Countries
CountriesModel.hasMany(Address, {
    foreignKey: 'fk_country_id',
    sourceKey: 'id',
});

Address.belongsTo(CountriesModel, {
    foreignKey: 'fk_country_id',
    targetKey: 'id',
});

// relationship States
StatesModel.hasMany(Address, {
    foreignKey: 'fk_state_id',
    sourceKey: 'id',
});

Address.belongsTo(StatesModel, {
    foreignKey: 'fk_state_id',
    targetKey: 'id',
});


export default Address;
