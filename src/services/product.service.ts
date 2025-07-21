import { CustomError } from "@src/utils/custom-exception.error";
import { ERROR_MESSAGES } from "@src/constants/messages.global";
import { IProduct } from "@src/types/product.type";
import Product from "@src/models/products/products.model";
import { CategoryModel, UserModel } from "@src/models";

export class ProductService {
  async createProduct(productData: Omit<IProduct, 'id' | 'deleted' | 'createdAt' | 'updatedAt'>, userId: string) {
    const { name, description, amount, stock_qty, fk_category_id } = productData;

    const category = await CategoryModel.findByPk(fk_category_id);
    if (!category) {
      throw new CustomError(ERROR_MESSAGES.ERROR_CATEGORY_NOT_FOUND, 404);
    }

    const newProduct = await Product.create({
      name,
      description,
      amount,
      stock_qty,
      fk_category_id,
      fk_created_by_id: userId,
      fk_updated_by_id: userId,
    });

    return newProduct;
  }

  async getProducts() {
    const products = await Product.findAll({
      where: { deleted: false },
      include: [
        { model: CategoryModel, as: "category", attributes: ["id", "name"] },
        { model: UserModel, as: "createdBy", attributes: ["id", "name", "surname"] },
        { model: UserModel, as: "updatedBy", attributes: ["id", "name", "surname"] },
      ],
    });
    return products;
  }

  async getProductById(id: string) {
    const product = await Product.findOne({
      where: { id, deleted: false },
      include: [
        { model: CategoryModel, as: "category", attributes: ["id", "name"] },
        { model: UserModel, as: "createdBy", attributes: ["id", "username"] },
        { model: UserModel, as: "updatedBy", attributes: ["id", "username"] },
      ],
    });
    return product;
  }

  async updateProduct(id: string, productData: Partial<IProduct>, userId: string) {
    const product = await this.getProductById(id);
    if (!product) {
      throw new CustomError(ERROR_MESSAGES.ERROR_PRODUCT_NOT_FOUND, 404);
    }

    if (productData.fk_category_id) {
      const category = await CategoryModel.findByPk(productData.fk_category_id);
      if (!category) {
        throw new CustomError(ERROR_MESSAGES.ERROR_CATEGORY_NOT_FOUND, 404);
      }
    }

    const updatedData: Partial<IProduct> & { fk_updated_by_id: string } = {
        ...productData,
        fk_updated_by_id: userId,
    };

    await product.update(updatedData);
    return product;
  }

  async deleteProduct(id: string, userId: string) {
    const product = await this.getProductById(id);
    if (!product) {
      throw new CustomError(ERROR_MESSAGES.ERROR_PRODUCT_NOT_FOUND, 404);
    }

    await product.update({ deleted: true, fk_updated_by_id: userId });
  }
}
