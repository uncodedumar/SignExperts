"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { productsData } from '../../lib/data';

interface ProductAccordionProps {
  slug: string;
}

const ProductAccordion = ({ slug }: ProductAccordionProps) => {
  const normalizedSlug = decodeURIComponent(slug).trim().toLowerCase();
  const categoryData =
    productsData.find((item) => item.slug.toLowerCase() === normalizedSlug) ??
    productsData[0];
  const accordions = (categoryData?.services ?? []).map((service, index) => ({
    id: `acc-${index}`,
    title: service.title,
    subheading: 'Product Category',
    description: service.description,
    products: categoryData?.products ?? [],
  }));
  const [openId, setOpenId] = useState<string | null>(
    accordions[0]?.id ?? "acc-0"
  );

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-[100vw] overflow-x-hidden bg-white text-[#1a1a1a] font-sans selection:bg-black selection:text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col gap-6">
          {accordions.map((acc, index) => (
            <div
              key={acc.id}
              className={`transition-all duration-700 ease-in-out border border-black/5 bg-white ${
                openId === acc.id ? "rounded-[48px] shadow-2xl shadow-black/5" : "rounded-[24px]"
              } overflow-hidden`}
            >
              {/* --- ACCORDION HEADER --- */}
              <button
                onClick={() => toggleAccordion(acc.id)}
                className="w-full flex items-center justify-between px-8 md:px-16 py-10 md:py-14 text-left group"
              >
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="text-sm font-mono text-black/20 font-bold">0{index + 1}</span>
                  <h2 className="text-1xl md:text-[2vw] font-semibold tracking-[-0.03em] leading-none transition-transform duration-500 group-hover:translate-x-2">
                    {acc.title}
                  </h2>
                </div>

                <motion.div
                  animate={{
                    rotate: openId === acc.id ? 45 : 0,
                    backgroundColor: openId === acc.id ? "#000" : "#f0f0f0",
                  }}
                  className="flex border border-black/5 rounded-full w-16 h-16 md:w-20 md:h-20 items-center justify-center transition-colors duration-500"
                >
                  <Plus className={`w-8 h-8 ${openId === acc.id ? "text-white" : "text-black"}`} />
                </motion.div>
              </button>

              {/* --- ACCORDION CONTENT --- */}
              <AnimatePresence>
                {openId === acc.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 md:px-16 pb-16">
                      <div className="mb-12">
                        <p className="text-gray-500 text-lg mb-2">{acc.subheading || "Product Category"}</p>
                        <p className="text-gray-600 max-w-4xl text-xl leading-snug">
                          {acc.description}
                        </p>
                      </div>

                      <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Our Products</h3>

                      {/* --- PRODUCT GRID --- */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {acc.products.map((product, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-neutral-200 cursor-pointer"
                          >
                            <Image
                              src={product.imageUrl}
                              alt={product.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                              <h4 className="text-3xl font-bold mb-3 leading-tight">
                                {product.title}
                              </h4>
                              <p className="text-sm leading-relaxed text-gray-200 line-clamp-3 opacity-90 group-hover:opacity-100 transition-opacity">
                                {product.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductAccordion;