"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SignageSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 bg-white font-sans">
      <div className="w-[90%] flex flex-col gap-6">
        
        {/* Image Container with Hover Effects */}
        <motion.div 
          className="relative w-full aspect-[21/9] overflow-hidden rounded-[20px] shadow-2xl cursor-pointer"
          whileHover="hover"
          initial="rest"
        >
          <motion.div
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="w-full h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop" 
              alt="Restaurant Signage"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for contrast */}
            <motion.div 
              className="absolute inset-0 bg-black/10"
              variants={{
                rest: { opacity: 0.2 },
                hover: { opacity: 0 }
              }}
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="w-full px-2">
          <p className="text-[#1a1a1a] text-lg md:text-xl font-medium leading-relaxed tracking-tight">
            Your signs should work as hard as you do. Quality signs attract new customers, 
            brand your location and turn foot traffic into sales.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default SignageSection;