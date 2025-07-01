import { Request, Response } from "express";
import { ProductsModel, CategoryModel, UserModel } from "@src/models";
import { CustomException } from "@src/utils";
import { ERROR_MESSAGES, SUCCESS_MESSAGES, INFO_MESSAGES } from "@src/constants/messages.global";
import { IProduct } from "@src/types/product.type"; // Asumiendo que existe este tipo, si no, se debe crear.
import { AuthenticatedRequest } from "@src/types/custom-request"; // Para acceder a req.user

// TODO: Crear el tipo IProduct si no existe en @src/types/product.type.ts
// interface IProduct {
//     name: string;
//     description?: string;
//     amount: number;
//     stockQty: number;
//     fk_category_id: string;
//     fk_created_by_id?: string; // Se tomará del usuario autenticado
//     fk_updated_by_id?: string; // Se tomará del usuario autenticado
// }


export const createProduct = async (req: AuthenticatedRequest, res: Response) => {
    const { name, description, amount, stockQty, fk_category_id } = req.body as IProduct;
    const userId = req.user?.id; // Asumiendo que el ID del usuario está en req.user.id por el middleware de JWT

    if (!userId) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }

    try {
        // Verificar si la categoría existe
        const category = await CategoryModel.findByPk(fk_category_id);
        if (!category) {
            return res.status(404).json({ message: ERROR_MESSAGES.ERROR_CATEGORY_NOT_FOUND });
        }

        const newProduct = await ProductsModel.create({
            name,
            description,
            amount,
            stockQty,
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
        if (error instanceof CustomException) {
            return res.status(error.statusCode).json({ message: error.message, errors: error.errors });
        }
        return res.status(500).json({ message: ERROR_MESSAGES.ERROR_PRODUCT_CREATION_FAILED, error: error.message });
    }
};

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductsModel.findAll({
            where: { deleted: false },
            include: [
                { model: CategoryModel, as: 'category', attributes: ['id', 'name'] },
                { model: UserModel, as: 'createdBy', attributes: ['id', 'username'] },
                { model: UserModel, as: 'updatedBy', attributes: ['id', 'username'] },
            ]
        });

        if (!products || products.length === 0) {
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

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: ERROR_MESSAGES.ERROR_ID_NOT_PROVIDED });
    }

    try {
        const product = await ProductsModel.findOne({
            where: { id, deleted: false },
            include: [
                { model: CategoryModel, as: 'category', attributes: ['id', 'name'] },
                { model: UserModel, as: 'createdBy', attributes: ['id', 'username'] },
                { model: UserModel, as: 'updatedBy', attributes: ['id', 'username'] },
            ]
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

export const updateProduct = async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    const { name, description, amount, stockQty, fk_category_id } = req.body as Partial<IProduct>;
    const userId = req.user?.id;

    if (!id) {
        return res.status(400).json({ message: ERROR_MESSAGES.ERROR_ID_NOT_PROVIDED });
    }
    if (!userId) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }

    try {
        const product = await ProductsModel.findOne({ where: { id, deleted: false } });

        if (!product) {
            return res.status(404).json({ message: ERROR_MESSAGES.ERROR_PRODUCT_NOT_FOUND });
        }

        // Verificar si la categoría existe, si se va a actualizar
        if (fk_category_id) {
            const category = await CategoryModel.findByPk(fk_category_id);
            if (!category) {
                return res.status(404).json({ message: ERROR_MESSAGES.ERROR_CATEGORY_NOT_FOUND });
            }
        }

        const updatedProductData: Partial<IProduct> & { fk_updated_by_id: string } = {
            fk_updated_by_id: userId,
        };

        if (name !== undefined) updatedProductData.name = name;
        if (description !== undefined) updatedProductData.description = description;
        if (amount !== undefined) updatedProductData.amount = amount;
        if (stockQty !== undefined) updatedProductData.stockQty = stockQty;
        if (fk_category_id !== undefined) updatedProductData.fk_category_id = fk_category_id;


        await product.update(updatedProductData);

        return res.status(200).json({
            message: SUCCESS_MESSAGES.SUCCESS_PRODUCT_UPDATED,
            data: product,
        });
    } catch (error: any) {
        console.error(`Error updating product with id ${id}:`, error);
        if (error instanceof CustomException) {
            return res.status(error.statusCode).json({ message: error.message, errors: error.errors });
        }
        return res.status(500).json({ message: ERROR_MESSAGES.ERROR_PRODUCT_UPDATE_FAILED, error: error.message });
    }
};

export const deleteProduct = async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!id) {
        return res.status(400).json({ message: ERROR_MESSAGES.ERROR_ID_NOT_PROVIDED });
    }
    if (!userId) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }

    try {
        const product = await ProductsModel.findOne({ where: { id, deleted: false } });

        if (!product) {
            return res.status(404).json({ message: ERROR_MESSAGES.ERROR_PRODUCT_NOT_FOUND });
        }

        // Soft delete
        await product.update({ deleted: true, fk_updated_by_id: userId });
        // Para hard delete, usar: await product.destroy();

        return res.status(200).json({
            message: SUCCESS_MESSAGES.SUCCESS_PRODUCT_DELETED,
        });
    } catch (error: any) {
        console.error(`Error deleting product with id ${id}:`, error);
        return res.status(500).json({ message: ERROR_MESSAGES.ERROR_PRODUCT_DELETION_FAILED, error: error.message });
    }
};
