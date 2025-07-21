import { Router } from 'express';
import { createPayment } from '@src/controllers/payment.controller';
import { validateJWTMiddleware } from '@src/middlewares';

const router = Router();

router.use(validateJWTMiddleware);

router.post('/', createPayment);

export default router;
