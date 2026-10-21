'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/lib/translations';
import { ArrowUp, ChevronUp, ChevronDown } from 'lucide-react';

interface LangOption {
  code: Language;
  name: string;
  flag: string;
}

const languages: LangOption[] = [
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'sw', name: 'Swahili', flag: '🇹🇿' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];

export default function FloatingWidgets() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const currentLang = languages.find((l) => l.code === language) || languages[4];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ============================================================== */}
      {/* FLOATING LANGUAGE SWITCHER - FIXED BOTTOM LEFT                 */}
      {/* ============================================================== */}
      <div ref={dropdownRef} className="fixed bottom-6 left-6 z-50 select-none">
        <div className="relative">
          {/* Popover Menu (Upward) */}
          {isOpen && (
            <div
              className="absolute bottom-full mb-1.5 left-0 w-36 bg-white dark:bg-[#0F1721] border border-[#1a3a35]/15 dark:border-white/15 rounded-md shadow-xl py-1.5 flex flex-col z-50 animate-in fade-in slide-in-from-bottom-2 duration-150"
              role="listbox"
            >
              {languages
                .filter((l) => l.code !== language)
                .map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLanguage(l.code);
                      setIsOpen(false);
                    }}
                    className="w-full px-3 py-1.5 flex items-center gap-2.5 text-xs text-[#1a3a35] dark:text-white hover:bg-[#dfeff2]/80 dark:hover:bg-white/10 transition-colors text-left font-medium"
                    role="option"
                    aria-selected={l.code === language}
                  >
                    <span className="text-sm leading-none">{l.flag}</span>
                    <span>{l.name}</span>
                  </button>
                ))}
            </div>
          )}

          {/* Trigger Button - Matches reference screenshot exactly */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center gap-2 px-2.5 py-1.5 bg-white dark:bg-[#0F1721] hover:bg-[#f6fbfa] dark:hover:bg-[#151f2e] text-[#1a3a35] dark:text-white border border-[#1a3a35]/15 dark:border-white/15 rounded-md shadow-md hover:shadow-lg transition-all focus:outline-none"
            aria-label="Select language"
            aria-expanded={isOpen}
          >
            <span className="text-base leading-none">{currentLang.flag}</span>
            <span className="text-xs font-bold uppercase tracking-wide">
              {currentLang.code}
            </span>
            {isOpen ? (
              <ChevronUp className="w-3.5 h-3.5 text-[#42645f] dark:text-slate-300" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-[#42645f] dark:text-slate-300" />
            )}
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* FLOATING SCROLL-TO-TOP BUTTON - FIXED BOTTOM RIGHT            */}
      {/* ============================================================== */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#142d29] dark:bg-[#289b83] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all border border-[#1a3a35]/20 dark:border-white/10 focus:outline-none"
          title="Scroll to top"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </>
  );
}
