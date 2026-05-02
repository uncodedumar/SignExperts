import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#101b55]">
      {/* Background with subtle signage grid pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffb92d_1px,transparent_1px)] [background-size:40px_40px]" 
      />
      
      {/* Dynamic Overlay for depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#101b55]/50 via-transparent to-[#101b55]" />

      <div className="relative z-20 px-6 text-center">
        {/* Large Outlined 404 - Signage Style */}
        <h1 className="text-[12rem] font-black leading-none text-transparent md:text-[20rem] select-none stroke-current" 
            style={{ WebkitTextStroke: '2px #ffb92d', opacity: 0.15 }}>
          404
        </h1>

        <div className="mt-[-4rem] md:mt-[-8rem]">
          {/* Main Heading with Brand Color Accent */}
          <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter italic">
            Wrong <span className="text-[#ffb92d]">Direction?</span>
          </h2>
          
          <p className="max-w-lg mx-auto text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-light">
            It looks like this sign led to a dead end. Don’t worry, 
            <span className="font-bold text-white"> Sign Experts, IL</span> will help you find the right path to high-impact branding.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="inline-block px-10 py-4 bg-[#ffb92d] text-[#101b55] font-black text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,185,45,0.3)]"
            >
              Back to Home
            </Link>
            
            <Link 
              href="/#contact-form" 
              className="inline-block px-10 py-4 border-2 border-[#ffb92d] text-[#ffb92d] font-black text-sm uppercase tracking-widest hover:bg-[#ffb92d] hover:text-[#101b55] transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Aesthetic Accents - Sign Support Pole Style */}
      <div className="absolute top-0 right-20 hidden lg:block">
        <div className="w-[2px] h-64 bg-gradient-to-b from-[#ffb92d] to-transparent opacity-30" />
      </div>
      
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex flex-col gap-2">
          <div className="w-12 h-[2px] bg-[#ffb92d]" />
          <div className="w-24 h-[2px] bg-[#ffb92d] opacity-50" />
          <div className="w-8 h-[2px] bg-[#ffb92d] opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;