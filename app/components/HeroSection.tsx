"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Bebas_Neue, Lexend } from 'next/font/google';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'] });

const FRAME_COUNT = 176;

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // 1. Preload images from herobg folder
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // Generates 001, 002, ... 176
      const frameIndex = i.toString().padStart(3, '0');
      img.src = `/herobg/ezgif-frame-${frameIndex}.jpg`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // 2. Drawing logic
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (canvas && context && images[index]) {
      // Draw image to fill canvas (cover effect)
      const img = images[index];
      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = img.width / img.height;
      
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgAspect;
        offsetX = 0;
        offsetY = -(drawHeight - canvas.height) / 2;
      } else {
        drawWidth = canvas.height * imgAspect;
        drawHeight = canvas.height;
        offsetX = -(drawWidth - canvas.width) / 2;
        offsetY = 0;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  };

  // 3. Update frame on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress (0 to 1) based on container scroll
      const scrollFraction = Math.max(0, Math.min(1, -top / (height - windowHeight)));
      const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(scrollFraction * FRAME_COUNT));

      if (images[frameIndex]) {
        renderFrame(frameIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [images]);

  // Render first frame once images load
  useEffect(() => {
    if (images.length > 0) renderFrame(0);
  }, [images]);

  return (
    /* Height 400vh creates the scroll room. No vertical scroll will move past this 
       until the frames finish because the inner div is 'sticky' */
    <section ref={containerRef} className="relative h-[400vh] w-full bg-black">
      
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Canvas */}
        <div className="absolute inset-0 z-0">
          <canvas
            ref={canvasRef}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          
        </div>

        {/* Original Content UI */}
        <div className="relative z-10 max-w-4xl mx-auto text-white text-center px-4">
          <h1 className={`${bebas.className} text-6xl md:text-8xl lg:text-[120px] leading-none mb-6 tracking-tight`}>
            Let’s Build Your Landmark
          </h1>
          
          <p className={`${lexend.className} text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10 opacity-90`}>
            We have signage solutions for all industries. Our network of stores 
            across the US have been working hard to help business's bounce 
            back after the pandemic.
          </p>

          <button className={`${lexend.className} bg-[#FFC121] hover:bg-[#e5ae1d] text-white px-10 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg`}>
            Get a Quote
          </button>
        </div>

        {/* Removed Navigation Arrows and Indicators as they no longer apply to a scroll-video background */}
      </div>
    </section>
  );
}