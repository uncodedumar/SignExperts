"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  PenTool, 
  Palette, 
  Search, 
  Layers, 
  MapPin, 
  Settings, 
  Wrench, 
  Focus 
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
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative flex flex-col p-8 transition-all duration-500 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 hover:border-yellow-500/50 rounded-2xl overflow-hidden shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-6 inline-flex p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-yellow-500 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-yellow-500 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-400 leading-relaxed text-sm group-hover:text-neutral-200 transition-colors line-clamp-3">
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

  // Smooth horizontal background transition
  const x = useTransform(scrollYProgress, [0, 0.8], ["100%", "0%"]);
  // Synchronized color flip for the title
  const titleColor = useTransform(scrollYProgress, [0.45, 0.55], ["#ffffff", "#171717"]);

  const services = [
    {
      icon: <PenTool size={24} />,
      title: "Graphic Design",
      description: "Traditional and modern hand-crafted lettering techniques for a distinctive, professional finish."
    },
    {
      icon: <Palette size={24} />,
      title: "Custom Signs",
      description: "Tailor-made signage solutions designed from the ground up to match your unique brand requirements."
    },
    {
      icon: <Search size={24} />,
      title: "Printing Services",
      description: "Expert printing of your physical presence to ensure maximum visibility and brand consistency."
    },
    {
      icon: <Layers size={24} />,
      title: "Fabricated Signage",
      description: "High-quality 3D lettering and structural signs built with premium materials for durability."
    },
    {
      icon: <MapPin size={24} />,
      title: "Installations",
      description: "Precision fitting and secure mounting across all environments, from retail fronts to high-rise locations."
    },
    {
      icon: <Settings size={24} />,
      title: "Sign Methodology",
      description: "Strategic planning and technical workflows that ensure every project is executed with engineering excellence."
    },
    {
      icon: <Wrench size={24} />,
      title: "Maintenance",
      description: "Comprehensive upkeep and repair services to keep your signage looking sharp and performing optimally."
    },
    {
      icon: <Focus size={24} />,
      title: "Creative Design",
      description: "Conceptual visual identity and graphic design that transforms your ideas into impactful physical signs."
    }
  ];

  return (
    <section ref={containerRef} className="relative h-auto md:h-[300vh] bg-[#101b55]">
      <div className="md:sticky md:top-0 md:min-h-screen flex items-start py-20 md:py-12 overflow-visible">
        
        {/* Animated Background Overlay */}
        <motion.div 
          style={{ x }}
          className="hidden md:block absolute inset-0 bg-white z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16 md:pb-0">
          <div className="mb-16 text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-yellow-500 font-bold text-xs tracking-[0.4em] uppercase mb-4 block"
            >
              Expert Capabilities
            </motion.span>
            <motion.h2 
              className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white md:text-white"
              style={{ color: titleColor }}
            >
              Our Services
            </motion.h2>
            <motion.div 
              className="h-2 w-24 bg-yellow-500 mx-auto rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)]"
              layoutId="underline"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-10 md:pb-0">
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