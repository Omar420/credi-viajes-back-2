import sequelize from "@src/config/connection";
import { DataTypes } from "sequelize";
import { AuthModel } from "../users";


const OTPSmsVerifications = sequelize.define(
    "otpSmsVerifications",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
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
            type: DataTypes.DATE
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
        tableName: "OTPSmsVerifications",
    }
);

AuthModel.hasOne(OTPSmsVerifications, {
    foreignKey: 'fk_auth_id',
    sourceKey: 'id',
});

OTPSmsVerifications.belongsTo(AuthModel, {
    foreignKey: 'fk_auth_id',
    targetKey: 'id',
});

export default OTPSmsVerifications;
