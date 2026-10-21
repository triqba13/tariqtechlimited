'use client';

import React from 'react';

export default function IntegrationsSection() {
  // SVG Logo icons for all requested tools plus Claude and MongoDB
  const integrations = [
    // Row 1
    {
      name: 'n8n',
      row: 1,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-300 group-hover:rotate-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5" cy="12" r="2.5" />
          <circle cx="12" cy="7" r="2.5" />
          <circle cx="12" cy="17" r="2.5" />
          <circle cx="19" cy="12" r="2.5" />
          <path d="M7.5 12h2M14.5 12h2M6.8 10.2l3.4-3.4M6.8 13.8l3.4 3.4M13.8 8.8l3.4 3.4M13.8 15.2l3.4-3.4" />
        </svg>
      ),
      label: 'n8n',
      boldText: true,
    },
    {
      name: 'zapier',
      row: 1,
      icon: (
        <span className="font-extrabold text-2xl sm:text-3xl leading-none">_</span>
      ),
      label: 'zapier',
      boldText: true,
    },
    {
      name: 'supabase',
      row: 1,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#3ECF8E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.32 14.288a.396.396 0 0 0 .314.636H10v9.043c0 .324.37.493.614.279l11.055-14.257a.396.396 0 0 0-.307-.635z" />
        </svg>
      ),
      label: 'supabase',
      boldText: true,
    },
    {
      name: 'google-cloud',
      row: 1,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
        </svg>
      ),
      label: 'Google Cloud',
      boldText: false,
    },
    {
      name: 'anthropic',
      row: 1,
      icon: null,
      label: 'ANTHROP\\C',
      boldText: true,
      customClass: 'tracking-wider font-mono font-black text-lg sm:text-xl md:text-2xl',
    },

    // Row 2
    {
      name: 'nextjs',
      row: 2,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.885 18.232l-6.38-8.233v8.233H9.72V6.268h1.785l6.38 8.233V6.268h1.785v11.964h-1.785z" />
        </svg>
      ),
      label: 'NEXT.js',
      boldText: true,
    },
    {
      name: 'docker',
      row: 2,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 00.186-.186V9.006a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.93 0h2.12a.185.185 0 00.184-.186V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.186V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.186V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185M23.953 11.83c-.565-.377-1.428-.483-2.226-.307-.376-.879-1.04-1.63-1.92-2.179l-.547-.34-.33.553a5.53 5.53 0 00-.77 2.082 12.183 12.183 0 00-6.17-1.65H0c.01 1.096.38 2.164 1.037 3.018a7.042 7.042 0 003.54 2.508c2.909 1.11 6.559 1.11 9.468 0a7.03 7.03 0 003.54-2.508c.553-.72 1.344-1.19 2.226-1.32.748-.11 1.554.08 2.226.545l.487.337.33-.497c.58-.874.887-1.895.887-2.942 0-.102 0-.2-.01-.299l-.02-.128z" />
        </svg>
      ),
      label: 'docker',
      boldText: true,
    },
    {
      name: 'deepseek',
      row: 2,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 text-[#1E6FFF]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.49 0-4.5-2.01-4.5-4.5S10.51 7.5 13 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z" />
        </svg>
      ),
      label: 'deepseek',
      boldText: true,
    },
    {
      name: 'stripe',
      row: 2,
      icon: null,
      label: 'stripe',
      boldText: true,
      customClass: 'font-extrabold text-xl sm:text-2xl tracking-tight',
    },
    {
      name: 'gmail',
      row: 2,
      icon: (
        <span className="font-bold text-red-500 font-sans text-xl sm:text-2xl">M</span>
      ),
      label: 'Gmail',
      boldText: true,
    },
    {
      name: 'wordpress',
      row: 2,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387L3.438 9.387A11.897 11.897 0 0112 0zm8.01 5.922c1.233 1.687 1.97 3.771 1.97 6.078 0 3.238-1.528 6.118-3.9 7.973L20.01 5.922zM12 24c-.663 0-1.314-.055-1.948-.16l4.28-12.44 4.382 12.003C16.89 23.77 14.52 24 12 24zm-6.938-2.614A11.954 11.954 0 010 12c0-.735.074-1.453.21-2.148l5.852 11.534z" />
        </svg>
      ),
      label: 'WordPress.com',
      boldText: false,
    },

    // Row 3
    {
      name: 'meta',
      row: 3,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.3c-1.4-2.5-3.1-3.9-5-3.9C3.1 6.4 0 9.5 0 13.4s3.1 7 7 7c2.5 0 4.6-1.5 5-3.3.4 1.8 2.5 3.3 5 3.3 3.9 0 7-3.1 7-7s-3.1-7-7-7c-1.9 0-3.6 1.4-5 3.9zm-5 7.8c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7c1.7 0 3.1 1.2 4.1 3.2-1 2-2.4 3.2-4.1 3.2zm10 0c-1.7 0-3.1-1.2-4.1-3.2 1-2 2.4-3.2 4.1-3.2 2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7z" />
        </svg>
      ),
      label: 'Meta',
      boldText: true,
    },
    {
      name: 'woocommerce',
      row: 3,
      icon: null,
      label: 'Woo',
      boldText: true,
      customClass: 'font-black text-2xl sm:text-3xl tracking-tight',
    },
    {
      name: 'shopify',
      row: 3,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#95BF47]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.2 5.5l-2.1-1.3c-.3-.2-.7-.1-.9.2l-.5.8c-.3-.3-.8-.5-1.3-.5-.4 0-.8.1-1.1.4l-.4-.4c-.3-.3-.7-.4-1.1-.4-.6 0-1.1.3-1.4.8l-1.3-1.1c-.3-.3-.8-.3-1.1 0l-7.3 6.6c-.3.3-.4.7-.2 1.1l4.4 12.3c.2.5.6.8 1.1.8h10.5c.6 0 1.1-.4 1.2-1l1.8-16.1c.1-.6-.2-1.1-.6-1.3zm-6.8 2.3c0-.4.3-.7.7-.7.4 0 .7.3.7.7v1.8h-1.4V7.8zm-2.8 0c0-.4.3-.7.7-.7.4 0 .7.3.7.7v1.8h-1.4V7.8z" />
        </svg>
      ),
      label: 'shopify',
      boldText: true,
    },
    {
      name: 'mongodb',
      row: 3,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#00ED64]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C11.5 1.5 7 9.5 7 14c0 3 2 5.5 5 6.5V24c0-1.5 5-9.5 5-14 0-3-2-5.5-5-6.5V0z" />
        </svg>
      ),
      label: 'MongoDB',
      boldText: true,
    },
    {
      name: 'claude',
      row: 3,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#CC785C]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>
      ),
      label: 'Claude',
      boldText: true,
    },
  ];

  const row1 = integrations.filter((item) => item.row === 1);
  const row2 = integrations.filter((item) => item.row === 2);
  const row3 = integrations.filter((item) => item.row === 3);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#eef7f6]/40 dark:bg-[#0a0f18]/40" id="integrations">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        
        {/* Section Heading & Subtitle */}
        <div className="max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a3a35] dark:text-[#f8fafc] tracking-tight mb-4">
            Powerful Integrations
          </h2>
          <p className="text-base sm:text-lg text-[#42645f] dark:text-[#94a3b8] leading-relaxed">
            We connect your favorite tools and platforms to create seamless automation workflows.
          </p>
        </div>

        {/* Logos Container: 3 Centered Rows with generous spacing and interactive lift + scale */}
        <div className="flex flex-col gap-10 sm:gap-14 items-center justify-center">
          
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {row1.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 sm:gap-3 text-[#1a3a35]/85 dark:text-slate-200 hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 cursor-pointer select-none group"
              >
                {item.icon}
                <span className={`text-base sm:text-lg md:text-xl ${item.boldText ? 'font-bold' : 'font-medium'} ${item.customClass || ''}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {row2.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 sm:gap-3 text-[#1a3a35]/85 dark:text-slate-200 hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 cursor-pointer select-none group"
              >
                {item.icon}
                <span className={`text-base sm:text-lg md:text-xl ${item.boldText ? 'font-bold' : 'font-medium'} ${item.customClass || ''}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {row3.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 sm:gap-3 text-[#1a3a35]/85 dark:text-slate-200 hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 cursor-pointer select-none group"
              >
                {item.icon}
                <span className={`text-base sm:text-lg md:text-xl ${item.boldText ? 'font-bold' : 'font-medium'} ${item.customClass || ''}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
