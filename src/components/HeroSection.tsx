'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Hero3DCanvas from './Hero3DCanvas';
import { 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  FolderCheck, 
  Globe2, 
  TrendingUp, 
  Bot, 
  Code2 
} from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t('brand_subtagline')}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              {t('hero_title_p1')}{' '}
              <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
                {t('hero_title_highlight')}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {t('hero_desc')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <Link
                href="#book"
                className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-sky-500/25 transition-all hover:-translate-y-0.5 text-base"
              >
                <span>{t('hero_btn_start')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold px-6 py-3.5 rounded-full shadow-sm transition-all hover:-translate-y-0.5 text-base"
              >
                <span>{t('hero_btn_services')}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Trust Signal */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>{t('hero_guarantee')}</span>
            </div>
          </div>

          {/* Right Column: 3D Scene & Render Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Radial Glow */}
            <div className="absolute w-[130%] h-[130%] rounded-full bg-gradient-to-tr from-sky-200/40 via-emerald-100/50 to-amber-100/30 blur-3xl -z-10 pointer-events-none" />

            {/* Interactive Three.js WebGL Particle Layer */}
            <Hero3DCanvas />

            {/* Floating Card: AI Automation */}
            <div className="absolute -top-3 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-bounce [animation-duration:4s]">
              <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                <Bot className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">AI Automation →</span>
                <span className="text-[10px] text-slate-500 font-medium">Smart Workflows</span>
              </div>
            </div>

            {/* Main Visual Image (3D Render Asset) */}
            <div className="relative z-10 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/80 transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/assets/images/hero_3d.jpg"
                alt="TariqTech Limited 3D Technology Interface"
                width={700}
                height={525}
                priority
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>

            {/* Floating Card: Custom Software */}
            <div className="absolute -bottom-4 -right-4 sm:-right-6 z-20 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-bounce [animation-duration:5s] [animation-delay:1s]">
              <div className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">Custom Software →</span>
                <span className="text-[10px] text-slate-500 font-medium">Scalable Systems</span>
              </div>
            </div>

          </div>

        </div>

        {/* Stats Ribbon */}
        <div className="mt-14 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
              <FolderCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {t('stat_projects_val')}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {t('stat_projects_lbl')}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {t('stat_clients_val')}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {t('stat_clients_lbl')}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {t('stat_countries_val')}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {t('stat_countries_lbl')}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {t('stat_satisfaction_val')}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {t('stat_satisfaction_lbl')}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
