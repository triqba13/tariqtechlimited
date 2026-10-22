import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  Server, 
  UserCheck, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowLeft 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | TariqTech Limited',
  description: 'Learn how TariqTech Limited collects, protects, uses, and respects your personal data and digital privacy.',
};

export default function PrivacyPolicyPage() {
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
            <span className="text-[#1a3a35] dark:text-white font-medium">Privacy Policy</span>
          </div>

          {/* Header Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-[#102420]/80 backdrop-blur-md border border-[#1a3a35]/15 dark:border-white/10 shadow-sm mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5fd4ce]/15 dark:bg-[#5fd4ce]/20 text-xs font-semibold text-[#2a8a85] dark:text-[#5fd4ce] mb-5">
              <ShieldCheck className="w-4 h-4" />
              <span>Data Protection & Privacy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight mb-4 leading-tight">
              Privacy Policy
            </h1>

            <p className="text-sm sm:text-base text-[#42645f] dark:text-[#94a3b8] max-w-3xl leading-relaxed">
              At TariqTech Limited, we treat your privacy and sensitive business information with the highest degree of confidentiality, security, and integrity. This document explains how we collect, process, and protect your information when you interact with our website, platforms, and technology consulting services.
            </p>

            <div className="mt-6 pt-6 border-t border-[#1a3a35]/10 dark:border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#42645f] dark:text-[#94a3b8]">
              <span><strong>Effective Date:</strong> October 2026</span>
              <span><strong>Governing Law:</strong> United Republic of Tanzania & Global Standards</span>
              <span><strong>Entity:</strong> TariqTech Limited</span>
            </div>
          </div>

          {/* Policy Content Sections */}
          <div className="space-y-8">
            
            {/* Section 1 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  1. Information We Collect
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  We gather only the information necessary to provide top-quality digital engineering services, answer client inquiries, and manage technical projects.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Directly Provided Information:</strong> When you complete our contact questionnaire, request a project quote, or schedule a technical consultation, we collect your name, corporate email address, phone number, company name, project budget, and project requirements.
                  </li>
                  <li>
                    <strong>Technical & Diagnostic Data:</strong> When you visit our website, our servers automatically log standard technical data including your IP address, browser type and version, device hardware specifications, time zone, and visited page sequences.
                  </li>
                  <li>
                    <strong>Cookie Preferences & Session Storage:</strong> Information saved locally to retain your preferred language, dark or light mode setting, and consent parameters.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  2. How We Use Your Information
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  We process personal and organizational information for legitimate business purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Preparing technical architecture proposals, cost estimates, and customized software development agreements.</li>
                  <li>Delivering, testing, maintaining, and deploying web applications, mobile platforms, and automated data pipelines.</li>
                  <li>Communicating project updates, system milestones, invoices, and urgent technical notices.</li>
                  <li>Monitoring system security, preventing unauthorized access, and debugging performance bottlenecks.</li>
                  <li>Complying with Tanzanian statutory tax, accounting, and corporate obligations.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  3. Our Strict Zero-Sale Policy & Data Sharing
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p className="font-semibold text-[#1a3a35] dark:text-white">
                  We never sell, rent, monetize, or trade your personal or business data to third-party advertisers or data brokers under any circumstances.
                </p>
                <p>
                  We only disclose data to vetted enterprise service providers strictly required to operate our digital infrastructure:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cloud Hosting & Database Infrastructure (such as Vercel, Supabase, Google Cloud) under secure data processing agreements.</li>
                  <li>Transactional Email & Communication Providers (such as Resend or enterprise SMTP) strictly to deliver service communications.</li>
                  <li>Regulatory or law enforcement authorities only when compelled by valid legal subpoenas or court orders under Tanzanian law.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <Server className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  4. Data Security & Storage Architecture
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  Security is baked into our foundational engineering practices:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Encryption in Transit:</strong> All web traffic is strictly served over modern Transport Layer Security (TLS 1.3) protocols.</li>
                  <li><strong>Encryption at Rest:</strong> Stored data and backups are encrypted using enterprise AES-256 standard encryption.</li>
                  <li><strong>Access Controls:</strong> Multi-factor authentication (MFA) and least-privilege role-based access policies are enforced across all internal tooling.</li>
                  <li><strong>Code Integrity:</strong> We conduct regular dependency audits and vulnerability scans to safeguard client source code and project environments.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  5. Your Rights & Data Ownership
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  In accordance with the Tanzania Personal Data Protection Act (2022) and international standards such as GDPR, you have full authority over your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right to Access:</strong> You can request a complete copy of the personal records we hold regarding you or your organization.</li>
                  <li><strong>Right to Rectification:</strong> You can ask us to correct inaccurate or outdated information promptly.</li>
                  <li><strong>Right to Erasure:</strong> You can request the permanent deletion of your contact data where retention is no longer legally mandated.</li>
                  <li><strong>Right to Withdraw Consent:</strong> You can revoke consent for non-essential communications or cookies at any time.</li>
                </ul>
                <p>
                  To exercise any of these rights, email our team directly at <a href="mailto:support@tariqtechlimited.com" className="text-[#2a8a85] dark:text-[#5fd4ce] font-semibold underline">support@tariqtechlimited.com</a>.
                </p>
              </div>
            </section>

            {/* Section 6: Contact Block */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#102420] to-[#0A0D14] text-white border border-[#2a8a85]/30 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2.5">
                <Globe className="w-6 h-6 text-[#5fd4ce]" />
                Questions Regarding Privacy?
              </h3>
              <p className="text-sm text-[#d4edea]/85 leading-relaxed mb-6 max-w-2xl">
                If you have questions, feedback, or wish to make an official data access request, our data protection officer is available to assist you.
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
