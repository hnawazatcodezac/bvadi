import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './assets/languages/en/common.json';
import trTranslation from './assets/languages/tr/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    tr: {
      translation: trTranslation,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
