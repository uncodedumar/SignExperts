"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#101b55] text-white w-full font-sans uppercase text-[11px] font-medium tracking-[0.1em]">
      <div className="max-w-[1800px] mx-auto border-t border-white/10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left: Brand & Newsletter */}
          <div className="col-span-1 md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between min-h-[350px]">
            <div className="space-y-8">
              <h3 className="text-[13px] opacity-60">Join the circle</h3>
              <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent border-b border-white/30 py-4 focus:border-white focus:outline-none transition-colors transition-all duration-300"
                  required
                />
                <button type="submit" className="absolute right-0 bottom-4 hover:translate-x-2 transition-transform">
                  —&gt;
                </button>
              </form>
            </div>

            <div className="flex flex-col gap-4 lowercase text-[14px] normal-case tracking-normal">
              <a href="mailto:hello@signexperts.com" className="hover:italic transition-all">hello@signexperts.com</a>
              <p className="opacity-50">+1 (415) 840 4427</p>
            </div>
          </div>

          {/* Right: Condensed Navigation */}
          <div className="col-span-1 md:col-span-8 grid grid-cols-2 md:grid-cols-3">
            {/* Quick Links */}
            <nav className="p-8 md:p-12 border-r border-white/10 space-y-6">
              <p className="opacity-40">Menu</p>
              <ul className="space-y-2">
                {['About', 'Work', 'Services', 'Contact'].map(link => (
                  <li key={link}><a href={`/${link.toLowerCase()}`} className="hover:pl-2 transition-all block">{link}</a></li>
                ))}
              </ul>
            </nav>

            {/* Product Focus */}
            <nav className="p-8 md:p-12 border-r border-white/10 space-y-6">
              <p className="opacity-40">Expertise</p>
              <ul className="space-y-2 text-[10px]">
                <li><a href="#" className="hover:opacity-50 transition-opacity">Indoor / Outdoor</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">Illuminated</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">Vehicle Wraps</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">Wayfinding</a></li>
              </ul>
            </nav>

            {/* Socials & Copyright */}
            <div className="col-span-2 md:col-span-1 p-8 md:p-12 flex flex-col justify-between">
              <nav className="space-y-2">
                <p className="opacity-40 mb-6">Social</p>
                <a href="#" className="block hover:italic transition-all">Instagram ↗</a>
                <a href="#" className="block hover:italic transition-all">LinkedIn ↗</a>
              </nav>
              <p className="text-[10px] opacity-40 mt-12 md:mt-0">©2026 SIGN EXPERTS</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Ultra Slim */}
        <div className="border-t border-white/10 px-8 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] opacity-50">
          <div className="flex gap-8">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
          <a href="https://bricklix.com" className="hover:opacity-100 transition-opacity">
            Crafted by Bricklix
          </a>
        </div>

        {/* Wordmark: Tighter & More Aggressive */}
        <div className="w-full overflow-hidden bg-white text-[#101b55]">
          <h1 className="text-[12vw] font-black leading-[0.75] tracking-[-0.05em] text-center py-2">
            SIGN E<span className="font-black ">X</span>PERTS
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;