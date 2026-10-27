'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full px-1 sm:px-2 md:px-3 pt-0 pb-2 overflow-hidden" id="home">
      {/* 100% Viewport Height Container: Flat top (rounded-t-none), 10px bottom radius, solid black */}
      <div className="relative w-full rounded-t-none rounded-b-[10px] bg-[#000000] border-x border-b border-white/10 overflow-hidden min-h-[calc(100vh-68px)] flex items-center shadow-2xl py-12 sm:py-16 lg:py-0">
        
        {/* Realistic Ambient Glow centered directly behind the glowing filament */}
        <div className="absolute top-[24%] sm:top-[28%] right-[5%] sm:right-[10%] md:right-[15%] lg:right-[18%] xl:right-[22%] -translate-y-1/2 w-[260px] sm:w-[380px] md:w-[460px] lg:w-[540px] h-[260px] sm:h-[380px] md:h-[460px] lg:h-[540px] bg-gradient-to-r from-amber-500/25 via-amber-300/15 to-transparent rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] pointer-events-none -z-10 animate-pulse [animation-duration:4s]" />
        
        {/* Secondary soft cyan/teal reflection glow matching the glass rim light */}
        <div className="absolute top-[24%] sm:top-[28%] right-[2%] sm:right-[8%] md:right-[12%] lg:right-[16%] xl:right-[20%] -translate-y-1/2 w-[300px] sm:w-[420px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[420px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-cyan-400/15 via-[#289b83]/10 to-transparent rounded-full blur-[70px] sm:blur-[90px] lg:blur-[120px] pointer-events-none -z-10" />

        {/* Subtle ambient bounce light on left side */}
        <div className="absolute top-1/2 left-[-10%] sm:left-[2%] w-[280px] sm:w-[360px] lg:w-[420px] h-[280px] sm:h-[360px] lg:h-[420px] bg-[#289b83]/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[130px] pointer-events-none -z-10" />

        {/* Right Side Image: Transparent Cut-out Lightbulb (image1-transparent.png), Full Height, Responsive Visibility */}
        <div className="absolute bottom-0 right-[-15%] sm:right-[-5%] md:right-[5%] lg:right-[12%] xl:right-[16%] h-full flex items-center justify-center pointer-events-none z-10 opacity-35 sm:opacity-50 md:opacity-80 lg:opacity-100 transition-opacity duration-500">
          <div className="relative h-[85%] sm:h-[90%] lg:h-full aspect-[2756/4134] flex items-center justify-center">
            <Image
              src="/image1-transparent.png"
              alt="TariqTech Innovation Lightbulb"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 60vw, (max-width: 1024px) 50vw, 40vw"
              className="object-contain drop-shadow-sm md:drop-shadow-[0_0_50px_rgba(245,158,11,0.25)]"
            />
          </div>
        </div>

        {/* Left Column: Headlines & Actions on Dark Mode - Fully Responsive across Mobile, Tablet & Desktop */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-center h-full">
          <div className="max-w-xl lg:max-w-2xl text-left pointer-events-auto">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-5 sm:mb-6 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#289b83] animate-pulse" />
              <span className="tracking-wide">Built for tomorrow</span>
            </div>

            {/* Main Title: Adaptive scaling across screen widths */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.16] sm:leading-[1.12] mb-4 sm:mb-6">
              We Build Digital Solutions That{' '}
              <span className="bg-gradient-to-r from-[#289b83] via-[#3dd5a9] to-[#289b83] bg-clip-text text-transparent">
                Create Real Impact.
              </span>
            </h1>

            {/* Description: Clean readable typography with optimal line-height */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300/90 leading-relaxed max-w-xl mb-6 sm:mb-8">
              At TariqTech Limited, we’re built for tomorrow. We combine software engineering, AI automation, and modern digital technologies to help businesses simplify complexity, embrace innovation, and build for the future.
            </p>

            {/* CTA: Book a call with moving white, gray & black linear gradient */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
              <Link
                href="/contact"
                className="btn-liquid-shimmer group relative inline-flex items-center justify-center py-3.5 px-8 rounded-full font-bold text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-lg w-full sm:w-auto text-center"
              >
                <span className="flex items-center justify-center gap-2 font-bold text-slate-950">
                  <span>Book a call</span>
                  <ArrowRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* Trust Signal */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
              <span>{t('hero_guarantee')}</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
