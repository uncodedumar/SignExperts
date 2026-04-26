"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    /* Section BG is Blue */
    <section className="w-full py-20 bg-white flex items-center justify-center px-6">
      
      {/* Inner Area: White BG, 80% Width, Rounded Borders, Left Aligned Content */}
      <div className="relative z-10 w-full md:w-[80%] bg-[#101b55] rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden">
        
        {/* Background Subtle Pattern restricted to the white box */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0000CC 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 text-left">
          {/* Sub-header */}
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="block text-[#ffb92d] text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-4 opacity-80"
          >
            Project Inquiry
          </motion.span>

          {/* Main Title - Text color changed to Blue for contrast on White */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-2xl md:text-4xl font-light tracking-tight md:tracking-wide leading-snug"
          >
            Consult with our architectural specialists for <br className="hidden md:block" />
            <span className="font-semibold italic">custom sizing</span> and material selection.
          </motion.h2>
        </div>

        {/* Button Group - Positioned to the Right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-shrink-0"
        >
          <button className="group relative px-12 py-5 bg-[#0000CC] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,204,0.3)] rounded-full overflow-hidden">
            {/* Hover Slide Effect */}
            <div className="absolute inset-0 w-0 bg-[#ffb92d] group-hover:w-full transition-all duration-500 ease-out" />
            
            <span className="relative z-10 text-white font-bold text-sm uppercase tracking-[0.15em] transition-colors duration-500">
              Get A Free Quote
            </span>
          </button>
        </motion.div>
      </div>

    </section>
  );
};

export default FinalCTA;