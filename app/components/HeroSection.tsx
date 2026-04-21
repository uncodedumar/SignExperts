"use client";

import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          crossOrigin="anonymous" 
          className="h-full w-full object-cover"
          preload="auto"
          onPlay={() => console.log("Video is playing")}
          onError={(e) => console.error("Video failed to load", e)}
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay: Adjusted to bg-black/60 for a solid dark feel */}
        <div className="absolute inset-0 bg-black/20 z-[1]" />
      </div>

      {/* Content Container (Ensure z-index is higher than the overlay) */}
      <div className="relative z-10 flex h-full items-center justify-center">
        {/* Your text or CTA would go here */}
      </div>
    </section>
  );
}