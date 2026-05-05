"use client";

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';

const FinancialFrontiers = () => {
  const pillars = [
    { id: "04", title: "Masterful Craftsmanship" },
    { id: "05", title: "High-Impact Visibility" },
    { id: "06", title: "Seamless Concept-to-Completion" },
    { id: "07", title: "Distinguished Brand Identity" }
  ];

  // Animation variants for the container to stagger children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-white py-20 px-6 md:px-20 font-sans text-[#2D2926] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content Side */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col space-y-12"
        >
          {/* Title with word-split-like feel */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-medium tracking-tight leading-tight max-w-md"
          >
           Your Partner in 
           <span className="text-[#D4AF37]"> Visual </span>Communications
          </motion.h2>

          <div className="space-y-0">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={pillar.id}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                {/* Animated Horizontal Line - Grows from left to right */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "circOut" }}
                  style={{ originX: 0 }}
                  className={`h-[1px] w-full mb-6 ${index === 0 ? 'bg-[#D4AF37]' : 'bg-gray-300'}`}
                />
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-baseline space-x-4 pb-8 transition-all"
                >
                  <h3 className="text-2xl md:text-3xl font-normal transition-colors group-hover:text-black">
                    {pillar.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ originX: 0 }}
              className="h-[1px] w-full bg-gray-300" 
            />
          </div>

          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl"
          >
            We start with your goals—whether it's building brand awareness, launching a new product, or increasing your visibility—and develop a comprehensive strategy to meet them. You don’t just receive signs; you get a plan that leverages our expertise in digital displays, content creation, graphic design and more, to help you connect with your audience and drive results.
          </motion.p>
        </motion.div>

        {/* Right Image Side */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ 
              y: [0, -15, 0], 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative rounded-[2.5rem] aspect-square shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden group border border-gray-100"
          >
            {/* Main Image Replacement */}
            <Image
              src="/allimages/2.webp"
              alt="Visual Communications Excellence"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle Overlay Gradient for Depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />

            {/* Floating Info Badge over Image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 left-10 right-10 p-6 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-between"
            >
              <div>
                <p className="text-[#D4AF37] font-bold text-2xl">10+</p>
                <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-500">Awards Gained</p>
              </div>
              <div className="h-8 w-[1px] bg-gray-200" />
              <div>
                <p className="text-black font-bold text-2xl">10K+</p>
                <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-500">Reviews</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Background Accent Element */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -top-10 -right-10 w-32 h-32 border border-[#D4AF37]/30 rounded-full -z-10"
          />
        </div>

      </div>
    </section>
  );
};

export default FinancialFrontiers;