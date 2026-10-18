'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, CheckCircle2, Handshake, Briefcase, Layers } from 'lucide-react';

type CategoryType = 'all' | 'project' | 'client' | 'partner';

export default function OurWorkSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<CategoryType>('all');

  const items = [
    {
      id: 1,
      category: 'client',
      title: 'Apex Logistics & Cargo Portal',
      industry: 'Logistics & Supply Chain • Tanzania',
      desc: 'Multi-branch freight tracking portal enabling real-time consignment lookup, automated SMS status dispatches, and electronic waybill management.',
      delivered: 'Custom Web Application, Tracking Dashboard, Automated SMS Integration',
      tags: ['Web Application', 'SMS Gateway', 'PostgreSQL'],
      serviceId: 'custom_software',
    },
    {
      id: 2,
      category: 'project',
      title: 'EduSphere Academic Portal',
      industry: 'School Management • East Africa',
      desc: 'Comprehensive school administration platform integrating fee reconciliations with mobile payment gateways (M-Pesa), student gradebooks, and parent portals.',
      delivered: 'Integrated Portal, Mobile Payment Hook, Role-Based Access Controls',
      tags: ['Custom Software', 'M-Pesa API', 'Analytics Dashboard'],
      serviceId: 'custom_software',
    },
    {
      id: 3,
      category: 'partner',
      title: 'CloudBridge Africa',
      industry: 'Cloud Infrastructure & Managed DevOps',
      desc: 'Infrastructure collaboration facilitating high-availability cloud deployments, database replication, and managed backend scaling across East Africa.',
      delivered: 'Secure Cloud Hosting Architecture, Zero-Downtime Migration Protocols',
      tags: ['Cloud Infrastructure', 'SaaS Hosting', 'High Availability'],
      serviceId: 'saas',
    },
    {
      id: 4,
      category: 'client',
      title: 'Safari Horizon Lodges',
      industry: 'Tourism & Hospitality • Arusha',
      desc: 'High-converting safari booking and room reservation website featuring interactive itineraries, multi-currency switcher, and instant calendar availability.',
      delivered: 'Corporate Website, Custom Booking Calendar, SEO Optimization',
      tags: ['Corporate Website', 'Booking Engine', 'SEO'],
      serviceId: 'website',
    },
    {
      id: 5,
      category: 'project',
      title: 'QuickPay Merchant Terminal',
      industry: 'Fintech & Retail Point-of-Sale',
      desc: 'Android mobile application enabling local store attendants to generate instant QR receipts and reconcile cash and mobile wallet collections in real time.',
      delivered: 'Native Android App, Offline-First Sync, Transaction Reporting',
      tags: ['Mobile App', 'Android', 'Payment Gateways'],
      serviceId: 'mobile_app',
    },
    {
      id: 6,
      category: 'partner',
      title: 'Nexus Payment Network',
      industry: 'Fintech Integration Alliance',
      desc: 'Direct technical integration channel ensuring fast-track settlement onboarding, low latency API connectivity, and secure mobile money transactions.',
      delivered: 'Standardized Payment Webhooks, High-Security Tokenization',
      tags: ['API Integration', 'Fintech', 'Webhooks'],
      serviceId: 'api_integration',
    },
  ];

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter((item) => item.category === filter);

  return (
    <section className="py-20 md:py-28 relative" id="work">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>{t('work_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t('work_title')}{' '}
            <span className="text-sky-500">{t('work_title_highlight')}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t('work_subtitle')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-14">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              filter === 'all'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{t('filter_all')}</span>
          </button>

          <button
            type="button"
            onClick={() => setFilter('project')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              filter === 'project'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>{t('filter_projects')}</span>
          </button>

          <button
            type="button"
            onClick={() => setFilter('client')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              filter === 'client'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{t('filter_clients')}</span>
          </button>

          <button
            type="button"
            onClick={() => setFilter('partner')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              filter === 'partner'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300'
            }`}
          >
            <Handshake className="w-4 h-4" />
            <span>{t('filter_partners')}</span>
          </button>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider ${
                      item.category === 'client'
                        ? 'bg-sky-100 text-sky-700'
                        : item.category === 'partner'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    {item.category === 'client'
                      ? 'Our Client'
                      : item.category === 'partner'
                      ? 'Strategic Partner'
                      : 'Project'}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Verified</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <div className="text-xs text-sky-600 font-semibold mb-4">
                  {item.industry}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="bg-[#F6FDF4] border border-slate-200/60 rounded-xl p-3.5 mb-6 text-xs text-slate-700 leading-relaxed">
                  <strong className="block text-slate-900 font-bold mb-1">
                    {item.category === 'partner'
                      ? t('work_collab_label')
                      : t('work_deliverable_label')}
                  </strong>
                  {item.delivered}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-7 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`#book?service=${item.serviceId}`}
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1.5"
                >
                  <span>
                    {item.category === 'partner'
                      ? t('work_learn_btn')
                      : t('work_similar_btn')}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
