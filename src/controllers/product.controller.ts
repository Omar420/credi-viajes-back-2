import { Request, Response } from "express";
import { CustomError } from "@src/utils/custom-exception.error";
import { ERROR_MESSAGES, SUCCESS_MESSAGES, INFO_MESSAGES } from "@src/constants/messages.global";
import { IProduct } from "@src/types/product.type"; // Define este tipo acorde a tu modelo
import { AuthenticatedRequest } from "@src/types/custom-request.type"; // Para acceder a req.userId
import Product from "@src/models/products/products.model";
import { CategoryModel, UserModel } from "@src/models";

// Crear producto
export const createProduct = async (req: AuthenticatedRequest, res: Response) => {
  const { name, description, amount, stock_qty, fk_category_id } = req.body as IProduct;
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
  }

  try {
    // Verificar existencia de categoría
    const category = await CategoryModel.findByPk(fk_category_id);
    if (!category) {
      return res.status(404).json({ message: ERROR_MESSAGES.ERROR_CATEGORY_NOT_FOUND });
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

    return res.status(201).json({
      message: SUCCESS_MESSAGES.SUCCESS_PRODUCT_CREATED,
      data: newProduct,
    });
  } catch (error: any) {
    console.error("Error creating product:", error);
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ message: error.message, errors: error });
    }
    return res.status(500).json({ message: ERROR_MESSAGES.ERROR_PRODUCT_CREATION_FAILED, error: error.message });
  }
};

// Obtener todos los productos activos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      where: { deleted: false },
      include: [
        { model: CategoryModel, as: "category", attributes: ["id", "name"] },
        { model: UserModel, as: "createdBy", attributes: ["id", "name", "surname"] },
        { model: UserModel, as: "updatedBy", attributes: ["id", "name", "surname"] },
      ],
    });

    if (!products.length) {
      return res.status(200).json({ message: INFO_MESSAGES.NO_RECORDS_FOUND, data: [] });
    }

    return res.status(200).json({
      message: SUCCESS_MESSAGES.SUCCESS_PRODUCTS_FETCHED,
      data: products,
    });
  } catch (error: any) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, error: error.message });
  }
};

// Obtener producto por ID
export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: ERROR_MESSAGES.ERROR_ID_NOT_PROVIDED });
  }

  try {
    const product = await Product.findOne({
      where: { id, deleted: false },
      include: [
        { model: CategoryModel, as: "category", attributes: ["id", "name"] },
        { model: UserModel, as: "createdBy", attributes: ["id", "username"] },
        { model: UserModel, as: "updatedBy", attributes: ["id", "username"] },
      ],
    });

    if (!product) {
      return res.status(404).json({ message: ERROR_MESSAGES.ERROR_PRODUCT_NOT_FOUND });
    }

    return res.status(200).json({
      message: SUCCESS_MESSAGES.SUCCESS_PRODUCT_FETCHED,
      data: product,
    });
  } catch (error: any) {
    console.error(`Error fetching product with id ${id}:`, error);
    return res.status(500).json({ message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, error: error.message });
  }
};

// Actualizar producto
export const updateProduct = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const { name, description, amount, stock_qty, fk_category_id } = req.body as Partial<IProduct>;
  const userId = req.userId;

  if (!id) {
    return res.status(400).json({ message: ERROR_MESSAGES.ERROR_ID_NOT_PROVIDED });
  }
  if (!userId) {
    return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
  }

  try {
    const product = await Product.findOne({ where: { id, deleted: false } });
    if (!product) {
      return res.status(404).json({ message: ERROR_MESSAGES.ERROR_PRODUCT_NOT_FOUND });
    }

    if (fk_category_id) {
      const category = await CategoryModel.findByPk(fk_category_id);
      if (!category) {
        return res.status(404).json({ message: ERROR_MESSAGES.ERROR_CATEGORY_NOT_FOUND });
      }
    }

    const updatedData: Partial<IProduct> & { fk_updated_by_id: string } = {
      fk_updated_by_id: userId,
    };

    if (name !== undefined) updatedData.name = name;
    if (description !== undefined) updatedData.description = description;
    if (amount !== undefined) updatedData.amount = amount;
    if (stock_qty !== undefined) updatedData.stock_qty = stock_qty;
    if (fk_category_id !== undefined) updatedData.fk_category_id = fk_category_id;

    await product.update(updatedData);

    return res.status(200).json({
      message: SUCCESS_MESSAGES.SUCCESS_PRODUCT_UPDATED,
      data: product,
    });
  } catch (error: any) {
    console.error(`Error updating product with id ${id}:`, error);
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ message: error.message, errors: error });
    }
    return res.status(500).json({ message: ERROR_MESSAGES.ERROR_PRODUCT_UPDATE_FAILED, error: error.message });
  }
};

// Eliminar producto (soft delete)
export const deleteProduct = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const userId = req.userId;

  if (!id) {
    return res.status(400).json({ message: ERROR_MESSAGES.ERROR_ID_NOT_PROVIDED });
  }
  if (!userId) {
    return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
  }

  try {
    const product = await Product.findOne({ where: { id, deleted: false } });
    if (!product) {
      return res.status(404).json({ message: ERROR_MESSAGES.ERROR_PRODUCT_NOT_FOUND });
    }

    // Soft delete
    await product.update({ deleted: true, fk_updated_by_id: userId });

    return res.status(200).json({
      message: SUCCESS_MESSAGES.SUCCESS_PRODUCT_DELETED,
    });
  } catch (error: any) {
    console.error(`Error deleting product with id ${id}:`, error);
    return res.status(500).json({ message: ERROR_MESSAGES.ERROR_PRODUCT_DELETION_FAILED, error: error.message });
  }
};
