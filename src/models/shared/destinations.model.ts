import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { CountriesModel } from '.';


const Destination = sequelize.define(
    "destination",
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
        visaRequired: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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
        tableName: "Destinations",
    }
);

CountriesModel.hasMany(Destination, { sourceKey: 'id', foreignKey: 'fk_country_id' });

Destination.belongsTo(CountriesModel, { foreignKey: 'fk_country_id', targetKey: 'id' });

export default Destination;
