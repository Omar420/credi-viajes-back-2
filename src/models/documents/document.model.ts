import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { ClientModel } from "../clients";
import { DocumentTypesModel } from ".";

const Document = sequelize.define(
    "document",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        number: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        expirationDate: {
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
        tableName: "Documents",
    }
);

// relationship DccumentsType
DocumentTypesModel.hasMany(Document, {
    foreignKey: 'fk_doc_type_id',
    sourceKey: 'id',
});

Document.belongsTo(DocumentTypesModel, {
    foreignKey: 'fk_doc_type_id',
    targetKey: 'id',
});

// relationship Client
ClientModel.hasMany(Document, {
    foreignKey: 'fk_client_id',
    sourceKey: 'id',
});

Document.belongsTo(ClientModel, {
    foreignKey: 'fk_client_id',
    targetKey: 'id',
});


export default Document;
