"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Truck, Layout, Monitor, Star } from 'lucide-react';

const signData = [
  {
    id: 'outdoor',
    category: "Outdoor signs",
    icon: <Layout className="w-5 h-5" />,
    color: 'bg-green-400',
    divisions: [
      {
        name: "Illuminated signs",
        links: ["3d illuminated signs", "digital led signs", "light box signs", "led backlight/halo signs", "channel signs"]
      },
      {
        name: "Non-Illuminated signs",
        links: ["ADA & Accessibilty Signs", "Dimensional Signs", "Post AND Panel SIgns", "teardrop banners and flags", "Vinyl SIgns", "pylon Signs", "Monumental Signs", "Coroplast Signs", "Billboards", "Street and traffic signs"]
      }
    ]
  },
  {
    id: 'led',
    category: "Led Signs",
    icon: <Lightbulb className="w-5 h-5" />,
    color: 'bg-yellow-400',
    links: ["Led screen", "menu screens", "led lights"]
  },
  {
    id: 'indoor',
    category: "Indoor signs",
    icon: <Monitor className="w-5 h-5" />,
    color: 'bg-purple-400',
    divisions: [
      {
        name: "Way finder and safety signs",
        links: ["hygiene and safety signs", "custom brand signs", "wayfinding and Directional signs", "illuminated signage", "train show & events", "Exterior storefronts"]
      },
      {
        name: "Office signs",
        links: ["indoor sign", "Retractable Banner signs", "Room/Door Signs", "Window Frosting", "Reception Signs", "Led Backlit Signs", "Directional Signs", "Wall Graphics"]
      }
    ]
  },
  {
    id: 'vehicle',
    category: "Vehicles Signs",
    icon: <Truck className="w-5 h-5" />,
    color: 'bg-blue-400',
    links: ["fleet graphics", "car wraps", "one way visions", "vehicles lettering", "van wraps", "truck graphices", "trailer signs", "refelective vehicles signs"]
  },
  {
    id: 'promotional',
    category: "Promotional signs",
    icon: <Star className="w-5 h-5" />,
    color: 'bg-orange-400',
    links: ["Banner and Signs", "Exhibition Signage", "Digital printing", "poster", "window lettering", "window decals"]
  }
];

export default function ProductPlayground() {
  const [activeTab, setActiveTab] = useState(signData[0].id);

  const getActiveItems = () => {
    const active = signData.find(c => c.id === activeTab);
    if (!active) return [];
    if (active.divisions) {
      return active.divisions.flatMap(div => div.links);
    }
    return active.links || [];
  };

  const activeItems = getActiveItems();

  return (
    <section className="py-24 bg-[#101b55] overflow-hidden min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-6 flex-grow">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4 uppercase italic">
            What We <span className="text-[#ffcd45] underline">Make</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From industrial pylon signs to custom vehicle wraps, select a category to explore our high-impact signage solutions.
          </p>
        </div>

        {/* Playful Category Switcher */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {signData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 ${
                activeTab === cat.id 
                ? `${cat.color} text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]` 
                : 'bg-white text-gray-600 hover:bg-gray-100 border-2 border-transparent shadow-sm'
              }`}
            >
              {cat.icon}
              {cat.category}
            </button>
          ))}
        </div>

        {/* Animated Product Grid */}
        <div className="min-h-[400px] mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {activeItems.map((item, idx) => (
                <motion.div
                  key={`${activeTab}-${item}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.03 }}
                  whileHover={{ scale: 1.03, rotate: idx % 2 === 0 ? 0.5 : -0.5 }}
                  className="bg-white border-2 border-black p-8 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all group cursor-pointer flex items-center justify-center min-h-[120px]"
                >
                  <h3 className="font-black text-black  text-lg leading-tight uppercase group-hover:text-blue-600 transition-colors text-center">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Marquee - Adjusted with mt-auto to push to bottom and fixed vertical spacing */}
      <div className="mt-auto overflow-hidden relative py-6  bg-[#ffcd45] -rotate-1 scale-105 mb-10">
        <div className="flex animate-loop-scroll-reverse space-x-12 whitespace-nowrap">
          {[...activeItems, ...activeItems].map((text, i) => (
            <span key={i} className="text-xl font-black text-gray-700 uppercase italic tracking-tighter">
              • {text}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes loop-scroll-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-loop-scroll-reverse {
          animation: loop-scroll-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
}