import { DataTypes } from "sequelize";
import sequelize from "@src/config/connection";
import { CategoryModel, PackagesModel, PackagesProductsModel } from ".";
import { UserModel } from "../users";

const Product = sequelize.define(
    "product",
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
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        stock_qty: {
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
        tableName: "Products",
    }
);

// // N:N con Package
// Product.hasMany(PackagesProductsModel, {
//     foreignKey: 'fk_product_id',
//     as: 'packagesProducts',
// });

// PackagesProductsModel.belongsTo(Product, {
//     foreignKey: 'fk_product_id',
//     as: 'product',
// });

// Product.belongsToMany(PackagesModel, {
//     through: PackagesProductsModel,
//     foreignKey: 'fk_product_id',
//     otherKey: 'fk_package_id',
//     as: 'packages',
// });

// Relationship categories
Product.belongsTo(CategoryModel, {
    foreignKey: 'fk_category_id',
    as: 'category',
    targetKey: 'id'
});

CategoryModel.hasMany(Product, {
    foreignKey: 'fk_category_id',
    sourceKey: 'id'
})

// Audit
Product.belongsTo(UserModel, {
    foreignKey: 'fk_created_by_id',
    as: 'createdBy',
    targetKey: 'id'
});

UserModel.hasMany(Product, {
    foreignKey: 'fk_created_by_id',
    sourceKey: 'id'
})

Product.belongsTo(UserModel, {
    foreignKey: 'fk_updated_by_id',
    as: 'updatedBy',
    targetKey: 'id'
});

UserModel.hasMany(Product, {
    foreignKey: 'fk_updated_by_id',
    sourceKey: 'id'
})

export default Product;
