import { getBookingConstants, getCountries, getGenders } from "@src/controllers/util.controller";
import { validateApiKeyMiddleware } from "@src/middlewares";
import { Router } from "express";


const router = Router();

router.get("/genders", [
    validateApiKeyMiddleware,
],
    getGenders
);

router.get("/countries", [
    validateApiKeyMiddleware,
],
    getCountries
);

router.get("/booking-constants", [
    validateApiKeyMiddleware,
],
    getBookingConstants
);


export default router;