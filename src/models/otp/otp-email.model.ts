// src/models/otpEmailVerifications.ts
import sequelize from "@src/config/connection";
import { DataTypes } from "sequelize";
import { AuthModel } from "../users";

const OTPEmailVerifications = sequelize.define(
    "otpEmailVerifications",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        // definimos authId como atributo y lo mapeamos a la columna fk_auth_id
        authId: {
            type: DataTypes.UUID,
            allowNull: false,
            field: "fk_auth_id",
        },
        code: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING,
        },
        used: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        expiresAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    },
    {
        tableName: "OTPEmailVerifications",
    }
);

// Asociación con alias
AuthModel.hasOne(OTPEmailVerifications, {
    as: "emailOtp",
    foreignKey: "authId",
    sourceKey: "id",
});

OTPEmailVerifications.belongsTo(AuthModel, {
    as: "auth",
    foreignKey: "authId",
    targetKey: "id",
});

export default OTPEmailVerifications;
