"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProductCard } from '../../lib/data'; // Adjust path

interface ProductListProps {
  products: ProductCard[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <section className="py-20 px-6 bg-[#FAF9F6]">
      <div className="max-w-[90%] mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold text-gray-900 mb-12 ml-2"
        >
          Featured <span className="text-[#5D2E2E]">Products</span>
        </motion.h2>

        <div className="space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 lg:gap-16 p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500`}
            >
              
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[4/3] rounded-[1.8rem] overflow-hidden bg-[#5D2E2E]"
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-1000"
                  />
                </motion.div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                  {product.title}
                </h3>
                <div className="w-12 h-1 bg-[#5D2E2E] rounded-full" />
                <div className="text-gray-600 text-lg leading-relaxed md:not-italic italic space-y-2">
                  {product.description
                    .split('\n')
                    .map((rawLine, lineIndex) => {
                      const line = rawLine.trim();

                      if (!line) {
                        return <div key={lineIndex} className="h-2" />;
                      }

                      const isCallout = line.startsWith('👉');

                      if (isCallout) {
                        return (
                          <div
                            key={lineIndex}
                            className="mt-3 rounded-2xl bg-[#ffb92d]/15 px-4 py-3 text-gray-900 font-medium not-italic"
                          >
                            {line}
                          </div>
                        );
                      }

                      return (
                        <p key={lineIndex} className="m-0">
                          {line}
                        </p>
                      );
                    })}
                </div>
                
                
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;