'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/blogsData';
import { ArrowRight, BookOpen, Calendar, Clock, Sparkles } from 'lucide-react';

export default function BlogSection() {
  // Take top 3 articles for home page showcase
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="blog">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
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

            <p className="mt-3 text-sm sm:text-base text-[#42645f] dark:text-[#94a3b8] leading-relaxed">
              Explore real-world engineering case studies, data analytics strategies, and intelligent automation lessons built for ambitious African enterprises.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#151f2e] border border-[#1a3a35]/15 dark:border-white/10 text-xs sm:text-sm font-bold text-[#1a3a35] dark:text-white shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all shrink-0"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4 text-[#2a8a85] dark:text-[#5fd4ce]" />
          </Link>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between rounded-3xl bg-white/70 dark:bg-[#102420]/70 backdrop-blur-md border border-[#1a3a35]/10 dark:border-white/10 shadow-sm overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-wider border border-white/20">
                  {post.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-semibold text-[#42645f] dark:text-[#94a3b8]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#2a8a85] dark:text-[#5fd4ce]" />
                      {post.dateFull}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#2a8a85] dark:text-[#5fd4ce]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg sm:text-xl text-[#1a3a35] dark:text-white leading-snug group-hover:text-[#2a8a85] dark:group-hover:text-[#5fd4ce] transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#42645f] dark:text-[#94a3b8] leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1a3a35]/10 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#42645f] dark:text-[#94a3b8]">
                    By {post.author}
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2a8a85] dark:text-[#5fd4ce] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
