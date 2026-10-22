import { Suspense } from 'react';
import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Our Insights & Tech Blog | TariqTech Limited: Engineering & AI',
  description:
    'Practical articles, engineering case studies, and tutorials on Big Data Analytics, AI process automation, and custom software engineering for East African enterprises.',
  keywords: [
    'TariqTech Blog',
    'Tech Insights Tanzania',
    'Big Data Analytics East Africa',
    'AI Automation Guide Tanzania',
    'Custom Software Development Articles',
    'MtishbiScholar Origin Story',
    'Software Architecture Insights',
  ],
  alternates: {
    canonical: 'https://tariqtechlimited.com/blog',
  },
  openGraph: {
    title: 'Our Insights & Tech Blog | TariqTech Limited',
    description:
      'Explore practical engineering case studies, Big Data strategies, and intelligent automation lessons built for ambitious African enterprises.',
    url: 'https://tariqtechlimited.com/blog',
    siteName: 'TariqTech Limited',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Insights & Tech Blog | TariqTech Limited',
    description:
      'Practical engineering case studies, Big Data strategies, and intelligent automation lessons.',
  },
};

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#dfeff2] dark:bg-[#0A0D14]" />}>
      <BlogClient />
    </Suspense>
  );
}
