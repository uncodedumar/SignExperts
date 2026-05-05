"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface LoadingScreenProps {
  children: React.ReactNode;
}

/**
 * Intro runs to completion before any page content is mounted.
 * This matches the original “loader first” behavior; note that it delays
 * LCP / first paint until the sequence finishes (expected tradeoff).
 */
const LoadingScreen = ({ children }: LoadingScreenProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const primaryColor = "#101b55";

  // ~1200ms total feel while keeping the same “columns” look.
  // Grow completes quickly; exit collapses quickly right after.
  const STAGGER_MS = 60;
  const GROW_MS = 900;
  const EXIT_MS = 360;

  const columnVariants: Variants = {
    initial: { height: "0%" },
    animate: (i: number) => ({
      height: "100%",
      transition: {
        duration: GROW_MS / 1000,
        ease: [0.45, 0, 0.55, 1],
        delay: (i * STAGGER_MS) / 1000,
      },
    }),
    exit: (i: number) => ({
      height: "0%",
      transition: {
        duration: EXIT_MS / 1000,
        ease: [0.45, 0, 0.55, 1],
        delay: (i * STAGGER_MS) / 1000,
      },
    }),
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="loader"
            aria-hidden
            className="fixed inset-0 z-[9999] flex overflow-hidden bg-transparent"
          >
            {/* Stable, real LCP candidate so Lighthouse doesn’t report NO_LCP */}
            <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center">
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/Logo.webp"
                  alt="Sign Experts"
                  width={160}
                  height={160}
                  priority
                  fetchPriority="high"
                />
                <div className="text-white text-lg font-extrabold tracking-[0.25em] uppercase">
                  Sign Experts
                </div>
              </div>
            </div>

            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={columnVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationComplete={() => {
                  // Last column finished growing — reveal app and start loader exit.
                  if (!isLoaded && i === 4) {
                    setIsLoaded(true);
                    setShowContent(true);
                  }
                }}
                className="relative h-full flex-1"
                style={{ backgroundColor: primaryColor }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default LoadingScreen;
