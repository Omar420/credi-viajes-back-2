import { NextFunction, Request, Response } from "express";

import { CONFIG } from "@src/constants/config-global";

// ----------------------------------------------------------------

export async function validateApiKeyMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const apiKey = req.header("x-api-key");

  if (!apiKey) {
    return res.status(401).json({ error: "Falta la clave API" });
  }

  if (apiKey !== CONFIG.API_KEY) {
    return res.status(401).json({ error: "Clave API inválida" });
  }

  next();
}
