import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import GoogleTranslateScript from '@/components/GoogleTranslateScript';
import FloatingWidgets from '@/components/FloatingWidgets';

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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'TariqTech Limited | Digital Solutions That Create Real Impact',
    description:
      'We help businesses transform ideas into reliable digital products through software development, AI solutions, and system integrations.',
    url: 'https://tariqtechlimited.com',
    siteName: 'TariqTech Limited',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TariqTech Limited - Digital Solutions That Create Real Impact',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TariqTech Limited | Digital Solutions That Create Real Impact',
    description:
      'Bespoke software development, AI business automation, and high-performance digital products.',
    images: ['/og-image.png'],
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
      <body className="min-h-screen flex flex-col font-sans bg-[#dfeff2] dark:bg-[#0d1e1c] text-[#1a3a35] dark:text-[#e3f5f3] selection:bg-[#2a8a85] selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <FloatingWidgets />
            <GoogleTranslateScript />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
