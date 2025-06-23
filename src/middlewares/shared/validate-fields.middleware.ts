import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

/**
 * Middleware function to validate request fields using express-validator.
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The Express next middleware function.
 *
 * @returns {void} If validation passes, calls the next middleware function.
 * If validation fails, returns a 400 status code with the validation errors.
 *
 * @throws Will throw an error if express-validator is not properly set up.
 */
export async function validateFieldsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
}
