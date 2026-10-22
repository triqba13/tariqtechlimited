'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedConsent = localStorage.getItem('tariqtech_cookie_consent');
    if (!savedConsent) {
      // Small timeout for smooth entry animation
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Listen for custom reset event from cookies page
    const handleReset = () => {
      setIsVisible(true);
    };

    window.addEventListener('tariqtech_cookie_reset', handleReset);
    return () => {
      window.removeEventListener('tariqtech_cookie_reset', handleReset);
    };
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('tariqtech_cookie_consent', 'all');
    localStorage.setItem('tariqtech_cookie_consent_date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('tariqtech_cookie_consent', 'essential');
    localStorage.setItem('tariqtech_cookie_consent_date', new Date().toISOString());
    setIsVisible(false);
  };

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-500"
    >
      <div className="relative p-5 sm:p-6 rounded-2xl bg-[#0f2420]/95 dark:bg-[#0A0D14]/95 text-white backdrop-blur-xl border border-[#2a8a85]/40 dark:border-[#5fd4ce]/30 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
        
        {/* Close / Dismiss button (defaults to essential) */}
        <button
          onClick={handleEssentialOnly}
          aria-label="Close cookie consent banner"
          className="absolute top-4 right-4 text-[#d4edea]/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3.5 mb-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#5fd4ce]/20 text-[#5fd4ce] flex items-center justify-center shrink-0 border border-[#5fd4ce]/30">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-white flex items-center gap-2">
              Cookie & Privacy Choices
              <ShieldCheck className="w-4 h-4 text-[#5fd4ce]" />
            </h3>
            <p className="text-xs text-[#5fd4ce] font-medium mt-0.5">
              TariqTech Limited
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-[13px] text-[#d4edea]/85 leading-relaxed mb-4">
          We use essential cookies to keep your session secure, remember your language and theme preferences, and optional analytics to understand how our site is used.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <button
            onClick={handleAcceptAll}
            className="flex-1 px-4 py-2 rounded-xl bg-[#2a8a85] hover:bg-[#359d98] text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95 text-center"
          >
            Accept All
          </button>
          <button
            onClick={handleEssentialOnly}
            className="flex-1 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#d4edea] border border-white/15 text-xs sm:text-sm font-medium transition-all active:scale-95 text-center"
          >
            Essential Only
          </button>
        </div>

        <div className="mt-3 text-center">
          <Link
            href="/cookies"
            className="text-[11px] text-[#5fd4ce] hover:underline transition-all"
          >
            Learn more in our Cookie Policy
          </Link>
        </div>

      </div>
    </div>
  );
}
