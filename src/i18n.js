// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';  // English Translations
import translationAR from './locales/ar.json';  // Arabic Translations

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
};

// Retrieve the selected language from localStorage, default to 'en' if not set
const storedLanguage = localStorage.getItem('selectedLanguage') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: storedLanguage,            // Set initial language from localStorage
    fallbackLng: 'en',              // Fallback language
    interpolation: {
      escapeValue: false,           // React already protects from XSS
    },
    // Optional: React-specific settings
    react: {
      useSuspense: false,           // Disable suspense if not using it
    },
  });

export default i18n;
