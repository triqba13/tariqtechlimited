'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WhoWeServeSection() {
  const personas = [
    {
      id: 'startups',
      title: 'Startups & Entrepreneurs',
      desc: 'Turning bold ideas into viable digital products and launch-ready applications with scalable architecture.',
      image: '/pictures/Startups & Entrepreneurs.jpg',
    },
    {
      id: 'smb',
      title: 'Small & Medium Businesses',
      desc: 'Improving operations, automating repetitive work, and reaching more customers with high-conversion web channels.',
      image: '/pictures/Small & Medium Businesse.jpg',
    },
    {
      id: 'established',
      title: 'Established Companies',
      desc: 'Building reliable custom management systems and connecting disparate business tools for operational efficiency.',
      image: '/pictures/Established Companies.jpg',
    },
    {
      id: 'international',
      title: 'International Clients',
      desc: 'Delivering digital solutions across markets with dependable remote engineering and seamless communication.',
      image: '/pictures/International Clients.jpg',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative" id="who-we-serve">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Left-Aligned without Badge */}
        <div className="text-left max-w-3xl mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3a35] dark:text-[#f8fafc] tracking-tight leading-[1.14] mb-4">
            Engineering Digital Growth for{' '}
            <span className="text-[#2a8a85] dark:text-[#289b83]">Every Stage of Business</span>
          </h2>
          <p className="text-base sm:text-lg text-[#42645f] dark:text-[#94a3b8] leading-relaxed">
            From ambitious startups launching their first digital products to established enterprises scaling operations, <span className="font-bold text-[#2a8a85] dark:text-[#5fd4ce]">we</span> engineer reliable software and intelligent automation designed for your exact growth stage.
          </p>
        </div>

        {/* 4 Interactive Persona Cards in the Same Line: Wider aspect ratio, reduced height for optimal photo framing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {personas.map((persona) => {
            return (
              <Link
                key={persona.id}
                href="/contact"
                className="group relative h-[330px] sm:h-[350px] lg:h-[360px] rounded-3xl overflow-hidden border border-[#1a3a35]/15 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 block cursor-pointer"
              >
                {/* Background Image: Full View, Sharp & Vibrant with Smooth Hover Zoom */}
                <Image
                  src={persona.image}
                  alt={persona.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
                />

                {/* Gentle Ambient Vignette to keep image clearly visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent group-hover:from-black/70 transition-colors duration-300" />

                {/* Translucent Frosted Glass Card: Preserves image visibility beneath while expanding on hover */}
                <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-black/50 dark:bg-black/65 backdrop-blur-md border border-white/20 p-3.5 sm:p-4 transition-all duration-300 ease-out shadow-xl flex flex-col justify-end">
                  
                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                    {persona.title}
                  </h3>

                  {/* Expandable Description (Smooth Grid Transition without Explore more) */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-[13px] text-slate-100/95 leading-relaxed pt-2 drop-shadow-sm">
                        {persona.desc}
                      </p>
                    </div>
                  </div>

                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
