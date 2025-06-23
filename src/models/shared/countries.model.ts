import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";

const Country = sequelize.define(
    "country",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        countryPrefix: {
            type: DataTypes.STRING(4),
            allowNull: false,
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
        tableName: "Countries",
    }
);

export default Country;
