import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { UserModel } from ".";
import { ClientModel } from "../clients";
import { AuthType } from "@src/types";

const Auth = sequelize.define(
    "auth",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastSession: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        type: {
            type: DataTypes.ENUM(...Object.values(AuthType)),
            allowNull: false,
            defaultValue: AuthType.CLIENT,
        },
        sessionLimit: {
            type: DataTypes.INTEGER,
            defaultValue: 24
        },
        isEmailVerified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        isPasswordCreated: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        isPhoneVerified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
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
        tableName: "Auth",
    }
);

// relationship User
UserModel.hasOne(Auth, {
    foreignKey: 'fk_user_id',
    sourceKey: 'id',
    as: 'auth'
});

Auth.belongsTo(UserModel, {
    foreignKey: 'fk_user_id',
    targetKey: 'id',
});

// relationship Client
ClientModel.hasOne(Auth, {
    foreignKey: 'fk_client_id',
    sourceKey: 'id',
});

Auth.belongsTo(ClientModel, {
    foreignKey: 'fk_client_id',
    targetKey: 'id',
});
export default Auth;
