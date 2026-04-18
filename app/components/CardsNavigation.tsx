"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

interface SignCategory {
  id: number;
  title: string;
  image: string;
  href: string;
}

const signCategories: SignCategory[] = [
  { 
    id: 1, 
    title: "Way Finder & Safety Signs", 
    image: "/ws.jpg", // Removed "./" to prevent URL errors
    href: "/services/way-finder" 
  },
  { 
    id: 2, 
    title: "Vehicles Signs", 
    image: "/pps.jpg", 
    href: "/services/vehicle-signs" 
  },
  { 
    id: 3, 
    title: "Indoor Signs", 
    image: "/iis.jpg", 
    href: "/services/indoor-signs" 
  },
  { 
    id: 4, 
    title: "Promotional Signs", 
    image: "/ps.jpg", 
    href: "/services/promotional-signs" 
  },
  { 
    id: 5, 
    title: "Illuminated Signs", 
    image: "/is.jpg", 
    href: "/services/illuminated-signs" 
  },
  { 
    id: 6, 
    title: "Non Illuminated Signs", 
    image: "/nis.jpg", 
    href: "/services/non-illuminated" 
  },
];

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
  hidden: { 
    opacity: 0, 
    y: 40,
    clipPath: "inset(10% 0% 10% 0%)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { 
      duration: 0.8, 
      ease: [0.25, 1, 0.5, 1] 
    } 
  },
};

export default function SignageGrid() {
  return (
    <section className="w-full bg-white px-4 py-24">
      <motion.div 
        className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {signCategories.map((category) => (
          <motion.div 
            key={category.id} 
            variants={itemVariants} 
            className="flex justify-center"
          >
            <Link href={category.href} className="group block w-full max-w-[450px]">
              <div className="relative overflow-hidden rounded-2xl aspect-square w-full bg-gray-100">
                {/* --- OVERLAY SECTION --- */}
                {/* This creates a smooth dark gradient overlay on hover */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 450px) 100vw, 450px"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
              </div>
              
              <div className="overflow-hidden mt-6">
                <motion.h3 
                  className="text-[1.35rem] leading-tight text-black font-semibold tracking-tight"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-500 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                    {category.title}
                  </span>
                </motion.h3>
                
                <p className="mt-2 text-sm text-gray-500 font-medium opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  Explore More →
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}