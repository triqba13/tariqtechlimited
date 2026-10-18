'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5">
            <Link href="#home" className="inline-flex items-center gap-3 mb-4">
              <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
                <path d="M10 24L24 10C24 10 29 15 34 20L20 34L10 24Z" fill="#F59E0B" />
                <path d="M24 10L38 24L24 38L18 32L28 22L20 14L24 10Z" fill="#0EA5E9" />
                <circle cx="24" cy="24" r="3" fill="#FFFFFF" />
              </svg>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-xl tracking-tight leading-none">
                  TariqTech
                </span>
                <span className="text-[9px] font-bold text-slate-400 tracking-[0.16em] uppercase">
                  LIMITED
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-4">
              {t('footer_desc')}
            </p>

            <div className="text-xs text-slate-500">
              Domain: <span className="text-slate-300 font-semibold">tariqtechlimited.com</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t('footer_quick_links')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="#home" className="hover:text-sky-400 transition-colors">{t('nav_home')}</Link></li>
              <li><Link href="#services" className="hover:text-sky-400 transition-colors">{t('nav_services')}</Link></li>
              <li><Link href="#who-we-serve" className="hover:text-sky-400 transition-colors">{t('nav_serve')}</Link></li>
              <li><Link href="#work" className="hover:text-sky-400 transition-colors">{t('nav_work')}</Link></li>
              <li><Link href="#pricing" className="hover:text-sky-400 transition-colors">{t('nav_pricing')}</Link></li>
              <li><Link href="#book" className="hover:text-sky-400 transition-colors">{t('nav_book_btn')}</Link></li>
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t('footer_services')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="#services" className="hover:text-sky-400 transition-colors">Website Development</Link></li>
              <li><Link href="#services" className="hover:text-sky-400 transition-colors">Custom Software</Link></li>
              <li><Link href="#services" className="hover:text-sky-400 transition-colors">Mobile App Development</Link></li>
              <li><Link href="#services" className="hover:text-sky-400 transition-colors">AI & Automation</Link></li>
              <li><Link href="#services" className="hover:text-sky-400 transition-colors">SaaS Development</Link></li>
              <li><Link href="#services" className="hover:text-sky-400 transition-colors">API Integration</Link></li>
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t('footer_connect')}
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>contact@tariqtechlimited.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+255 700 000 000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>{t('footer_rights')}</div>
          <div className="flex items-center gap-6">
            <Link href="#about" className="hover:text-slate-400 transition-colors">
              {t('footer_privacy')}
            </Link>
            <Link href="#about" className="hover:text-slate-400 transition-colors">
              {t('footer_terms')}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
