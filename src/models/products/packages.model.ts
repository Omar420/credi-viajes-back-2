import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { PackagesProductsModel, ProductsModel } from ".";
import { UserModel } from "../users";
import { DestinationsModel } from "../shared";

const Package = sequelize.define(
    "package",
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
        description: {
            type: DataTypes.STRING(50),
        },
        deadLine: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        deleted: {
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
        tableName: "Packages",
    }
);

// Package.hasMany(PackagesProductsModel, {
//     foreignKey: 'fk_package_id', as: 'packagesProducts',
//     sourceKey: 'id',
// });

// PackagesProductsModel.belongsTo(Package, {
//     foreignKey: 'fk_package_id',
//     as: 'package',
//     targetKey: 'id'
// });

// Package.belongsToMany(ProductsModel, {
//     through: PackagesProductsModel,
//     foreignKey: 'fk_package_id',
//     otherKey: 'fk_product_id',
//     as: 'products',
// });

// Audit
Package.belongsTo(UserModel, {
    foreignKey: 'fk_created_by_id',
    as: 'createdBy',
    targetKey: 'id'
});

UserModel.hasMany(Package, {
    foreignKey: 'fk_created_by_id',
    sourceKey: 'id'
})

Package.belongsTo(UserModel, {
    foreignKey: 'fk_updated_by_id',
    as: 'updatedBy',
    targetKey: 'id'
});

UserModel.hasMany(Package, {
    foreignKey: 'fk_updated_by_id',
    sourceKey: 'id'
})

// Destinations

DestinationsModel.hasMany(Package, {
    foreignKey: 'fk_origin_id',
    as: 'origin',
    sourceKey: 'id',
});

Package.belongsTo(DestinationsModel, {
    foreignKey: 'fk_origin_id',
    as: 'origin',
    targetKey: 'id'
});

DestinationsModel.hasMany(Package, {
    foreignKey: 'fk_destination_id',
    as: 'destination',
    sourceKey: 'id',
});

Package.belongsTo(DestinationsModel, {
    foreignKey: 'fk_destination_id',
    as: 'destination',
    targetKey: 'id'
});

export default Package;
