'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Globe, 
  Code2, 
  Smartphone, 
  Bot, 
  Layers, 
  Sparkles,
  ChevronRight 
} from 'lucide-react';

export default function ServicesSection() {
  const { t } = useLanguage();
  const [activeBranch, setActiveBranch] = useState<number | null>(null);

  // 4 concise, high-impact services matching the clean screenshot aesthetic
  const services = [
    {
      id: 'website',
      title: 'Website Development',
      desc: 'High-performance corporate platforms, business portals, and web applications built for speed, conversion, and global visibility.',
      icon: Globe,
    },
    {
      id: 'custom_software',
      title: 'Custom Software Systems',
      desc: 'Tailored management platforms, booking engines, workflows, and database architectures engineered around your exact operations.',
      icon: Code2,
    },
    {
      id: 'mobile_app',
      title: 'Mobile App Development',
      desc: 'Native and cross-platform Android & iOS applications delivering smooth user experiences, offline sync, and secure mobile portals.',
      icon: Smartphone,
    },
    {
      id: 'ai_automation',
      title: 'AI & Business Automation',
      desc: 'Autonomous AI agents, automated customer routing, and intelligent workflows that eliminate manual tasks and scale efficiency 24/7.',
      icon: Bot,
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: Clean Headings & Description (No Request Button)  */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28 z-20">
            
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3a35] dark:text-[#f8fafc] tracking-tight leading-[1.14] mb-6">
              Complete Digital Solutions for{' '}
              <span className="text-[#2a8a85] dark:text-[#289b83]">Modern Businesses</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#42645f] dark:text-[#94a3b8] leading-relaxed max-w-md">
              From custom software to AI automation, we turn business challenges into resilient digital products.
            </p>

          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: The Clean Connected Tree of Services             */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 relative z-10 w-full">
            
            <div className="relative">
              
              {/* Central Glowing Fiber Trunk (Desktop Only) */}
              <div className="hidden md:block absolute left-6 lg:left-8 top-3 bottom-6 w-1 bg-gradient-to-b from-[#2a8a85] via-[#289b83] to-[#e8b54b] rounded-full opacity-60 shadow-[0_0_15px_rgba(42,138,133,0.5)]" />

              {/* Connected Service Branches */}
              <div className="space-y-5 md:space-y-6 md:pl-16 lg:pl-20">
                {services.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeBranch === index;

                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setActiveBranch(index)}
                      onMouseLeave={() => setActiveBranch(null)}
                      className="relative group transition-all duration-300"
                    >
                      {/* Branch Connector Line from Trunk to Card with Real Traveling Energy Pulse */}
                      <div className="hidden md:block absolute -left-16 lg:-left-20 top-7 w-16 lg:w-20 h-[2px] pointer-events-none overflow-hidden">
                        {/* Static track */}
                        <div 
                          className={`w-full h-full transition-colors duration-300 ${
                            isActive
                              ? 'bg-[#289b83]'
                              : 'bg-[#1a3a35]/20 dark:bg-white/20'
                          }`}
                        />
                        {/* Real traveling energy pulse light beam on hover */}
                        {isActive && (
                          <div className="branch-energy-pulse" />
                        )}
                      </div>

                      {/* Branch Node on the central trunk */}
                      <div 
                        className={`hidden md:flex absolute -left-16 lg:-left-20 top-5 -translate-x-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 items-center justify-center pointer-events-none ${
                          isActive
                            ? 'border-[#289b83] bg-white dark:bg-[#0F1721] scale-125 shadow-[0_0_12px_#289b83]'
                            : 'border-[#1a3a35]/40 dark:border-white/40 bg-[#d4edea] dark:bg-[#151f2e]'
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isActive ? 'bg-[#289b83]' : 'bg-transparent'}`} />
                      </div>

                      {/* Clean Service Card (Matching the user's minimalist reference screenshot) */}
                      <Link
                        href="/contact"
                        className={`block relative rounded-2xl p-6 sm:p-7 transition-all duration-300 border shadow-sm ${
                          isActive
                            ? 'bg-white dark:bg-[#141f2e] border-[#2a8a85] dark:border-[#289b83] shadow-lg -translate-y-0.5'
                            : 'bg-white/85 dark:bg-[#0F1721] border-[#1a3a35]/15 dark:border-white/10 hover:border-[#2a8a85]/50'
                        }`}
                      >
                        {/* Top Icon */}
                        <div className="mb-4">
                          <div 
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 ${
                              isActive ? 'scale-110' : ''
                            } bg-[#d4edea] dark:bg-[#151f2e] text-[#1a3a35] dark:text-[#289b83]`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Heading */}
                        <h3 className="text-lg sm:text-xl font-bold text-[#1a3a35] dark:text-[#f8fafc] mb-2 group-hover:text-[#2a8a85] dark:group-hover:text-[#289b83] transition-colors">
                          {item.title}
                        </h3>

                        {/* Short, clear 2-line description */}
                        <p className="text-sm text-[#42645f] dark:text-[#94a3b8] leading-relaxed mb-4">
                          {item.desc}
                        </p>

                        {/* Minimalist arrow indicator at bottom left matching reference */}
                        <div className="flex items-center text-[#1a3a35] dark:text-[#f8fafc] group-hover:text-[#2a8a85] dark:group-hover:text-[#289b83] transition-colors">
                          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>

                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
