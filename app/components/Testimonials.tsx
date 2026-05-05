"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "You only have one chance to make a great first impression, make yours count with Sign expert service and quality signs.",
    author: "Sarah Jerkins",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    text: "The attention to detail in the UI/UX transition was beyond our expectations. A truly seamless partnership.",
    author: "Marcus Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    text: "Scaling our infrastructure was a breeze. The technical expertise provided was instrumental to our growth.",
    author: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
];

const containerVariants: Variants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 50 : -50,
  }),
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -50 : 50,
    transition: { duration: 0.3 }
  })
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    /* Section BG set to white. 
       Note: The testimonial "cards" logic is internal to the motion.div 
    */
    <section className="relative w-full bg-white py-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[90%] mx-auto px-6">
        
        {/* Navigation Arrows - Adjusted for white background */}
        <button
          type="button"
          onClick={prevStep}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-black/55 hover:text-black transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={40} strokeWidth={1} aria-hidden />
        </button>

        <button
          type="button"
          onClick={nextStep}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-black/55 hover:text-black transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={40} strokeWidth={1} aria-hidden />
        </button>

        <div className="min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              /* This is your Testimonial Card - keeping its 'perfect' look */
              className="flex flex-col items-center text-center space-y-8 bg-white p-8 md:p-12 rounded-3xl"
            >
              {/* Avatar */}
              <motion.div 
                variants={itemVariants}
                className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
              >
                <Image
                  src={testimonials[index].image}
                  alt={testimonials[index].author}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Quote Text */}
              <motion.p 
                variants={itemVariants}
                className="text-2xl md:text-4xl font-light text-black/90 max-w-3xl leading-snug tracking-tight"
              >
                &ldquo;{testimonials[index].text}&rdquo;
              </motion.p>

              {/* Author Name */}
              <motion.h4 
                variants={itemVariants}
                className="text-sm font-bold uppercase spacing-widest tracking-[0.3em] text-black"
              >
                {testimonials[index].author}
              </motion.h4>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
              aria-current={i === index ? "true" : undefined}
              className={`h-1.5 transition-all duration-500 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                i === index ? "bg-black w-8" : "bg-black/10 w-4"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}