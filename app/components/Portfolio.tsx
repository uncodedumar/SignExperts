"use client";

import React, { useState } from 'react';
import { motion, useSpring, useMotionValue, type Variants, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  image: string;
}

const projects: Project[] = [
  { id: "01", title: "Project One", image: "/a.jpg" },
  { id: "02", title: "Project Two", image: "/b.jpg" },
  { id: "03", title: "Project Three", image: "/c.jpg" },
  { id: "04", title: "Project Four", image: "/g1.jpg" },
  { id: "05", title: "Project Five", image: "/g2.jpg" },
  { id: "06", title: "Project Six", image: "/o.jpg" },
];

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

export default function PortfolioSection() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Offset so the image centers on the cursor
    mouseX.set(e.clientX - 150); 
    mouseY.set(e.clientY - 200);
  };

  const activeProject = projects.find(p => p.id === activeProjectId);

  return (
    <section 
      className="py-24 px-4 bg-black min-h-screen cursor-default overflow-hidden select-none"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium mb-16 text-white/50">Our Portfolio</h2>
        
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="border-t border-white/10"
        >
          {projects.map((project) => {
            const isActive = activeProjectId === project.id;

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                // Desktop: Hover state
                onMouseEnter={() => setActiveProjectId(project.id)}
                onMouseLeave={() => setActiveProjectId(null)}
                // Mobile: Toggle state on tap
                onClick={() => setActiveProjectId(isActive ? null : project.id)}
                className="group relative border-b border-white/10 py-10 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden cursor-pointer"
              >
                {/* White Background Slide */}
                <motion.div 
                  className="absolute inset-0 bg-white z-0 hidden md:block"
                  initial={{ x: "-100%" }}
                  animate={{ x: isActive ? "0%" : "-100%" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />

                <div className="relative z-10 flex items-baseline gap-8 px-4 w-full">
                  <span className={`text-sm md:text-lg font-light transition-colors duration-300 ${
                    isActive ? "text-black/40 md:text-black/40" : "text-white/30"
                  }`}>
                    {project.id}
                  </span>
                  <h3 className={`text-4xl md:text-7xl font-normal transition-all duration-300 ${
                    isActive ? "text-white md:text-black translate-x-0 md:translate-x-6" : "text-white/80"
                  }`}>
                    {project.title}
                  </h3>
                </div>

                {/* Mobile-Only Image Reveal (Accordian style) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="relative z-10 w-full px-4 mt-6 md:hidden overflow-hidden"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={1000}
                        className="w-full aspect-[4/5] object-cover rounded-lg"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Desktop-Only Floating Image */}
      <motion.div
        style={{
          position: "fixed",
          left: x,
          top: y,
          pointerEvents: "none",
          width: 300,
          height: 400,
          zIndex: 50,
        }}
        className="hidden md:block rounded-lg overflow-hidden shadow-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: activeProject ? 1 : 0.8, 
          opacity: activeProject ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {activeProject && (
          <Image
            src={activeProject.image}
            alt={activeProject.title}
            width={300}
            height={400}
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>
    </section>
  );
}