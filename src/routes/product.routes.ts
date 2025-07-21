import { Router } from "express";
import { check } from "express-validator";
import { 
  createProduct, 
  deleteProduct, 
  getProductById, 
  getProducts, 
  updateProduct 
} from "@src/controllers/product.controller";
import { validateFieldsMiddleware } from "@src/middlewares/shared"; // Asegúrate de tener este middleware
import { validateJWTMiddleware } from "@src/middlewares/auth"; // Para autenticación y roles
import { ERROR_MESSAGES } from "@src/constants/messages.global";

const router = Router();

// Middleware para proteger todas las rutas con JWT
router.use(validateJWTMiddleware);

// Ruta simple para probar que el router funciona
router.get("/test", (req, res) => {
  res.json({ message: "Ruta de prueba funcionando correctamente" });
});

router.post(
  "/",
  [
    // checkRoles(["admin", "editor"]), // Descomenta para controlar roles
    check("name", "El nombre del producto es obligatorio").not().isEmpty().trim(),
    check("name", "El nombre del producto debe tener máximo 50 caracteres").isLength({ max: 50 }),
    check("description", "La descripción debe tener máximo 255 caracteres").optional().isLength({ max: 255 }).trim(),
    check("amount", "El precio es obligatorio y debe ser un número positivo").isFloat({ gt: 0 }),
    check("stock_qty", "La cantidad en stock es obligatoria y debe ser un entero no negativo").isInt({ min: 0 }),
    check("fk_category_id", "El ID de la categoría es obligatorio y debe ser un UUID válido").isUUID(),
    validateFieldsMiddleware,
  ],
  createProduct
);

router.get(
  "/",
  // No se requieren roles específicos para listar productos, solo autenticación
  getProducts
);

router.get(
  "/:id",
  [
    check("id", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
    validateFieldsMiddleware,
  ],
  getProductById
);

router.put(
  "/:id",
  [
    // checkRoles(["admin", "editor"]), // Descomenta para controlar roles
    check("id", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
    check("name", "El nombre del producto debe tener máximo 50 caracteres").optional().isLength({ max: 50 }).trim(),
    check("description", "La descripción debe tener máximo 255 caracteres").optional().isLength({ max: 255 }).trim(),
    check("amount", "El precio debe ser un número positivo").optional().isFloat({ gt: 0 }),
    check("stock_qty", "La cantidad en stock debe ser un entero no negativo").optional().isInt({ min: 0 }),
    check("fk_category_id", "El ID de la categoría debe ser un UUID válido").optional().isUUID(),
    validateFieldsMiddleware,
  ],
  updateProduct
);

router.delete(
  "/:id",
  [
    // checkRoles(["admin"]), // Descomenta para controlar roles
    check("id", ERROR_MESSAGES.ERROR_INVALID_ID_FORMAT).isUUID(),
    validateFieldsMiddleware,
  ],
  deleteProduct
);

export default router;
