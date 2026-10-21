'use client';

import React from 'react';
import { Star } from 'lucide-react';

export default function ClientsFeedbackSection() {
  const feedbacks = [
    {
      id: 'elijah',
      title: 'Superb, Reliable ERP Architecture',
      comment:
        'Tariq Tech transformed how we manage scholarships and educational operations. Their custom ERP is fast, clean, and handles student records and applications with remarkable precision. Highly recommended!',
      author: 'Elijah',
      role: 'CEO & Founder, Mtishbischolar',
    },
    {
      id: 'mbaraka',
      title: 'World-Class E-Commerce Application',
      comment:
        'Tariq Tech engineered an Amazon-grade online marketplace app for Muba Store with instant search, smooth shopping cart flows, and seamless checkout. Our customers love how effortless it is to buy from us.',
      author: 'Mbaraka',
      role: 'CEO & Founder, Muba Store',
    },
    {
      id: 'mom',
      title: 'Built on Honesty, Passion and Dedication',
      comment:
        'I am deeply proud of Tariq and his team\'s relentless work ethic. Tariq puts his whole heart, genuine honesty, and dedication into every line of code and every business he helps build. Always cheering you on!',
      author: 'My Mommy',
      role: 'Biggest Inspiration & Lifelong Supporter',
    },
  ];

  // We repeat the array 4 times to guarantee a truly seamless, infinite continuous loop across any screen width
  const marqueeItems = [...feedbacks, ...feedbacks, ...feedbacks, ...feedbacks];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="feedback">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 sm:mb-14 text-left">
        {/* Badge with small indicator dot */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2a8a85] dark:bg-[#5fd4ce] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#1a3a35] dark:text-[#5fd4ce]">
            CLIENTS FEEDBACK
          </span>
        </div>

        {/* Main Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3a35] dark:text-[#f8fafc] tracking-tight leading-[1.14]">
          What our clients are saying.
        </h2>
      </div>

      {/* Infinite Marquee Track (Smooth movement from left to right, pauses on hover) */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Soft Fade Gradients */}
        <div 
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#dfeff2] dark:from-[#0A0D14] to-transparent z-20"
        />
        <div 
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#dfeff2] dark:from-[#0A0D14] to-transparent z-20"
        />

        <div className="marquee-track-ltr gap-6 py-4 px-2">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[320px] sm:w-[380px] shrink-0 bg-white dark:bg-[#0F1721] rounded-3xl p-6 sm:p-7 border border-[#1a3a35]/10 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-[#2a8a85]/50 transition-all duration-300 flex flex-col justify-between select-none cursor-default group"
            >
              <div>
                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 mb-3.5">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]"
                    />
                  ))}
                </div>

                {/* Review Headline */}
                <h3 className="text-base sm:text-lg font-bold text-[#1a3a35] dark:text-white mb-2 tracking-tight group-hover:text-[#2a8a85] dark:group-hover:text-[#5fd4ce] transition-colors">
                  {item.title}
                </h3>

                {/* Review Comment */}
                <p className="text-xs sm:text-sm text-[#42645f] dark:text-[#94a3b8] leading-relaxed mb-6">
                  {item.comment}
                </p>
              </div>

              {/* Author & Company Meta */}
              <div className="pt-4 border-t border-[#1a3a35]/10 dark:border-white/10 flex flex-col">
                <span className="text-sm font-bold text-[#1a3a35] dark:text-white">
                  {item.author}
                </span>
                <span className="text-xs text-[#2a8a85] dark:text-[#5fd4ce] font-semibold mt-0.5">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
