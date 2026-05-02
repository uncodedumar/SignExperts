"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Bebas_Neue } from 'next/font/google';
import { productsData } from '../../lib/data';

type ProductNavLink = {
  name: string;
  href: string;
};

type ProductNavDivision = {
  name: string;
  links: ProductNavLink[];
};

type ProductNavCategory = {
  category: string;
  divisions?: ProductNavDivision[];
  links?: ProductNavLink[];
};

type ProductMenuDefinition = {
  category: string;
  divisions?: {
    name: string;
    slugs: string[];
  }[];
  slugs?: string[];
};

const productMenuDefinition: ProductMenuDefinition[] = [
  {
    category: 'Outdoor signs',
    divisions: [
      {
        name: 'Illuminated signs',
        slugs: [
          '3d-illuminated-letters',
          'digital-illuminated-signs',
          'light-box-signs',
          'led-backlight-halo-lit',
          'channel-signs',
        ],
      },
      {
        name: 'Non-Illuminated signs',
        slugs: [
          'ada-and-accessibility-signs',
          'dimensional-letters',
          'post-and-panels-signs',
          'teardrops-banners-and-flags',
          'vinyl-banners',
          'pylon-signs',
          'coroplast-signs',
          'billboards',
          'streets-and-traffic-signs',
        ],
      },
    ],
  },
  {
    category: 'Led Signs',
    slugs: ['led-screens', 'menu-screens', 'led-lights'],
  },
  {
    category: 'Indoor signs',
    divisions: [
      {
        name: 'Way finder and safety signs',
        slugs: [
          'hygiene-and-safety-signs',
          'custom-brand-identity',
          'way-finding-and-directional',
          'illuminated-signage',
          'trade-show-and-events',
          'exterior-storefronts',
        ],
      },
      {
        name: 'Office signs',
        slugs: [
          'indoor-signs',
          'room-door-signs',
          'window-frosting',
          'reception-signs',
          'led-backlit-signs',
          'directional-signs',
          'wall-graphics',
        ],
      },
    ],
  },
  {
    category: 'Vehicles Signs',
    slugs: [
      'fleet-graphics',
      'car-graphics',
      'one-way-vision',
      'vehicle-lettering',
      'van-wraps',
      'truck-graphics',
      'trailer-signs',
      'magnetic-vehicles-signs',
    ],
  },
  {
    category: 'Promotional signs',
    slugs: [
      'banners-and-flags',
      'exhibition-signage',
      'digital-printing',
      'posters',
      'window-lettering',
      'window-decals',
    ],
  },
];

const productBySlug = new Map(
  productsData.filter((product) => product.slug).map((product) => [product.slug, product])
);

const buildProductLink = (slug: string): ProductNavLink => {
  const product = productBySlug.get(slug);
  return {
    name: product?.title ?? slug,
    href: `/products/${encodeURIComponent(slug)}`,
  };
};

const mobileProductCategories: ProductNavCategory[] = productMenuDefinition.map((category) => {
  if (category.divisions) {
    return {
      category: category.category,
      divisions: category.divisions.map((division) => ({
        name: division.name,
        links: division.slugs.map(buildProductLink),
      })),
    };
  }

  return {
    category: category.category,
    links: (category.slugs ?? []).map(buildProductLink),
  };
});

const bebas = Bebas_Neue({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-bebas', 
});

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      if (!next) setIsCategoriesOpen(false);
      return next;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsCategoriesOpen(false);
  };

  return (
    /* Added md:hidden to hide the entire navbar on desktop/tablets */
    <nav className={`${bebas.className} w-full bg-[#050B33] tracking-wide relative md:hidden`}>
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
          <span className="text-white text-3xl tracking-wider pt-1">
            SIGN EXPERTS
          </span>
        </Link>

        {/* Right Side: Burger Menu */}
        <div className="flex items-center gap-4">
          <button 
            className="text-white p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#050B33] z-[100] border-t border-white/10 flex flex-col p-6 gap-6 text-white text-2xl overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
            <Link href="/" onClick={closeMobileMenu}>Home</Link>
            <Link href="/services" onClick={closeMobileMenu}>Services</Link>
            <Link href="/blog" onClick={closeMobileMenu}>Blogs</Link>
            <Link href="/about" onClick={closeMobileMenu}>About</Link>
          </div>
          
          <div className="flex flex-col gap-3 text-xl text-gray-300">
            <button
              type="button"
              onClick={() => setIsCategoriesOpen((prev) => !prev)}
              aria-expanded={isCategoriesOpen}
              aria-controls="mobile-categories-list"
              className="flex items-center justify-between text-[#FFC107] text-base tracking-[0.2em] uppercase font-bold"
            >
              Categories
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isCategoriesOpen && (
              <div id="mobile-categories-list" className="flex flex-col gap-5 text-lg text-gray-300 pl-2">
                {mobileProductCategories.map((categoryItem) => (
                  <div key={categoryItem.category} className="space-y-3">
                    <p className="text-[#FFC107] text-sm tracking-[0.15em] uppercase font-semibold">
                      {categoryItem.category}
                    </p>

                    {categoryItem.divisions ? (
                      <div className="space-y-4">
                        {categoryItem.divisions.map((division) => (
                          <div key={division.name} className="space-y-2">
                            <p className="text-white/70 text-sm uppercase tracking-[0.1em]">{division.name}</p>
                            <div className="flex flex-col gap-2 text-gray-300">
                              {division.links.map((linkItem) => (
                                <Link key={linkItem.href} href={linkItem.href} onClick={closeMobileMenu}>
                                  {linkItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2 text-gray-300">
                        {categoryItem.links?.map((linkItem) => (
                          <Link key={linkItem.href} href={linkItem.href} onClick={closeMobileMenu}>
                            {linkItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link 
           href="/#contact-form"
            onClick={closeMobileMenu}
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