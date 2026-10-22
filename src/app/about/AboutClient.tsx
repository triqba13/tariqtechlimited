'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IntegrationsSection from '@/components/IntegrationsSection';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

export default function AboutClient() {
  // Travel card rotating carousel photos (changes automatically every 5s)
  const travelPhotos = [
    { src: '/pictures/travel.JPEG', alt: 'Travel Moment 1' },
    { src: '/pictures/travel1.JPEG', alt: 'Travel Moment 2' },
    { src: '/pictures/mtishb.jpg', alt: 'Travel Moment 3' },
  ];

  const [currentTravelIdx, setCurrentTravelIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTravelIdx((prev) => (prev + 1) % travelPhotos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [travelPhotos.length]);

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#dfeff2] dark:bg-[#0A0D14] text-[#1a3a35] dark:text-[#f8fafc] transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {/* ============================================================== */}
        {/* 1. HERO SECTION                                                */}
        {/* ============================================================== */}
        <section className="pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              
              {/* Left Column: Bio & Text */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Available Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-[#151f2e]/90 border border-[#1a3a35]/15 dark:border-white/10 text-xs font-semibold text-[#1a3a35] dark:text-[#f8fafc] shadow-sm mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for new projects</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a3a35] dark:text-white leading-[1.15] mb-6">
                  Hi, I&apos;m Tariq. <br />
                  <span className="text-[#2a8a85] dark:text-[#5fd4ce]">
                    I build digital products that matter.
                  </span>
                </h1>

                {/* Bio Description */}
                <p className="text-base sm:text-lg text-[#42645f] dark:text-[#94a3b8] leading-relaxed max-w-2xl mb-8 font-normal">
                  I am a computer science professional specializing in Big Data Analytics and full-stack software development. I help ambitious businesses transform complex operational challenges into streamlined, intelligent, and scalable digital solutions that drive measurable results.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#142d29] dark:bg-[#289b83] hover:bg-[#1c3d38] dark:hover:bg-[#32b399] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 group"
                  >
                    <span>Let&apos;s Talk</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white dark:bg-[#0F1721] hover:bg-[#f3faf9] dark:hover:bg-[#151f2e] text-[#1a3a35] dark:text-white border border-[#1a3a35]/15 dark:border-white/15 font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95"
                  >
                    <Download className="w-4 h-4 text-[#2a8a85] dark:text-[#5fd4ce]" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Tilted Interactive Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group w-full max-w-sm sm:max-w-md">
                  {/* Subtle Background Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#5fd4ce]/20 to-[#2a8a85]/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Tilted Photo Card */}
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white dark:border-white/10 bg-slate-100 dark:bg-[#0F1721] transform -rotate-2 sm:-rotate-3 group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-500 ease-out">
                    <Image
                      src="/pictures/me.JPEG"
                      alt="Tariq - Founder & Lead Engineer"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    
                    {/* Bottom Gradient with Name & Role */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-black/90 via-black/45 to-transparent text-white">
                      <p className="font-extrabold text-lg sm:text-xl tracking-tight">
                        Tariq
                      </p>
                      <p className="text-xs sm:text-sm text-white/85 font-medium mt-0.5">
                        Founder, Big Data & Full-Stack Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. STATS & PHILOSOPHY SECTION                                 */}
        {/* ============================================================== */}
        <section className="py-12 sm:py-16 border-y border-[#1a3a35]/10 dark:border-white/10 bg-white/40 dark:bg-[#0F1721]/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center mb-16">
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-black text-[#1a3a35] dark:text-white tracking-tight">
                  1+
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#42645f] dark:text-[#94a3b8] mt-2">
                  Years Experience
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-black text-[#1a3a35] dark:text-white tracking-tight">
                  10+
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#42645f] dark:text-[#94a3b8] mt-2">
                  Projects Delivered
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-black text-[#1a3a35] dark:text-white tracking-tight">
                  100%
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#42645f] dark:text-[#94a3b8] mt-2">
                  Client Satisfaction
                </span>
              </div>
            </div>

            {/* Philosophy / Quote */}
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a3a35] dark:text-white mb-4">
                Why I Build
              </h3>
              <blockquote className="text-base sm:text-lg italic text-[#42645f] dark:text-[#94a3b8] leading-relaxed font-normal">
                &ldquo;I believe technology and intelligent data architectures should serve human ambition, not complicate it. My goal is to liberate people and teams from tedious, manual workflows so they can focus on strategy, innovation, and what truly moves the needle.&rdquo;
              </blockquote>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. POWERFUL INTEGRATIONS (REUSED)                              */}
        {/* ============================================================== */}
        <IntegrationsSection />

        {/* ============================================================== */}
        {/* 4. LIFE BEYOND CODE (4 CARDS: KAYAKING, ADVENTURE, TRAVEL, WORK)*/}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight mb-2">
                Life Beyond Code
              </h2>
              <p className="text-sm sm:text-base text-[#42645f] dark:text-[#94a3b8]">
                When I&apos;m not building, I&apos;m exploring.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Kayaking */}
              <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-[#1a3a35]/15 dark:border-white/10 bg-slate-900">
                <Image
                  src="/pictures/kayaking.JPEG"
                  alt="Kayaking Adventure"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/35 to-transparent text-white">
                  <h4 className="font-bold text-lg tracking-tight">Kayaking</h4>
                </div>
              </div>

              {/* Card 2: Adventure */}
              <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-[#1a3a35]/15 dark:border-white/10 bg-slate-900">
                <Image
                  src="/pictures/adventure.JPEG"
                  alt="Adventure"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/35 to-transparent text-white">
                  <h4 className="font-bold text-lg tracking-tight">Adventure</h4>
                </div>
              </div>

              {/* Card 3: Travel (Changes every 5s) */}
              <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-[#1a3a35]/15 dark:border-white/10 bg-slate-900">
                {travelPhotos.map((photo, index) => (
                  <div
                    key={photo.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentTravelIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
                
                {/* Dots indicator for Travel carousel */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {travelPhotos.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentTravelIdx(i)}
                      aria-label={`Travel photo ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === currentTravelIdx ? 'w-4 bg-[#5fd4ce]' : 'w-1.5 bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute inset-x-0 bottom-0 z-20 p-5 bg-gradient-to-t from-black/85 via-black/35 to-transparent text-white">
                  <h4 className="font-bold text-lg tracking-tight">Travel</h4>
                </div>
              </div>

              {/* Card 4: My Work */}
              <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-[#1a3a35]/15 dark:border-white/10 bg-slate-900">
                <Image
                  src="/pictures/work.jpg"
                  alt="My Workspace & Development"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/35 to-transparent text-white">
                  <h4 className="font-bold text-lg tracking-tight">My Work</h4>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. READY TO START YOUR PROJECT? (CTA SECTION)                  */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight mb-4">
              Ready to start your project?
            </h2>
            <p className="text-base sm:text-lg text-[#42645f] dark:text-[#94a3b8] mb-8 font-normal">
              Let&apos;s collaborate to build something amazing together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-[#142d29] dark:bg-[#289b83] hover:bg-[#1c3d38] dark:hover:bg-[#32b399] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
