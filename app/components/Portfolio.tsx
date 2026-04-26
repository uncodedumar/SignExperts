"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  { id: "01", title: "Outdoor Signage", image: "/a.jpg", category: "Illuminated" },
  { id: "02", title: "Custom LED", image: "/b.jpg", category: "Digital" },
  { id: "03", title: "Vehicle Wrap", image: "/c.jpg", category: "Fleet" },
  { id: "04", title: "Wayfinding", image: "/g1.jpg", category: "Indoor" },
  { id: "05", title: "Office Graphics", image: "/g2.jpg", category: "Interior" },
  { id: "06", title: "Pylon Signs", image: "/o.jpg", category: "Industrial" },
];

export default function PortfolioSection() {
  return (
    <section className="py-24 px-6 bg-[#101b55] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-black text-white uppercase italic tracking-tighter">
            Our <span className="text-[#ffb92d] underline">Work</span>
          </h2>
          <p className="text-blue-200 mt-4 max-w-xl">
            Explore our latest projects across various industries, from massive outdoor billboards to precision-engineered indoor branding.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden border-b-2 border-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
               
              </div>

              {/* Content Box */}
              <div className="p-6 bg-white">
                <div className="flex justify-between items-center">
                  <div>
    
                    <h3 className="text-2xl font-black text-gray-900 uppercase italic leading-tight mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
      
      </div>
    </section>
  );
}