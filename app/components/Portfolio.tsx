"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, type Variants } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  image: string;
}

const projects: Project[] = [
  { id: "01", title: "Project One", image: "/path-to-your-image1.jpg" },
  { id: "02", title: "Project Two", image: "/path-to-your-image2.jpg" },
  { id: "03", title: "Project Three", image: "/path-to-your-image3.jpg" },
  { id: "04", title: "Project Four", image: "/path-to-your-image4.jpg" },
  { id: "05", title: "Project Five", image: "/path-to-your-image5.jpg" },
  { id: "06", title: "Project Six", image: "/path-to-your-image6.jpg" },
];

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
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
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  
  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Adding a spring effect makes the image "lag" slightly for a premium feel
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    // Offset the image so the cursor is in the center
    mouseX.set(clientX - 150); 
    mouseY.set(clientY - 150);
  };

  return (
    <section 
      className="py-24 px-4 bg-white min-h-screen cursor-default overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium mb-16 text-black">Our Portfolio</h2>
        
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="border-t border-black/10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
              className="group relative border-b border-black/10 py-8 flex items-center justify-between transition-colors duration-300 hover:bg-black/[0.02]"
            >
              <div className="flex items-baseline gap-8">
                <span className="text-lg font-light text-black/40">{project.id}</span>
                <h3 className="text-4xl md:text-6xl font-normal text-black transition-transform duration-300 group-hover:translate-x-4">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Image Portal */}
      <motion.div
        style={{
          position: "fixed",
          left: x,
          top: y,
          pointerEvents: "none",
          width: 300,
          height: 350,
          zIndex: 50,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: activeProject ? 1 : 0, 
          opacity: activeProject ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-xl overflow-hidden shadow-2xl"
      >
        {activeProject && (
          <img
            src={activeProject.image}
            alt={activeProject.title}
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>
    </section>
  );
}