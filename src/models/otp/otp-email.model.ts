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
        authId: { // Sequelize mapeará esto a fk_auth_id si se usa underscored: true globalmente o field: 'fk_auth_id'
            type: DataTypes.UUID,
            allowNull: false,
            field: "fk_auth_id", // Manteniendo la definición explícita del campo por consistencia
        },
        code: {
            allowNull: false,
            unique: true, // Considerar si el código debe ser único globalmente o por authId y propósito
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
        // createdAt y updatedAt serán manejados por Sequelize si timestamps: true está en las opciones del modelo
    },
    {
        tableName: "OTPEmailVerifications",
        timestamps: true, // Habilita createdAt y updatedAt automáticos
    }
);

// Asociación con AuthModel
AuthModel.hasMany(OTPEmailVerifications, {
    as: "emailOtps", // Un Auth puede tener varios OTPs (ej. uno para email, otro para password reset)
    foreignKey: "authId", 
    sourceKey: "id",
});

OTPEmailVerifications.belongsTo(AuthModel, {
    as: "auth",
    foreignKey: "authId",
    targetKey: "id",
});

export default OTPEmailVerifications;
