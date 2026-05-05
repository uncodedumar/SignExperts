"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

const POSTER_SRC = "/AA.webp";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (video.readyState < 2) {
              video.load();
            }
            void video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-auto md:h-screen w-full bg-black overflow-hidden md:min-h-0"
    >
      {/* Mobile: static poster only (no hero video download). */}
      <div className="relative md:hidden w-full min-h-[45vh] max-h-[85vh] aspect-[4/3]">
        <Image
          src={POSTER_SRC}
          alt="Professional signage by Sign Experts"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 z-[1]" />
      </div>

      {/* Desktop: video with poster; plays when section is in view */}
      <div className="hidden md:block absolute inset-0 z-0">
        <video
          ref={videoRef}
          poster={POSTER_SRC}
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        >
          <source src="/hero1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/20 z-[1]" />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none" />
    </section>
  );
}
