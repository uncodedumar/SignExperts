"use client";

import React, { useState, useEffect } from 'react';
import { Bebas_Neue, Lexend } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'] });

const images = [
  '/a.jpg', 
  '/b.jpg',
  '/c.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Variants for the sliding animation
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1, // Keep opacity at 1 to prevent fading
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 1, // Keep opacity at 1 to prevent fading
      zIndex: 0,
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center px-4">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0 } // Ensures no fade color appears
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
        </AnimatePresence>
        
        {/* Dark Overlay for Text Visibility */}
        <div className="absolute inset-0 z-[5] bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white mt-10">
        <h1 className={`${bebas.className} text-5xl md:text-6xl lg:text-[100px] leading-none mb-6 tracking-tight`}>
          The Standards of Signage Excellence
        </h1>
        
        <p className={`${lexend.className} text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10 opacity-90`}>
          We have signage solutions for all industries. Our network of stores 
          across the US have been working hard to help businesses bounce 
          back after the pandemic.
        </p>

        <Link 
  href="/#contact-form" 
  className={`${lexend.className} inline-block bg-[#FFC121] hover:bg-[#e5ae1d] text-white px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wider transition-all transform hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg shadow-yellow-500/20`}
>
  Get a Quote
</Link>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 z-20 p-2 rounded-full border border-white/30 text-white hover:bg-white/20 transition-colors"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-6 z-20 p-2 rounded-full border border-white/30 text-white hover:bg-white/20 transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 flex gap-2 z-20">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 w-8 rounded-full transition-all ${i === currentIndex ? 'bg-[#FFC121]' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
}