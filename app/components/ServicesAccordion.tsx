"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Plus, Mail, Phone } from 'lucide-react';

// --- Animation Variants ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const accordionContentVariants: Variants = {
  hidden: { height: 0, opacity: 0, scale: 0.98 },
  visible: {
    height: "auto",
    opacity: 1,
    scale: 1,
    transition: {
      height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.4, delay: 0.1 },
      scale: { duration: 0.5 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    scale: 0.98,
    transition: {
      height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.2 },
    },
  },
};

// --- Interfaces ---

interface SubService {
  id: string;
  title: string;
  highlight: string;
  description: string;
  visualImage: string; // Changed from visualText to visualImage
}

interface MainService {
  id: string;
  title: string;
  quote: string;
  subServices: SubService[];
}

const SERVICES_DATA: MainService[] = [
  {
    id: 'installation',
    title: 'Installation Services',
    quote: '"Precision from production to the final placement."',
    subServices: [
      { id: 'install-act', highlight: 'On-Site Excellence', title: 'Professional Placement', description: 'Our expert installers ensure your signage is mounted safely, securely, and with perfect alignment. We handle everything from high-rise banners to delicate interior lettering.', visualImage: '/signarama/signarama-usa-manufacturing-square-61a5e2f85022f.webp' },
      { id: 'methods', highlight: 'Built to Last', title: 'Signage Methods', description: 'Utilizing industry-leading techniques, we build durability into every project. From weather-resistant coatings to structural welding, our methods guarantee longevity.', visualImage: '/signarama/signarama-usa-installation-square-61a5d0404508b.webp' },
      { id: 'repair', highlight: 'Longevity Strategy', title: 'Maintainences', description: "Maintain your brand's image with our repair and maintenance services. We handle LED replacements, cleaning, and structural repairs to ensure your sign looks brand new for years.", visualImage: '/signarama/signarama-usa-channel-letters-geico-square-6033d32d29d37.webp' },
    ]
  },
  {
    id: 'creative',
    title: 'Creative Services',
    quote: '"We\'re more than just sign makers. We\'re an extension of your marketing team."',
    subServices: [
      { id: 'custom', highlight: 'Bespoke Solutions', title: 'Graphic Designing', description: 'Sign Experts specializes in custom signs for your brand! Bring your business to life with custom signage designed specifically for your unique space.', visualImage: '/signarama/signarama-usa-sunset-skatepark-outdoor-signs-original-65c12009bef73.jpg_2.webp' },
      { id: 'fab', highlight: 'Precision Engineering', title: 'Custom Signs', description: 'Sophisticated cutting and printing technology to create outstanding signs and letters. We shape raw materials into high-impact physical structures.', visualImage: '/signarama/signarama-usa-cafe-restaurant-square-61a5efdf37379.jpg.webp' },
      { id: 'design', highlight: 'Visual Strategy', title: 'Design', description: 'Professional signage begins long before the first cut. Our design services transform abstract ideas into high-performance, readable signage.', visualImage: '/signarama/signarama-usa-illuminated-signs-square-648b7160458ae.jpg.webp' },
      { id: 'writing', highlight: 'The Human Touch', title: 'Brand Audits & Consultaions', description: 'Hand-finished detail meets modern brand precision. We apply high-clarity typography to glass shopfronts and modern vehicle fleets.', visualImage: '/signarama/signarama-usa-channel-letter-installation-square-64b9364c807e3.webp' },
      { id: 'audit', highlight: 'Strategic Growth', title: 'Fabricated Signage', description: 'Identify critical gaps and visibility opportunities. We evaluate existing signage for consistency, durability, and brand alignment.', visualImage: '/signarama/signarama-usa-professional-printing-services-48600977087-o-square-64b5c5cc4ff68.webp'},
    ]
  }
  
];

export default function ServicesAccordion() {
  const [activeMain, setActiveMain] = useState<string | null>('creative');
  const [activeSub, setActiveSub] = useState<string | null>(null);

  const toggleMain = (id: string) => setActiveMain(activeMain === id ? null : id);
  const toggleSub = (id: string) => setActiveSub(activeSub === id ? null : id);

  return (
    <div className="w-full bg-white py-0 px-4">
      <div className="max-w-[1200px] mx-auto font-sans text-black">
        {SERVICES_DATA.map((section) => (
          <section key={section.id} className="mb-0">
            {/* Main Header */}
            <motion.div 
              whileHover={{ x: 10 }}
              onClick={() => toggleMain(section.id)}
              className="flex justify-between items-center py-6 cursor-pointer group transition-all"
            >
              <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase">
                {section.title}
              </h1>
              <motion.span 
                animate={{ 
                  rotate: activeMain === section.id ? 135 : 0,
                  scale: activeMain === section.id ? 1.2 : 1
                }}
                className="text-[#ffc107]"
              >
                <Plus size={64} strokeWidth={1.5} />
              </motion.span>
            </motion.div>

            {/* Main Content Area */}
            <AnimatePresence mode="wait">
              {activeMain === section.id && (
                <motion.div
                  key={section.id}
                  variants={accordionContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="overflow-hidden"
                >
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl italic text-gray-500 border-l-4 border-[#ffc107] pl-6 my-6 max-w-3xl"
                  >
                    {section.quote}
                  </motion.p>

                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6 flex flex-col items-center pb-12" 
                  >
                    {section.subServices.map((sub) => (
                      <motion.div 
                        key={sub.id} 
                        variants={itemVariants}
                        className="w-[90%] border border-black/5 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:border-[#ffc107]/30 transition-all duration-300"
                      >
                        <div 
                          onClick={() => toggleSub(sub.id)}
                          className="flex justify-between items-center p-8 cursor-pointer group/item"
                        >
                          <h3 className="text-2xl font-bold tracking-tight group-hover/item:text-[#ffc107] transition-colors">
                            {sub.title}
                          </h3>
                          <motion.div 
                            animate={{ 
                              rotate: activeSub === sub.id ? 45 : 0,
                              backgroundColor: activeSub === sub.id ? "#ffc107" : "transparent"
                            }}
                            className="p-2 rounded-full border border-[#ffc107] text-[#ffc107] group-hover/item:bg-[#ffc107] group-hover/item:text-white transition-colors"
                          >
                            <Plus size={24} />
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {activeSub === sub.id && (
                            <motion.div
                              variants={accordionContentVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="overflow-hidden"
                            >
                              <div className="flex flex-wrap lg:flex-nowrap gap-12 p-8 pt-0 items-center">
                                {/* Visual Area */}
                                <motion.div 
                                  initial={{ scale: 0.9, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ duration: 0.6, ease: "easeOut" }}
                                  className="w-full lg:w-1/2 h-[450px] bg-[#1a1a1a] rounded-3xl relative overflow-hidden flex items-center justify-center text-white/20 font-bold text-4xl group/img shadow-2xl"
                                >
                                  {/* Replaced visualText span with img tag */}
                                  <img 
                                    src={sub.visualImage} 
                                    alt={sub.title} 
                                    className="absolute inset-0 w-full h-full object-cover z-0" 
                                  />
                                  <motion.div 
                                    animate={{ 
                                      scale: [1, 1.03, 1],
                                    }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-tr from-[#ffc107]/30 to-black/50 z-10"
                                  />
                                </motion.div>

                                {/* Content Area */}
                                <div className="w-full lg:w-1/2 space-y-6 relative z-10">
                                  <span className="bg-[#ffc107]/10 text-[#ffc107] px-4 py-1 rounded-full font-bold uppercase text-xs tracking-[0.2em]">
                                    {sub.highlight}
                                  </span>
                                  <h2 className="text-4xl font-extrabold text-black leading-tight">
                                    {sub.title}
                                  </h2>
                                  <p className="text-gray-600 leading-relaxed text-xl">
                                    {sub.description}
                                  </p>
                                  
                                  <div className="flex items-center gap-6 pt-6 pb-4">
                                    <motion.button
                                      type="button"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      className="bg-black text-white px-10 py-4 rounded-xl font-bold uppercase text-sm tracking-widest shadow-lg hover:bg-[#ffc107] hover:text-black transition-colors"
                                    >
                                      Launch Project
                                    </motion.button>
                                    <div className="flex gap-3">
                                      <motion.a
                                        href="mailto:sign.eexperts@gmail.com"
                                        whileHover={{ y: -5, backgroundColor: "#ffc107", color: "#fff" }}
                                        aria-label="Email Sign Experts"
                                        className="w-12 h-12 border-2 border-black/10 rounded-xl flex items-center justify-center cursor-pointer transition-colors"
                                      >
                                        <Mail size={20} aria-hidden />
                                      </motion.a>
                                      <motion.a
                                        href="tel:+19293928337"
                                        whileHover={{ y: -5, backgroundColor: "#ffc107", color: "#fff" }}
                                        aria-label="Call Sign Experts"
                                        className="w-12 h-12 border-2 border-black/10 rounded-xl flex items-center justify-center cursor-pointer transition-colors"
                                      >
                                        <Phone size={20} aria-hidden />
                                      </motion.a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        ))}
      </div>
    </div>
  );
}