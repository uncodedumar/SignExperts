"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProductHeroData } from '../../lib/data'; // Adjust path

interface HeroProps {
  data: ProductHeroData;
}

const IlluminatedLetters = ({ data }: HeroProps) => {
  return (
    // Added mt-20 to provide top margin
    <section className="relative py-16 px-6 md:py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-15 ">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            {data.title} <br /> 
          </h1>
          
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-xl">
            <p className="font-medium text-gray-900">
              {data.descriptionMain}
            </p>
            <p className="opacity-80">
              {data.descriptionSecondary}
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-10 py-4 bg-[#ffb92d] text-white font-bold rounded-full shadow-xl hover:bg-[#ffcd45] transition-all"
          >
            <link rel="stylesheet" href="/#contact-form" >
            
            Get A Quote  </link>
          </motion.button>
        </motion.div>

        {/* Right Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-[#5D2E2E]/10 rounded-[2.5rem] blur-3xl group-hover:bg-[#5D2E2E]/20 transition-all duration-700"  />
          
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-gray-200">
            <Image
              src={data.image}
              alt={data.highlightTitle}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default IlluminatedLetters;