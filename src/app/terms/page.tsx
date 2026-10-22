import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  FileCheck, 
  Code2, 
  CreditCard, 
  ShieldAlert, 
  Scale, 
  CheckCircle2, 
  Clock, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowLeft 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | TariqTech Limited',
  description: 'Understand the terms, project engagement agreements, intellectual property rights, and conditions governing our engineering services.',
};

export default function TermsAndConditionsPage() {
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
            <span className="text-[#1a3a35] dark:text-white font-medium">Terms & Conditions</span>
          </div>

          {/* Header Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-[#102420]/80 backdrop-blur-md border border-[#1a3a35]/15 dark:border-white/10 shadow-sm mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5fd4ce]/15 dark:bg-[#5fd4ce]/20 text-xs font-semibold text-[#2a8a85] dark:text-[#5fd4ce] mb-5">
              <FileCheck className="w-4 h-4" />
              <span>Commercial Terms of Service</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight mb-4 leading-tight">
              Terms & Conditions
            </h1>

            <p className="text-sm sm:text-base text-[#42645f] dark:text-[#94a3b8] max-w-3xl leading-relaxed">
              These terms define the working relationship between TariqTech Limited and our clients. By engaging our technology consulting, software development, mobile application, or data analytics services, you agree to these commercial provisions.
            </p>

            <div className="mt-6 pt-6 border-t border-[#1a3a35]/10 dark:border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#42645f] dark:text-[#94a3b8]">
              <span><strong>Last Updated:</strong> October 2026</span>
              <span><strong>Legal Jurisdiction:</strong> United Republic of Tanzania</span>
              <span><strong>Company:</strong> TariqTech Limited</span>
            </div>
          </div>

          {/* Terms Content Sections */}
          <div className="space-y-8">
            
            {/* Section 1 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  1. Scope of Digital & Software Services
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  TariqTech Limited provides bespoke digital engineering, system architecture, and technology consulting services, which include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Custom Web Applications and Corporate Portal Development.</li>
                  <li>Enterprise Management Systems, CRMs, ERPs, and Cloud Architectures.</li>
                  <li>iOS and Android Mobile App Engineering.</li>
                  <li>AI Workflows, Business Process Automation, and Big Data Analytics.</li>
                  <li>System API Integrations, Database Performance Tuning, and Cloud DevOps.</li>
                </ul>
                <p>
                  Each formal project is governed by a dedicated Statement of Work (SOW) or written quotation specifying deliverables, development milestones, timelines, and acceptance criteria.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  2. Pricing, Invoicing & Payment Terms
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  Our fee structure is transparent and milestones-based:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Milestone Payments:</strong> Projects typically follow a structured milestone schedule (e.g., initial kickoff deposit, prototype verification, staging acceptance, and final deployment).</li>
                  <li><strong>Invoices & Due Dates:</strong> Invoices are payable within fourteen (14) calendar days of receipt unless explicitly modified in the project agreement.</li>
                  <li><strong>Currency:</strong> Unless agreed otherwise in writing, fees are invoiced in Tanzanian Shillings (TZS) or US Dollars (USD).</li>
                  <li><strong>Scope Adjustments:</strong> Extra features or architectural changes requested outside the approved SOW will be scoped separately via formal Change Requests.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  3. Intellectual Property Rights & Code Ownership
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  We believe in unambiguous, clean ownership rights for our partners:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Client Ownership:</strong> Upon full and final settlement of all milestone invoices, all custom source code, designs, and database assets created specifically for the project transfer completely to the Client.</li>
                  <li><strong>Pre-Existing Frameworks:</strong> TariqTech Limited retains ownership of its proprietary pre-existing utility libraries, boilerplate architectures, and developer accelerators. The Client receives an irrevocable, royalty-free license to use and adapt these components within their product.</li>
                  <li><strong>Client Materials:</strong> The Client retains full intellectual property ownership of all logos, trademarks, database records, and proprietary business materials supplied to us.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  4. Post-Launch Warranty & Maintenance
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  To guarantee absolute confidence, all custom software deployments include a <strong>30-day Post-Launch Warranty</strong> commencing from the live deployment date:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any functional bugs or deviations from the agreed specifications are remedied free of charge during this warranty window.</li>
                  <li>The warranty covers the delivered codebase under standard operating conditions. It excludes disruptions caused by unauthorized modifications by third parties, external server outages, or unexpected third-party API breaking changes.</li>
                  <li>Ongoing system maintenance, scheduled updates, and feature expansions can be arranged through our monthly Service Level Agreements (SLA).</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  5. Confidentiality & Non-Disclosure
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  Both parties agree to treat all exchanged financial records, customer databases, technical architectures, and strategic business plans as strictly confidential information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Neither party shall disclose confidential materials to third parties without prior written consent.</li>
                  <li>TariqTech Limited may mention the project name, general category, and high-level tech stack in its professional portfolio unless the Client requests a formal non-disclosure agreement (NDA).</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="p-8 rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                  6. Governing Law & Dispute Resolution
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#42645f] dark:text-[#cbd5e1] leading-relaxed">
                <p>
                  These Terms and any project engagements are interpreted and governed exclusively in accordance with the laws of the United Republic of Tanzania:
                </p>
                <p>
                  In the event of any contractual ambiguity or disagreement, both parties agree to first engage in good-faith amicable negotiations. If an agreement cannot be reached within thirty (30) days, the dispute shall be submitted to the competent commercial courts located in Dar es Salaam, Tanzania.
                </p>
              </div>
            </section>

            {/* Contact / Inquiries Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#102420] to-[#0A0D14] text-white border border-[#2a8a85]/30 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2.5">
                <Scale className="w-6 h-6 text-[#5fd4ce]" />
                Contract & Legal Inquiries
              </h3>
              <p className="text-sm text-[#d4edea]/85 leading-relaxed mb-6 max-w-2xl">
                Have specific contractual requirements, need an NDA signed prior to project evaluation, or wish to review our standard MSA? Contact our business team.
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
