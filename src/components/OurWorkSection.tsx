'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, X, ExternalLink } from 'lucide-react';

export default function OurWorkSection() {
  const [modalOpen, setModalOpen] = useState(false);

  // 2 Featured Projects for the main section
  const featuredProjects = [
    {
      id: 'mtishbischolar',
      title: 'Mtishbischolar',
      category: 'Client Project',
      desc: 'Modern academic scholarship and student opportunity discovery platform connecting learners to global education programs.',
      image: '/pictures/projects/mtishbischolar/mtishbi (1).png',
      tags: ['Web Platform', 'Scholarships', 'Next.js', 'PostgreSQL'],
    },
    {
      id: 'tariqtech',
      title: 'Tariq Tech Limited',
      category: 'Flagship Platform',
      desc: 'Official corporate digital platform and technology consultancy portal delivering custom software, AI workflows, and cloud engineering.',
      image: '/pictures/tariqtech.jpg',
      tags: ['Corporate Portal', 'AI Automations', 'Custom Systems', 'TypeScript'],
    },
  ];

  // All projects for the "View All Projects" modal
  const allProjects = [
    ...featuredProjects,
    {
      id: 'apex',
      title: 'Apex Logistics & Cargo Portal',
      category: 'Client Project',
      desc: 'Multi-branch freight tracking portal enabling real-time consignment lookup, automated SMS status dispatches, and electronic waybill management.',
      image: '/pictures/Established Companies.jpg',
      tags: ['Web Application', 'SMS Gateway', 'PostgreSQL'],
    },
    {
      id: 'edusphere',
      title: 'EduSphere Academic Portal',
      category: 'Client Project',
      desc: 'Comprehensive school administration platform integrating fee reconciliations with mobile payment gateways, student gradebooks, and parent portals.',
      image: '/pictures/Small & Medium Businesse.jpg',
      tags: ['Custom Software', 'Mobile Payment API', 'Analytics Dashboard'],
    },
    {
      id: 'cloudbridge',
      title: 'CloudBridge Africa',
      category: 'Strategic Partner',
      desc: 'Infrastructure collaboration facilitating high-availability cloud deployments, database replication, and managed backend scaling.',
      image: '/pictures/International Clients.jpg',
      tags: ['Cloud Infrastructure', 'SaaS Hosting', 'High Availability'],
    },
    {
      id: 'safari',
      title: 'Safari Horizon Lodges',
      category: 'Client Project',
      desc: 'High-converting safari booking and room reservation website featuring interactive itineraries, multi-currency switcher, and instant calendar availability.',
      image: '/pictures/Startups & Entrepreneurs.jpg',
      tags: ['Corporate Website', 'Booking Engine', 'SEO'],
    },
  ];

  return (
    <section className="py-20 md:py-28 relative" id="work">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header: Centered */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4edea] dark:bg-[#0F1721] text-[#1a3a35] dark:text-[#f8fafc] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#1a3a35]/15 dark:border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#2a8a85] dark:bg-[#289b83] animate-pulse" />
            <span>Verified Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3a35] dark:text-[#f8fafc] tracking-tight mb-4">
            Our Work, Clients & Partners
          </h2>
          <p className="text-base sm:text-lg text-[#42645f] dark:text-[#94a3b8] leading-relaxed">
            Real digital products built with precision. We clearly distinguish between client deliveries and strategic partners.
          </p>
        </div>

        {/* 2 Featured Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[840px] mx-auto">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative h-[330px] sm:h-[360px] rounded-3xl overflow-hidden border border-[#1a3a35]/15 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 block cursor-pointer"
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
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-black/55 dark:bg-black/70 backdrop-blur-md border border-white/20 p-5 transition-all duration-300 ease-out shadow-2xl flex flex-col justify-end">
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                  {project.title}
                </h3>

                {/* Expandable Description on Hover */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-sm text-slate-100/90 leading-relaxed pt-2.5 drop-shadow-sm">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-semibold bg-white/15 text-white px-2.5 py-0.5 rounded-md"
                        >
                          {tag}
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

        {/* View All Projects Action Button */}
        <div className="mt-12 sm:mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#142d29] hover:bg-[#1a3a35] dark:bg-[#1a3a35] dark:hover:bg-[#234d47] text-white text-sm font-bold shadow-lg shadow-[#142d29]/20 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>View All Projects</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* View All Projects Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white dark:bg-[#0F1721] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#1a3a35]/15 dark:border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#1a3a35]/10 dark:border-white/10">
              <div>
                <h3 className="text-2xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight">
                  All Featured Projects
                </h3>
                <p className="text-xs sm:text-sm text-[#42645f] dark:text-[#94a3b8] mt-1">
                  Complete portfolio of client solutions, custom software, and digital platforms.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {allProjects.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-50 dark:bg-white/5 border border-[#1a3a35]/10 dark:border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-[#2a8a85]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#d4edea] dark:bg-white/10 text-[#1a3a35] dark:text-[#5fd4ce]">
                        {item.category}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#1a3a35] dark:text-white mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs text-[#42645f] dark:text-[#94a3b8] leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-semibold bg-[#dfeff2] dark:bg-white/10 text-[#1a3a35] dark:text-slate-200 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      onClick={() => setModalOpen(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2a8a85] dark:text-[#5fd4ce] hover:underline"
                    >
                      <span>Inquire about similar solution</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
