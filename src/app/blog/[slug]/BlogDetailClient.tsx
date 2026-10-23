'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BlogPost, BLOG_POSTS } from '@/lib/blogsData';
import { 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Check, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Clock 
} from 'lucide-react';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.65 1.65 1.65 0 0 0-1.65 1.65 1.65 1.65 0 0 0 1.65 1.66m1.39 9.97v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function BlogDetailClient({ post }: { post: BlogPost }) {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Find other posts for recommendations
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#dfeff2] dark:bg-[#0A0D14] text-[#1a3a35] dark:text-[#f8fafc] transition-colors duration-300">
      <Navbar />

      <main className="flex-grow pt-8 pb-20 sm:pt-12 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-[#42645f] dark:text-[#94a3b8] truncate">
            <Link href="/" className="hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#1a3a35] dark:text-white truncate">
              {post.title.length > 40 ? `${post.title.slice(0, 40)}...` : post.title}
            </span>
          </div>

          {/* Main 2-Column Grid matching Screenshot 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* ============================================================== */}
            {/* LEFT SIDEBAR (Sticky Author Card + Socials + Newsletter)       */}
            {/* ============================================================== */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
              
              {/* Card 1: Author Card ("More About Me") */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-[#102420]/80 backdrop-blur-md border border-[#1a3a35]/15 dark:border-white/10 shadow-sm">
                
                {/* Avatar & Title Row */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#2a8a85] dark:border-[#5fd4ce] shadow-md">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#1a3a35] dark:text-white">
                      {post.author}
                    </h3>
                    <p className="text-xs text-[#2a8a85] dark:text-[#5fd4ce] font-semibold mt-0.5">
                      {post.authorRole}
                    </p>
                  </div>
                </div>

                {/* Short Bio */}
                <p className="text-xs sm:text-[13px] text-[#42645f] dark:text-[#94a3b8] leading-relaxed mb-5">
                  {post.authorBio}
                </p>

                {/* More About Me Link */}
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2a8a85] dark:text-[#5fd4ce] hover:underline"
                >
                  <span>MORE ABOUT ME</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

              </div>

              {/* Follow Me Section */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a3a35] dark:text-white block">
                  FOLLOW ME
                </span>
                <div className="flex items-center gap-3">
                  
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Tariq on LinkedIn"
                    className="w-10 h-10 rounded-full bg-white/80 dark:bg-[#151f2e] text-[#1a3a35] dark:text-white flex items-center justify-center border border-[#1a3a35]/10 dark:border-white/10 shadow-sm hover:scale-110 hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-all"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Tariq on GitHub"
                    className="w-10 h-10 rounded-full bg-white/80 dark:bg-[#151f2e] text-[#1a3a35] dark:text-white flex items-center justify-center border border-[#1a3a35]/10 dark:border-white/10 shadow-sm hover:scale-110 hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-all"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/tariqtech.limited/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Tariq on Instagram"
                    className="w-10 h-10 rounded-full bg-white/80 dark:bg-[#151f2e] text-[#1a3a35] dark:text-white flex items-center justify-center border border-[#1a3a35]/10 dark:border-white/10 shadow-sm hover:scale-110 hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-all"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>

                  {/* Direct Email */}
                  <a
                    href="mailto:support@tariqtechlimited.com"
                    aria-label="Email Tariq"
                    className="w-10 h-10 rounded-full bg-white/80 dark:bg-[#151f2e] text-[#1a3a35] dark:text-white flex items-center justify-center border border-[#1a3a35]/10 dark:border-white/10 shadow-sm hover:scale-110 hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-all"
                  >
                    <Mail className="w-4 h-4" />
                  </a>

                </div>
              </div>

              {/* Card 2: Join the Newsletter Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#0F1721] text-white border border-white/10 shadow-xl space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#5fd4ce]">
                  <Sparkles className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold tracking-tight">
                    Join the Newsletter
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed mt-1">
                    Get the latest insights on software architecture, Big Data, and AI automation delivered directly to your inbox.
                  </p>
                </div>

                {subscribed ? (
                  <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Thank you for subscribing!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3 pt-1">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#5fd4ce] transition-all"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#e8b54b] hover:bg-[#d4a23b] text-[#0A0D14] text-xs font-bold transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>

            </aside>

            {/* ============================================================== */}
            {/* RIGHT MAIN CONTENT AREA                                        */}
            {/* ============================================================== */}
            <article className="lg:col-span-8 space-y-10">
              
              {/* Hero Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-xl border border-[#1a3a35]/15 dark:border-white/10 bg-slate-900 group">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 850px"
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {/* Category Pill Tag Overlay */}
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              {/* Title & Metadata Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-[#42645f] dark:text-[#94a3b8]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#2a8a85] dark:text-[#5fd4ce]" />
                    {post.dateFull}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#2a8a85] dark:text-[#5fd4ce]" />
                    {post.readTime}
                  </span>
                  <span>•</span>
                  <span>By {post.author}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight leading-[1.18]">
                  {post.title}
                </h1>
              </div>

              {/* Article Content Sections */}
              <div className="space-y-10 pt-4">
                {post.sections.map((section, idx) => (
                  <section key={idx} className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight">
                      {section.heading}
                    </h2>

                    {section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-base sm:text-lg text-[#42645f] dark:text-[#cbd5e1] leading-relaxed font-normal"
                      >
                        {p}
                      </p>
                    ))}

                    {/* Callout Quote Box */}
                    {section.callout && (
                      <div className="my-6 p-6 rounded-2xl bg-[#5fd4ce]/10 dark:bg-[#5fd4ce]/10 border-l-4 border-[#2a8a85] dark:border-[#5fd4ce] text-[#1a3a35] dark:text-white text-base font-medium italic leading-relaxed">
                        &ldquo;{section.callout}&rdquo;
                      </div>
                    )}

                    {/* Bullet Points */}
                    {section.bullets && (
                      <div className="space-y-2.5 my-4">
                        {section.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start gap-3 p-3.5 rounded-xl bg-white/60 dark:bg-[#102420]/60 border border-[#1a3a35]/10 dark:border-white/10"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#2a8a85] dark:text-[#5fd4ce] shrink-0 mt-1" />
                            <p className="text-sm sm:text-base text-[#1a3a35] dark:text-[#cbd5e1] leading-relaxed">
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Key Takeaway Box */}
                    {section.keyTakeaway && (
                      <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-[#102420] to-[#0A0D14] text-white border border-[#2a8a85]/30 shadow-md">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#5fd4ce] block mb-1">
                          Key Takeaway
                        </span>
                        <p className="text-sm sm:text-base text-white/90 font-semibold leading-relaxed">
                          {section.keyTakeaway}
                        </p>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Bottom Share & Consultation Banner */}
              <div className="pt-8 border-t border-[#1a3a35]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2a8a85] dark:text-[#5fd4ce] hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to all insights</span>
                </Link>

                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-[#151f2e] border border-[#1a3a35]/15 dark:border-white/10 text-xs font-semibold text-[#1a3a35] dark:text-white shadow-sm hover:scale-105 active:scale-95 transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
                </button>
              </div>

              {/* Related Articles Strip */}
              {otherPosts.length > 0 && (
                <div className="pt-10 border-t border-[#1a3a35]/10 dark:border-white/10 space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1a3a35] dark:text-white">
                    Related Articles
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {otherPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="p-6 rounded-2xl bg-white/70 dark:bg-[#102420]/70 border border-[#1a3a35]/10 dark:border-white/10 hover:shadow-md transition-all group block"
                      >
                        <span className="text-[11px] font-bold text-[#2a8a85] dark:text-[#5fd4ce] uppercase tracking-wider block mb-2">
                          {related.category}
                        </span>
                        <h4 className="font-bold text-base text-[#1a3a35] dark:text-white group-hover:text-[#2a8a85] dark:group-hover:text-[#5fd4ce] transition-colors leading-snug line-clamp-2 mb-2">
                          {related.title}
                        </h4>
                        <span className="text-xs text-[#42645f] dark:text-[#94a3b8] font-medium flex items-center gap-1">
                          Read article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </article>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
