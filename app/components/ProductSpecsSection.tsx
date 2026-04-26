"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Sun, Layers } from 'lucide-react';
import { ServiceCard } from '../../lib/data'; // Adjust path

// Helper to map string to Icon
const IconRenderer = ({ name }: { name: string }) => {
  switch (name) {
    case 'Lightbulb': return <Lightbulb className="w-8 h-8 text-[#5D2E2E]" />;
    case 'Sun': return <Sun className="w-8 h-8 text-[#5D2E2E]" />;
    case 'Layers': return <Layers className="w-8 h-8 text-[#5D2E2E]" />;
    default: return <Lightbulb className="w-8 h-8 text-[#5D2E2E]" />;
  }
};

interface SignageServicesProps {
  services: ServiceCard[];
}

const SignageServices = ({ services }: SignageServicesProps) => {
  return (
    <section className="py-24 px-6 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Our Signage <span className="text-[#5D2E2E]">Expertise</span>
          </motion.h2>
          <div className="w-20 h-1 bg-[#5D2E2E] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative p-10 rounded-[2.5rem] bg-[#0A0D2E] text-white overflow-hidden shadow-2xl transition-all duration-500"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
              <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] group-hover:border-white/30 transition-colors" />

              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] transition-all"
                >
                  <IconRenderer name={service.iconName} />
                </motion.div>

                <h3 className="text-2xl font-bold tracking-tight min-h-[64px] flex items-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>

                <div className="pt-4">
                  <div className="w-0 h-0.5 bg-white group-hover:w-12 transition-all duration-500 mx-auto" />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/[0.05] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignageServices;