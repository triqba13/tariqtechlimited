import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TariqTech Limited | Digital Solutions That Create Real Impact',
  description:
    'TariqTech Limited delivers software development, mobile apps, AI automation, custom software, and system integrations for ambitious businesses.',
  metadataBase: new URL('https://tariqtechlimited.com'),
  keywords: [
    'TariqTech Limited',
    'Software Development Tanzania',
    'Custom Software',
    'Website Development Dar es Salaam',
    'Mobile App Development',
    'AI Automation',
    'SaaS Development',
    'System Integration Tanzania',
  ],
  authors: [{ name: 'TariqTech Limited' }],
  openGraph: {
    title: 'TariqTech Limited | Digital Solutions That Create Real Impact',
    description:
      'We help businesses transform ideas into reliable digital products through software development, AI solutions, and system integrations.',
    url: 'https://tariqtechlimited.com',
    siteName: 'TariqTech Limited',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TariqTech Limited | Digital Solutions That Create Real Impact',
    description:
      'Bespoke software development, AI business automation, and high-performance digital products.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#F6FDF4] text-slate-900 selection:bg-sky-500 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
