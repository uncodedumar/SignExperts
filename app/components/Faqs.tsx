'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQData {
  id: number;
  question: string;
  answer: string;
}

const faqsData: FAQData[] = [
  {
    id: 1,
    question: "What services does Sign Experts IL offer?",
    answer: "We specialize in high-impact visual communication. Our core services include custom outdoor and indoor signage, LED channel letters, monument signs, vehicle wraps, large-format printing, and comprehensive sign installation and maintenance."
  },
  {
    id: 2,
    question: "How does Sign Experts IL approach new signage projects?",
    answer: "We begin with a detailed site survey and consultation to understand your brand and location requirements. Our team then handles everything from design and local permit acquisition to precision fabrication and professional installation."
  },
  {
    id: 3,
    question: "What industries does Sign Experts IL work with?",
    answer: "Our expertise spans a wide range of sectors. We regularly partner with retail businesses, corporate offices, healthcare facilities, restaurants, and real estate developers to create signage that captures attention and drives foot traffic."
  },
  {
    id: 4,
    question: "How long does it take to complete a sign project?",
    answer: "Timelines vary based on the project's scale and permit requirements. Simple vinyl graphics can be ready in a few days, while custom-fabricated electrical signs typically range from 3–6 weeks, including the permitting process."
  },
  {
    id: 5,
    question: "Why should I choose Sign Experts IL over other sign companies?",
    answer: "Sign Experts IL combines craftsmanship with durable materials and expert local knowledge. We don't just make signs; we build brand landmarks designed to withstand the elements and make a lasting first impression."
  }
];

const FAQItem = ({ faq, isOpen, onToggle, index }: { faq: FAQData; isOpen: boolean; onToggle: () => void; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group border-b border-gray-100 last:border-0 transition-all duration-500"
    >
      <button
        onClick={onToggle}
        className="w-full py-8 flex items-start justify-between text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex gap-6 md:gap-10">
          
          <span className={`text-xl md:text-2xl tracking-tight transition-all duration-300 ${isOpen ? 'text-black font-medium' : 'text-gray-500 group-hover:text-black'}`}>
            {faq.question}
          </span>
        </div>

        <div className={`relative flex-shrink-0 mt-2 w-6 h-6 transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <div className={`absolute top-1/2 left-0 w-full h-[1.5px] bg-current transition-colors ${isOpen ? 'text-red-600' : 'text-gray-300'}`} />
          <div className={`absolute top-0 left-1/2 w-[1.5px] h-full bg-current transition-all duration-500 ${isOpen ? 'text-red-600 scale-y-0 opacity-0' : 'text-gray-300 scale-y-100 opacity-100'}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pl-[52px] md:pl-[84px] pb-8 pr-4">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQsSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Sticky Header */}
        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-black mb-8">
              Common <br /> <span className="text-[#ffb92d] italic">Questions.</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-sm leading-relaxed font-light">
              Empowering brands to stand out in a crowded marketplace through precision design and strategic visibility. Your path to a clearer, bolder presence starts here.
            </p>
            
            
          </motion.div>
        </div>

        {/* Right FAQs List */}
        <div className="lg:col-span-7">
          <div className="divide-y divide-gray-100">
            {faqsData.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openFAQ === faq.id}
                onToggle={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}