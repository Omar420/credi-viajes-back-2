import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { RolesModel } from "../shared";

const User = sequelize.define(
    "user",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
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
        tableName: "Users",
    }
);

// relationship Role
RolesModel.hasMany(User, {
    foreignKey: 'fk_role_id',
    sourceKey: 'id',
    as: 'role'
});

User.belongsTo(RolesModel, {
    foreignKey: 'fk_role_id',
    targetKey: 'id',
});

User.belongsTo(User, {
    foreignKey: 'createdBy',
    as: 'creator',
    constraints: false,
});

User.belongsTo(User, {
    foreignKey: 'updatedBy',
    as: 'updater',
    constraints: false,
});

export default User;
