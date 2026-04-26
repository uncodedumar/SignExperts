"use client";

import React, { useEffect, useRef } from "react";
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
      const controls = animate(0, value, {
        duration: 3,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest).toLocaleString();
          }
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
  
  // Scroll-linked transformations for "Crazy" feel
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Floating background elements logic
  const y1 = useTransform(springScroll, [0, 1], [0, -200]);
  const y2 = useTransform(springScroll, [0, 1], [0, 150]);
  const rotate = useTransform(springScroll, [0, 1], [0, 45]);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-white py-32 px-6 md:px-12 lg:px-24 font-['Poppins',sans-serif] overflow-hidden"
    >
      {/* --- DECORATIVE BACKGROUND ELEMENTS --- */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-20 right-[-5%] w-64 h-64 border-[20px] border-[#ffc107]/10 rounded-full z-0"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-10 left-[10%] w-32 h-32 bg-[#1a1a1a]/5 rotate-45 z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#ffc107]/5 pointer-events-none" />

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
              className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-8 leading-[0.9] tracking-tighter"
            >
              ABOUT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] to-[#634832]">
                SIGN EXPERTS
              </span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-[#3d2b26] max-w-xl text-md leading-relaxed mb-10 border-l-4 border-[#ffc107] pl-6"
            >
             At Sign Experts, we believe your vision deserves to be seen with absolute clarity. Whether you are looking to revitalize an established brand or build a bold new identity from the ground up, our team is ready to bring your ideas to life. From initial consultation to final installation, we handle every detail—design, strategy, and execution—so you can focus on what you do best while we ensure a seamless journey from concept to completion.
<br />
             <span className="font-bold underline decoration-[#ffc107]">Your success is our greatest achievement.</span> With a commitment to craftsmanship and a deep understanding of visual impact, we are here to take your project to the next level. Elevate your presence and achieve more than you thought possible with Sign Experts. 
            </motion.p>

            <motion.div variants={itemVariants} className="relative group w-fit">
              <motion.button 
                whileHover={{ x: 10 }}
                className="bg-[#1a1a1a] text-white px-12 py-6 text-xl font-black uppercase transition-colors hover:bg-[#ffc107] hover:text-[#1a1a1a] z-10 relative flex items-center gap-4"
              >
              <link rel="stylesheet" href="/#contact-form" >
            
                Get A Quote  </link>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side: Stats & Visuals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:mt-24">
            <StatItem value={10} suffix="+" label="Years of Mastery" />
            <StatItem value={15} suffix="+" label="Expert Teams" />
            <StatItem value={789} suffix="" label="Iconic Signs Crafted" />
            <motion.div 
              variants={itemVariants}
              className="bg-[#1a1a1a] p-8 text-white flex flex-col justify-center"
            >
              <h4 className="text-2xl font-bold mb-2">Our Promise</h4>
              <p className="text-sm opacity-70">Unrivaled precision from blueprints to installation.</p>
            </motion.div>
          </div>

        </div>

        {/* Floating Scroll Text (Crazy Detail) */}
        <motion.div 
          style={{ x: useTransform(springScroll, [0, 1], [100, -100]) }}
          className="absolute -bottom-20 left-0 whitespace-nowrap text-[10vw] font-black opacity-[0.03] pointer-events-none uppercase"
        >
          Visual Communication • Precision Engineering • Design 
        </motion.div>
      </motion.div>
    </section>
  );
}