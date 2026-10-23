'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Zap, 
  ChevronDown, 
  Info, 
  Mail 
} from 'lucide-react';

export default function Navbar() {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  const [scrolled, setScrolled] = useState(false);
  const [moreOpenTop, setMoreOpenTop] = useState(false);
  const [moreOpenPill, setMoreOpenPill] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const moreTopRef = useRef<HTMLLIElement>(null);
  const morePillRef = useRef<HTMLLIElement>(null);

  // Monitor scroll with threshold (throttled with requestAnimationFrame)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close "More" dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreTopRef.current && !moreTopRef.current.contains(e.target as Node)) {
        setMoreOpenTop(false);
      }
      if (morePillRef.current && !morePillRef.current.contains(e.target as Node)) {
        setMoreOpenPill(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Top navbar links (before scroll): includes Projects & Blog with unique IDs
  const topLinks = [
    { id: 'top-nav-services', href: '/#services', label: t('nav_services') },
    { id: 'top-nav-projects', href: '/projects', label: t('nav_projects') },
    { id: 'top-nav-clients', href: '/#who-we-serve', label: t('nav_clients') },
    { id: 'top-nav-work', href: '/projects', label: t('nav_work') },
    { id: 'top-nav-blog', href: '/blog', label: t('nav_blog') },
  ];

  // Scrolled floating pill navbar links: Projects is removed, includes Blog
  const scrolledPillLinks = [
    { id: 'pill-nav-services', href: '/#services', label: t('nav_services') },
    { id: 'pill-nav-clients', href: '/#who-we-serve', label: t('nav_clients') },
    { id: 'pill-nav-work', href: '/#work', label: t('nav_work') },
    { id: 'pill-nav-blog', href: '/blog', label: t('nav_blog') },
  ];

  const moreLinks = [
    { href: '/about', label: t('nav_more_about'), desc: 'Our mission & story', icon: Info },
    { href: '/contact', label: t('nav_more_contact'), desc: 'Reach out directly', icon: Mail },
  ];

  // Dynamic color tokens strictly controlled by React theme state
  const textColor = isDark ? '#FFFFFF' : '#1a3a35';
  const textMuted = isDark ? '#94a3b8' : '#42645f';
  const topNavBg = isDark ? 'rgba(10, 13, 20, 0.92)' : 'rgba(255, 255, 255, 0.78)';
  const topNavBorder = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(26, 58, 53, 0.12)';
  const pillNavBg = isDark ? 'rgba(10, 13, 20, 0.95)' : 'rgba(223, 239, 242, 0.88)';
  const pillBorder = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(26, 58, 53, 0.15)';
  const dropdownBg = isDark ? '#0F1721' : '#ffffff';

  return (
    <>
      {/* ============================================================== */}
      {/* 1. TOP STATIC NAVBAR (AT HOME PAGE TOP - WITH SOFT PILL CONTAINER) */}
      {/* ============================================================== */}
      <header className="w-full z-30 transition-all">
        <nav
          className="w-full px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between transition-all"
          style={{
            backgroundColor: 'transparent',
            borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(26, 58, 53, 0.08)'
          }}
          aria-label="Main Navigation Top"
        >
          {/* BRAND LOGO */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-105">
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M10 24L24 10C24 10 29 15 34 20L20 34L10 24Z" fill="#e8b54b" />
                <path d="M24 10L38 24L24 38L18 32L28 22L20 14L24 10Z" fill="#2a8a85" />
                <circle cx="24" cy="24" r="3.2" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span 
                className="font-extrabold text-lg md:text-xl tracking-tight leading-none"
                style={{ color: textColor }}
              >
                TariqTech
              </span>
              <span 
                className="text-[9px] font-bold tracking-[0.16em] uppercase mt-0.5"
                style={{ color: textMuted }}
              >
                LIMITED
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <ul className="hidden xl:flex items-center gap-2 list-none m-0 p-0">
            {topLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-sm font-bold px-3.5 py-2 rounded-full transition-colors hover:text-[#2a8a85]"
                  style={{ color: textColor }}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* "MORE ▾" DROPDOWN */}
            <li className="relative" ref={moreTopRef}>
              <button
                type="button"
                onClick={() => setMoreOpenTop((prev) => !prev)}
                className="text-sm font-bold px-3.5 py-2 rounded-full transition-colors flex items-center gap-1 hover:text-[#2a8a85] focus:outline-none"
                style={{ color: moreOpenTop ? '#2a8a85' : textColor }}
                aria-expanded={moreOpenTop}
                aria-haspopup="true"
              >
                <span>{t('nav_more')}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreOpenTop ? 'rotate-180' : ''
                  }`}
                  style={{ color: textColor }}
                />
              </button>

              {/* DROPDOWN POPUP */}
              {moreOpenTop && (
                <div
                  className="absolute top-full mt-2.5 left-0 w-60 backdrop-blur-xl border rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  style={{ backgroundColor: dropdownBg, borderColor: pillBorder }}
                  role="menu"
                >
                  {moreLinks.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMoreOpenTop(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl text-left hover:bg-[#dfeff2]/80 group transition-all"
                        role="menuitem"
                      >
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                          style={{ backgroundColor: isDark ? '#1f3f39' : '#dfeff2', color: isDark ? '#5fd4ce' : '#1a3a35' }}
                        >
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span 
                            className="text-xs font-bold group-hover:text-[#2a8a85] transition-colors"
                            style={{ color: textColor }}
                          >
                            {item.label}
                          </span>
                          <span 
                            className="text-[11px]"
                            style={{ color: textMuted }}
                          >
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </li>
          </ul>

          {/* RIGHT ACTIONS: THEME TOGGLE + BOOK A CALL + MOBILE BURGER */}
          <div className="flex items-center gap-2.5 md:gap-3">
            {/* THEME TOGGLE BUTTON */}
            <button
              type="button"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none"
              style={{
                backgroundColor: isDark ? '#0F1721' : 'rgba(26, 58, 53, 0.08)',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
                color: textColor
              }}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle color theme"
            >
              {isDark ? (
                <Moon className="w-4 h-4 text-white" />
              ) : (
                <Sun className="w-4 h-4 text-[#1a3a35]" />
              )}
            </button>

            {/* "BOOK A CALL" CTA - Hidden on tablet & mobile, visible on desktop (xl) */}
            <Link
              href="/contact"
              className="hidden xl:inline-flex items-center gap-1.5 font-bold text-sm px-4 md:px-5 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all"
              style={{
                backgroundColor: isDark ? '#289b83' : '#1a3a35',
                color: '#ffffff',
                border: isDark ? '1px solid rgba(40, 155, 131, 0.45)' : 'none'
              }}
            >
              <Zap className="w-3.5 h-3.5 fill-current text-white" />
              <span>{t('nav_book_call')}</span>
            </Link>

            {/* MOBILE / TABLET HAMBURGER BUTTON */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="xl:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors focus:outline-none"
              style={{ color: textColor }}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* ============================================================== */}
      {/* 2. FLOATING SCROLLED PILL NAVBAR (DROPS FROM TOP DOWN SMOOTHLY) */}
      {/* ============================================================== */}
      <div
        className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw] transition-all duration-300 ease-out ${
          scrolled
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-28 opacity-0 pointer-events-none'
        }`}
      >
        <nav
          className="backdrop-blur-xl border shadow-xl rounded-full px-4 py-2 flex items-center justify-between gap-4 md:gap-7"
          style={{
            backgroundColor: pillNavBg,
            borderColor: pillBorder,
            boxShadow: isDark ? '0 10px 25px -5px rgba(0, 0, 0, 0.4)' : '0 10px 25px -5px rgba(26, 58, 53, 0.1)'
          }}
          aria-label="Floating Main Navigation"
        >
          {/* BRAND LOGO */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-105">
              <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
                <path d="M10 24L24 10C24 10 29 15 34 20L20 34L10 24Z" fill="#e8b54b" />
                <path d="M24 10L38 24L24 38L18 32L28 22L20 14L24 10Z" fill="#2a8a85" />
                <circle cx="24" cy="24" r="3.2" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span 
                className="font-extrabold text-sm md:text-base tracking-tight leading-none"
                style={{ color: textColor }}
              >
                TariqTech
              </span>
              <span 
                className="text-[8px] font-bold tracking-[0.16em] uppercase"
                style={{ color: textMuted }}
              >
                LIMITED
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <ul className="hidden xl:flex items-center gap-1 list-none m-0 p-0">
            {scrolledPillLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-xs md:text-sm font-bold px-3 py-1.5 rounded-full transition-colors hover:text-[#2a8a85]"
                  style={{ color: textColor }}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* "MORE ▾" DROPDOWN */}
            <li className="relative" ref={morePillRef}>
              <button
                type="button"
                onClick={() => setMoreOpenPill((prev) => !prev)}
                className="text-xs md:text-sm font-bold px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 hover:text-[#2a8a85] focus:outline-none"
                style={{ color: moreOpenPill ? '#2a8a85' : textColor }}
                aria-expanded={moreOpenPill}
                aria-haspopup="true"
              >
                <span>{t('nav_more')}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreOpenPill ? 'rotate-180' : ''
                  }`}
                  style={{ color: textColor }}
                />
              </button>

              {/* DROPDOWN POPUP */}
              {moreOpenPill && (
                <div
                  className="absolute top-full mt-2.5 left-0 w-60 backdrop-blur-xl border rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  style={{ backgroundColor: dropdownBg, borderColor: pillBorder }}
                  role="menu"
                >
                  {moreLinks.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMoreOpenPill(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl text-left hover:bg-[#dfeff2]/80 group transition-all"
                        role="menuitem"
                      >
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                          style={{ backgroundColor: isDark ? '#1f3f39' : '#dfeff2', color: isDark ? '#5fd4ce' : '#1a3a35' }}
                        >
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span 
                            className="text-xs font-bold group-hover:text-[#2a8a85] transition-colors"
                            style={{ color: textColor }}
                          >
                            {item.label}
                          </span>
                          <span 
                            className="text-[11px]"
                            style={{ color: textMuted }}
                          >
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </li>
          </ul>

          {/* RIGHT ACTIONS: THEME TOGGLE + BOOK A CALL + MOBILE BURGER */}
          <div className="flex items-center gap-2 md:gap-2.5">
            {/* THEME TOGGLE */}
            <button
              type="button"
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full border flex items-center justify-center transition-all focus:outline-none"
              style={{
                backgroundColor: isDark ? '#0F1721' : 'rgba(255, 255, 255, 0.8)',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : pillBorder,
                color: textColor
              }}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle color theme"
            >
              {isDark ? (
                <Moon className="w-4 h-4 text-white" />
              ) : (
                <Sun className="w-4 h-4 text-[#1a3a35]" />
              )}
            </button>

            {/* "BOOK A CALL" PILL - Hidden on tablet & mobile, visible on desktop (xl) */}
            <Link
              href="/contact"
              className="hidden xl:inline-flex items-center gap-1.5 font-bold text-xs md:text-sm px-3.5 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all"
              style={{
                backgroundColor: isDark ? '#289b83' : '#1a3a35',
                color: '#ffffff',
                border: isDark ? '1px solid rgba(40, 155, 131, 0.45)' : 'none'
              }}
            >
              <Zap className="w-3.5 h-3.5 fill-current text-white" />
              <span>{t('nav_book_call')}</span>
            </Link>

            {/* MOBILE / TABLET HAMBURGER BUTTON */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="xl:hidden w-8 h-8 rounded-full flex items-center justify-center transition-colors focus:outline-none"
              style={{ color: textColor }}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* ============================================================== */}
      {/* 3. MOBILE FULL-SCREEN NAVIGATION SHEET                         */}
      {/* ============================================================== */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#1a3a35]/60 backdrop-blur-sm xl:hidden animate-in fade-in duration-200"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="fixed top-3 left-3 right-3 sm:top-6 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto sm:w-full sm:max-w-md border rounded-3xl shadow-2xl p-6 flex flex-col gap-5 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
            style={{ backgroundColor: isDark ? '#142a26' : '#dfeff2', borderColor: pillBorder }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#1a3a35]/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
                    <path d="M10 24L24 10C24 10 29 15 34 20L20 34L10 24Z" fill="#e8b54b" />
                    <path d="M24 10L38 24L24 38L18 32L28 22L20 14L24 10Z" fill="#2a8a85" />
                    <circle cx="24" cy="24" r="3.2" fill="#FFFFFF" />
                  </svg>
                </div>
                <span 
                  className="font-extrabold text-base"
                  style={{ color: textColor }}
                >
                  TariqTech
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-full bg-white/70 flex items-center justify-center"
                style={{ color: textColor }}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-1">
              {topLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-white/60 transition-colors"
                  style={{ color: textColor }}
                >
                  {link.label}
                </Link>
              ))}

              <div 
                className="pt-2 pb-1 px-4 text-xs font-bold uppercase tracking-wider"
                style={{ color: textMuted }}
              >
                {t('nav_more')}
              </div>

              {moreLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/60 transition-colors flex items-center justify-between"
                  style={{ color: textColor }}
                >
                  <span>{item.label}</span>
                  <span className="text-xs" style={{ color: textMuted }}>{item.desc}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Actions: Theme toggle & Book a Call */}
            <div className="pt-4 border-t border-[#1a3a35]/10 flex flex-col gap-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-bold" style={{ color: textMuted }}>
                  {isDark ? 'Dark Theme' : 'Light Theme'}
                </span>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 text-xs font-bold"
                  style={{ color: textColor }}
                >
                  {isDark ? <Sun className="w-3.5 h-3.5 text-[#e8b54b]" /> : <Moon className="w-3.5 h-3.5 text-[#1a3a35]" />}
                  <span>Toggle</span>
                </button>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 font-bold py-3 rounded-full text-center shadow-md"
                style={{
                  backgroundColor: isDark ? '#5fd4ce' : '#1a3a35',
                  color: isDark ? '#0d1e1c' : '#ffffff'
                }}
              >
                <Zap className="w-4 h-4 fill-current" style={{ color: isDark ? '#0d1e1c' : '#e8b54b' }} />
                <span>{t('nav_book_call')}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
