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

    const hostname = window.location.hostname;
    const isLocal = hostname === 'localhost' || hostname.includes('127.0.0.1');

    // 1. Set Google Translate cookies
    if (lang === 'en') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=/en/en; path=/;';
      if (!isLocal) {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${hostname}; path=/;`;
        document.cookie = `googtrans=/en/en; domain=.${hostname}; path=/;`;
      }
    } else {
      document.cookie = `googtrans=/en/${lang}; path=/;`;
      if (!isLocal) {
        document.cookie = `googtrans=/en/${lang}; domain=.${hostname}; path=/;`;
      }
    }

    // 2. Dispatch change to Google Translate combo box
    const applyTranslation = (selectEl: HTMLSelectElement) => {
      try {
        if (lang === 'en') {
          const hasEn = Array.from(selectEl.options).some((o) => o.value === 'en');
          selectEl.value = hasEn ? 'en' : '';
          selectEl.dispatchEvent(new Event('change', { bubbles: true }));
          // For returning cleanly to original English, a clean 100ms refresh ensures no leftover tags
          setTimeout(() => {
            window.location.reload();
          }, 100);
        } else {
          selectEl.value = lang;
          selectEl.dispatchEvent(new Event('change', { bubbles: true }));
        }
      } catch (err) {
        console.error('Translation dispatch error:', err);
      }
    };

    const selectEl = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (selectEl) {
      applyTranslation(selectEl);
    } else {
      // If combo not ready yet, poll silently every 80ms
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        const el = document.querySelector<HTMLSelectElement>('.goog-te-combo');
        if (el) {
          clearInterval(interval);
          applyTranslation(el);
        } else if (attempts >= 15) {
          clearInterval(interval);
          // If combo still not present after 1.2s, reload so cookie takes effect
          window.location.reload();
        }
      }, 80);
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('tariqtech_lang', lang);
      if (lang !== 'en') {
        window.dispatchEvent(new CustomEvent('tariqtech_need_translate'));
      }
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
