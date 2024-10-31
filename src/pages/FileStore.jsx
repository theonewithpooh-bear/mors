import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import enTranslations from '../translations/en.json';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

const FileStore = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-5xl font-bold mb-8">{t('fileStore.title')}</h1>
          
          <div className="max-w-3xl w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Construction className="w-16 h-16 text-yellow-300/90" />
              <p className="text-xl text-center text-gray-300">
                {t('fileStore.underConstruction')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FileStore;