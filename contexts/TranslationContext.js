// "use client";
import React, { createContext, useState, useContext } from 'react';
import en from '../locales/en/common.json'; // Sesuaikan path sesuai kebutuhan
import id from '../locales/id/common.json'; // Sesuaikan path sesuai kebutuhan

const translations = { en, id };

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  const t = (key, namespace = 'common') => translations[locale][key] || key;

  return (
    <TranslationContext.Provider value={{ t, setLocale }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
