import { Request, Response } from "express";
import { CustomError } from "@src/utils/custom-exception.error";
import { ERROR_MESSAGES, SUCCESS_MESSAGES, INFO_MESSAGES } from "@src/constants/messages.global";
import { IProduct } from "@src/types/product.type";
import { AuthenticatedRequest } from "@src/types/custom-request.type";
import { ProductService } from "@src/services";

const productService = new ProductService();

// Crear producto
export const createProduct = async (req: AuthenticatedRequest, res: Response) => {
  const productData = req.body as IProduct;
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
  }

  try {
    const newProduct = await productService.createProduct(productData, userId);
    return res.status(201).json({
      message: SUCCESS_MESSAGES.SUCCESS_PRODUCT_CREATED,
      data: newProduct,
    });
  } catch (error: any) {
    console.error("Error creating product:", error);
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ message: error.message, errors: error.getErrors() });
    }
    return res.status(500).json({ message: ERROR_MESSAGES.ERROR_PRODUCT_CREATION_FAILED, error: error.message });
  }
};

// Obtener todos los productos activos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getProducts();

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
    const product = await productService.getProductById(id);

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
  const productData = req.body as Partial<IProduct>;
  const userId = req.userId;

  if (!id) {
    return res.status(400).json({ message: ERROR_MESSAGES.ERROR_ID_NOT_PROVIDED });
  }
  if (!userId) {
    return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
  }

  try {
    const updatedProduct = await productService.updateProduct(id, productData, userId);
    return res.status(200).json({
      message: SUCCESS_MESSAGES.SUCCESS_PRODUCT_UPDATED,
      data: updatedProduct,
    });
  } catch (error: any) {
    console.error(`Error updating product with id ${id}:`, error);
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ message: error.message, errors: error.getErrors() });
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
    await productService.deleteProduct(id, userId);
    return res.status(200).json({
      message: SUCCESS_MESSAGES.SUCCESS_PRODUCT_DELETED,
    });
  } catch (error: any) {
    console.error(`Error deleting product with id ${id}:`, error);
    if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message, errors: error.getErrors() });
    }
    return res.status(500).json({ message: ERROR_MESSAGES.ERROR_PRODUCT_DELETION_FAILED, error: error.message });
  }
};
