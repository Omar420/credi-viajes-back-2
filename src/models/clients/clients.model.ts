import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { GenderModel } from "../shared";

const Client = sequelize.define(
    "client",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
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
            allowNull: true,
        },
        countryPrefix: {
            type: DataTypes.STRING(4),
            allowNull: true,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        birthdayDate: {
            type: DataTypes.DATE,
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
        tableName: "Clients",
    }
);

// relationship Gender
GenderModel.hasMany(Client, {
    foreignKey: 'fk_gender_id',
    sourceKey: 'id',
});

Client.belongsTo(GenderModel, {
    foreignKey: 'fk_gender_id',
    targetKey: 'id',
});


export default Client;
