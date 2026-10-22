'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslateScript() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,sw,fr,es,it',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // Observer to strictly suppress Google Translate top banner frame and body top displacement
    const suppressBanner = () => {
      const banners = document.querySelectorAll<HTMLElement>(
        '.goog-te-banner-frame, iframe.skiptranslate, body > .skiptranslate'
      );
      banners.forEach((b) => {
        b.style.setProperty('display', 'none', 'important');
        b.style.setProperty('visibility', 'hidden', 'important');
        b.style.setProperty('height', '0px', 'important');
      });

      if (document.body.style.top && document.body.style.top !== '0px') {
        document.body.style.setProperty('top', '0px', 'important');
      }
      if (document.body.style.position && document.body.style.position !== 'static') {
        document.body.style.setProperty('position', 'static', 'important');
      }

      // Ensure any focusable element injected by Google Translate cannot be focused
      const focusables = document.querySelectorAll<HTMLElement>(
        '#google_translate_element select, #google_translate_element a, #google_translate_element input, .goog-te-combo'
      );
      focusables.forEach((el) => {
        el.setAttribute('tabindex', '-1');
      });
    };

    const observer = new MutationObserver(() => {
      suppressBanner();
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style', 'class'],
      childList: true,
    });

    const interval = setInterval(suppressBanner, 300);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        top: '-9999px',
        left: '-9999px',
        overflow: 'hidden',
        opacity: 0,
        pointerEvents: 'none',
      }}
      tabIndex={-1}
      // @ts-ignore inert is supported in React 19 / HTML5
      inert={true}
    />
  );
}
