"use client";
import React from 'react';
import { Lexend } from 'next/font/google';
import { Mail, Phone, ArrowUpRight, Map, Square } from 'lucide-react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';

const lexend = Lexend({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] 
});

const SignageHero = () => {
  const { scrollYProgress } = useScroll();
  const textColor = useTransform(scrollYProgress, [0, 0.3], ["#9ca3af", "#000000"]);

  // Enhanced "Forced Click" animation for the main CTA
  const mainBtnVariants: Variants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  const pingVariants: Variants = {
    animate: {
      scale: [1, 1.4],
      opacity: [0.5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants: Variants = {
    animate: (i: number) => ({
      y: [0, -20, 0],
      rotate: [0, i * 10, 0],
      transition: {
        duration: 5 + i,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section className={`${lexend.className} bg-white relative overflow-hidden min-h-[600px] flex flex-col justify-center px-8 md:px-20 py-16 text-[#000000]`}>
      
      {/* --- BACKGROUND GRAPHICS --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* CSS Grid Pattern - Covers 100% of the container perfectly */}
        <div 
          className="absolute inset-0 opacity-[0.1]" 
          style={{
            backgroundImage: `linear-gradient(#101b55 1px, transparent 1px), linear-gradient(90deg, #101b55 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Wayfinding Floating Signs */}
        <motion.div 
  custom={1}
  variants={floatingVariants}
  animate="animate"
  // Added rotate-180 to the className
  className="absolute top-[15%] right-[12%] text-[#FF0000] hidden md:block "
>
  <ArrowUpRight size={120} strokeWidth={1} />
</motion.div>

        <motion.div 
          custom={2}
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-[20%] left-[8%] text-black opacity-15 hidden md:block"
        >
          <Map size={90} strokeWidth={1} />
        </motion.div>

        <motion.div 
          custom={3}
          variants={floatingVariants}
          animate="animate"
          className="absolute top-[25%] left-[45%] text-[#FFC119] opacity-40"
        >
          <Square size={32} fill="#FFC119" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          {/* Main Headline */}
          <motion.h1 
            style={{ color: textColor }}
            whileHover={{ fontStyle: "italic" }}
            className="text-[38px] md:text-[64px] leading-[1.1] font-bold tracking-tight mb-8 max-w-[850px] cursor-default transition-all duration-300"
          >
            Put your best foot forward.
            Better signs, every time,
            across the United States.
          </motion.h1>

          {/* Subtext */}
          <p className="text-[16px] md:text-[18px] opacity-80 leading-relaxed max-w-[80%] mb-12 font-normal">
         <span className="text-[20px] md:text-[24px] font-bold"> Signage is more than hardware—it’s your brand’s silent ambassador.</span><br></br> We blend architectural precision with visual storytelling to create custom signs that build trust, capture attention, and turn every passerby into a loyal customer.
          </p>

          {/* Action Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="relative">
              {/* Eye-catching Ping Effect */}
              <motion.div 
                variants={pingVariants}
                animate="animate"
                className="absolute inset-0 bg-[#FFC119] rounded-xl z-0"
              />
              
              <motion.button 
                variants={mainBtnVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="relative z-10 bg-[#FFC119] hover:bg-[#e5ac16] text-white px-10 py-5 rounded-xl text-[20px] font-bold shadow-[0_10px_20px_rgba(255,193,25,0.3)] border-2 border-white/20"
              >
                Get A Quote
              </motion.button>
            </div>

            <div className="flex gap-4">
              <motion.a 
                href="mailto:contact@example.com" 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-black p-4 rounded-full text-white shadow-md flex items-center justify-center transition-colors hover:bg-[#101b55]"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a 
                href="tel:+123456789" 
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="bg-black p-4 rounded-full text-white shadow-md flex items-center justify-center transition-colors hover:bg-[#101b55]"
              >
                <Phone size={24} fill="white" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignageHero;