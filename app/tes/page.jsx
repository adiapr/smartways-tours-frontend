"use client"
import React from 'react';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function TesPage() {
  const { t } = useTranslation('common');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('hello')}</h1>

      <button onClick={() => changeLanguage('en')}>Switch to English</button>
      <button onClick={() => changeLanguage('id')}>Switch to Indonesian</button>
    </div>
  );
}
