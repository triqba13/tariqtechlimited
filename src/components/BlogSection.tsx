'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/blogsData';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function BlogSection() {
  const [startIndex, setStartIndex] = useState<number>(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? BLOG_POSTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % BLOG_POSTS.length);
  };

  // Show 2 cards at a time as seen in reference design
  const visiblePosts = [
    BLOG_POSTS[startIndex],
    BLOG_POSTS[(startIndex + 1) % BLOG_POSTS.length],
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="blog">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5fd4ce]/15 dark:bg-[#5fd4ce]/20 text-xs font-semibold text-[#2a8a85] dark:text-[#5fd4ce] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Thought Leadership & Case Studies</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3a35] dark:text-[#f8fafc] tracking-tight leading-[1.15]">
              Latest Insights from{' '}
              <span className="text-[#2a8a85] dark:text-[#5fd4ce]">
                TariqTech
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between lg:justify-end gap-5 max-w-xl">
            <p className="text-xs sm:text-sm text-[#42645f] dark:text-[#94a3b8] leading-relaxed">
              Explore real-world engineering case studies, data analytics strategies, and intelligent automation lessons built for ambitious African enterprises.
            </p>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous article"
                className="w-9 h-9 rounded-full bg-white dark:bg-[#151f2e] border border-[#1a3a35]/15 dark:border-white/10 text-[#1a3a35] dark:text-white flex items-center justify-center hover:bg-[#2a8a85] hover:text-white dark:hover:bg-[#5fd4ce] dark:hover:text-[#0c1614] hover:border-transparent transition-all shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next article"
                className="w-9 h-9 rounded-full bg-white dark:bg-[#151f2e] border border-[#1a3a35]/15 dark:border-white/10 text-[#1a3a35] dark:text-white flex items-center justify-center hover:bg-[#2a8a85] hover:text-white dark:hover:bg-[#5fd4ce] dark:hover:text-[#0c1614] hover:border-transparent transition-all shadow-sm active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Posts Grid (Horizontal Cards matching Kepha's style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {visiblePosts.map((post, idx) => (
            <Link
              key={`${post.slug}-${idx}`}
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col sm:flex-row rounded-3xl bg-white dark:bg-[#0c1614] border border-[#1a3a35]/10 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer p-3 sm:p-3.5 gap-4"
            >
              {/* Left Image with Date Badge */}
              <div className="relative w-full sm:w-[190px] md:w-[200px] lg:w-[215px] h-[190px] sm:h-auto min-h-[175px] shrink-0 rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 250px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Dark Date Badge in top left corner */}
                <div className="absolute top-3 left-3 z-10 bg-[#142d29]/90 dark:bg-black/85 backdrop-blur-md text-white px-2.5 py-1.5 rounded-xl flex flex-col items-center justify-center min-w-[42px] border border-white/20 shadow-md">
                  <span className="text-base sm:text-lg font-black leading-none text-white">
                    {post.dateDay}
                  </span>
                  <span className="text-[9px] font-extrabold tracking-wider uppercase text-[#5fd4ce] leading-none mt-1">
                    {post.dateMonthYear.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* Right Content Details */}
              <div className="flex-grow flex flex-col justify-between py-1.5 pr-2 sm:pr-3">
                <div>
                  {/* Category Pill & Author */}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-[#dfeff2] dark:bg-[#152320] text-[#1a3a35] dark:text-[#5fd4ce] text-xs font-bold">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#42645f] dark:text-[#94a3b8] font-medium">
                      By {post.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-base sm:text-lg text-[#1a3a35] dark:text-white leading-snug line-clamp-2 mt-3 group-hover:text-[#2a8a85] dark:group-hover:text-[#5fd4ce] transition-colors">
                    {post.title}
                  </h3>
                </div>

                {/* Bottom Read link and Circular Arrow Button */}
                <div className="flex items-center justify-between gap-3 pt-4 mt-2 border-t border-[#1a3a35]/10 dark:border-white/10">
                  <span className="text-xs sm:text-[13px] font-semibold text-[#1a3a35] dark:text-slate-200 line-clamp-1 group-hover:text-[#2a8a85] dark:group-hover:text-[#5fd4ce] transition-colors">
                    Read {post.title}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-[#142d29] dark:bg-[#1a3a35] group-hover:bg-[#2a8a85] dark:group-hover:bg-[#5fd4ce] text-white group-hover:text-white dark:group-hover:text-[#0c1614] flex items-center justify-center shrink-0 transition-all shadow-sm group-hover:scale-105">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Centered View All Link */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#1a3a35] dark:text-white hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-colors group"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#2a8a85] dark:text-[#5fd4ce]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
