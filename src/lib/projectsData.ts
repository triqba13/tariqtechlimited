export interface Project {
  slug: string;
  title: string;
  projectName?: string;
  breadcrumbName?: string;
  categoryLabel?: string;
  shortDesc: string;
  category: 'CRM' | 'SaaS Platforms' | 'Mobile Apps' | 'AI Automation' | 'Web Apps' | 'Websites';
  allCategories: ('CRM' | 'SaaS Platforms' | 'Mobile Apps' | 'AI Automation' | 'Web Apps' | 'Websites')[];
  date: string;
  image: string;
  gallery: string[];
  techStack: string[];
  liveUrl?: string;
  sourceUrl?: string;
  overview: string;
  keyFeatures: string[];
  engineering: string;
  myContribution: string;
}

export const CATEGORIES = [
  'All',
  'CRM',
  'SaaS Platforms',
  'Mobile Apps',
  'AI Automation',
  'Web Apps',
  'Websites',
] as const;

export type CategoryFilter = (typeof CATEGORIES)[number];

export const PROJECTS: Project[] = [
  {
    slug: 'mtishbischolar',
    title: 'MtishbiScholar: Global Higher Education & Admission Management Portal',
    projectName: 'MtishbiScholar Portal',
    breadcrumbName: 'MtishbiScholar',
    categoryLabel: 'CRM (Education Admissions CRM & Student Portal)',
    category: 'CRM',
    allCategories: ['CRM', 'Web Apps'],
    shortDesc:
      'Enterprise-grade digital portal and specialized Admissions CRM designed to streamline international university admissions for East African students applying to top universities abroad.',
    date: 'September 2026',
    image: '/pictures/projects/mtishbischolar/mtishbi (1).png',
    gallery: [
      '/pictures/projects/mtishbischolar/mtishbi (1).png',
      '/pictures/projects/mtishbischolar/mtishbi (2).png',
      '/pictures/mtishb.jpg',
    ],
    techStack: [
      'Next.js 16 (App Router)',
      'React 19',
      'TypeScript 5',
      'Tailwind CSS v4',
      'PostgreSQL',
      'Supabase Cloud',
      'Row-Level Security (RLS)',
      'WebAuthn (Passkeys)',
      'Multi-Factor Auth (2FA)',
      'Vercel Edge',
      'Sentry Monitoring',
      'Resend Email API',
      'Recharts Analytics',
    ],
    liveUrl: 'https://mtishbischolar.com',
    sourceUrl: '',
    overview:
      'MtishbiScholar is a comprehensive, enterprise-grade digital portal and specialized Admissions CRM designed to streamline and modernize international university admissions for East African students applying to top universities across India and abroad. The platform eliminates manual paperwork and chaotic spreadsheet tracking by unifying student applications, biometric authentication, document verification, multi-channel fee submissions, and institutional offer letter management into a unified, secure portal.\n\nOperating as an all-in-one education agency CRM, MtishbiScholar bridges the gap between prospective scholars, university recruitment partners, academic counselors, and finance officers, providing an end-to-end, transparent pipeline from the initial course discovery to visa processing and final university enrollment.',
    keyFeatures: [
      'Self-Service Student Onboarding & Course Explorer: Interactive catalog allowing prospective scholars to browse accredited universities, filter by tuition budgets and degree levels (Bachelor\'s, Master\'s, PhD), evaluate eligibility requirements, and submit applications online.',
      'Biometric & Passwordless Authentication: Integrated WebAuthn (Passkeys) for biometric sign-in (Fingerprint & Face ID), Multi-Factor Authentication (2FA with backup recovery codes), and trusted device recognition for high-assurance account security.',
      'Secure Cloud Document Pipeline: Tamper-proof submission workflows for academic transcripts, passports, and bank receipts with strict server-side MIME and extension validation, protecting storage buckets from malicious payloads.',
      'Finance & Multi-Tier Payment Verification: Real-time fee submission tracking supporting Mobile Money, Bank Transfers, and Cash Office vouchers, equipped with automated transaction reference deduplication to prevent fraudulent submissions.',
      'Administrative Admission & Counselor CRM: Granular role-based portals for Admissions Officers, Finance Reviewers, and Super Admins to manage student pipelines, track status progression, communicate directly, and issue official Offer Letters (PAL).',
      'Visa & Passport Facilitation Tracking: Dedicated milestone tracking modules for international travel documents, visa attestation letters, and pre-departure briefings.',
      'Interactive Business Intelligence & Analytics: Dynamic visual dashboard powered by Recharts, offering administrative staff real-time visibility into application conversion funnels, popular university courses, fee reconciliations, and student intake metrics.',
      'Tiered Rate Limiting & Account Protection: Multi-layer anti-brute-force defense, sliding-window IP throttling, honeypot bot traps, and automated lockout management.',
      'Transactional Email Automation: Real-time email dispatch via Resend API notifying students instantly at every admission milestone, receipt approval, or document review stage.',
    ],
    engineering:
      'The platform is engineered with Next.js 16 (App Router) and React 19, leveraging Server Components for optimal rendering performance, zero client-bundle bloat, and enterprise SEO. The application is deployed and hosted on Vercel\'s Global Edge Network, ensuring instant worldwide content delivery, automated continuous integration/deployment (CI/CD), and serverless execution elasticity.\n\nThe database tier runs on Supabase PostgreSQL protected by rigorous Row-Level Security (RLS) policies and custom PostgreSQL triggers that enforce immutable data isolation and eliminate privilege escalation. Cloud storage handles file uploads with server-side validation against malicious payloads.\n\nSystem health, user traffic, and operational stability are monitored end-to-end using Sentry for real-time error tracking and crash reporting, alongside Google Analytics 4 (GA4) for tracking user engagement and conversion funnels. The entire network footprint is fortified by strict HTTP security headers (HSTS, Anti-Clickjacking X-Frame-Options: DENY, Content-Type Nosniff, and custom Permissions-Policy).',
    myContribution:
      'I architected and implemented the end-to-end full-stack solution: from designing the scalable PostgreSQL database schema, RLS policies, and serverless Next.js API routes, to crafting the responsive, accessible UI with Tailwind CSS v4, Framer Motion, and modern UI components.\n\nI engineered the complete admissions CRM pipeline, implemented biometric authentication (Passkeys) and 2FA, integrated automated transactional email notifications, and established automated cloud storage sanitization. Furthermore, I led a comprehensive 25-point security audit and hardening process ensuring airtight protection against IDOR (Insecure Direct Object References), brute-force password attacks, DoS account lockouts, and file-upload vulnerabilities.',
  },
  {
    slug: 'tariqtech',
    title: 'TariqTech Corporate & Digital Operations Platform',
    shortDesc: 'Flagship corporate technology platform and client operations portal delivering automated workflows, service discovery, and digital consultancy.',
    categoryLabel: 'Corporate Website & Digital Portal',
    category: 'Websites',
    allCategories: ['Websites'],
    date: 'October 15, 2026',
    image: '/pictures/tariqtech.jpg',
    gallery: [
      '/pictures/tariqtech.jpg',
      '/pictures/International Clients.jpg',
      '/pictures/Startups & Entrepreneurs.jpg',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'TailwindCSS',
      'AI Workflows',
      'Cloud Infrastructure',
    ],
    liveUrl: 'https://tariqtechlimited.com',
    sourceUrl: '',
    overview:
      'TariqTech Limited is the flagship corporate digital platform and technology consulting portal. It showcases the company full-spectrum engineering capabilities in custom software systems, AI business automation, and high-performance digital products, while facilitating automated client bookings, multi-language internationalization, and project scoping.',
    keyFeatures: [
      'Multi-language Hybrid Translation engine supporting real-time switching between English, Swahili, French, Spanish, and Italian.',
      'Interactive Strategy Call Booking System with multi-step project scoping and real-time email dispatch.',
      'Dynamic Theme Engine offering seamless switching between deep slate dark mode and soft arctic light mode.',
      'Modern Showcase & Case Studies Portal with responsive interactive UI components and micro-animations.',
      'High-Performance Next.js Architecture achieving near-instant page transitions, zero layout shift, and optimal SEO scores.',
    ],
    engineering:
      'Constructed with Next.js 16 (Turbopack) and TypeScript, the platform prioritizes speed, accessibility, and clean component-driven architecture. State management is coordinated through lightweight React context providers for themes and localized translation, with zero unnecessary external runtime overhead.',
    myContribution:
      'I architected and developed the platform end-to-end. I created the design system, implemented the multi-language hybrid translation infrastructure, engineered the booking API and workflow integration, and optimized the application for production scalability.',
  },
];
