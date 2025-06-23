import { ROLES } from "@src/constants/config-global";
import { createAdmin, createOperator, getAdminsPaginated, getOperatorsPaginated, patchUpdateUser } from "@src/controllers";
import { checkExistenceEmail, checkExistenceRoleId, checkExistenceUsername, checkRole, validateFieldsMiddleware, validateJWTMiddleware } from "@src/middlewares";
import { Router } from "express";
import { check } from "express-validator";


const router = Router();

router.post("/admin", [
    validateJWTMiddleware,
    checkRole([ROLES.SUPERADMIN]),
    check("name", "Nombre es obligatorio").not().isEmpty(),
    check("surname", "Apellido es obligatorio").not().isEmpty(),
    check("username", "El nombre de usuario es obligatorio").not().isEmpty(),
    check("email", "Correo electrónico es obligatorio").isEmail(),
    check("password", "Contraseña debe de ser mayor a 8 caracteres").isLength({
        min: 8,
    }),
    check("roleId", "El rol de usuario es obligatorio").not().isEmpty(),
    validateFieldsMiddleware,
    check("email").custom(checkExistenceEmail),
    validateFieldsMiddleware,
    check("username").custom(checkExistenceUsername),
    validateFieldsMiddleware,
    check("roleId").custom(checkExistenceRoleId),
    validateFieldsMiddleware
],
    createAdmin
);

router.get("/admin", [
    validateJWTMiddleware,
    checkRole([ROLES.SUPERADMIN]),],
    getOperatorsPaginated
)

router.post("/operator", [
    validateJWTMiddleware,
    checkRole([ROLES.SUPERADMIN, ROLES.ADMIN]),
    check("name", "Nombre es obligatorio").not().isEmpty(),
    check("surname", "Apellido es obligatorio").not().isEmpty(),
    check("username", "El nombre de usuario es obligatorio").not().isEmpty(),
    check("email", "Correo electrónico es obligatorio").isEmail(),
    check("password", "Contraseña debe de ser mayor a 8 caracteres").isLength({
        min: 8,
    }),
    check("roleId", "El rol de usuario es obligatorio").not().isEmpty(),
    validateFieldsMiddleware,
    check("email").custom(checkExistenceEmail),
    check("username").custom(checkExistenceUsername),
    check("roleId").custom(checkExistenceRoleId),
    validateFieldsMiddleware
],
    createOperator
);

router.get("/admin", [
    validateJWTMiddleware,
    checkRole([ROLES.SUPERADMIN, ROLES.ADMIN])],
    getAdminsPaginated
);

router.patch("/:id", [
    validateJWTMiddleware,
    checkRole([ROLES.SUPERADMIN, ROLES.ADMIN, ROLES.OPERATOR]),
    check("name", "Nombre es obligatorio").not().isEmpty(),
    check("surname", "Apellido es obligatorio").not().isEmpty(),
    check("username", "El nombre de usuario es obligatorio").not().isEmpty(),
    check("email", "Correo electrónico es obligatorio").isEmail(),
    check("password", "Contraseña debe de ser mayor a 8 caracteres").isLength({
        min: 8,
    }),
    check("roleId", "El rol de usuario es obligatorio").not().isEmpty(),
    validateFieldsMiddleware,
    check("email").custom(checkExistenceEmail),
    check("username").custom(checkExistenceUsername),
    check("roleId").custom(checkExistenceRoleId),
    validateFieldsMiddleware
],
    patchUpdateUser
);

export default router;