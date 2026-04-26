"use client";

import React from 'react';
import { motion, type Variants } from 'framer-motion';

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

        {/* Right Card Side */}
        <div className="relative">
          {/* Floating Card Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ 
              y: [0, -15, 0], // Floating effect
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
            className="relative bg-black rounded-[2.5rem] p-12 aspect-square flex flex-col justify-between shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden group"
          >
            {/* Decorative Circles with Staggered Entrance */}
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  className="w-12 h-12 rounded-full border border-white/10 bg-[#3D2B24] z-0" 
                />
              ))}
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="ml-8 self-center text-[10px] text-gray-400 tracking-[0.2em] uppercase font-medium"
              >
                10K+ reviews
              </motion.span>
            </div>

            {/* Large Stat Display with Counter-like feel */}
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h4 className="text-8xl md:text-9xl font-light text-white mb-2 tracking-tighter">
                  10<span className="text-[#D4AF37]">+</span>
                </h4>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-gray-400 text-lg tracking-[0.1em] uppercase"
                >
                  Awards Gained
                </motion.p>
              </motion.div>
            </div>

            {/* Moving Glow Gradient */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1] 
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#D4AF37]/20 blur-[120px] rounded-full" 
            />
          </motion.div>

          {/* Background Accent Element */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -top-10 -left-10 w-32 h-32 border border-gray-200 rounded-full -z-10"
          />
        </div>

      </div>
    </section>
  );
};

export default FinancialFrontiers;