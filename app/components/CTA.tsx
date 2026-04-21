"use client";
import React from 'react';
import { motion } from 'framer-motion';

const GetAQuoteCTA = () => {
  return (
    <section className="w-full flex justify-center py-16 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-[90%] bg-[#080E33] rounded-[32px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_20px_50px_rgba(8,14,51,0.3)] overflow-hidden"
      >
        
        {/* Animated Background Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-72 h-72 bg-[#FFC107] opacity-10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-72 h-72 bg-blue-500 opacity-10 blur-[100px] rounded-full pointer-events-none" />

        {/* Left Side: Text Content */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#FFC107] text-5xl md:text-7xl font-bold tracking-tighter leading-none"
          >
            Get a Quote.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-4 mt-4 w-full justify-center md:justify-start"
          >
            <span className="text-gray-300 text-lg md:text-xl font-light tracking-wide uppercase">
              Get your sign done by us
            </span>
            {/* The horizontal decorative line with a pulse animation */}
            <div className="relative h-[2px] bg-gray-700 w-24 md:w-40 hidden sm:block overflow-hidden">
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFC107] to-transparent"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Animated Button */}
        <div className="relative z-10">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 193, 7, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFC107] text-[#080E33] px-10 py-5 rounded-2xl text-xl md:text-2xl font-bold transition-all flex items-center gap-3 group"
          >
            Join Sign Experts
            <motion.span 
              animate={{ x: [0, 5, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.button>
        </div>

      </motion.div>
    </section>
  );
};

export default GetAQuoteCTA;