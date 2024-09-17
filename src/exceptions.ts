import { Exception } from "./Exception";
import { ValidationError } from "express-validator";
import { translationService } from "./translationService";

export class BadRequestException extends Exception {
  constructor(message: string = "Bad Request") {
    super("BadRequestException", 400, message || "errors.badRequest");
    this.name = "BadRequestException";
  }
}

export class UnauthorizedException extends Exception {
  constructor(message: string = "Unauthorized") {
    super("UnauthorizedException", 401, message || "errors.unauthorized");
    this.name = "UnauthorizedException";
  }
}

export class UnauthenticatedException extends Exception {
  constructor(message: string = "Unauthenticated") {
    super("UnauthenticatedException", 401, message || "errors.unauthenticated");
    this.name = "UauthenticatedException";
  }
}

export class ForbiddenException extends Exception {
  constructor(message: string = "Forbidden") {
    super("ForbiddenException", 403, message || "errors.forbidden");
    this.name = "ForbiddenException";
  }
}

export class NotFoundException extends Exception {
  constructor(message: string = "Not Found") {
    super("NotFoundException", 404, message || "errors.notFound");
    this.name = "NotFoundException";
  }
}

export class ValidationException extends Exception {
  errors: ValidationError[];

  constructor(message: string = "Validation Error", errors: ValidationError[] = []) {
    super("ValidationException", 422, message || "errors.validationError");
    this.name = 'ValidationException';
    this.errors = errors;
  }
}
