'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  BLOG_POSTS, 
  BLOG_CATEGORIES, 
  BlogCategoryFilter 
} from '@/lib/blogsData';
import { Search, BookOpen } from 'lucide-react';

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<BlogCategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#dfeff2] dark:bg-[#0A0D14] text-[#1a3a35] dark:text-[#f8fafc] transition-colors duration-300">
      <Navbar />

      <main className="flex-grow pt-10 pb-20 sm:pt-16 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ============================================================== */}
          {/* HEADER SECTION (Matching Screenshot 1 & Reference)              */}
          {/* ============================================================== */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a3a35] dark:text-white mb-3">
              Our Insights
            </h1>
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#42645f] dark:text-[#94a3b8] mb-4">
              <Link href="/" className="hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="font-semibold text-[#1a3a35] dark:text-white">Blog</span>
            </div>

            <p className="text-sm sm:text-base text-[#42645f] dark:text-[#94a3b8] leading-relaxed">
              Thoughts, tutorials, and practical insights on software engineering, Big Data Analytics, and AI automation for East African businesses.
            </p>
          </div>

          {/* ============================================================== */}
          {/* SEARCH & CATEGORY FILTER BAR (Matching Screenshot 1 & 4)        */}
          {/* ============================================================== */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 mb-14 pb-8 border-b border-[#1a3a35]/10 dark:border-white/10">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#42645f] dark:text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/80 dark:bg-[#102420]/80 border border-[#1a3a35]/15 dark:border-white/15 text-xs sm:text-sm text-[#1a3a35] dark:text-white placeholder-[#42645f]/70 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2a8a85] dark:focus:ring-[#5fd4ce] backdrop-blur-sm transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {BLOG_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[#2a8a85] dark:bg-[#5fd4ce] text-white dark:text-[#0A0D14] shadow-sm scale-105'
                        : 'bg-white/60 dark:bg-white/5 text-[#42645f] dark:text-[#94a3b8] hover:bg-white/90 dark:hover:bg-white/10 border border-[#1a3a35]/10 dark:border-white/10'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

          </div>

          {/* ============================================================== */}
          {/* BLOG LISTING STREAM (Matching Reference Layout Exactly)         */}
          {/* ============================================================== */}
          {filteredPosts.length > 0 ? (
            <div className="space-y-10">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative pb-10 border-b border-[#1a3a35]/10 dark:border-white/10"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                      
                      {/* Left: Big Date Typography (Smooth hover color transition) */}
                      <div className="md:col-span-2 flex md:flex-col items-baseline md:items-start gap-2 md:gap-0 shrink-0">
                        <span className="text-4xl sm:text-5xl font-bold text-[#1a3a35] dark:text-white tracking-tight leading-none transition-colors duration-200 group-hover:text-[#2a8a85] dark:group-hover:text-[#5fd4ce]">
                          {post.dateDay}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#42645f] dark:text-[#94a3b8] mt-1">
                          {post.dateMonthYear}
                        </span>
                      </div>

                      {/* Right: Article Details */}
                      <div className="md:col-span-10 space-y-2">
                        {/* Heading: Refined font size with smooth brand hover color transition */}
                        <h2 className="text-lg sm:text-xl md:text-[22px] font-bold text-[#1a3a35] dark:text-white tracking-normal leading-snug transition-colors duration-200 group-hover:text-[#2a8a85] dark:group-hover:text-[#5fd4ce]">
                          {post.title}
                        </h2>

                        {/* Excerpt text preserved as is */}
                        <p className="text-sm sm:text-[15px] text-[#42645f] dark:text-[#94a3b8] leading-relaxed font-normal">
                          {post.excerpt}
                        </p>

                        {/* Metadata row matching Screenshot 2 */}
                        <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-[#42645f] dark:text-[#94a3b8]">
                          <div className="flex items-center gap-2 uppercase tracking-wider">
                            <span>/ {post.category.toUpperCase()} /</span>
                          </div>

                          <div className="uppercase tracking-wider font-semibold">
                            <span>{post.author.toUpperCase()}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-3xl bg-white/70 dark:bg-[#102420]/70 border border-[#1a3a35]/15 dark:border-white/10">
              <BookOpen className="w-12 h-12 text-[#2a8a85] dark:text-[#5fd4ce] mx-auto mb-4 opacity-60" />
              <h3 className="text-lg font-bold text-[#1a3a35] dark:text-white mb-2">
                No matching articles found
              </h3>
              <p className="text-sm text-[#42645f] dark:text-[#94a3b8] mb-6">
                Try searching with different keywords or switch the category filter to &apos;All&apos;.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 rounded-full bg-[#2a8a85] dark:bg-[#5fd4ce] text-white dark:text-[#0A0D14] text-xs font-bold transition-transform hover:scale-105"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
