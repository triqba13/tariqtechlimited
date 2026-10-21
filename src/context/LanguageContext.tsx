'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('tariqtech_lang') as Language;
    if (['en', 'sw', 'fr', 'es', 'it'].includes(saved)) {
      setLanguageState(saved);
      if (typeof window !== 'undefined' && saved !== 'en') {
        document.cookie = `googtrans=/en/${saved}; path=/;`;
        document.cookie = `googtrans=/en/${saved}; domain=${window.location.hostname}; path=/;`;
        document.cookie = `googtrans=/en/${saved}; domain=.${window.location.hostname}; path=/;`;
      }
    }
    setMounted(true);
  }, []);

  const triggerGoogleTranslate = (lang: Language) => {
    if (typeof window === 'undefined') return;

    if (lang === 'en') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${window.location.hostname}; path=/;`;
      document.cookie = 'googtrans=/en/en; path=/;';
    } else {
      document.cookie = `googtrans=/en/${lang}; path=/;`;
      document.cookie = `googtrans=/en/${lang}; domain=${window.location.hostname}; path=/;`;
      document.cookie = `googtrans=/en/${lang}; domain=.${window.location.hostname}; path=/;`;
    }

    const selectEl = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (selectEl) {
      if (lang === 'en') {
        const hasEn = Array.from(selectEl.options).some((o) => o.value === 'en');
        selectEl.value = hasEn ? 'en' : '';
        selectEl.dispatchEvent(new Event('change'));
        // If restoring to English, also reload cleanly if needed
        setTimeout(() => {
          window.location.reload();
        }, 150);
      } else {
        selectEl.value = lang;
        selectEl.dispatchEvent(new Event('change'));
      }
    } else {
      // If combo not ready yet, reload so the cookie takes effect on load
      setTimeout(() => {
        window.location.reload();
      }, 150);
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('tariqtech_lang', lang);
      triggerGoogleTranslate(lang);
    }
  };

  const t = (key: string): string => {
    const dict = translations[language];
    return dict?.[key] ?? translations['en']?.[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
