'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, X, Send, CheckCircle2, MessageSquare, Loader2 } from 'lucide-react';
import { saveContactInquiry } from '@/lib/supabase';

export default function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'assessment' | 'strategy'>('strategy');
  
  // Form state inside modal
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleOpenModal = (type: 'assessment' | 'strategy') => {
    setModalType(type);
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitting(true);
    try {
      await saveContactInquiry({
        full_name: name,
        work_email: email,
        whatsapp_number: phone || '+255744588248',
        problem_statement: `[Modal ${modalType.toUpperCase()}]: ${message}`,
        contact_channel: 'WhatsApp',
      });

      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      console.warn('Modal submit error:', err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-28 relative" id="contact">
      {/* Target anchor for links pointing to #book */}
      <div id="book" className="scroll-mt-24" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Main CTA Card with Dark Emerald Glass, Blueprint Grid & Soft Glows */}
        <div className="relative rounded-3xl bg-[#142d29] dark:bg-[#0c1614] border border-[#1a3a35] dark:border-white/10 p-8 sm:p-14 md:p-20 text-center overflow-hidden shadow-2xl">
          
          {/* Blueprint Grid Pattern Background */}
          <div 
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-25"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
              `,
              backgroundSize: '36px 36px',
            }}
          />

          {/* Ambient Lighting Accents */}
          <div 
            aria-hidden="true" 
            className="absolute -top-32 -right-32 w-96 h-96 bg-[#5fd4ce]/15 rounded-full blur-3xl pointer-events-none" 
          />
          <div 
            aria-hidden="true" 
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#2a8a85]/20 rounded-full blur-3xl pointer-events-none" 
          />

          {/* Content Container */}
          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white/90 mb-6 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-white/80" />
              <span>Ready to transform your business?</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.15]">
              Start Your Digital Transformation
            </h2>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#d4edea]/85 leading-relaxed max-w-2xl mx-auto mb-10">
              Elevate your operations with intelligent systems. We will guide you through the process and build tailored digital solutions that support your long-term growth.
            </p>

            {/* Action Button: Book a Strategy Call */}
            <div className="flex items-center justify-center mb-14 sm:mb-16">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-white hover:bg-slate-100 text-[#142d29] font-bold text-sm sm:text-base shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Bottom Divider */}
            <div className="w-full border-t border-white/10 mb-10" />

            {/* Bottom Stats: 30min and 24h (No workflows) */}
            <div className="grid grid-cols-2 max-w-lg mx-auto gap-8 sm:gap-12">
              
              {/* Stat 1: 30min */}
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1">
                  30min
                </span>
                <span className="text-xs sm:text-sm text-[#d4edea]/75 font-medium">
                  Free Consultation
                </span>
              </div>

              {/* Stat 2: 24h */}
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1">
                  24h
                </span>
                <span className="text-xs sm:text-sm text-[#d4edea]/75 font-medium">
                  Response Time
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Interactive Modal for Assessment / Strategy Call */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg bg-white dark:bg-[#0F1721] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#1a3a35]/15 dark:border-white/10 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[#d4edea] dark:bg-white/10 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a35] dark:text-white mb-2">
                  Request Received!
                </h3>
                <p className="text-sm text-[#42645f] dark:text-[#94a3b8] mb-6">
                  Thank you, {name || 'valued partner'}. Our engineering team will review your request and get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#1a3a35] dark:bg-[#289b83] text-white font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-[#d4edea] dark:bg-white/10 text-[#1a3a35] dark:text-[#5fd4ce]">
                    {modalType === 'strategy' ? 'Strategy Session' : 'Free Assessment'}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1a3a35] dark:text-white mt-3 mb-1">
                    {modalType === 'strategy' ? 'Book a Strategy Call' : 'Start Free Assessment'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#42645f] dark:text-[#94a3b8]">
                    Leave your contact details and our technical team will reach out directly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1a3a35] dark:text-slate-200 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tariq Juma"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-sm text-[#1a3a35] dark:text-white focus:outline-none focus:border-[#2a8a85]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1a3a35] dark:text-slate-200 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-sm text-[#1a3a35] dark:text-white focus:outline-none focus:border-[#2a8a85]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1a3a35] dark:text-slate-200 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+255 7XX XXX XXX"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-sm text-[#1a3a35] dark:text-white focus:outline-none focus:border-[#2a8a85]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1a3a35] dark:text-slate-200 mb-1">
                      Brief Goals or Challenge
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you want to build or improve..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-sm text-[#1a3a35] dark:text-white focus:outline-none focus:border-[#2a8a85] resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#142d29] hover:bg-[#1a3a35] dark:bg-[#289b83] dark:hover:bg-[#34aa92] text-white font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Request</span>
                        </>
                      )}
                    </button>
                    
                    <a
                      href="https://wa.me/255744588248"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full border border-slate-200 dark:border-white/10 text-xs font-bold text-[#1a3a35] dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-500" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
