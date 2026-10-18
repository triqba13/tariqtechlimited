'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Check, Calculator, ArrowRight } from 'lucide-react';

export default function PricingSection() {
  const { t } = useLanguage();

  const [service, setService] = useState('website');
  const [scope, setScope] = useState('standard');
  const [timeline, setTimeline] = useState('standard');

  const baseMap: Record<string, number> = {
    website: 1000000,
    custom_software: 2800000,
    mobile_app: 3200000,
    ai_automation: 1800000,
    saas: 4500000,
    api_integration: 1200000,
  };

  const scopeMult: Record<string, number> = {
    mvp: 1.0,
    standard: 1.6,
    enterprise: 2.8,
  };

  const timeMult: Record<string, number> = {
    standard: 1.0,
    express: 1.25,
  };

  const base = baseMap[service] || 1000000;
  const sMult = scopeMult[scope] || 1.0;
  const tMult = timeMult[timeline] || 1.0;

  const totalMin = Math.round((base * sMult * tMult) / 100000) * 100000;
  const totalMax = Math.round((totalMin * 1.35) / 100000) * 100000;

  return (
    <section className="py-20 md:py-28 bg-white border-y border-slate-200/80" id="pricing">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t('pricing_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t('pricing_title')}{' '}
            <span className="text-sky-500">{t('pricing_title_highlight')}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t('pricing_subtitle')}
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          
          {/* 1. Consultation */}
          <div className="bg-[#F6FDF4] border border-slate-200 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {t('tier_consult_title')}
                </h3>
                <p className="text-xs text-slate-600 min-h-[36px]">
                  {t('tier_consult_desc')}
                </p>
              </div>

              <div className="flex items-baseline gap-2 pb-6 border-b border-slate-200/80 mb-6">
                <span className="text-3xl font-extrabold text-slate-900">
                  {t('tier_consult_cost')}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {t('tier_consult_period')}
                </span>
              </div>

              <ul className="space-y-3.5 mb-8">
                {['tier_consult_f1', 'tier_consult_f2', 'tier_consult_f3', 'tier_consult_f4'].map((fKey) => (
                  <li key={fKey} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{t(fKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="#book"
              className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold py-3.5 rounded-full shadow-sm transition-all"
            >
              <span>{t('tier_consult_btn')}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* 2. Custom Client Projects (Featured) */}
          <div className="relative bg-white border-2 border-sky-500 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-[10px] font-extrabold uppercase px-4 py-1 rounded-full tracking-wider shadow-sm">
              Core Offering
            </div>

            <div>
              <div className="mb-6 pt-2">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {t('tier_custom_title')}
                </h3>
                <p className="text-xs text-slate-600 min-h-[36px]">
                  {t('tier_custom_desc')}
                </p>
              </div>

              <div className="flex items-baseline gap-2 pb-6 border-b border-slate-200/80 mb-6">
                <span className="text-2xl font-extrabold text-slate-900">
                  {t('tier_custom_cost')}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {t('tier_custom_period')}
                </span>
              </div>

              <ul className="space-y-3.5 mb-8">
                {['tier_custom_f1', 'tier_custom_f2', 'tier_custom_f3', 'tier_custom_f4'].map((fKey) => (
                  <li key={fKey} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{t(fKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="#book"
              className="w-full inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold py-3.5 rounded-full shadow-lg shadow-sky-500/25 transition-all"
            >
              <span>{t('tier_custom_btn')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3. SaaS & Enterprise Platforms */}
          <div className="bg-[#F6FDF4] border border-slate-200 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {t('tier_saas_title')}
                </h3>
                <p className="text-xs text-slate-600 min-h-[36px]">
                  {t('tier_saas_desc')}
                </p>
              </div>

              <div className="flex items-baseline gap-2 pb-6 border-b border-slate-200/80 mb-6">
                <span className="text-2xl font-extrabold text-slate-900">
                  {t('tier_saas_cost')}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {t('tier_saas_period')}
                </span>
              </div>

              <ul className="space-y-3.5 mb-8">
                {['tier_saas_f1', 'tier_saas_f2', 'tier_saas_f3', 'tier_saas_f4'].map((fKey) => (
                  <li key={fKey} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{t(fKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="#book"
              className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold py-3.5 rounded-full shadow-sm transition-all"
            >
              <span>{t('tier_saas_btn')}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

        </div>

        {/* Interactive Project Cost Estimator */}
        <div className="bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50 border border-sky-200/80 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>{t('calc_title')}</span>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                {t('calc_subtitle')}
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t('calc_type_label')}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="website">Website Development (Corporate, Landing Page)</option>
                    <option value="custom_software">Custom Software & Management Dashboards</option>
                    <option value="mobile_app">Mobile App (Android & iOS)</option>
                    <option value="ai_automation">AI & Business Automation Workflows</option>
                    <option value="saas">SaaS & Multi-Tenant Subscription Platform</option>
                    <option value="api_integration">Payment Gateway & System Integration</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t('calc_scope_label')}
                    </label>
                    <select
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="mvp">MVP / Core Scope</option>
                      <option value="standard">Standard Production System</option>
                      <option value="enterprise">Advanced / High Scale</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t('calc_urgency_label')}
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="standard">Standard (4 - 8 Weeks)</option>
                      <option value="express">Express Accelerated (2 - 4 Weeks)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated Result Card */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">
                  {t('calc_est_label')}
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 my-3">
                  TSh {totalMin.toLocaleString()} - {totalMax.toLocaleString()}
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-6">
                  {t('calc_disclaimer')}
                </p>
              </div>

              <Link
                href={`#book?service=${service}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3.5 rounded-full text-sm shadow-md transition-all"
              >
                <span>{t('calc_btn')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
