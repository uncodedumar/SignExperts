"use client";
import React from 'react';
import { Lexend } from 'next/font/google';
import { Mail, Phone } from 'lucide-react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';

const lexend = Lexend({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] 
});

const SignageHero = () => {
  // Setup for scroll-synced color change
  const { scrollYProgress } = useScroll();
  const textColor = useTransform(scrollYProgress, [0, 0.3], ["#9ca3af", "#000000"]);

  // Pulse animation variants for buttons
  const pulseVariants: Variants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    },
    hover: { 
      scale: 1.1,
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className={`${lexend.className} bg-white min-h-[500px] flex flex-col justify-center px-8 md:px-20 py-16 text-[#000000]`}>
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Headline with Scroll Color and Hover Italic */}
        <motion.h1 
          style={{ color: textColor }}
          whileHover={{ fontStyle: "italic" }}
          className="text-[56px] md:text-[84px] leading-[1.05] font-bold tracking-tight mb-8 max-w-[900px] cursor-default transition-all duration-300"
        >
          Put your best foot forward.
          Better signs, every time,
          across the United States.
        </motion.h1>

        {/* Subtext */}
        <p className="text-[18px] md:text-[20px] leading-relaxed max-w-[600px] mb-12 font-normal">
          We have signage solutions for all industries. Our network of 
          stores across the US have been working hard to help 
          business's bounce back after the pandemic.
        </p>

        {/* Action Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Main Button with Pulse & Hover */}
          <motion.button 
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="bg-[#FFC119] hover:bg-[#e5ac16] text-white px-10 py-5 rounded-xl text-[22px] font-medium shadow-lg"
          >
            Get A Quote
          </motion.button>

          {/* Contact Icons with Pulse & Hover */}
          <div className="flex gap-4">
            <motion.a 
              href="mailto:contact@example.com" 
              variants={pulseVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="bg-[#FFC119] p-4 rounded-full text-white shadow-md flex items-center justify-center"
            >
              <Mail size={28} />
            </motion.a>
            <motion.a 
              href="tel:+123456789" 
              variants={pulseVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="bg-[#FFC119] p-4 rounded-full text-white shadow-md flex items-center justify-center"
            >
              <Phone size={28} fill="white" />
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SignageHero;