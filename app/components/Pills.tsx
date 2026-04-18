import React from 'react';
import Link from 'next/link';

interface PillProps {
  text: string;
  href: string;
  isService?: boolean;
}

const Pill = ({ text, href, isService = false }: PillProps) => (
  <Link
    href={href}
    className={`
      inline-block px-6 py-2 rounded-full border text-lg transition-all duration-300 ease-out
      hover:scale-105 hover:shadow-md hover:bg-gray-50 active:scale-95
      ${isService 
        ? 'border-neutral-400 text-stone-800 font-medium' 
        : 'border-neutral-300 text-neutral-500 font-light'}
    `}
  >
    {text}
  </Link>
);

const SignageSection = () => {
  // Helper to generate slugs
  const createSlug = (text: string, path: string) => 
    `/${path}/${text.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`;

  const products = [
    "Channel Letters", "Lightboxes", "3D Illuminated",
    "Digital Signs", "Ada Signs", "Illuminated Signs", "Post & Panels",
    "Teardrop Banners", "Vinyl Banners", "Flags", "Van Signs", "Bus Signs",
    "Choropast Signs", "Bill Boards", "Street Signs", "Saftey Signs",
    "Monumental Signs", "Window Signs", "Graphics Signs"
  ];

  const services = [
    "Custom Signs", "Fabricated Signs", "Sign Design", "Sign Writing",
    "Signs Installation", "Maintenance", "Sign Repair", "Branding Audit"
  ];

  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Products Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-black tracking-tight">Products</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
            {products.map((item) => (
              <Pill 
                key={item} 
                text={item} 
                href={createSlug(item, 'products')} 
              />
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-black tracking-tight">Services</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {services.map((item) => (
              <Pill 
                key={item} 
                text={item} 
                href={createSlug(item, 'services')} 
                isService 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SignageSection;