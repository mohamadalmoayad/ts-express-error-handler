<p align="center"><a href="https://www.modesignsstudio.com" target="_blank"><img src="https://www.modesignsstudio.com/_next/image?url=%2Fimages%2Flogo%2Fmo-designs-logo.gif&w=256&q=75" width="250" alt="Mo Designs Studio Logo"></a></p>

# ts-express-error-handler

A comprehensive error handling package for Express applications written in TypeScript. This package provides a set of custom exceptions, a translation service for internationalization, and a centralized error handling middleware.

## Features

- Custom exception classes for common HTTP error scenarios
- Built-in translation service for easy internationalization
- Centralized error handling middleware
- TypeScript support

## Installation

```bash
npm install ts-express-error-handler
```

## Usage

### Basic Setup

```typescript
import express from "express";
import { errorHandler, NotFoundException } from "ts-express-error-handler";

const app = express();

app.get("/test", (req, res, next) => {
  next(new NotFoundException());
});

app.use(errorHandler);

app.listen(3000, () => console.log("Server running on port 3000"));
```

### Custom Exceptions

The package includes the following custom exceptions:

- `BadRequestException` (400)
- `UnauthorizedException` (401)
- `UnauthenticatedException` (401)
- `ForbiddenException` (403)
- `NotFoundException` (404)
- `ValidationException` (422)

You can throw these exceptions in your route handlers or middleware:

```typescript
import { BadRequestException } from "ts-express-error-handler";

app.get("/example", (req, res, next) => {
  if (!req.query.id) {
    throw new BadRequestException("ID is required");
  }
  // ... rest of your code
});
```

### Translation Service

The package includes a built-in translation service for internationalization:

```typescript
import { translationService } from "ts-express-error-handler";

// Add custom translations
translationService.addTranslation("custom.error", {
  ar: "خطأ مخصص",
  en: "Custom Error",
  es: "Error personalizado",
  fr: "Erreur personnalis e",
});

// Use in your code
const errorMessage = translationService.translate("custom.error", "es");
console.log(errorMessage); // Outputs: "Error personalizado"
```

### Error Handler Middleware

The `errorHandler` middleware will catch any thrown exceptions, translate the error messages based on the `Accept-Language` header, and send an appropriate JSON response:

```typescript
app.use(errorHandler);
```

## API Reference

### Exceptions

- `BadRequestException(message?: string)`
- `UnauthorizedException(message?: string)`
- `ForbiddenException(message?: string)`
- `NotFoundException(message?: string)`
- `ValidationException(message?: string, errors?: ValidationError[])`

### Translation Service

- `translationService.addTranslation(key: string, translations: { [lang: string]: string })`
- `translationService.translate(key: string, language: string): string`

### Error Handler

- `errorHandler(err: Error, req: Request, res: Response, next: NextFunction)`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Feedback and Contributions

If you have any feedback or suggestions, feel free to open an issue or submit a pull request. Contributions are more than welcome!

## Developed with ❤️ by Mohamad Almoayad.