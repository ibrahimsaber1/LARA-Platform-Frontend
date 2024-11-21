// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import translationEN from './locales/en.json';
import translationES from './locales/ar.json'; 

const resources = {
  en: {
    translation: translationEN,
  },
  es: { translation: translationES,

  },
  // Add more languages here
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
