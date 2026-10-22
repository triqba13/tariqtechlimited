'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Project } from '@/lib/projectsData';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Code2, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Share2, 
  Check, 
  Sparkles, 
  Layers,
  X,
  Maximize2
} from 'lucide-react';

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [copied, setCopied] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#dfeff2] dark:bg-[#0A0D14] text-[#1a3a35] dark:text-[#f8fafc] transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {/* ============================================================== */}
        {/* 1. PROJECT HEADER                                              */}
        {/* ============================================================== */}
        <section className="relative pt-14 pb-12 sm:pt-20 sm:pb-16 border-b border-[#1a3a35]/10 dark:border-white/10 overflow-hidden">
          {/* Subtle Grid Accent */}
          <div 
            className="absolute inset-0 opacity-[0.05] dark:opacity-[0.10] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#1a3a35 1px, transparent 1px), radial-gradient(#1a3a35 1px, #dfeff2 1px)',
              backgroundSize: '36px 36px',
              backgroundPosition: '0 0, 18px 18px'
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Breadcrumbs */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#42645f] dark:text-[#94a3b8] mb-4">
              <Link href="/" className="hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-colors">
                Projects
              </Link>
              <span>/</span>
              <span className="text-[#1a3a35] dark:text-white truncate max-w-[200px] sm:max-w-none">
                {project.breadcrumbName || project.title}
              </span>
            </div>

            {/* Project Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a3a35] dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
              {project.title}
            </h1>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. MAIN TWO-COLUMN BODY LAYOUT                                 */}
        {/* ============================================================== */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* -------------------------------------------------------- */}
              {/* LEFT SIDEBAR: META DETAILS & SUPPORT BOX                 */}
              {/* -------------------------------------------------------- */}
              <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
                
                {/* Card 1: Project Metadata Card */}
                <div className="rounded-3xl bg-white dark:bg-[#0F1721] p-6 sm:p-7 border border-[#1a3a35]/15 dark:border-white/10 shadow-sm space-y-5">
                  {/* Project Name */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#42645f] dark:text-[#94a3b8]">
                      Project Name
                    </span>
                    <h2 className="text-base font-extrabold text-[#1a3a35] dark:text-white mt-1">
                      {project.projectName || project.title}
                    </h2>
                  </div>

                  <hr className="border-[#1a3a35]/10 dark:border-white/10" />

                  {/* Category */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#42645f] dark:text-[#94a3b8]">
                      Category
                    </span>
                    <p className="text-sm font-bold text-[#2a8a85] dark:text-[#5fd4ce] mt-1">
                      {project.categoryLabel || project.category}
                    </p>
                  </div>

                  <hr className="border-[#1a3a35]/10 dark:border-white/10" />

                  {/* Date */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#42645f] dark:text-[#94a3b8]">
                      Date
                    </span>
                    <p className="text-sm font-semibold text-[#1a3a35] dark:text-white mt-1">
                      {project.date}
                    </p>
                  </div>

                  <hr className="border-[#1a3a35]/10 dark:border-white/10" />

                  {/* Tech Stack */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#42645f] dark:text-[#94a3b8] mb-2.5 block">
                      Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#dfeff2]/80 dark:bg-[#151f2e] text-[#1a3a35] dark:text-white border border-[#1a3a35]/10 dark:border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <hr className="border-[#1a3a35]/10 dark:border-white/10" />

                  {/* Links (Live Preview & Source) */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#42645f] dark:text-[#94a3b8] mb-2 block">
                      Links
                    </span>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#142d29] dark:bg-[#289b83] hover:bg-[#1f403a] text-white text-xs font-bold shadow-sm transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <div className="px-4 py-2.5 rounded-xl bg-[#dfeff2]/50 dark:bg-[#151f2e] text-[#42645f] dark:text-[#94a3b8] text-xs font-medium">
                        Private Client System
                      </div>
                    )}

                    <div className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#dfeff2]/60 dark:bg-[#151f2e] text-[#1a3a35] dark:text-white text-xs font-semibold border border-[#1a3a35]/10 dark:border-white/10">
                      <span>Source Code</span>
                      <span className="text-[11px] text-[#42645f] dark:text-[#94a3b8]">Client Protected</span>
                    </div>
                  </div>

                  <hr className="border-[#1a3a35]/10 dark:border-white/10" />

                  {/* Share & Copy Link */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#42645f] dark:text-[#94a3b8] mb-2.5 block">
                      Share:
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCopyLink}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#dfeff2]/70 dark:bg-[#151f2e] hover:bg-[#2a8a85] dark:hover:bg-[#289b83] hover:text-white transition-all text-xs font-medium"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-3.5 h-3.5" />
                            <span>Copy Link</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>

                {/* Card 2: "We're here help!" Support Box */}
                <div className="rounded-3xl bg-[#0F1721] text-white p-6 sm:p-7 shadow-xl border border-white/10 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#5fd4ce]">
                    <Sparkles className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight">
                      We&apos;re here help!
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed mt-1">
                      Need assistance? We&apos;re here to help with support, guidance, and resources. Reach out to us anytime.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <a
                      href="tel:+255744588248"
                      className="flex items-center gap-2.5 w-full px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all text-xs font-bold text-white"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#5fd4ce]" />
                      <span>+255 744 588 248</span>
                    </a>

                    <a
                      href="mailto:support@tariqtechlimited.com"
                      className="flex items-center gap-2.5 w-full px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all text-xs font-bold text-white truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#5fd4ce] shrink-0" />
                      <span className="truncate">support@tariqtechlimited.com</span>
                    </a>
                  </div>
                </div>

              </aside>

              {/* -------------------------------------------------------- */}
              {/* RIGHT MAIN CONTENT AREA                                  */}
              {/* -------------------------------------------------------- */}
              <div className="lg:col-span-8 space-y-12">
                
                {/* Main Hero Image Preview */}
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-xl border border-[#1a3a35]/15 dark:border-white/10 bg-slate-900 group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 750px"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
                </div>

                {/* Section: Overview */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight">
                    Overview
                  </h2>
                  <div className="text-base text-[#42645f] dark:text-[#94a3b8] leading-relaxed font-normal whitespace-pre-line space-y-4">
                    {project.overview}
                  </div>
                </div>

                {/* Section: Key Features */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight">
                    Key Features &amp; Architecture
                  </h2>
                  <div className="space-y-3">
                    {project.keyFeatures.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-white/60 dark:bg-[#0F1721] border border-[#1a3a35]/10 dark:border-white/10 shadow-sm"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#2a8a85] dark:text-[#5fd4ce] shrink-0 mt-0.5" />
                        <p className="text-sm text-[#1a3a35] dark:text-white/90 leading-relaxed">
                          {feat}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Engineering */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight">
                    Engineering
                  </h2>
                  <div className="text-base text-[#42645f] dark:text-[#94a3b8] leading-relaxed font-normal whitespace-pre-line space-y-4">
                    {project.engineering}
                  </div>
                </div>

                {/* Section: My Contribution */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight">
                    My Contribution
                  </h2>
                  <div className="text-base text-[#42645f] dark:text-[#94a3b8] leading-relaxed font-normal whitespace-pre-line space-y-4">
                    {project.myContribution}
                  </div>
                </div>

                {/* ============================================================== */}
                {/* GALLERY SECTION (Visual walkthrough with zoom)                 */}
                {/* ============================================================== */}
                <div className="space-y-6 pt-6 border-t border-[#1a3a35]/10 dark:border-white/10">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight">
                      Project Gallery
                    </h2>
                    <p className="text-sm text-[#42645f] dark:text-[#94a3b8] mt-1">
                      Interface previews and screenshots from the system. Click to expand.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {project.gallery.map((imgSrc, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveImage(imgSrc)}
                        className="group relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 border border-[#1a3a35]/15 dark:border-white/10 shadow-md cursor-pointer"
                      >
                        <Image
                          src={imgSrc}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                          <Maximize2 className="w-6 h-6" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation back to all projects */}
                <div className="pt-8">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2a8a85] dark:text-[#5fd4ce] hover:underline"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to all projects</span>
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. LIGHTBOX MODAL FOR GALLERY PREVIEW                          */}
        {/* ============================================================== */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-5xl w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage}
                alt="Enlarged Project Preview"
                fill
                className="object-contain bg-black/90"
              />
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 4. READY TO START YOUR PROJECT?                                */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 text-center border-t border-[#1a3a35]/10 dark:border-white/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight mb-4">
              Ready to start your project?
            </h2>
            <p className="text-base sm:text-lg text-[#42645f] dark:text-[#94a3b8] mb-8 font-normal">
              Let&apos;s collaborate to build something amazing together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-[#142d29] dark:bg-[#289b83] hover:bg-[#1c3d38] dark:hover:bg-[#32b399] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
