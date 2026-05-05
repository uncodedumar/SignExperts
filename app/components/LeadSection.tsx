"use client";

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Import your central data source
import { productsData } from '../../lib/data'; 

interface RelatedProductsProps {
  currentSlug: string;
}

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const RelatedProducts = ({ currentSlug }: RelatedProductsProps) => {
  // Logic to get 3 random products excluding the current one
  const displayedProducts = useMemo(() => {
    return [...productsData]
      .filter((p) => p.slug !== currentSlug) // Don't show the current product
      .sort(() => 0.5 - Math.random())      // Shuffle
      .slice(0, 3);                         // Take the top 3
  }, [currentSlug]);

  return (
    <section className="py-20 md:py-28 px-6 bg-[#FAF9F6] selection:bg-[#5D2E2E]/10">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-950"
          >
            Related <span className="text-[#5D2E2E]">Products</span>
          </motion.h2>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/products"
              className="inline-flex px-6 py-3 border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:border-[#5D2E2E] hover:text-[#5D2E2E] transition-colors whitespace-nowrap"
            >
              View All
            </Link>
          </motion.div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product, index) => (
            <Link href={`/products/${product.slug}`} key={product.slug}>
              <motion.div
                custom={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                whileHover="hover"
                className="group relative aspect-square rounded-[2rem] overflow-hidden bg-[#5D2E2E] cursor-pointer shadow-xl hover:shadow-[0_20px_50px_rgba(93,46,46,0.3)] transition-shadow duration-500"
              >
                
                {/* Zooming Background Image */}
                <motion.div
                  variants={{
                    hover: { scale: 1.15 },
                  }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="absolute inset-0 z-0"
                >
                  <Image
                    src={product.image} // Mapping from your ProductHeroData interface
                    alt={product.title}
                    fill
                    className="object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>

                {/* Sophisticated Gradient */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />

                {/* Text Content Area */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <motion.div
                    variants={{
                      initial: { y: 20, opacity: 0.8 },
                      hover: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="space-y-2"
                  >
                    <span className="block text-xs uppercase tracking-[0.25em] text-white/70 font-bold">
                       Sign Experts Selection
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
                      {product.title}
                    </h3>
                    
                    <div className="pt-2">
                      <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors flex items-center gap-2">
                        View Product <span className="text-lg">→</span>
                      </span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="absolute inset-0 rounded-[2rem] border border-white/10 group-hover:border-white/30 transition-colors pointer-events-none" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;