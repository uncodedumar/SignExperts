"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, type Variants } from 'framer-motion';

const SignageSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const nudgeX = useSpring(useMotionValue(0), springConfig);
  const nudgeY = useSpring(useMotionValue(0), springConfig);

  const cursorX = useSpring(mouseX, { damping: 20, stiffness: 250 });
  const cursorY = useSpring(mouseY, { damping: 20, stiffness: 250 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        nudgeX.set((e.clientX - centerX) / 15);
        nudgeY.set((e.clientY - centerY) / 15);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [mouseX, mouseY, nudgeX, nudgeY]);

  const textVariants: Variants = {
    rest: { y: 20, opacity: 0 },
    hover: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative w-full hidden md:flex flex-col items-center justify-center py-24 bg-white font-sans overflow-hidden">
      
      {/* Octagon Cursor Follower */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#091242",
          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
        }}
      />

      <div className="w-full px-8">
        <motion.div 
          ref={containerRef}
          className="relative w-full aspect-[21/9] overflow-hidden rounded-sm shadow-2xl cursor-none group"
          initial="rest"
          animate="hover" // Changed from whileHover to animate for permanent state
          style={{ x: nudgeX, y: nudgeY }}
        >
          {/* Main Image */}
          <motion.div
            className="w-full h-full"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          >
            <Image
              src="/AA.jpg" 
              alt="Restaurant Signage"
              fill
              className="object-cover"
              priority
            />
            {/* Dark Overlay - Set to permanent opacity */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 transition-opacity duration-500" />
          </motion.div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-16">
            <motion.div variants={textVariants} className="max-w-3xl">
              <p className="text-white text-4xl font-semibold leading-tight tracking-tight drop-shadow-lg">
                Your signs should work as hard as you do.
              </p>
              <motion.p 
                variants={{
                    rest: { opacity: 0, x: -10 },
                    hover: { opacity: 1, x: 0, transition: { delay: 0.2 } }
                }}
                className="text-white/90 text-xl mt-4 font-light max-w-xl"
              >
                Quality signs attract new customers, brand your location and turn foot traffic into sales.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignageSection;