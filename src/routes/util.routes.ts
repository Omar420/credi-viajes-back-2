import { getBookingConstants, getCountries, getGenders, getStates } from "@src/controllers/util.controller";
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

router.get("/states/:countryId", [
    validateApiKeyMiddleware,
],
    getStates
);

router.get("/booking-constants", [
    validateApiKeyMiddleware,
],
    getBookingConstants
);


export default router;