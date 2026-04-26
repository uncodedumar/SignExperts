"use client";
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    /* Section BG is White - Reduced py-10 to py-6 */
    <section className="w-full py-6 bg-white flex items-center justify-center px-6">
      
      {/* Inner Area: Reduced p-8/md:p-16 to p-6/md:p-10 and adjusted rounded corners */}
      <div className="relative z-10 w-full md:w-[80%] bg-[#101b55] rounded-[1.5rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden">
        
        {/* Background Subtle Pattern restricted to the box */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', 
              backgroundSize: '40px 40px' 
            }} 
          />
        </div>

        <div className="relative z-10 text-left">
          {/* Sub-header */}
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-[#ffb92d] text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-2 opacity-80"
          >
            Project Inquiry
          </motion.span>

          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-xl md:text-2xl font-light tracking-tight md:tracking-wide leading-snug"
          >
            Consult with our architectural specialists for <br className="hidden md:block" />
            <span className="font-semibold italic">custom sizing</span> and material selection.
          </motion.h2>
        </div>

        {/* Button Group - Positioned to the Right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex-shrink-0 relative z-20"
        >
          <Link href="/#contact-form" className="group relative inline-block px-10 py-4 bg-[#ffb92d] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,204,0.3)] rounded-full overflow-hidden">
            {/* Hover Slide Effect */}
            <div className="absolute inset-0 w-0 bg-[#091242] group-hover:w-full transition-all duration-500 ease-out" />
            
            <span className="relative z-10 text-white group-hover:text-white font-bold text-sm uppercase tracking-[0.15em] transition-colors duration-500">
               Get A Quote
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;