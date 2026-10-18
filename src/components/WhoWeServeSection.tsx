'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Rocket, 
  Store, 
  Building2, 
  Globe, 
  Clock, 
  MonitorX, 
  Unlink, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';

export default function WhoWeServeSection() {
  const { t } = useLanguage();

  const personas = [
    {
      icon: Rocket,
      titleKey: 'persona1_title',
      descKey: 'persona1_desc',
      color: 'sky',
    },
    {
      icon: Store,
      titleKey: 'persona2_title',
      descKey: 'persona2_desc',
      color: 'emerald',
    },
    {
      icon: Building2,
      titleKey: 'persona3_title',
      descKey: 'persona3_desc',
      color: 'amber',
    },
    {
      icon: Globe,
      titleKey: 'persona4_title',
      descKey: 'persona4_desc',
      color: 'purple',
    },
  ];

  const problems = [
    {
      icon: Clock,
      titleKey: 'prob1_title',
      descKey: 'prob1_desc',
    },
    {
      icon: MonitorX,
      titleKey: 'prob2_title',
      descKey: 'prob2_desc',
    },
    {
      icon: Unlink,
      titleKey: 'prob3_title',
      descKey: 'prob3_desc',
    },
    {
      icon: Sparkles,
      titleKey: 'prob4_title',
      descKey: 'prob4_desc',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-y border-slate-200/80" id="who-we-serve">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span>{t('serve_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t('serve_title')}{' '}
            <span className="text-sky-500">{t('serve_title_highlight')}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t('serve_subtitle')}
          </p>
        </div>

        {/* 4 Personas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {personas.map((persona, idx) => {
            const Icon = persona.icon;
            return (
              <div
                key={idx}
                className="bg-[#F6FDF4] border border-slate-200/80 rounded-3xl p-7 hover:bg-white hover:border-sky-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                    persona.color === 'sky'
                      ? 'bg-sky-100 text-sky-600'
                      : persona.color === 'emerald'
                      ? 'bg-emerald-100 text-emerald-600'
                      : persona.color === 'amber'
                      ? 'bg-amber-100 text-amber-600'
                      : 'bg-purple-100 text-purple-600'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t(persona.titleKey)}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t(persona.descKey)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Problems We Solve Glassmorphism Container */}
        <div className="relative rounded-3xl bg-slate-950 text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
              {t('problems_title')}
            </h3>
            <p className="text-sm sm:text-base text-slate-400">
              {t('problems_desc')}
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {problems.map((prob, idx) => {
              const Icon = prob.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex gap-4 items-start hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">
                      {t(prob.titleKey)}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {t(prob.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative z-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                {t('problems_cta_title')}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                {t('problems_cta_desc')}
              </p>
            </div>
            <Link
              href="#book"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 text-sm"
            >
              <span>{t('problems_cta_btn')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
