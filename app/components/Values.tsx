"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const processSteps = [
  {
    title: "Consultative Discovery",
    description: "We dive deep into your brand’s DNA before the first sketch is made. Our team meets you on-site to ensure the final product aligns with your environment.",
  },
  {
    title: "Precision Production",
    description: "Your signage is designed by award-winning artists and crafted by our expert team using state-of-the-art technology and premium materials.",
  },
  {
    title: "Project Stewardship",
    description: "Experience a high-touch process with a dedicated account manager providing real-time updates and handling all logistical complexities.",
  },
  {
    title: "Expert Installation",
    description: "Our certified specialists ensure your sign is mounted securely and positioned for maximum visibility and long-term brand impact.",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(8px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.215, 0.61, 0.355, 1] 
    } 
  },
};

export default function SignProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section 
      ref={ref}
      className="bg-white py-24 px-8 md:px-16 lg:px-24 font-sans text-black overflow-hidden"
    >
      {/* Header Section */}
      <div className="mb-20 space-y-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.85] uppercase"
        >
          Art Comes First. <br /> 
          <span className="text-gray-300 italic font-light lowercase tracking-normal">Creative above all.</span>
        </motion.h1>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={isInView ? { width: "100px" } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[2px] bg-black"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] font-medium text-gray-500"
        >
          Our Process at Sign Experts
        </motion.p>
      </div>

      {/* Process Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12"
      >
        {processSteps.map((step, index) => (
          <div key={index} className="relative group flex">
            <motion.div 
              variants={itemVariants}
              className="flex flex-col pr-8 lg:pr-12"
            >
              {/* Animated Accent Line */}
              <div className="w-8 h-[1px] bg-gray-200 mb-8 group-hover:w-full group-hover:bg-black transition-all duration-700 ease-in-out" />
              
              <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight uppercase">
                {step.title}
              </h3>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-600 font-light">
                {step.description}
              </p>
            </motion.div>

            {/* Vertical Divider for Desktop */}
            {index !== processSteps.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-12 bottom-0 w-[1px] bg-gray-100" />
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}