'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';

export default function ElevenLabsWidget() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Only load the heavy 458KiB widget after the page has fully painted and the CPU is idle
    const triggerLoad = () => {
      setShouldLoad(true);
      window.removeEventListener('scroll', triggerLoad);
      window.removeEventListener('touchstart', triggerLoad);
      window.removeEventListener('mousemove', triggerLoad);
    };

    window.addEventListener('scroll', triggerLoad, { passive: true, once: true });
    window.addEventListener('touchstart', triggerLoad, { passive: true, once: true });
    window.addEventListener('mousemove', triggerLoad, { passive: true, once: true });

    // Fallback: load after 4 seconds of idle time if no interaction
    let timeoutId: NodeJS.Timeout;
    if ('requestIdleCallback' in window) {
      const idleId = (window as unknown as { requestIdleCallback: (cb: () => void, opts: { timeout: number }) => number }).requestIdleCallback(
        () => triggerLoad(),
        { timeout: 4000 }
      );
      return () => {
        if ('cancelIdleCallback' in window) {
          (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId);
        }
        window.removeEventListener('scroll', triggerLoad);
        window.removeEventListener('touchstart', triggerLoad);
        window.removeEventListener('mousemove', triggerLoad);
      };
    } else {
      timeoutId = setTimeout(triggerLoad, 3500);
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', triggerLoad);
        window.removeEventListener('touchstart', triggerLoad);
        window.removeEventListener('mousemove', triggerLoad);
      };
    }
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      {/* Official ElevenLabs Widget Embed Script loaded lazily */}
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="lazyOnload"
        onLoad={() => setIsReady(true)}
      />

      {/* ElevenLabs Conversational AI Web Component rendered only when ready */}
      {isReady &&
        React.createElement('elevenlabs-convai', {
          'agent-id': 'agent_7801m5pw7eatf4nb8hnhbqysq5fa',
        })}
    </>
  );
}
