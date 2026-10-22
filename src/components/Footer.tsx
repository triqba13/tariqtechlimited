'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0f2520] dark:bg-[#080d14] text-white pt-20 md:pt-24 pb-12 md:pb-16 border-t border-[#1a3a35] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 mb-16 md:mb-20">
          
          {/* Col 1: Brand Info, Slogan & Socials */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3.5 mb-5 group">
              <svg width="38" height="38" viewBox="0 0 48 48" fill="none" className="transition-transform group-hover:scale-105">
                <path d="M10 24L24 10C24 10 29 15 34 20L20 34L10 24Z" fill="#e8b54b" />
                <path d="M24 10L38 24L24 38L18 32L28 22L20 14L24 10Z" fill="#2a8a85" />
                <circle cx="24" cy="24" r="3" fill="#FFFFFF" />
              </svg>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-2xl tracking-tight leading-none">
                  TariqTech
                </span>
                <span className="text-[10px] font-bold text-[#5fd4ce] tracking-[0.18em] uppercase mt-0.5">
                  LIMITED
                </span>
              </div>
            </Link>

            <p className="text-sm sm:text-[15px] text-[#d4edea]/85 leading-relaxed max-w-sm mb-4">
              TariqTech Limited delivers bespoke software development, AI automation, and digital solutions engineered to create measurable business impact.
            </p>

            {/* Official Slogan: Built for tomorrow */}
            <p className="text-base font-bold text-[#e8b54b] tracking-wide mb-7">
              Built for tomorrow
            </p>

            {/* Social Icons: Instagram, LinkedIn, GitHub */}
            <div className="flex items-center gap-3.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#e8b54b] text-white hover:text-[#0f2520] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-4.5 h-4.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#5fd4ce] text-white hover:text-[#0f2520] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0f2520] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (Pricing removed, Blog & About added) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-[15px] text-[#d4edea]/85 font-medium">
              <li>
                <Link href="/" className="hover:text-[#5fd4ce] transition-colors py-0.5 inline-block">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#5fd4ce] transition-colors py-0.5 inline-block">About</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#5fd4ce] transition-colors py-0.5 inline-block">Services</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#5fd4ce] transition-colors py-0.5 inline-block">Projects</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#5fd4ce] transition-colors py-0.5 inline-block">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#5fd4ce] transition-colors py-0.5 inline-block">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5">
              Core Services
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-[15px] text-[#d4edea]/85 font-medium">
              <li className="py-0.5">Website Development</li>
              <li className="py-0.5">Custom Software Systems</li>
              <li className="py-0.5">Mobile App Development</li>
              <li className="py-0.5">AI & Automation</li>
            </ul>
          </div>

          {/* Col 4: Legal (Privacy Policy, Terms & Conditions, Disclaimer) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5">
              Legal
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-[15px] text-[#d4edea]/85 font-medium">
              <li>
                <Link href="/privacy" className="hover:text-[#5fd4ce] transition-colors py-0.5 inline-block">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#5fd4ce] transition-colors py-0.5 inline-block">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-[#5fd4ce] transition-colors py-0.5 inline-block">Disclaimer</Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-[#5fd4ce] transition-colors py-0.5 inline-block">Cookies Policy</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#d4edea]/80">
          
          {/* Bottom Left: WhatsApp & Email Support */}
          <div className="flex flex-wrap items-center gap-7">
            
            {/* WhatsApp Link */}
            <a
              href="https://wa.me/255744588248"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 hover:text-[#5fd4ce] transition-colors group"
            >
              <span className="w-7 h-7 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </span>
              <span className="font-semibold text-sm sm:text-base">+255 744 588 248</span>
            </a>

            {/* Email Support Link */}
            <a
              href="mailto:support@tariqtechlimited.com"
              className="inline-flex items-center gap-2.5 hover:text-[#5fd4ce] transition-colors group"
            >
              <span className="w-7 h-7 rounded-full bg-[#5fd4ce]/20 text-[#5fd4ce] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4" />
              </span>
              <span className="font-semibold text-sm sm:text-base">support@tariqtechlimited.com</span>
            </a>

          </div>

          {/* Bottom Far Right: Copyright */}
          <div className="text-right">
            <span className="text-sm font-medium">© 2026 TariqTech Limited. All rights reserved.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
