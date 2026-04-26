"use client";

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    filter: "brightness(1.1)",
    boxShadow: "0px 10px 20px rgba(255, 193, 7, 0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.95 },
};

const ActionSection = () => {
  return (
    <motion.section
      className="flex items-center justify-between max-w-full mx-auto px-6 py-10 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Side: Get A Quote Button */}
      <Link href="/#contact-form" passHref>
        <motion.button
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
          className="px-8 py-4 bg-[#FFC107] text-white font-semibold rounded-full text-lg shadow-sm cursor-pointer"
        >
          Get A Quote
        </motion.button>
      </Link>

      {/* Right Side: Icon Buttons */}
      <div className="flex items-center gap-4">
        <motion.a
          href="mailto:sign.eexperts@gmail.com"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center justify-center w-14 h-14 bg-[#FFC107] rounded-full text-white shadow-sm"
        >
          <Mail size={24} strokeWidth={2.5} />
        </motion.a>

        <motion.a
          href="tel:+19293928337"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center justify-center w-14 h-14 bg-[#FFC107] rounded-full text-white shadow-sm"
        >
          <Phone size={24} strokeWidth={2.5} />
        </motion.a>
      </div>
    </motion.section>
  );
};

export default ActionSection;