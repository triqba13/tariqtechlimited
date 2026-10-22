import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  AlertTriangle, 
  Info, 
  Cpu, 
  ExternalLink, 
  ServerCrash, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowLeft 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer | TariqTech Limited',
  description: 'Review our legal, technical, and professional consulting disclaimer regarding digital solutions, third-party APIs, and web services.',
};

export default function DisclaimerPage() {
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
            <span className="text-[#1a3a35] dark:text-white font-medium">Disclaimer</span>
          </div>

          {/* Header Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-[#102420]/80 backdrop-blur-md border border-[#1a3a35]/15 dark:border-white/10 shadow-sm mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5fd4ce]/15 dark:bg-[#5fd4ce]/20 text-xs font-semibold text-[#2a8a85] dark:text-[#5fd4ce] mb-5">
              <AlertTriangle className="w-4 h-4" />
              <span>Legal & Technical Disclaimer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight mb-4 leading-tight">
              Website & Service Disclaimer
            </h1>

            <p className="text-sm sm:text-base text-[#42645f] dark:text-[#94a3b8] max-w-3xl leading-relaxed">
              The information and technology solutions presented on this website are provided for general informational, commercial portfolio, and technology consulting purposes. Please read this notice to understand our boundaries of responsibility.
            </p>

            <div className="mt-6 pt-6 border-t border-[#1a3a35]/10 dark:border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#42645f] dark:text-[#94a3b8]">
              <span><strong>Last Updated:</strong> October 2026</span>
              <span><strong>Scope:</strong> Public Website & Technology Consulting</span>
              <span><strong>Provider:</strong> TariqTech Limited</span>
            </div>
          </div>

          {/* Disclaimer Content Sections */}
          <div className="space-y-8">
            
            {/* Section 1 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <Info className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  1. General Information Disclaimer
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  While TariqTech Limited strives to keep the technical insights, articles, architectural case studies, and descriptions on this website accurate and up to date, we make no representations or warranties of any kind (express or implied) about the complete accuracy, adequacy, or commercial fitness of the website content for a specific unregulated context.
                </p>
                <p>
                  Any reliance you place on general website materials without entering into a tailored project agreement or formal technical review is strictly at your own discretion.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <ServerCrash className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  2. Third-Party Integrations & Upstream Infrastructure
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  Modern digital systems rely heavily on external cloud infrastructure, APIs, and payment gateways:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Third-Party Dependencies:</strong> TariqTech Limited builds robust, resilient integrations with industry leaders (such as payment providers, cloud hosts, authentication engines, and telecom gateways). However, we are not responsible for downtime, rate limiting, data transmission outages, or sudden policy shifts caused by third-party upstream vendors.</li>
                  <li><strong>External Service Outages:</strong> Global cloud outages (e.g., DNS resolution disruptions or data center incidents) remain beyond our reasonable operational control, though we always engineer automated fallbacks and redundant architectures where specified in the project scope.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  3. Artificial Intelligence & Automated Algorithms
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  Where digital products integrate machine learning models, natural language processing, or generative AI workflows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI outputs are probabilistic by nature and should be supplemented with human-in-the-loop review for critical business, medical, or financial decisions.</li>
                  <li>TariqTech Limited engineers high-accuracy prompt architectures, guardrails, and automated verification checks, but cannot guarantee that generative models will never produce non-deterministic or anomalous responses.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  4. Professional Technology Advisory
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  The articles, architectural diagrams, and estimates provided across our portfolio do not constitute financial, legal, or investment advisory. Clients are advised to seek dedicated legal or regulatory compliance counsel for industry-specific data handling mandates (such as licensed financial services or telecommunication licensing in their respective jurisdictions).
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  5. External Hyperlinks & Case Study References
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  Our website may contain hyperlinks leading to external websites, third-party demonstration instances, or open-source repositories. We do not endorse, monitor, or assume liability for the practices, contents, or security parameters of third-party websites outside the domain control of TariqTech Limited.
                </p>
              </div>
            </section>

            {/* Contact / Inquiries Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#102420] to-[#0A0D14] text-white border border-[#2a8a85]/30 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2.5">
                <AlertTriangle className="w-6 h-6 text-[#5fd4ce]" />
                Questions or Technical Inquiries
              </h3>
              <p className="text-sm text-[#d4edea]/85 leading-relaxed mb-6 max-w-2xl">
                If you require clarification on any of our technical disclaimers, system SLA parameters, or integration warranties, we are here to assist.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2.5 text-[#d4edea]">
                  <Mail className="w-4 h-4 text-[#5fd4ce] shrink-0" />
                  <a href="mailto:support@tariqtechlimited.com" className="hover:text-white underline">support@tariqtechlimited.com</a>
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
