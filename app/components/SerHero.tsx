'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { supportData } from '../../lib/data';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const textRevealVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SupportSection() {
  const { heading, subheading } = supportData;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        margin: '0 auto', // Cleaned up margin
        fontFamily: "'Century Gothic', Futura, sans-serif",
        textAlign: 'center',
        color: '#000000',
        /* Added top padding (160px) and removed bottom padding (0px)
        */
        padding: '160px 20px 0px 20px', 
      }}
    >
      {/* Text Content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.h1
          variants={textRevealVariants}
          style={{
            fontSize: 'clamp(20px, 5vw, 40px)', 
            fontWeight: 700,
            lineHeight: 1.05,
            margin: '10px 0 35px 0',
            letterSpacing: '-0.03em',
            color: '#000000',
            whiteSpace: 'pre-line',
            background: 'linear-gradient(180deg, #000 60%, #666 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {heading}
        </motion.h1>

        <motion.p
          variants={textRevealVariants}
          style={{
            fontSize: 'clamp(16px, 3vw, 20px)', // Fixed font-size logic for accessibility
            lineHeight: 1.6,
            color: '#444444',
            margin: '0 auto',
            maxWidth: '900px',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            /* Ensures no extra margin-bottom is pushing the layout 
            */
            paddingBottom: '0px',
          }}
        >
          {subheading}
        </motion.p>
      </div>
    </motion.section>
  );
}