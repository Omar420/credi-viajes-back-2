import { Router } from "express";
import { check } from "express-validator";
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "@src/controllers/product.controller";
import { validateJWT, checkRoles } from "@src/middlewares/auth";
import { validateFields } from "@src/middlewares/shared";
import { ERROR_MESSAGES } from "@src/constants/messages.global";

const router = Router();

// Todas las rutas de productos requieren autenticación JWT
router.use(validateJWT);

router.post(
    "/",
    [
        checkRoles(["admin", "editor"]), // Solo admin o editor pueden crear productos
        check("name", "El nombre del producto es obligatorio").not().isEmpty().trim(),
        check("name", "El nombre del producto debe tener máximo 50 caracteres").isLength({ max: 50 }),
        check("description", "La descripción debe tener máximo 255 caracteres").optional().isLength({ max: 255 }).trim(),
        check("amount", "El precio es obligatorio y debe ser un número positivo").isFloat({ gt: 0 }),
        check("stockQty", "La cantidad en stock es obligatoria y debe ser un entero no negativo").isInt({ min: 0 }),
        check("fk_category_id", "El ID de la categoría es obligatorio y debe ser un UUID válido").isUUID(),
        validateFields,
    ],
    createProduct
);

router.get(
    "/",
    // No se requieren roles específicos para listar productos, solo autenticación (ya aplicada con router.use)
    getProducts
);

router.get(
    "/:id",
    [
        check("id", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
        validateFields,
    ],
    getProductById
);

router.put(
    "/:id",
    [
        checkRoles(["admin", "editor"]), // Solo admin o editor pueden actualizar productos
        check("id", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
        check("name", "El nombre del producto debe tener máximo 50 caracteres").optional().isLength({ max: 50 }).trim(),
        check("description", "La descripción debe tener máximo 255 caracteres").optional().isLength({ max: 255 }).trim(),
        check("amount", "El precio debe ser un número positivo").optional().isFloat({ gt: 0 }),
        check("stockQty", "La cantidad en stock debe ser un entero no negativo").optional().isInt({ min: 0 }),
        check("fk_category_id", "El ID de la categoría debe ser un UUID válido").optional().isUUID(),
        validateFields,
    ],
    updateProduct
);

router.delete(
    "/:id",
    [
        checkRoles(["admin"]), // Solo admin puede eliminar productos
        check("id", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
        validateFields,
    ],
    deleteProduct
);

export default router;
