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
    question: "What services does Bricklix offer?",
    answer: "At Bricklix, we specialize in digital creation that ignites passion and innovation. Our core services include custom software development, AI model integration, UI/UX design, web and mobile app development, branding, and digital illustrations."
  },
  {
    id: 2,
    question: "How does Bricklix approach new client projects?",
    answer: "We start with deep discovery sessions to understand your vision, goals, and challenges. From there, we build a custom roadmap — from concept to execution — ensuring you’re involved at every step."
  },
  {
    id: 3,
    question: "What industries does Bricklix work with?",
    answer: "Our team thrives on diversity. We’ve worked across tech, education, fashion, gaming, design, and AI-driven industries. If your project has innovation written all over it, we’re in."
  },
  {
    id: 4,
    question: "How long does it take to complete a project?",
    answer: "Timelines depend on the project’s scope and complexity. A standard web design might take 2–4 weeks, while full-scale applications or AI systems can range from 2–6 months."
  },
  {
    id: 5,
    question: "Why should I choose Bricklix over other software agencies?",
    answer: "Because Bricklix isn’t just about code — it’s about creating digital experiences that inspire. Our blend of artistic creativity, technical precision, and genuine passion makes us stand out."
  }
];

const FAQItem = ({ faq, isOpen, onToggle, index }: { faq: FAQData; isOpen: boolean; onToggle: () => void; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group border-b border-gray-100 last:border-0 transition-all duration-500`}
    >
      <button
        onClick={onToggle}
        className="w-full py-8 flex items-start justify-between text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex gap-6 md:gap-10">
          <span className="text-xs md:text-sm font-mono text-red-500 mt-1.5 opacity-60">
            0{index + 1}
          </span>
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
              Common <br /> <span className="text-gray-300 italic">Questions.</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-sm leading-relaxed font-light">
              Our strategies help businesses grow and exhibit themselves in the modern world. 
              Find the clarity you need to start your journey.
            </p>
            
            <div className="mt-12 flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                <svg className="w-5 h-5 text-black group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
              <span className="font-medium tracking-tight">Contact Support</span>
            </div>
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