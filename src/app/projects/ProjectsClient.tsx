'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PROJECTS, CATEGORIES, CategoryFilter } from '@/lib/projectsData';
import { Search, ArrowRight, FolderKanban, Sparkles } from 'lucide-react';

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Category check
      const matchesCategory =
        selectedCategory === 'All' ||
        project.category === selectedCategory ||
        project.allCategories.includes(selectedCategory);

      // Search query check
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.shortDesc.toLowerCase().includes(q) ||
        project.techStack.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#dfeff2] dark:bg-[#0A0D14] text-[#1a3a35] dark:text-[#f8fafc] transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {/* ============================================================== */}
        {/* 1. HERO HEADER WITH GRID ACCENT                                */}
        {/* ============================================================== */}
        <section className="relative pt-16 pb-14 sm:pt-20 sm:pb-16 border-b border-[#1a3a35]/10 dark:border-white/10 overflow-hidden">
          {/* Subtle Grid Background Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.06] dark:opacity-[0.12] pointer-events-none"
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
              <span className="text-[#1a3a35] dark:text-white">Projects</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1a3a35] dark:text-white tracking-tight mb-4">
              Our Projects
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#42645f] dark:text-[#94a3b8]">
              Explore our portfolio of custom software systems, business CRMs, and high-impact digital products.
            </p>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. SEARCH & FILTER CONTROLS                                    */}
        {/* ============================================================== */}
        <section className="py-8 sm:py-10 border-b border-[#1a3a35]/10 dark:border-white/10 bg-white/40 dark:bg-[#0F1721]/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
              
              {/* Search Input Box */}
              <div className="relative w-full lg:w-80 shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#42645f] dark:text-[#94a3b8]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects by title, tech.."
                  className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white dark:bg-[#151f2e] border border-[#1a3a35]/15 dark:border-white/10 text-sm text-[#1a3a35] dark:text-white placeholder:text-[#42645f]/70 dark:placeholder:text-[#94a3b8]/70 focus:outline-none focus:ring-2 focus:ring-[#2a8a85] dark:focus:ring-[#5fd4ce] transition-all shadow-sm"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all shadow-sm ${
                        isActive
                          ? 'bg-[#142d29] dark:bg-[#289b83] text-white shadow-md scale-[1.02]'
                          : 'bg-white dark:bg-[#151f2e] text-[#1a3a35] dark:text-white/80 border border-[#1a3a35]/15 dark:border-white/10 hover:border-[#2a8a85] dark:hover:border-[#5fd4ce] hover:text-[#2a8a85] dark:hover:text-[#5fd4ce]'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. PROJECTS GRID SHOWCASE                                      */}
        {/* ============================================================== */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {filteredProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group relative h-[360px] sm:h-[400px] rounded-3xl overflow-hidden border border-[#1a3a35]/15 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 block cursor-pointer"
                  >
                    {/* Background Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
                    />

                    {/* Ambient Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent group-hover:from-black/80 transition-colors duration-300" />

                    {/* Category Pill Top Left */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider bg-black/50 backdrop-blur-md text-white border border-white/20">
                        {project.category}
                      </span>
                    </div>

                    {/* Frosted Glass Overlay Card at Bottom */}
                    <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-black/60 dark:bg-black/75 backdrop-blur-md border border-white/20 p-5 transition-all duration-300 ease-out shadow-2xl flex flex-col justify-end">
                      
                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                        {project.projectName || project.title}
                      </h3>

                      {/* Expandable Description on Hover */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
                        <div className="overflow-hidden">
                          <p className="text-xs sm:text-sm text-slate-100/90 leading-relaxed pt-2.5 drop-shadow-sm line-clamp-2">
                            {project.shortDesc}
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-3">
                            {project.techStack.slice(0, 4).map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[11px] font-semibold bg-white/15 text-white px-2.5 py-0.5 rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Explore more label and arrow */}
                      <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#e8b54b] group-hover:text-white transition-colors mt-3">
                        <span>Explore more</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>

                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              /* Clean Empty State when category has no projects */
              <div className="max-w-md mx-auto text-center py-20 px-6 rounded-3xl border border-dashed border-[#1a3a35]/20 dark:border-white/15 bg-white/30 dark:bg-[#0F1721]/30">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#dfeff2] dark:bg-[#151f2e] text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center mb-4">
                  <FolderKanban className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-[#1a3a35] dark:text-white mb-2">
                  No projects in &quot;{selectedCategory}&quot;
                </h3>
                <p className="text-xs sm:text-sm text-[#42645f] dark:text-[#94a3b8] mb-6 leading-relaxed">
                  We are actively engineering innovative solutions in this domain. Check back soon or view all projects.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#142d29] dark:bg-[#289b83] text-white text-xs font-bold hover:shadow-md transition-all active:scale-95"
                >
                  View All Projects
                </button>
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
