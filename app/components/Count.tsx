"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { 
  useInView, 
  motion, 
  animate, 
  Variants, 
  useScroll, 
  useTransform, 
  useSpring 
} from "framer-motion";

// --- Animation Variants ---
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
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

// --- Animated Counter Sub-component ---
interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

const StatItem = ({ value, suffix = "", label }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 3,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          node.textContent = Math.floor(latest).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <motion.div 
      variants={itemVariants}
      className="relative flex flex-col group"
    >
      <div className="text-6xl md:text-7xl font-black text-[#1a1a1a] flex items-baseline leading-none">
        <span ref={ref}>0</span>
        <span className="text-[#ffc107] text-4xl ml-1">{suffix}</span>
      </div>
      <div className="h-1 w-0 bg-[#ffc107] group-hover:w-full transition-all duration-500 mt-2" />
      <span className="text-[#3d2b26] text-xs uppercase tracking-[0.3em] font-bold mt-4 opacity-60">
        {label}
      </span>
    </motion.div>
  );
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const y1 = useTransform(springScroll, [0, 1], [0, -200]);
  const y2 = useTransform(springScroll, [0, 1], [0, 150]);
  const rotate = useTransform(springScroll, [0, 1], [0, 45]);
  const xText = useTransform(springScroll, [0, 1], [100, -100]);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-white py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* --- DECORATIVE BACKGROUND ELEMENTS --- */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-20 right-[-5%] w-64 h-64 border-[20px] border-[#ffc107]/10 rounded-full z-0 pointer-events-none"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-10 left-[10%] w-32 h-32 bg-[#1a1a1a]/5 rotate-45 z-0 pointer-events-none"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#ffc10710_0%,_transparent_70%)] pointer-events-none" />

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Content */}
          <div>
            <motion.div variants={itemVariants} className="inline-block mb-4">
               <span className="bg-[#ffc107] text-[#1a1a1a] px-4 py-1 text-sm font-black uppercase tracking-widest">
                 Established Excellence
               </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-black text-[#1a1a1a] mb-8 leading-[1.1] tracking-tighter"
            >
              ABOUT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#634832] to-[#1a1a1a]">
                SIGN EXPERTS
              </span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-[#3d2b26] max-w-xl text-lg leading-relaxed mb-10 border-l-4 border-[#ffc107] pl-6"
            >
              At Sign Experts, we believe your vision deserves to be seen with absolute clarity. 
              Whether you are looking to revitalize an established brand or build a bold new identity, 
              our team handles every detail—design, strategy, and execution.
              <br /><br />
              <span className="font-bold underline decoration-[#ffc107] decoration-2 underline-offset-4">
                Your success is our greatest achievement.
              </span> 
              With a commitment to craftsmanship, we are here to take your project to the next level.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link href="/#contact-form" className="inline-block group relative">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="bg-[#1a1a1a] text-white px-12 py-6 text-xl font-black uppercase transition-colors group-hover:bg-[#ffc107] group-hover:text-[#1a1a1a] flex items-center gap-4"
                >
                  Get A Quote 
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-2">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Stats & Visuals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:mt-24">
            <StatItem value={10} suffix="+" label="Years of Mastery" />
            <StatItem value={15} suffix="+" label="Expert Teams" />
            <StatItem value={789} label="Iconic Signs Crafted" />
            
            <motion.div 
              variants={itemVariants}
              className="bg-[#1a1a1a] p-8 text-white flex flex-col justify-center border-b-8 border-[#ffc107]"
            >
              <h4 className="text-2xl font-bold mb-2">Our Promise</h4>
              <p className="text-sm opacity-70">Unrivaled precision from blueprints to installation.</p>
            </motion.div>
          </div>

        </div>

        {/* Floating Scroll Text */}
        <motion.div 
          style={{ x: xText }}
          className="absolute -bottom-20 left-0 whitespace-nowrap text-[10vw] font-black opacity-[0.03] pointer-events-none uppercase select-none"
        >
          Visual Communication • Precision Engineering • Design 
        </motion.div>
      </motion.div>
    </section>
  );
}