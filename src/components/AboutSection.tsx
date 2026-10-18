'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Shield, Sparkles, HeartHandshake, Zap, Award } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
              <Award className="w-3.5 h-3.5" />
              <span>{t('about_badge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              {t('about_title')}{' '}
              <span className="text-sky-500">{t('about_title_highlight')}</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              {t('about_p1')}
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              {t('about_p2')}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                    {t('about_feat1_title')}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {t('about_feat1_desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                    {t('about_feat2_title')}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {t('about_feat2_desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                    {t('about_feat3_title')}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {t('about_feat3_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Core Values Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#F6FDF4] border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Core Operational Values
                  </h3>
                  <p className="text-xs text-slate-500">
                    How we partner with clients across every milestone
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white border border-slate-200/80 rounded-2xl p-4">
                  <h5 className="text-sm font-bold text-slate-900 mb-1">
                    {t('val1_title')}
                  </h5>
                  <p className="text-xs text-slate-500">
                    {t('val1_desc')}
                  </p>
                </div>

                <div className="bg-white border border-slate-200/80 rounded-2xl p-4">
                  <h5 className="text-sm font-bold text-slate-900 mb-1">
                    {t('val2_title')}
                  </h5>
                  <p className="text-xs text-slate-500">
                    {t('val2_desc')}
                  </p>
                </div>

                <div className="bg-white border border-slate-200/80 rounded-2xl p-4">
                  <h5 className="text-sm font-bold text-slate-900 mb-1">
                    {t('val3_title')}
                  </h5>
                  <p className="text-xs text-slate-500">
                    {t('val3_desc')}
                  </p>
                </div>

                <div className="bg-white border border-slate-200/80 rounded-2xl p-4">
                  <h5 className="text-sm font-bold text-slate-900 mb-1">
                    {t('val4_title')}
                  </h5>
                  <p className="text-xs text-slate-500">
                    {t('val4_desc')}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-base font-bold text-slate-900">
                    TariqTech Limited
                  </div>
                  <div className="text-xs text-slate-500">
                    Dar es Salaam, Tanzania • Serving East Africa & Global
                  </div>
                </div>
                <Link
                  href="#contact"
                  className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold px-4 py-2 rounded-full shadow-sm"
                >
                  {t('nav_contact')}
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
