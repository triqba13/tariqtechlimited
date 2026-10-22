import { Suspense } from 'react';
import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Our Projects & Portfolio | TariqTech Limited: Verified Digital Systems',
  description:
    'Explore verified digital platforms, Admissions CRMs, enterprise management software, and AI automation case studies delivered by TariqTech Limited.',
  keywords: [
    'TariqTech Projects',
    'MtishbiScholar Portal',
    'Software Portfolio Tanzania',
    'Custom CRM Developers East Africa',
    'Enterprise Web Applications',
    'Mobile App Case Studies Dar es Salaam',
  ],
  alternates: {
    canonical: 'https://tariqtechlimited.com/projects',
  },
  openGraph: {
    title: 'Our Projects & Portfolio | TariqTech Limited',
    description:
      'Discover bespoke software systems, education admissions portals, and cloud digital solutions engineered by TariqTech Limited.',
    url: 'https://tariqtechlimited.com/projects',
    siteName: 'TariqTech Limited',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Projects & Portfolio | TariqTech Limited',
    description:
      'Explore verified software engineering case studies and digital architectures built by TariqTech Limited.',
  },
};

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#dfeff2] dark:bg-[#0A0D14]" />}>
      <ProjectsClient />
    </Suspense>
  );
}
