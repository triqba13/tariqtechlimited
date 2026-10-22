import { Suspense } from 'react';
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | TariqTech Limited: Software, Mobile Apps & AI in Tanzania',
  description:
    'Get in touch with TariqTech Limited in Dar es Salaam, Tanzania. Inquire about bespoke software development, mobile apps, Big Data Analytics, and AI business automation.',
  keywords: [
    'Contact TariqTech',
    'Software Company Dar es Salaam',
    'Tanzania Software Developers',
    'TariqTech Limited Phone Number',
    'TariqTech Email',
    'Hire Full-Stack Developers Tanzania',
    'Custom Software Consultation East Africa',
  ],
  alternates: {
    canonical: 'https://tariqtechlimited.com/contact',
  },
  openGraph: {
    title: 'Contact Us | TariqTech Limited: Digital Solutions That Create Real Impact',
    description:
      'Schedule a consultation or request a project proposal for custom software, mobile apps, Big Data Analytics, and AI automation in Dar es Salaam, Tanzania.',
    url: 'https://tariqtechlimited.com/contact',
    siteName: 'TariqTech Limited',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | TariqTech Limited',
    description:
      'Schedule a consultation or request a project proposal for custom software, mobile apps, Big Data Analytics, and AI automation.',
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#dfeff2] dark:bg-[#0A0D14]" />}>
      <ContactClient />
    </Suspense>
  );
}
