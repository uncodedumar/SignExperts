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
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a "premium" feel
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

export default function SupportSection() {
  const { imageUrl, heading, subheading } = supportData;

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
        padding: '100px 20px', // Increased vertical padding for breathability
      }}
    >
      {/* Animated Image Header */}
      <motion.div
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
          borderRadius: '24px', // Slightly rounder for modern look
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
        }}
      />

      {/* Text Content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.h1
          variants={textRevealVariants}
          style={{
            // Increased font size significantly
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
          {heading}
        </motion.h1>

        <motion.p
          variants={textRevealVariants}
          style={{
            // Increased subheading size and adjusted leading
            fontSize: 'clamp(20px, 3vw, 26px)',
            lineHeight: 1.6,
            color: '#444444',
            margin: '0 auto',
            maxWidth: '900px',
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
        >
          {subheading}
        </motion.p>
      </div>
    </motion.section>
  );
}