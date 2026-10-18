'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Globe, 
  Code2, 
  Smartphone, 
  Bot, 
  Cloud, 
  Share2, 
  Database, 
  Palette, 
  ArrowRight 
} from 'lucide-react';

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'website',
      num: '01',
      titleKey: 'srv1_title',
      descKey: 'srv1_desc',
      exampleKey: 'srv1_example',
      icon: Globe,
      color: 'sky',
    },
    {
      id: 'custom_software',
      num: '02',
      titleKey: 'srv2_title',
      descKey: 'srv2_desc',
      exampleKey: 'srv2_example',
      icon: Code2,
      color: 'amber',
    },
    {
      id: 'mobile_app',
      num: '03',
      titleKey: 'srv3_title',
      descKey: 'srv3_desc',
      exampleKey: 'srv3_example',
      icon: Smartphone,
      color: 'emerald',
    },
    {
      id: 'ai_automation',
      num: '04',
      titleKey: 'srv4_title',
      descKey: 'srv4_desc',
      exampleKey: 'srv4_example',
      icon: Bot,
      color: 'amber',
    },
    {
      id: 'saas',
      num: '05',
      titleKey: 'srv5_title',
      descKey: 'srv5_desc',
      exampleKey: 'srv5_example',
      icon: Cloud,
      color: 'sky',
    },
    {
      id: 'api_integration',
      num: '06',
      titleKey: 'srv6_title',
      descKey: 'srv6_desc',
      exampleKey: 'srv6_example',
      icon: Share2,
      color: 'emerald',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t('services_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t('services_title')}{' '}
            <span className="text-sky-500">{t('services_title_highlight')}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t('services_subtitle')}
          </p>
        </div>

        {/* 6 Main Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="group relative bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        item.color === 'sky'
                          ? 'bg-sky-100 text-sky-600'
                          : item.color === 'amber'
                          ? 'bg-amber-100 text-amber-600'
                          : 'bg-emerald-100 text-emerald-600'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-sm font-extrabold text-slate-400 tracking-wider">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-500 transition-colors">
                    {t(item.titleKey)}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {t(item.descKey)}
                  </p>
                </div>

                <div>
                  <div className="bg-[#F6FDF4] border-l-4 border-sky-500 rounded-r-xl p-3.5 mb-6 text-xs text-slate-700 leading-relaxed">
                    {t(item.exampleKey)}
                  </div>

                  <Link
                    href={`#book?service=${item.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-sky-500 group-hover:text-sky-600 group-hover:gap-3 transition-all"
                  >
                    <span>{t('srv_quote_action')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Supporting Engineering Disciplines (07 & 08) */}
        <div className="mt-14 bg-gradient-to-r from-white to-slate-50 border border-dashed border-slate-300 rounded-3xl p-8 md:p-10 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900">
              {t('srv_supporting_title')}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Foundational capabilities embedded into every client solution we engineer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {t('srv7_title')}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t('srv7_desc')}
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {t('srv8_title')}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t('srv8_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
