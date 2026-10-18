'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    try {
      const existing = JSON.parse(localStorage.getItem('tariqtech_messages') || '[]');
      existing.unshift({
        id: 'MSG-' + Date.now(),
        name,
        email,
        subject,
        message,
        created_at: new Date().toISOString(),
      });
      localStorage.setItem('tariqtech_messages', JSON.stringify(existing));
    } catch (err) {
      console.warn(err);
    }

    setSent(true);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="py-20 md:py-28 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>{t('contact_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t('contact_title')}{' '}
            <span className="text-sky-500">{t('contact_title_highlight')}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t('contact_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {t('contact_email_title')}
                </h4>
                <div className="text-base font-bold text-slate-900">
                  {t('contact_email_val')}
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {t('contact_phone_title')}
                </h4>
                <div className="text-base font-bold text-slate-900">
                  {t('contact_phone_val')}
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {t('contact_loc_title')}
                </h4>
                <div className="text-base font-bold text-slate-900">
                  {t('contact_loc_val')}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              {t('contact_form_title')}
            </h3>

            {sent ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-base font-bold text-emerald-950 mb-1">
                  Message Sent!
                </h4>
                <p className="text-xs text-emerald-800 mb-4">
                  Thank you for reaching out. A representative from TariqTech Limited will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="text-xs text-emerald-700 underline font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('contact_form_name')}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tariq Juma"
                      required
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('contact_form_email')}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      required
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('contact_form_subject')}
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="General Inquiry / Technical Project"
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('contact_form_msg')}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can TariqTech assist your business?"
                    required
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('contact_form_btn')}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
