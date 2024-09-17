import { Request, Response, NextFunction } from "express";
import { Exception } from "./Exception";
import { ValidationException } from "./exceptions";
import { translationService } from "./translationService";

interface ErrorResponse {
  message: string;
  name: string;
  statusCode: number;
  errors?: any;
}

export const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  const language = req.acceptsLanguages(["ar", "en", "es", "fr"]) || "en";

  if (err instanceof Exception) {
    const response: ErrorResponse = {
      message: translationService.translate(err.message, language),
      name: err.name,
      statusCode: err.statusCode,
    };

    if (err instanceof ValidationException) {
      response.errors = err.errors;
    }

    return res.status(err.statusCode).json(response);
  }

  const response: ErrorResponse = {
    message:translationService.translate('errors.internalServerError', language),
    name: "InternalServerError",
    statusCode: 500,
  };

  if (process.env.NODE_ENV === "development") {
    response.errors = err.stack;
  }

  return res.status(500).json(response);
};
