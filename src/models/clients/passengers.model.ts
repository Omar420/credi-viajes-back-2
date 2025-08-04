import { DataTypes, Sequelize } from "sequelize";
import sequelize from "@src/config/connection";

const Passenger = sequelize.define(
    "passenger",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        firstSurname: { 
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        middleName: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        secondSurname: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        fk_gender_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        fk_nationality_country_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        fk_doc_type_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        documentNumber: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        fk_issue_country_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        passengerType: {
            type: DataTypes.ENUM('adult', 'child', 'infant'),
            allowNull: false,
        },
        associatedAdultId: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
    },
    {
        tableName: "Passengers",
        timestamps: true,
    }
);

export default Passenger;
