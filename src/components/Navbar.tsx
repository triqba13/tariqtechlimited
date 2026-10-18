'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: t('nav_home') },
    { href: '#services', label: t('nav_services') },
    { href: '#who-we-serve', label: t('nav_serve') },
    { href: '#work', label: t('nav_work') },
    { href: '#pricing', label: t('nav_pricing') },
    { href: '#about', label: t('nav_about') },
    { href: '#contact', label: t('nav_contact') },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 md:px-8 max-w-7xl mx-auto w-full transition-all">
      <nav 
        className="bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full px-5 py-2.5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105">
            <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
              <path d="M10 24L24 10C24 10 29 15 34 20L20 34L10 24Z" fill="#F59E0B" />
              <path d="M24 10L38 24L24 38L18 32L28 22L20 14L24 10Z" fill="#0EA5E9" />
              <circle cx="24" cy="24" r="3.2" fill="#FFFFFF" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 text-xl tracking-tight leading-none">
              TariqTech
            </span>
            <span className="text-[10px] font-bold text-slate-500 tracking-[0.16em] uppercase">
              LIMITED
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-sky-500 hover:bg-sky-50 px-3.5 py-1.5 rounded-full transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions & Language Switcher */}
        <div className="flex items-center gap-3">
          {/* Bilingual Switcher */}
          <div className="inline-flex items-center bg-[#F6FDF4] border border-slate-200 rounded-full p-0.5">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`text-xs font-bold px-2.5 py-1 rounded-full transition-all ${
                language === 'en'
                  ? 'bg-white text-sky-500 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('sw')}
              className={`text-xs font-bold px-2.5 py-1 rounded-full transition-all ${
                language === 'sw'
                  ? 'bg-white text-sky-500 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              SW
            </button>
          </div>

          <Link
            href="#book"
            className="hidden sm:inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
          >
            <span>{t('nav_book_btn')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-slate-700 hover:text-sky-500 transition-colors"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 w-72 h-full bg-white p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-lg">TariqTech</span>
                  <span className="text-[9px] font-bold text-slate-400 tracking-wider">LIMITED</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-1 text-slate-500 hover:text-slate-800"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <ul className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-semibold text-slate-700 hover:text-sky-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link
                href="#book"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl shadow-md text-sm"
              >
                <span>{t('nav_book_btn')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
