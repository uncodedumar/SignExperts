"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-[#0000CC] relative overflow-hidden flex flex-col items-center justify-center text-center px-6">
      
      {/* Background Subtle Pattern - Adds texture without height */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Sub-header */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="block text-white text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-4 opacity-80"
        >
          Project Inquiry
        </motion.span>

        {/* Main Title - Tightened leading and margin */}
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white text-2xl md:text-4xl font-light tracking-tight md:tracking-wide leading-snug mb-8"
        >
          Consult with our architectural specialists for <br className="hidden md:block" />
          <span className="font-semibold italic">custom sizing</span> and material selection.
        </motion.h2>

        {/* Button Group - Compact and High-Contrast */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <button className="group relative px-12 py-4 bg-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] rounded-full overflow-hidden">
            {/* Hover Slide Effect */}
            <div className="absolute inset-0 w-0 bg-black group-hover:w-full transition-all duration-500 ease-out" />
            
            <span className="relative z-10 text-[#0000CC] group-hover:text-white font-bold text-sm uppercase tracking-[0.15em] transition-colors duration-500">
              Get A Free Quote
            </span>
          </button>
        </motion.div>
      </div>

    </section>
  );
};

export default FinalCTA;