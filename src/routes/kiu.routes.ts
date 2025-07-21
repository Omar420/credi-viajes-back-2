import { Router } from 'express';
import { getAvailabilityFlights, getSmartSearch } from '@src/controllers/kiu.controller';

const router = Router();

router.post('/availability-flights', getAvailabilityFlights);
router.post('/smart-search', getSmartSearch);

export default router;
