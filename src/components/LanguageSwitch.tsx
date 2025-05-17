import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all hover:scale-110"
      aria-label="Switch Language"
    >
      <Languages className="w-6 h-6" />
    </button>
  );
};