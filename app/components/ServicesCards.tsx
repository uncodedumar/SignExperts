"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Cpu, 
  Layers, 
  Layout, 
  MessageSquare, 
  BarChart3, 
  Globe, 
  Cloud, 
  Zap 
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col p-8 transition-all duration-500 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 hover:border-yellow-500/50 rounded-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-6 inline-flex p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-yellow-500 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-yellow-500 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-400 leading-relaxed text-sm group-hover:text-neutral-300 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smoothly transition the background slide
  const x = useTransform(scrollYProgress, [0, 0.8], ["100%", "0%"]);
  // Fade the header text color based on the background slide
  const textColor = useTransform(scrollYProgress, [0.4, 0.6], ["#ffffff", "#000000"]);

  const services = [
    {
      icon: <Cpu size={24} />,
      title: "Custom AI Models",
      description: "Proprietary LLMs and machine learning solutions tailored to your specific enterprise datasets."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Intelligent Chatbots",
      description: "Next-gen conversational AI that handles complex logic, lead gen, and 24/7 customer support."
    },
    {
      icon: <Layers size={24} />,
      title: "Full-Stack SaaS",
      description: "Scalable software architectures built with modern stacks (Next.js, Node, Go) for high performance."
    },
    {
      icon: <Layout size={24} />,
      title: "UI/UX Design",
      description: "Bold, authentic digital interfaces designed to maximize conversion and user retention."
    },
    {
      icon: <Globe size={24} />,
      title: "Web & Mobile",
      description: "Seamless cross-platform applications across iOS, Android, and web environments."
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Infrastructure",
      description: "Robust AWS/Azure deployments with automated scaling and enterprise-grade security."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Growth Analytics",
      description: "Data-driven performance marketing and automation to dominate your digital landscape."
    },
    {
      icon: <Zap size={24} />,
      title: "BPO Solutions",
      description: "Elite technical outsourcing and support to help your business scale effortlessly."
    }
  ];

  return (
    // bg-[#08103a] set as primary. h-auto on mobile, h-[250vh] on desktop to allow scroll animation
    <section ref={containerRef} className="relative h-auto md:h-[250vh] bg-white md:bg-[#08103a] py-16 md:py-0">
      <div className="md:sticky md:top-0 md:h-screen flex items-center overflow-hidden">
        
        {/* Sliding Contrast Background - Hidden on mobile to remove animation */}
        <motion.div 
          style={{ x }}
          className="hidden md:block absolute inset-0 bg-neutral-100 z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          {/* Section Headers */}
          <div className="mb-12 text-center">
            <motion.span 
              className="text-yellow-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block"
            >
              Capabilities
            </motion.span>
            <motion.h2 
              // Mobile defaults to black text (on white bg), Desktop uses the transform color
              className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-black md:text-white"
              style={{ color: typeof window !== 'undefined' && window.innerWidth >= 768 ? textColor : '#000000' }}
            >
              Our Services
            </motion.h2>
            <motion.div 
              className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full"
              layoutId="underline"
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <FeatureCard 
                key={index}
                index={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;