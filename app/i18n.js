// app/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from '../public/locales/en/common.json';
import common_id from '../public/locales/id/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: common_en },
      id: { common: common_id },
    },
    lng: 'id',
    debug: true,
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
