"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const processSteps = [
  {
    id: "01",
    description: "We take the time to understand your business before creating the right sign for your space. We're happy to meet you on site or at our showroom.",
  },
  {
    id: "02",
    description: "Each sign is designed and crafted at your local location by our graphic designers and expert production team.",
  },
  {
    id: "03",
    description: "A dedicated account manager keeps you informed every step of the way, providing personal service and ensuring a hassle-free process.",
  },
  {
    id: "04",
    description: "We will contact you to arrange collection or to schedule a time for our specialists to install your sign.",
  },
];

// Smooth staggered container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Elegant slide-up for items
const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(4px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.215, 0.61, 0.355, 1] // Custom cubic-bezier for smoothness
    } 
  },
};

export default function SignProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      ref={ref}
      className="bg-white py-24 px-8 md:px-16 lg:px-24 font-sans text-black overflow-hidden"
    >
      {/* Main Headings */}
      <div className="mb-24 space-y-6">
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]"
        >
          Art Comes First – <br /> 
          <span className="text-gray-400 italic">Creative Above All</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl md:text-4xl font-light tracking-wide border-l-4 border-black pl-6"
        >
          Process at Sign Experts
        </motion.h2>
      </div>

      {/* Process Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-4"
      >
        {processSteps.map((step, index) => (
          <div key={step.id} className="relative flex group">
            {/* Content Container 
                - Added px-12 for generous spacing from the lines
                - Increased bottom padding for vertical rhythm
            */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col pt-4 pb-16 px-6 md:px-12 w-full"
            >
              <span className="text-5xl md:text-6xl font-extralight mb-10 block text-gray-300 group-hover:text-black transition-colors duration-500">
                {step.id}
              </span>
              <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                {step.description}
              </p>
            </motion.div>

            {/* Vertical Divider - Perfectly positioned between the padded containers */}
            {index !== processSteps.length - 1 && (
              <motion.div 
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-gray-200 origin-top"
              />
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}