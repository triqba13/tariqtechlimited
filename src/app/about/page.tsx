import { Suspense } from 'react';
import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About | TariqTech Limited: Engineering Scalable Digital Products',
  description:
    'Meet Tariq and discover how TariqTech Limited helps ambitious businesses across East Africa transform operational challenges into streamlined, intelligent, and scalable digital solutions.',
  keywords: [
    'About TariqTech',
    'Tariq Software Developer',
    'Big Data Analytics Specialist Tanzania',
    'Full-Stack Developer Dar es Salaam',
    'TariqTech Limited Story',
    'Software Engineering Company East Africa',
  ],
  alternates: {
    canonical: 'https://www.tariqtechlimited.com/about',
  },
  openGraph: {
    title: 'About | TariqTech Limited: We Build Digital Solutions That Matter',
    description:
      'Learn about our engineering philosophy, our focus on Big Data Analytics and AI automation, and our mission to empower African enterprises.',
    url: 'https://www.tariqtechlimited.com/about',
    siteName: 'TariqTech Limited',
    type: 'profile',
    images: ['/pictures/me.JPEG'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | TariqTech Limited',
    description:
      'Discover our software engineering ethos, leadership in Big Data Analytics, and digital solutions for African businesses.',
    images: ['/pictures/me.JPEG'],
  },
};

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#dfeff2] dark:bg-[#0A0D14]" />}>
      <AboutClient />
    </Suspense>
  );
}
