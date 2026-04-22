"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- CSS for the Sparking Animation ---
const styles = `
  @keyframes spark-rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .spark-border-container {
    position: relative;
    padding: 3px; 
    overflow: hidden;
    border-radius: 1rem; 
    background: #1a1a1a;
  }
  .spark-border-glow {
    position: absolute;
    inset: -100%;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 150deg,
      #00d4ff 180deg,
      #ffffff 190deg,
      #00d4ff 200deg,
      transparent 230deg
    );
    animation: spark-rotate 2s linear infinite;
    filter: blur(8px);
  }
`;

interface SignCategory {
  id: number;
  title: string;
  image: string;
  href: string;
}

const signCategories: SignCategory[] = [
  { id: 1, title: "Digital Led Signs", image: "/signarama/Auto-Evaluators-Night-Discover-How-Digital-LED-Signs-Light-the-Way-To-Brand-Visibility-and-Profitability-.jpg", href: "/services/way-finder" },
  { id: 2, title: "Vehicles Signs", image: "/signarama/signarama-usa-vehicle-graphics-belmont-bruins-original-66982480691b0.jpg.jpeg", href: "/services/vehicle-signs" },
  { id: 3, title: "Indoor Signs", image: "/signarama/signarama-usa-reception-square-61a5eeeadab88.jpg.jpeg", href: "/services/indoor-signs" },
  { id: 4, title: "Promotional Signs", image: "/ps.jpg", href: "/services/promotional-signs" },
  { id: 5, title: "Illuminated Signs", image: "/signarama/LED SIGN BOARD.jpg", href: "/services/illuminated-signs" },
  { id: 6, title: "Non Illuminated Signs", image: "/signarama/signarama-usa-factory-and-industrial-square-61a5efccb32f8.jpg_3.jpeg", href: "/services/non-illuminated" },
];

export default function SignageGrid() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-110%"]);
  const slideWidth = useTransform(scrollYProgress, [0, 0.7], ["0%", "100%"]);
  const textColor = useTransform(scrollYProgress, [0.2, 0.4], ["#000000", "#ffffff"]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    /* Changed h-[300vh] to md:h-[300vh] h-auto to remove extra mobile space */
    <section ref={targetRef} className="relative md:h-[300vh] h-auto bg-white"> 
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      {/* DESKTOP VIEW */}
      <div className="hidden md:block sticky top-0 h-screen overflow-hidden">
        <motion.div 
          style={{ width: slideWidth }}
          className="absolute inset-y-0 left-0 bg-[#091242] z-0"
        />

        <motion.div style={{ x }} className="relative z-10 flex gap-10 px-[10%] h-full items-center">
          {signCategories.map((category) => (
            <Card key={category.id} category={category} textColor={textColor} isMobile={false} />
          ))}
          <div className="shrink-0 w-[10vw]" />
        </motion.div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden py-12 px-6 bg-white">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory"
        >
          {signCategories.map((category) => (
            <Card key={category.id} category={category} textColor="#000000" isMobile={true} />
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-8">
            <button onClick={() => scroll("left")} className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"><ChevronLeft /></button>
            <button onClick={() => scroll("right")} className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
}

const Card = ({
  category,
  textColor,
  isMobile,
}: {
  category: SignCategory;
  textColor: MotionValue<string> | string;
  isMobile: boolean;
}) => {
  return (
    <div className={`shrink-0 snap-center ${isMobile ? 'w-[85vw]' : 'w-[450px]'}`}>
      <Link href={category.href} className="group block w-full">
        <div className="spark-border-container shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div className="spark-border-glow" />
          <div className="relative overflow-hidden rounded-2xl aspect-square w-full bg-gray-100 z-10">
            <Image
              src={category.image}
              alt={category.title}
              fill
              sizes="(max-width: 768px) 85vw, 450px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="mt-5">
          <motion.h3 
            style={{ color: isMobile ? "#000000" : textColor }}
            className="text-xl font-bold"
          >
            {category.title}
          </motion.h3>
          <p className="mt-1 text-sm text-blue-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Explore More &rarr;
          </p>
        </div>
      </Link>
    </div>
  );
};