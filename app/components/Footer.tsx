"use client";
import React from 'react';
import Link from 'next/link';
import { productsData } from '@/lib/data';
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const menuLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blogs', href: '/blog' },
];

const Footer = () => {
  return (
    <footer className="bg-[#091242] text-white w-full font-sans uppercase text-[11px] font-medium tracking-[0.1em]">
      <div className="max-w-[1800px] mx-auto border-t border-white/10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column: Brand, Newsletter & Socials */}
          <div className="col-span-1 md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between min-h-[450px]">
            <div className="space-y-12">
              <div>
                <h3 className="text-[13px] opacity-60 mb-8">Join the circle</h3>
                <form 
                  action="https://formspree.io/f/mreonybj" 
                  method="POST" 
                  className="relative group"
                >
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="EMAIL ADDRESS" 
                    className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder:text-white/50 focus:border-white focus:outline-none transition-all duration-500 tracking-widest text-sm"
                    required
                  />
                  <button
                    type="submit"
                    aria-label="Submit email to newsletter"
                    className="absolute right-0 bottom-4 group/btn flex items-center gap-3 text-white tracking-tighter font-light"
                  >
                    <span className="text-xs opacity-0 group-hover/btn:opacity-100 -translate-x-4 group-hover/btn:translate-x-0 transition-all duration-500 ease-out">
                      SUBMIT
                    </span>
                    <span className="text-2xl group-hover/btn:translate-x-2 transition-transform duration-500 ease-in-out">
                      —&gt;
                    </span>
                  </button>
                </form>
              </div>

              {/* Socials moved here */}
              <nav className="space-y-3">
                <p className="opacity-40 mb-4 text-[10px]">Connect</p>
                <div className="flex gap-6">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ffb92d] transition-all"
                    >
                      Instagram ↗
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ffb92d] transition-all"
                    >
                      Facebook ↗
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ffb92d] transition-all"
                    >
                      LinkedIn ↗
                    </a>
                    <a
                      href="https://x.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ffb92d] transition-all"
                    >
                      X ↗
                    </a>
                </div>
              </nav>
            </div>

            <div className="flex flex-col gap-4 lowercase text-[17px] normal-case tracking-normal mt-12">
              <a href="mailto:sign.eexperts@gmail.com" className="hover:italic transition-all">sign.eexperts@gmail.com</a>
              <p className="hover:italic transition-all">+1 929 392 8337</p>
              <p className="text-[10px] opacity-40 mt-4 uppercase tracking-widest font-bold">
                ©2026 <span className={`${bebas.className} tracking-[0.08em]`}>SIGN EXPERTS</span>
              </p>
            </div>
          </div>

          {/* Right Area: Menu & Multi-Column Products */}
          <div className="col-span-1 md:col-span-8 grid grid-cols-1 md:grid-cols-4">
            
            {/* Quick Links (1 Column) */}
            <nav className="p-8 md:p-12 border-b md:border-b-0 border-r border-white/10 space-y-8 col-span-1">
              <p className="opacity-40">Menu</p>
              <ul className="space-y-3">
                {menuLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#ffb92d] transition-all block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Products (3 Columns worth of space using CSS Multi-Column) */}
            <nav className="p-8 md:p-12 space-y-8 col-span-1 md:col-span-3">
              <p className="opacity-40">Our Products</p>
              <ul className="columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-4 text-[10px] [column-fill:balance]">
                {productsData.map((product) => (
                  <li key={product.slug} className="break-inside-avoid">
                    <Link
                      href={`/products/${product.slug}`}
                      className="hover:text-[#ffb92d] transition-colors block leading-relaxed"
                    >
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 px-8 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px]">
          
          <a href="https://www.bricklix.com" className="opacity-100  flex items-center gap-2">
            Engineered by <span className="font-black tracking-tighter text-white">BRICKLIX</span>
          </a>
        </div>

        {/* Brand Wordmark */}
        <div className="w-full overflow-hidden bg-white text-[#101b55]">
          <div className="flex flex-col items-center justify-center py-2">
            <img
              src="/Logofooter.svg"
              alt="Sign Experts Footer Logo"
              width={480}
              height={80}
              sizes="240px"
              className="w-60 h-10 object-contain"
            />
          </div>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;