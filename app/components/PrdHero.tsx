'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
// Ensure these are exported from your data file
import { PrdData } from '../../lib/data'; 

interface PrdSectionProps {
  slug: string;
}

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

const imageVariants: Variants = {
  hidden: { scale: 1.05, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { 
      duration: 1.5, 
      ease: [0.22, 1, 0.36, 1] 
    },
  },
};

export default function PrdSection({ slug }: PrdSectionProps) {
  // Fetch data based on the slug. 
  // If slug doesn't exist, we fallback to 'design-and-installation' or a null check.
  const content = PrdData[slug] || PrdData["design-and-installation"];

  // Guard clause if no data is found at all
  if (!content) return null;

  const { imageUrl, title, description } = content;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        margin: '0 auto',
        fontFamily: "'Century Gothic', Futura, sans-serif",
        textAlign: 'center',
        color: '#000000',
        padding: '100px 20px',
      }}
    >
      {/* Animated Image Header */}
      <motion.div
        key={`${slug}-image`} // Key helps Framer Motion track changes during navigation
        variants={imageVariants}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.6, ease: "easeOut" }
        }}
        style={{
          width: '90%', 
          maxWidth: '1400px', 
          height: '450px',
          margin: '0 auto 60px auto',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
        }}
      />

      {/* Text Content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.h1
          key={`${slug}-heading`}
          variants={textRevealVariants}
          style={{
            fontSize: 'clamp(40px, 6vw, 68px)', 
            fontWeight: 700,
            lineHeight: 1.05,
            margin: '0 0 35px 0',
            letterSpacing: '-0.03em',
            color: '#000000',
            whiteSpace: 'pre-line',
            background: 'linear-gradient(180deg, #000 60%, #666 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {title}
        </motion.h1>

        <motion.p
          key={`${slug}-subheading`}
          variants={textRevealVariants}
          style={{
            fontSize: 'clamp(20px, 3vw, 26px)',
            lineHeight: 1.6,
            color: '#444444',
            margin: '0 auto',
            maxWidth: '900px',
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
        >
          { description }
        </motion.p>
      </div>
    </motion.section>
  );
}