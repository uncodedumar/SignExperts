"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-bebas', 
});

const Navbar = () => {
  const [isOutdoorOpen, setIsOutdoorOpen] = useState(false);
  const [isIndoorOpen, setIsIndoorOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`${bebas.className} w-full bg-[#050B33] tracking-wide relative`}>
      {/* Top Tier: Brand & Main Nav */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo & Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/Logo.png" 
            alt="Sign Experts Logo"
            width={45} 
            height={45}
            className="object-contain"
            priority 
          />
          <span className="text-white text-3xl lg:text-4xl tracking-wider pt-1">
            SIGN EXPERTS
          </span>
        </Link>

        {/* Primary Links (Desktop) - Increased to text-xl */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-white font-medium text-xl">
          <Link href="/" className="hover:text-[#FFC107] transition-colors">Home</Link>
          <Link href="/services" className="hover:text-[#FFC107] transition-colors">Services</Link>
          <Link href="/blog" className="hover:text-[#FFC107] transition-colors">Blogs</Link>
          <Link href="/about" className="hover:text-[#FFC107] transition-colors">About</Link>
        </div>

        {/* Right Side: CTA & Burger */}
        <div className="flex items-center gap-4">
          <Link 
            href="/quote" 
            className="hidden sm:block bg-[#FFC107] text-[#050B33] font-bold py-2 px-6 lg:py-3 lg:px-8 rounded-full hover:bg-yellow-400 transition-all uppercase text-lg tracking-widest"
          >
            Get a Quote
          </Link>
          
          <button 
            className="md:hidden text-white p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-full h-[1px] bg-white/10" />

      {/* Bottom Tier: Categories (Desktop only) - Increased to text-lg */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 h-16 items-center justify-center gap-8 lg:gap-10 text-white text-lg font-normal">
        
        {/* Outdoor Dropdown */}
        <div 
          className="relative group cursor-pointer h-full flex items-center"
          onMouseEnter={() => setIsOutdoorOpen(true)}
          onMouseLeave={() => setIsOutdoorOpen(false)}
        >
          <span className="flex items-center gap-1 group-hover:text-[#FFC107] transition-colors uppercase tracking-widest">
            Outdoor signs <ChevronDown size={18} />
          </span>
          {isOutdoorOpen && (
            <div className="absolute top-full left-0 w-64 bg-[#050B33] border border-white/10 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <Link href="/products/illuminated-signs" className="block px-4 py-3 hover:bg-[#FFC107] hover:text-[#050B33] transition-colors border-b border-white/5">Illuminated Signs</Link>
              <Link href="/products/non-illuminated-signs" className="block px-4 py-3 hover:bg-[#FFC107] hover:text-[#050B33] transition-colors border-b border-white/5">Non-Illuminated Signs</Link>
              <Link href="/products/building-signs" className="block px-4 py-3 hover:bg-[#FFC107] hover:text-[#050B33] transition-colors">Building Signs</Link>
            </div>
          )}
        </div>
        
        <Link href="/products/digital-led-solutions" className="hover:text-[#FFC107] uppercase tracking-widest">LED Signs</Link>

        {/* Indoor Dropdown */}
        <div 
          className="relative group cursor-pointer h-full flex items-center"
          onMouseEnter={() => setIsIndoorOpen(true)}
          onMouseLeave={() => setIsIndoorOpen(false)}
        >
          <span className="flex items-center gap-1 group-hover:text-[#FFC107] transition-colors uppercase tracking-widest">
            Indoor signs <ChevronDown size={18} />
          </span>
          {isIndoorOpen && (
            <div className="absolute top-full left-0 w-64 bg-[#050B33] border border-white/10 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <Link href="/products/wayfinder-safety-signs" className="block px-4 py-3 hover:bg-[#FFC107] hover:text-[#050B33] transition-colors border-b border-white/5">Wayfinder & Safety Signs</Link>
              <Link href="/products/office-signs" className="block px-4 py-3 hover:bg-[#FFC107] hover:text-[#050B33] transition-colors">Office Signs</Link>
            </div>
          )}
        </div>

        <Link href="/products/vehicles-signs" className="hover:text-[#FFC107] uppercase tracking-widest">Vehicle sign</Link>
        <Link href="/products/promotional-signs" className="hover:text-[#FFC107] uppercase tracking-widest">Promotional sign</Link>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#050B33] z-[100] border-t border-white/10 flex flex-col p-6 gap-6 text-white text-2xl overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
            <Link href="/" onClick={toggleMobileMenu}>Home</Link>
            <Link href="/services" onClick={toggleMobileMenu}>Services</Link>
            <Link href="/blog" onClick={toggleMobileMenu}>Blogs</Link>
            <Link href="/about" onClick={toggleMobileMenu}>About</Link>
          </div>
          
          <div className="flex flex-col gap-4 text-xl text-gray-300">
            <p className="text-[#FFC107] text-base tracking-[0.2em] uppercase font-bold">Categories</p>
            <Link href="/products/illuminated-signs" onClick={toggleMobileMenu}>Illuminated Signs</Link>
            <Link href="/products/non-illuminated-signs" onClick={toggleMobileMenu}>Non-Illuminated Signs</Link>
            <Link href="/products/digital-led-solutions" onClick={toggleMobileMenu}>LED Signs</Link>
            <Link href="/products/wayfinder-and-saftey-signs" onClick={toggleMobileMenu}>Wayfinder & Safety Signs</Link>
            <Link href="/products/office-signs" onClick={toggleMobileMenu}>Office Signs</Link>
            <Link href="/products/vehicles-signs" onClick={toggleMobileMenu}>Vehicle Sign</Link>
            <Link href="/products/promotional-signs" onClick={toggleMobileMenu}>Promotional Sign</Link>
          </div>

          <Link 
            href="/quote" 
            onClick={toggleMobileMenu}
            className="bg-[#FFC107] text-[#050B33] font-bold py-4 text-center rounded-xl uppercase text-xl"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;