'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do we own 100% of the code and intellectual property?',
      answer: 'Yes. We hand over full ownership and complete source code repository access upon project sign-off. You own every asset, and you are never locked into mandatory monthly subscriptions or proprietary handcuffs.',
    },
    {
      question: 'How long does it typically take to design and launch a project?',
      answer: 'Most custom builds and web applications are delivered within 2 to 6 weeks, depending on system complexity. We work in structured sprints with clear milestones and regular staging previews so you track progress in real time.',
    },
    {
      question: 'Can you support and maintain our system after it goes live?',
      answer: 'Yes. We provide continuous technical support, infrastructure monitoring, security patches, and incremental feature updates to keep your systems fast, reliable, and secure 24/7.',
    },
    {
      question: 'What if we do not have our exact technical requirements figured out yet?',
      answer: 'That is completely normal. During our Initial Consultation, we sit down with you, examine your current workflows, and structure an actionable technical blueprint before any code is written.',
    },
    {
      question: 'How do you structure project pricing and payment milestones?',
      answer: 'We believe in transparent pricing tied to tangible milestones. Payments are divided across defined delivery phases, so you only pay as real, verifiable progress is demonstrated.',
    },
    {
      question: 'How do you handle payment integrations and checkout workflows?',
      answer: 'We integrate modern payment gateways using Snippe for direct mobile money and card processing, alongside secure webhooks for automatic receipting, reconciliation, and instant customer notifications.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#eef7f6]/40 dark:bg-[#0a0f18]/40" id="faq">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT COLUMN: Visual Featured Card with work.jpg background */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-full border border-[#1a3a35]/15 dark:border-white/10 shadow-xl flex flex-col justify-between p-6 sm:p-8">
            
            {/* Background Image: work.jpg */}
            <Image
              src="/pictures/work.jpg"
              alt="Tariq Tech Work"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
              loading="lazy"
            />

            {/* Dark Vignette Overlay for Crisp Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60 pointer-events-none" />

            {/* Top Text Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                <span>FAQ & SUPPORT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14] drop-shadow-md">
                Need Help?<br />Start Here...
              </h2>
            </div>

            {/* Bottom Glass Card: Free Consultation Call CTA */}
            <div className="relative z-10 rounded-2xl bg-[#142d29]/90 dark:bg-[#0F1721]/90 backdrop-blur-md border border-white/15 p-5 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-1.5 flex items-center justify-between">
                <span>Get Started Free Call?</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#d4edea]/85 leading-relaxed mb-4">
                Talk with our engineering team directly to map out your technical blueprint and clarify project scopes.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#e8b54b] hover:bg-[#d8a53b] text-[#0f2520] font-bold px-5 py-3 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 text-xs sm:text-sm group"
              >
                <span>Book Discovery Call</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive FAQs Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 justify-center">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-[#142d29] dark:bg-[#0F1721] border-[#142d29] dark:border-white/20 text-white shadow-xl'
                      : 'bg-white dark:bg-[#0a0f18] border-[#1a3a35]/10 dark:border-white/10 text-[#1a3a35] dark:text-slate-100 hover:border-[#2a8a85]/50 shadow-sm'
                  }`}
                >
                  {/* Accordion Trigger Button */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-base sm:text-lg leading-snug tracking-tight">
                      {faq.question}
                    </span>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-white/15 text-white'
                          : 'bg-slate-100 dark:bg-white/10 text-[#1a3a35] dark:text-slate-200'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {/* Accordion Body with smooth animation */}
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`px-5 pb-5 sm:px-6 sm:pb-6 text-sm leading-relaxed ${
                          isOpen ? 'text-[#d4edea]/90' : 'text-[#42645f] dark:text-slate-400'
                        }`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
