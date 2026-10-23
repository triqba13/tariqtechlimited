'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Cookie, 
  Settings2, 
  ShieldCheck, 
  Activity, 
  Layers, 
  RotateCcw, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowLeft 
} from 'lucide-react';

export default function CookiesPolicyPage() {
  const [currentConsent, setCurrentConsent] = useState<string | null>(null);
  const [resetFeedback, setResetFeedback] = useState(false);

  useEffect(() => {
    const val = localStorage.getItem('tariqtech_cookie_consent');
    setCurrentConsent(val || 'not set (prompt active)');
  }, []);

  const handleResetPreferences = () => {
    localStorage.removeItem('tariqtech_cookie_consent');
    localStorage.removeItem('tariqtech_cookie_consent_date');
    setCurrentConsent('reset (banner reopened)');
    setResetFeedback(true);

    // Dispatch custom event to tell CookieConsent banner to pop up
    window.dispatchEvent(new Event('tariqtech_cookie_reset'));

    setTimeout(() => {
      setResetFeedback(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#dfeff2] dark:bg-[#0A0D14] text-[#1a3a35] dark:text-[#f8fafc] transition-colors duration-300">
      <Navbar />

      <main className="flex-grow pt-10 pb-20 sm:pt-14 sm:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-[#42645f] dark:text-[#94a3b8]">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1.5 hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-[#1a3a35] dark:text-white font-medium">Cookies Policy</span>
          </div>

          {/* Header Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-[#102420]/80 backdrop-blur-md border border-[#1a3a35]/15 dark:border-white/10 shadow-sm mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5fd4ce]/15 dark:bg-[#5fd4ce]/20 text-xs font-semibold text-[#2a8a85] dark:text-[#5fd4ce] mb-5">
              <Cookie className="w-4 h-4" />
              <span>Tracking & Storage Technologies</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight mb-4 leading-tight">
              Cookies Policy
            </h1>

            <p className="text-sm sm:text-base text-[#42645f] dark:text-[#94a3b8] max-w-3xl leading-relaxed">
              This Cookies Policy explains how TariqTech Limited uses cookies, browser local storage, and similar technologies to deliver a fast, reliable, and personalized digital experience across our digital properties.
            </p>

            <div className="mt-6 pt-6 border-t border-[#1a3a35]/10 dark:border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#42645f] dark:text-[#94a3b8]">
              <span><strong>Last Updated:</strong> October 2026</span>
              <span><strong>Scope:</strong> Web Browsing & User Preferences</span>
              <span><strong>Entity:</strong> TariqTech Limited</span>
            </div>
          </div>

          {/* Preferences Interactive Control Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#152e29]/90 border border-[#2a8a85]/30 shadow-md mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <Settings2 className="w-5 h-5 text-[#2a8a85] dark:text-[#5fd4ce]" />
                <h3 className="font-bold text-base sm:text-lg text-[#1a3a35] dark:text-white">
                  Your Current Cookie Preference Status
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#42645f] dark:text-[#94a3b8]">
                Status:{' '}
                <span className="font-semibold text-[#2a8a85] dark:text-[#5fd4ce] uppercase tracking-wide">
                  {currentConsent || 'Loading...'}
                </span>
              </p>
            </div>

            <button
              onClick={handleResetPreferences}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#2a8a85] hover:bg-[#23706c] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95 shrink-0"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{resetFeedback ? 'Preferences Reset!' : 'Change Cookie Preferences'}</span>
            </button>
          </div>

          {/* Cookies Policy Content Sections */}
          <div className="space-y-8">
            
            {/* Section 1 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  1. What Are Cookies and Local Storage?
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  Cookies are small text files placed on your device by your web browser when you visit a website. In addition to HTTP cookies, modern web applications utilize secure HTML5 Local Storage and Session Storage to preserve application state smoothly without reloading pages.
                </p>
                <p>
                  These files allow our systems to recognize your device, maintain active sessions securely, and remember your interface settings without forcing you to reconfigure them on every page visit.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  2. Categories of Cookies We Use
                </h2>
              </div>
              <div className="space-y-6 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                
                {/* Category 1 */}
                <div className="p-5 rounded-2xl bg-white/50 dark:bg-black/20 border border-[#1a3a35]/10 dark:border-white/5">
                  <h3 className="font-bold text-base text-[#1a3a35] dark:text-white mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2a8a85] dark:text-[#5fd4ce]" />
                    Strictly Necessary / Essential Cookies
                  </h3>
                  <p className="text-sm">
                    These cookies are crucial for the basic functioning of our website. They enable secure navigation, theme settings (Dark Mode or Light Mode), language selection (English, Swahili, Arabic, etc.), and maintain CSRF security. Because these are essential to serve the website, they cannot be switched off in our preference center.
                  </p>
                </div>

                {/* Category 2 */}
                <div className="p-5 rounded-2xl bg-white/50 dark:bg-black/20 border border-[#1a3a35]/10 dark:border-white/5">
                  <h3 className="font-bold text-base text-[#1a3a35] dark:text-white mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#2a8a85] dark:text-[#5fd4ce]" />
                    Performance & Aggregated Analytics
                  </h3>
                  <p className="text-sm">
                    These optional cookies collect aggregated, fully anonymized statistics about how visitors navigate through our case studies, which services are viewed most frequently, and average page rendering speed. This data helps our engineering team optimize code bundle delivery and server response times.
                  </p>
                </div>

                {/* Category 3 */}
                <div className="p-5 rounded-2xl bg-white/50 dark:bg-black/20 border border-[#1a3a35]/10 dark:border-white/5">
                  <h3 className="font-bold text-base text-[#1a3a35] dark:text-white mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#2a8a85] dark:text-[#5fd4ce]" />
                    Functional & Interactive State Cookies
                  </h3>
                  <p className="text-sm">
                    These cookies record your interaction preferences, such as remembering that you previously dismissed a notification banner or preserving your multi-step project questionnaire progress so you do not lose your typed thoughts if your connection pauses.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 3 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <Settings2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  3. Controlling Cookies in Your Web Browser
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  Most modern browsers allow you to manage and block cookies via their settings menus. You can configure your browser to reject all cookies, notify you whenever a cookie is set, or delete existing cookies when closing the browser window:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Chrome:</strong> Settings {'>'} Privacy and Security {'>'} Third-party cookies.</li>
                  <li><strong>Apple Safari:</strong> Preferences {'>'} Privacy {'>'} Manage Website Data.</li>
                  <li><strong>Mozilla Firefox:</strong> Settings {'>'} Privacy & Security {'>'} Cookies and Site Data.</li>
                  <li><strong>Microsoft Edge:</strong> Settings {'>'} Cookies and site permissions {'>'} Manage and delete cookies.</li>
                </ul>
                <p className="text-xs text-[#42645f] dark:text-[#94a3b8] italic">
                  Note: Disabling essential cookies may impair the visual theme consistency and interactive capabilities of our website.
                </p>
              </div>
            </section>

            {/* Contact / Inquiries Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#102420] to-[#0A0D14] text-white border border-[#2a8a85]/30 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2.5">
                <Cookie className="w-6 h-6 text-[#5fd4ce]" />
                Questions About Cookie Practices?
              </h3>
              <p className="text-sm text-[#d4edea]/85 leading-relaxed mb-6 max-w-2xl">
                If you have questions regarding our implementation of cookies or data storage practices, our technical team is ready to provide full transparency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2.5 text-[#d4edea]">
                  <Mail className="w-4 h-4 text-[#5fd4ce] shrink-0" />
                  <a href="mailto:team@tariqtechlimited.com" className="hover:text-white underline">team@tariqtechlimited.com</a>
                </div>
                <div className="flex items-center gap-2.5 text-[#d4edea]">
                  <Phone className="w-4 h-4 text-[#5fd4ce] shrink-0" />
                  <a href="tel:+255744588248" className="hover:text-white">+255 744 588 248</a>
                </div>
                <div className="flex items-center gap-2.5 text-[#d4edea]">
                  <MapPin className="w-4 h-4 text-[#5fd4ce] shrink-0" />
                  <span>Dar es Salaam, Tanzania</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
