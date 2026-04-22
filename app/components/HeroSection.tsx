"use client";

import React from 'react';

export default function HeroSection() {
  return (
    /* On mobile: height is auto to respect the video's aspect ratio.
       On desktop (md and up): height returns to h-screen for that full-bleed look.
    */
    <section className="relative h-auto md:h-screen w-full bg-black overflow-hidden">
      <div className="relative md:absolute md:inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          crossOrigin="anonymous" 
          /* On mobile: w-full and h-auto keeps the ratio.
             On desktop: h-full and object-cover ensures it fills the screen.
          */
          className="w-full h-auto md:h-full md:object-cover"
          preload="auto"
          onPlay={() => console.log("Video is playing")}
          onError={(e) => console.error("Video failed to load", e)}
        >
          <source src="/hero1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 z-[1]" />
      </div>

      {/* Content Container 
          On mobile, you might want a minimum height or padding 
          so the text doesn't collapse if the video is short.
      */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {/* Your text or CTA would go here */}
      </div>
    </section>
  );
}