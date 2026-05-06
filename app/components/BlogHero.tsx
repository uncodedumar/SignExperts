'use client';

import React from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  type Variants,
} from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.45,
    },
  },
};

const instantItem: Variants = {
  hidden: { opacity: 1, y: 0, filter: 'none' },
  visible: { opacity: 1, y: 0, filter: 'none' },
};

const instantLine: Variants = {
  hidden: { scaleX: 1, opacity: 1 },
  visible: { scaleX: 1, opacity: 1 },
};

const instantContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
};

export default function BlogHero() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const containerVars = reduceMotion ? instantContainer : containerVariants;
  const itemVars = reduceMotion ? instantItem : itemVariants;
  const lineVars = reduceMotion ? instantLine : lineVariants;

  const spotlight = useMotionTemplate`radial-gradient(680px circle at ${mouseX}px ${mouseY}px, rgba(245, 189, 85, 0.18), transparent 52%)`;

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function onMouseLeave() {
    if (reduceMotion) return;
    mouseX.set(-200);
    mouseY.set(-200);
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={containerVars}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative py-24 md:py-28 border-b-2 border-black overflow-hidden bg-[#f6f6f4]"
    >
      {/* Soft wash + interactive spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-white/80 via-transparent to-blue-600/[0.06]"
        aria-hidden
      />
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{ background: spotlight }}
          aria-hidden
        />
      )}

      {/* Diagonal panels — gentle drift */}
      <motion.div
        className="pointer-events-none absolute -right-[10%] top-0 hidden h-full w-[42%] -skew-x-12 bg-[#F5BD55]/30 lg:block"
        aria-hidden
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 12, 0],
                opacity: [0.85, 1, 0.85],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="pointer-events-none absolute -right-[4%] top-0 hidden h-full w-[18%] -skew-x-12 bg-[#F5BD55]/60 lg:block"
        aria-hidden
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -8, 0],
              }
        }
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Corner accent */}
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-3xl"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          <motion.h1
            variants={itemVars}
            className="mb-6 text-6xl font-black uppercase leading-[0.95] tracking-tighter md:text-8xl"
          >
            <span className="block text-black">The Digital</span>
            <motion.span
              className="relative mt-1 inline-block text-[#F5BD55]"
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              Journal
              {!reduceMotion && (
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] origin-left rounded-full bg-[#F5BD55]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.65, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVars}
            className="max-w-2xl text-xl font-medium leading-relaxed text-gray-700 md:text-2xl"
          >
            Exploring the intersection of artificial intelligence, high-performance
            engineering, and the next generation of digital aesthetics.
          </motion.p>

          <motion.div variants={itemVars} className="mt-10 flex items-center gap-4">
            <motion.div
              variants={lineVars}
              className="h-2 w-24 origin-left rounded-full bg-[#F5BD55]"
              whileHover={reduceMotion ? undefined : { scaleX: 1.08 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            />
            <motion.p
              className="text-sm font-bold uppercase tracking-widest"
              whileHover={reduceMotion ? undefined : { letterSpacing: '0.28em' }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              Est. 2026
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
