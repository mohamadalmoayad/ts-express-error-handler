type TranslationKey = string;
type LanguageCode = string;

interface Translations {
  [key: TranslationKey]: {
    [lang: LanguageCode]: string;
  };
}

export class TranslationService {
  private translations: Translations = {};
  private fallbackLanguage: LanguageCode = "en";

  constructor(fallbackLanguage: LanguageCode = "en") {
    this.fallbackLanguage = fallbackLanguage;
  }

  addTranslation(key: TranslationKey, translations: { [lang: LanguageCode]: string }) {
    this.translations[key] = translations;
  }

  translate(key: TranslationKey, language: LanguageCode): string {
    if (this.translations[key] && this.translations[key][language]) {
      return this.translations[key][language];
    }
    if (this.translations[key] && this.translations[key][this.fallbackLanguage]) {
      return this.translations[key][this.fallbackLanguage];
    }
    return key; // Return the key itself if no translation is found
  }
}

export const translationService = new TranslationService();

// Add translations
translationService.addTranslation("errors.badRequest", {
  ar: "طلب غير صالح",
  en: "Bad Request",
  es: "Solicitud incorrecta",
  fr: "Mauvaise requ te",
});

translationService.addTranslation("errors.unauthorized", {
  ar: "غير مصرح",
  en: "Unauthorized",
  es: "No autorizado",
  fr: "Non autoris ",
});

translationService.addTranslation("errors.unauthenticated", {
  ar: "غير مصادق عليه",
  en: "Unauthenticated",
  es: "No autenticado",
  fr: "Non authentifi ",
});

translationService.addTranslation("errors.forbidden", {
  ar: "محظور",
  en: "Forbidden",
  es: "Prohibido",
  fr: "Interdit",
});

translationService.addTranslation("errors.notFound", {
  ar: "غير موجود",
  en: "Not Found",
  es: "No encontrado",
  fr: "Non trouv ",
});

translationService.addTranslation("errors.validationError", {
  ar: "خطأ في التحقق",
  en: "Validation Error",
  es: "Error de validaci n",
  fr: "Erreur de validation",
});

translationService.addTranslation("errors.internalServerError", {
  ar: "خطأ في الخادم الداخلي",
  en: "Internal Server Error",
  es: "Error interno del servidor",
  fr: "Erreur interne du serveur",
});
