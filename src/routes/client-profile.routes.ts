import { Router } from "express";
import {
  getClientProfileByEmailHandler,
  updateClientProfileByEmailHandler,
} from "@src/controllers/client-profile.controller";
import { validateJWTMiddleware } from "@src/middlewares";

const router = Router();

router.get("/:email", [validateJWTMiddleware], getClientProfileByEmailHandler);

router.patch("/:email", [validateJWTMiddleware], updateClientProfileByEmailHandler);

export default router;
