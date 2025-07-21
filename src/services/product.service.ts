import { ProductsModel, CategoryModel } from "@src/models";
import { CustomError } from "@src/utils/custom-exception.error";
import { ERROR_MESSAGES } from "@src/constants/messages.global";
import { IProduct } from "@src/types/product.type"; // Asegúrate de tener este tipo definido

export class ProductService {
  constructor() {}

  /** Crear un nuevo producto */
  async createProduct(data: IProduct & { userId: string }) {
    const { name, description, amount, stock_qty, fk_category_id, userId } = data;

    // Verificar que la categoría exista
    const category = await CategoryModel.findByPk(fk_category_id);
    if (!category) {
      throw new CustomError(ERROR_MESSAGES.ERROR_CATEGORY_NOT_FOUND, 404);
    }

    const newProduct = await ProductsModel.create({
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

  /** Obtener todos los productos activos (no eliminados) */
  async getAllProducts() {
    const products = await ProductsModel.findAll({
      where: { deleted: false },
      include: [
        { model: CategoryModel, as: "category", attributes: ["id", "name"] },
      ],
    });

    return products;
  }

  /** Obtener producto por ID */
  async getProductById(id: string) {
    const product = await ProductsModel.findOne({
      where: { id, deleted: false },
      include: [
        { model: CategoryModel, as: "category", attributes: ["id", "name"] },
      ],
    });

    if (!product) {
      throw new CustomError(ERROR_MESSAGES.ERROR_PRODUCT_NOT_FOUND, 404);
    }

    return product;
  }

  /** Actualizar producto */
  async updateProduct(id: string, data: Partial<IProduct> & { userId: string }) {
    const product = await ProductsModel.findOne({ where: { id, deleted: false } });
    if (!product) {
      throw new CustomError(ERROR_MESSAGES.ERROR_PRODUCT_NOT_FOUND, 404);
    }

    if (data.fk_category_id) {
      const category = await CategoryModel.findByPk(data.fk_category_id);
      if (!category) {
        throw new CustomError(ERROR_MESSAGES.ERROR_CATEGORY_NOT_FOUND, 404);
      }
    }

    const updatedData: Partial<IProduct> & { fk_updated_by_id: string } = {
      fk_updated_by_id: data.userId,
    };

    if (data.name !== undefined) updatedData.name = data.name;
    if (data.description !== undefined) updatedData.description = data.description;
    if (data.amount !== undefined) updatedData.amount = data.amount;
    if (data.stock_qty !== undefined) updatedData.stock_qty = data.stock_qty;
    if (data.fk_category_id !== undefined) updatedData.fk_category_id = data.fk_category_id;

    await product.update(updatedData);

    return product;
  }

  /** Eliminar producto (soft delete) */
  async deleteProduct(id: string, userId: string) {
    const product = await ProductsModel.findOne({ where: { id, deleted: false } });
    if (!product) {
      throw new CustomError(ERROR_MESSAGES.ERROR_PRODUCT_NOT_FOUND, 404);
    }

    await product.update({ deleted: true, fk_updated_by_id: userId });

    return;
  }
}
