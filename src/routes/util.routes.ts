import { getCountries, getGenders } from "@src/controllers/util.controller";
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


export default router;