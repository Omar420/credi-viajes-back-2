import { Router } from 'express';
import { getAvailabilityFlights, getSmartSearch } from '@src/controllers/kiu.controller';
import { validateJWTMiddleware } from '@src/middlewares/auth/validate-jwt.middleware';
// import { checkRolesMiddleware } from '@src/middlewares/auth/check-roles.middleware';
import { ROLES } from '@src/constants/config-global';
import { validateApiKeyMiddleware } from '@src/middlewares/auth/validate-api-key.middleware';

const router = Router();

router.post('/availability-flights', [
    validateApiKeyMiddleware,
    validateJWTMiddleware,
    // checkRolesMiddleware([ROLES.SUPERADMIN, ROLES.ADMIN, ROLES.OPERATOR]),
], getAvailabilityFlights);

router.post('/smart-search', [
    validateApiKeyMiddleware,
    validateJWTMiddleware,
    // checkRolesMiddleware([ROLES.SUPERADMIN, ROLES.ADMIN, ROLES.OPERATOR]),
], getSmartSearch);

export default router;
