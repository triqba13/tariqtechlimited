'use client';

import React from 'react';
import Script from 'next/script';

export default function ElevenLabsWidget() {
  return (
    <>
      {/* ElevenLabs Conversational AI Web Component rendered dynamically */}
      {React.createElement('elevenlabs-convai', {
        'agent-id': 'agent_7801m5pw7eatf4nb8hnhbqysq5fa',
      })}

      {/* Official ElevenLabs Widget Embed Script */}
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </>
  );
}
