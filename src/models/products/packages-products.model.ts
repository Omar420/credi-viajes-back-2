import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { PackagesModel, ProductsModel } from ".";

const PackagesProducts = sequelize.define(
    "packagesProducts",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
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
        tableName: "PackagesProducts",
    }
);

PackagesProducts.belongsTo(PackagesModel, {
    foreignKey: 'fk_package_id',
    as: 'package',
});

PackagesProducts.belongsTo(ProductsModel, {
    foreignKey: 'fk_product_id',
    as: 'product',
});

export default PackagesProducts;
