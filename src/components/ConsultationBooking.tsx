'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { saveConsultationBooking } from '@/lib/supabase';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Send, 
  AlertCircle 
} from 'lucide-react';

export default function ConsultationBooking() {
  const { t } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('Tanzania');
  const [channel, setChannel] = useState<'SMS' | 'WhatsApp' | 'Email'>('SMS');
  const [service, setService] = useState('website');
  const [format, setFormat] = useState<'online' | 'inperson'>('online');
  const [requirements, setRequirements] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [consent, setConsent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [successPayload, setSuccessPayload] = useState<{ id: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle URL hash query params if passed from services
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.includes('service=')) {
        const param = hash.split('service=')[1];
        if (param) setService(param);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName || !email || !phone || !requirements || !consent) {
      setErrorMsg('Please complete all required fields and accept the consultation terms.');
      return;
    }

    setLoading(true);

    try {
      const res = await saveConsultationBooking({
        full_name: fullName,
        email,
        phone,
        country,
        preferred_channel: channel,
        service_of_interest: service,
        consultation_format: format,
        brief_requirements: requirements,
        preferred_date: preferredDate,
      });

      const refId = res.data?.[0]?.id || 'TT-' + Math.floor(100000 + Math.random() * 900000);
      setSuccessPayload({ id: refId });
      setFullName('');
      setEmail('');
      setPhone('');
      setRequirements('');
      setPreferredDate('');
      setConsent(false);
    } catch (err: unknown) {
      console.error('Booking failed:', err);
      setErrorMsg('An error occurred submitting your request. Please try again or reach out directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-28 relative" id="book">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-[#1a3a35]/15 dark:border-white/10 shadow-2xl bg-white dark:bg-[#0F1721]">
          
          {/* Left Column: Briefing & Workflow */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#142d29] via-[#1a3a35] to-[#0f2520] text-white p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5fd4ce]/20 text-[#5fd4ce] text-xs font-semibold uppercase tracking-wider mb-6">
                <Calendar className="w-3.5 h-3.5" />
                <span>{t('book_badge')}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                {t('book_title')}{' '}
                <span className="text-[#5fd4ce]">{t('book_title_highlight')}</span>
              </h2>

              <p className="text-sm text-[#d4edea]/80 leading-relaxed mb-8">
                {t('book_subtitle')}
              </p>

              {/* Consultation Fee Badge */}
              <div className="bg-white/10 border border-white/15 rounded-2xl p-5 mb-8">
                <span className="text-[11px] font-extrabold uppercase text-[#e8b54b] tracking-wider">
                  {t('fee_box_title')}
                </span>
                <div className="text-3xl font-extrabold text-white mt-1">
                  {t('fee_box_amount')}
                </div>
                <div className="text-xs text-[#d4edea]/90 mt-1">
                  {t('fee_box_note')}
                </div>
              </div>

              {/* Step Process */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-xs text-[#d4edea]/90">
                  <span className="w-6 h-6 rounded-full bg-[#5fd4ce] text-[#0f2520] font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span className="leading-relaxed">{t('step1_text')}</span>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#d4edea]/90">
                  <span className="w-6 h-6 rounded-full bg-[#5fd4ce] text-[#0f2520] font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span className="leading-relaxed">{t('step2_text')}</span>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#d4edea]/90">
                  <span className="w-6 h-6 rounded-full bg-[#5fd4ce] text-[#0f2520] font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <span className="leading-relaxed">{t('step3_text')}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 text-xs text-[#d4edea]/60">
              Payments are verified manually by our team via official registered channels. The website does not store bank credentials.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white dark:bg-[#0F1721]">
            {successPayload ? (
              <div className="bg-[#d4edea]/70 dark:bg-[#151f2e] border border-[#2a8a85] rounded-2xl p-8 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="w-14 h-14 text-[#2a8a85] dark:text-[#289b83] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#1a3a35] dark:text-[#f8fafc] mb-2">
                  {t('booking_success_title')}
                </h3>
                <p className="text-sm text-[#42645f] dark:text-[#94a3b8] leading-relaxed mb-6">
                  {t('booking_success_desc')}
                </p>
                <div className="inline-block bg-white dark:bg-[#0F1721] px-5 py-2.5 rounded-xl border border-[#2a8a85]/40 text-xs font-mono font-bold text-[#1a3a35] dark:text-[#f8fafc] mb-6">
                  Reference ID: {successPayload.id}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setSuccessPayload(null)}
                    className="inline-flex items-center gap-2 bg-[#1a3a35] dark:bg-[#289b83] text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#142d29] dark:hover:bg-[#20836e] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs rounded-xl p-3.5 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1a3a35] dark:text-[#f8fafc] mb-1.5">
                      {t('form_name_label')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Tariq Juma"
                      required
                      className="w-full bg-[#dfeff2]/30 dark:bg-[#151f2e] border border-[#1a3a35]/20 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#1a3a35] dark:text-[#f8fafc] focus:bg-white dark:focus:bg-[#1a2638] focus:outline-none focus:ring-2 focus:ring-[#2a8a85]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1a3a35] dark:text-[#f8fafc] mb-1.5">
                      {t('form_email_label')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      required
                      className="w-full bg-[#dfeff2]/30 dark:bg-[#151f2e] border border-[#1a3a35]/20 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#1a3a35] dark:text-[#f8fafc] focus:bg-white dark:focus:bg-[#1a2638] focus:outline-none focus:ring-2 focus:ring-[#2a8a85]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1a3a35] dark:text-[#f8fafc] mb-1.5">
                      {t('form_phone_label')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+255 7XX XXX XXX"
                      required
                      className="w-full bg-[#dfeff2]/30 dark:bg-[#151f2e] border border-[#1a3a35]/20 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#1a3a35] dark:text-[#f8fafc] focus:bg-white dark:focus:bg-[#1a2638] focus:outline-none focus:ring-2 focus:ring-[#2a8a85]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1a3a35] dark:text-[#f8fafc] mb-1.5">
                      {t('form_country_label')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                      className="w-full bg-[#dfeff2]/30 dark:bg-[#151f2e] border border-[#1a3a35]/20 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#1a3a35] dark:text-[#f8fafc] focus:bg-white dark:focus:bg-[#1a2638] focus:outline-none focus:ring-2 focus:ring-[#2a8a85]"
                    />
                  </div>
                </div>

                {/* Contact Channel Radio */}
                <div>
                  <label className="block text-xs font-bold text-[#1a3a35] dark:text-[#f8fafc] mb-2">
                    {t('form_channel_label')}
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {(['SMS', 'WhatsApp', 'Email'] as const).map((ch) => (
                      <label key={ch} className="inline-flex items-center gap-2 text-xs font-medium text-[#1a3a35] dark:text-[#f8fafc] cursor-pointer">
                        <input
                          type="radio"
                          name="contactChannel"
                          value={ch}
                          checked={channel === ch}
                          onChange={() => setChannel(ch)}
                          className="text-[#1a3a35] focus:ring-[#2a8a85]"
                        />
                        <span>{ch === 'SMS' ? 'SMS (Default)' : ch}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1a3a35] dark:text-[#f8fafc] mb-1.5">
                      {t('form_service_label')} <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#dfeff2]/30 dark:bg-[#151f2e] border border-[#1a3a35]/20 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#1a3a35] dark:text-[#f8fafc] focus:bg-white dark:focus:bg-[#1a2638] focus:outline-none focus:ring-2 focus:ring-[#2a8a85]"
                    >
                      <option value="website">Website Development</option>
                      <option value="custom_software">Custom Software Development</option>
                      <option value="mobile_app">Mobile App Development</option>
                      <option value="ai_automation">AI & Business Automation</option>
                      <option value="saas">SaaS Development</option>
                      <option value="api_integration">API & System Integration</option>
                      <option value="database_backend">Database & Backend Development</option>
                      <option value="ui_ux">UI/UX Design & Prototyping</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1a3a35] dark:text-[#f8fafc] mb-1.5">
                      {t('form_format_label')} <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={format}
                      onChange={(e) => setFormat(e.target.value as 'online' | 'inperson')}
                      className="w-full bg-[#dfeff2]/30 dark:bg-[#151f2e] border border-[#1a3a35]/20 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#1a3a35] dark:text-[#f8fafc] focus:bg-white dark:focus:bg-[#1a2638] focus:outline-none focus:ring-2 focus:ring-[#2a8a85]"
                    >
                      <option value="online">{t('form_format_online')}</option>
                      <option value="inperson">{t('form_format_inperson')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1a3a35] dark:text-[#f8fafc] mb-1.5">
                    {t('form_req_label')} <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Tell us about your business goals, target timeline, and specific features needed..."
                    required
                    className="w-full bg-[#dfeff2]/30 dark:bg-[#151f2e] border border-[#1a3a35]/20 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#1a3a35] dark:text-[#f8fafc] focus:bg-white dark:focus:bg-[#1a2638] focus:outline-none focus:ring-2 focus:ring-[#2a8a85] resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1a3a35] dark:text-[#f8fafc] mb-1.5">
                    {t('form_date_label')}
                  </label>
                  <input
                    type="datetime-local"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#dfeff2]/30 dark:bg-[#151f2e] border border-[#1a3a35]/20 dark:border-white/10 rounded-xl px-4 py-2 text-sm text-[#1a3a35] dark:text-[#f8fafc] focus:bg-white dark:focus:bg-[#1a2638] focus:outline-none focus:ring-2 focus:ring-[#2a8a85]"
                  />
                </div>

                <div>
                  <label className="flex items-start gap-2.5 text-xs text-[#42645f] dark:text-[#94a3b8] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                      className="mt-0.5 rounded text-[#1a3a35] focus:ring-[#2a8a85]"
                    />
                    <span>{t('form_privacy_consent')}</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1a3a35] hover:bg-[#142d29] dark:bg-[#289b83] dark:hover:bg-[#20836e] disabled:bg-[#d4edea] disabled:text-[#42645f] text-white font-semibold py-3.5 rounded-xl text-sm shadow-lg shadow-[#1a3a35]/25 dark:shadow-[#289b83]/25 transition-all"
                >
                  <Send className="w-4 h-4 text-[#5fd4ce] dark:text-white" />
                  <span>{loading ? t('form_submitting') : t('form_submit_btn')}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
