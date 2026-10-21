import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | TariqTech Limited - Software, Mobile & AI Solutions',
  description:
    'Start your digital transformation with TariqTech Limited. Select your services, scope your project, and get a tailored proposal within 24 hours.',
  keywords: [
    'Contact TariqTech',
    'Book a Strategy Call',
    'Software Development Tanzania',
    'Web Development Dar es Salaam',
    'Mobile App Inquiry',
    'AI Automation Consultation',
  ],
  openGraph: {
    title: 'Contact Us | TariqTech Limited',
    description:
      'Start your digital transformation with TariqTech Limited. Select your services and receive a tailored proposal within 24 hours.',
    url: 'https://tariqtechlimited.com/contact',
    siteName: 'TariqTech Limited',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
