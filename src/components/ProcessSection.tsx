'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      step: '01',
      title: 'Initial Consultation',
      desc: 'We meet with you to explore your vision, evaluate your current workflow, and pinpoint the exact areas where software, AI, or automation will create the highest business impact.',
      delayClass: 'delay-100',
    },
    {
      step: '02',
      title: 'Architecture & Roadmap',
      desc: 'We design a comprehensive technical blueprint, mapping out system architecture, security standards, and user journeys so every component is engineered with purpose before we build.',
      delayClass: 'delay-300',
    },
    {
      step: '03',
      title: 'Engineering & Deployment',
      desc: 'We build clean, scalable code, integrate intelligent automations, rigorously test every workflow, and launch a reliable, high-performance solution into your operations.',
      delayClass: 'delay-500',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden bg-[#eef7f6]/45 dark:bg-[#0a0f18]/50" 
      id="process"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header: Badge + Headline + Request a Call Button (Smooth fade from left) */}
        <div 
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="max-w-2xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-white/10 border border-[#1a3a35]/15 dark:border-white/15 text-xs font-bold uppercase tracking-wider text-[#1a3a35] dark:text-[#5fd4ce] shadow-sm mb-4">
              <span>OUR PROCESS</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3a35] dark:text-[#f8fafc] tracking-tight leading-[1.14]">
              Structured Process,<br className="hidden sm:inline" />
              <span className="text-[#2a8a85] dark:text-[#5fd4ce]"> Dependable Outcomes.</span>
            </h2>
          </div>

          {/* Request a Call Action Button (Matching screenshot aesthetic) */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#142d29] hover:bg-[#1a3a35] dark:bg-[#1a3a35] dark:hover:bg-[#234d47] text-white font-bold px-6 py-3.5 rounded-full shadow-lg shadow-[#142d29]/20 transition-all hover:-translate-y-0.5 text-sm shrink-0 self-start md:self-auto group"
          >
            <span>Request a Call</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 3 Step Cards Grid: Staggered smooth slide and fade-in from left to right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => {
            const isLast = index === steps.length - 1;

            return (
              <div
                key={item.step}
                className={`relative bg-white dark:bg-[#0F1721] rounded-3xl p-8 sm:p-10 border border-[#1a3a35]/10 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between transition-all duration-700 ease-out ${
                  item.delayClass
                } ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-12 pointer-events-none'
                }`}
              >
                <div>
                  {/* Step Number */}
                  <div className="text-4xl sm:text-5xl font-black text-[#2a8a85] dark:text-[#5fd4ce] tracking-tight mb-6">
                    {item.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-[#42645f] dark:text-[#94a3b8] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Connecting Circle with Arrow to Next Step (Desktop only) */}
                {!isLast && (
                  <div 
                    aria-hidden="true"
                    className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#1a2634] border border-[#1a3a35]/15 dark:border-white/15 shadow-md items-center justify-center text-[#1a3a35] dark:text-white z-20"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
