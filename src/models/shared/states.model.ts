import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { CountriesModel } from ".";

const State = sequelize.define(
    "state",
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
        tableName: "States",
    }
);

CountriesModel.hasMany(State, { sourceKey: 'id', foreignKey: 'fk_country_id' });

State.belongsTo(CountriesModel, { foreignKey: 'fk_country_id', targetKey: 'id' });



export default State;
