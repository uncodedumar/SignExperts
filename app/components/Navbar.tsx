"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
// 1. Correct Import for Google Fonts
import { Bebas_Neue } from 'next/font/google';

// 2. Initialize the font
const bebas = Bebas_Neue({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-bebas', // Optional: creates a CSS variable
});

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    /* 3. Apply the font class directly to the nav wrapper */
    <nav className={`${bebas.className} w-full bg-[#050B33] tracking-wide`}>
      {/* Top Tier: Brand & Main Nav */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/Logo.png" 
            alt="Sign Experts Logo"
            width={50} 
            height={50}
            className="object-contain"
            priority // Good practice for navbar logos
          />
        </Link>

        {/* Primary Links */}
        <div className="hidden md:flex items-center gap-12 text-white font-medium text-lg">
          <Link href="/" className="hover:text-[#FFC107] transition-colors">Home</Link>
          <Link href="/services" className="hover:text-[#FFC107] transition-colors">Services</Link>
          <Link href="/blogs" className="hover:text-[#FFC107] transition-colors">Blogs</Link>
          <Link href="/about" className="hover:text-[#FFC107] transition-colors">About</Link>
        </div>

        {/* CTA Button */}
        <Link 
          href="/quote" 
          className="bg-[#FFC107] text-[#050B33] font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all uppercase text-base tracking-widest"
        >
          Get a Quote
        </Link>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/10" />

      {/* Bottom Tier: Categories */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center gap-10 text-white text-base font-normal">
        
        {/* Outdoor Signs Dropdown */}
        <div 
          className="relative group cursor-pointer h-full flex items-center"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="flex items-center gap-1 group-hover:text-[#FFC107] transition-colors uppercase tracking-widest">
            Outdoor signs <ChevronDown size={16} />
          </span>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-56 bg-[#050B33] border border-white/10 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <Link 
                href="/products/design-and-installation" 
                className="block px-4 py-3 hover:bg-[#FFC107] hover:text-[#050B33] transition-colors border-b border-white/5"
              >
                Illuminated Signs
              </Link>
              <Link 
                href="/outdoor-signs/non-illuminated" 
                className="block px-4 py-3 hover:bg-[#FFC107] hover:text-[#050B33] transition-colors"
              >
                Non-Illuminated Signs
              </Link>
            </div>
          )}
        </div>

        {/* Secondary Links */}
        <Link href="/products/design-and-installation" className="hover:text-[#FFC107] uppercase tracking-widest">Way & safety signs</Link>
        <Link href="/indoor-sign" className="hover:text-[#FFC107] uppercase tracking-widest">Indoor sign</Link>
        <Link href="/vehicle-sign" className="hover:text-[#FFC107] uppercase tracking-widest">Vehicle sign</Link>
        <Link href="/promotional-sign" className="hover:text-[#FFC107] uppercase tracking-widest">Promotional sign</Link>
      </div>
    </nav>
  );
};

export default Navbar;