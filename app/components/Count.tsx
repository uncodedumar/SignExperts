"use client";

import React, { useEffect, useRef } from "react";
import { useInView, motion, animate, Variants } from "framer-motion";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

// --- Sub-component for the Animated Counter ---
interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

const StatItem = ({ value, suffix = "", label }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "circOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest).toLocaleString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="flex flex-col group cursor-default"
    >
      <div className="text-5xl md:text-6xl font-bold text-[#1a1a1a] flex items-center transition-colors duration-300 group-hover:text-[#ffc107]">
        <span ref={ref}>0</span>
        <span className="text-[#ffc107] ml-1">{suffix}</span>
      </div>
      <span className="text-[#3d2b26] text-xs uppercase tracking-[0.2em] font-semibold mt-3 opacity-70 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </motion.div>
  );
};

// --- Main Section Component ---
export default function AboutSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-['Poppins',sans-serif]">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Header Content */}
        <div className="mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-8xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight"
          >
            About Sign Experts IL
          </motion.h2>
          
          <motion.h3 
            variants={itemVariants}
            className="text-2xl md:text-3xl text-[#634832] font-medium mb-8 italic"
          >
            Your Vision, Rendered in Steel and Light
          </motion.h3>
          
          <motion.p 
            variants={itemVariants}
            className="text-[#3d2b26] max-w-3xl text-lg md:text-xl leading-relaxed opacity-80"
          >
            At Sign Experts IL, we transform your brand identity into physical landmarks. 
            We are a premier signage and visual communication firm dedicated to precision 
            engineering and high-impact design. By merging traditional craftsmanship with 
            modern technology, we ensure your business doesn't just occupy a space—it <span className="text-black font-bold">commands it.</span>
          </motion.p>
        </div>

        {/* Action & Stats Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-16 mt-20">
          
          {/* Button Side */}
          <motion.div variants={itemVariants} className="relative group w-fit">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1a1a1a] text-white px-10 py-5 text-lg font-bold transition-colors hover:bg-[#ffc107] hover:text-[#1a1a1a] z-10 relative"
            >
              Get Started
            </motion.button>
            {/* The decorative accent */}
            <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-[#ffc107] -z-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </motion.div>

          {/* Statistics Side */}
          <div className="flex flex-wrap gap-12 md:gap-20">
            <StatItem value={10} suffix="+" label="Years" />
            <StatItem value={15} suffix="+" label="Experiences" />
            <StatItem value={789} label="Signs Created" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}