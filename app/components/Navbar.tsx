"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MoveRight, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { productsData as allProductsData } from "@/lib/data";

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
    category: "Outdoor signs",
    divisions: [
      {
        name: "Illuminated signs",
        slugs: [
          "3d-illuminated-letters",
          "digital-illuminated-signs",
          "light-box-signs",
          "led-backlight-halo-lit",
          "channel-signs",
        ],
      },
      {
        name: "Non-Illuminated signs",
        slugs: [
          "ada-and-accessibility-signs",
          "dimensional-letters",
          "post-and-panels-signs",
          "teardrops-banners-and-flags",
          "vinyl-banners",
          "pylon-signs",
          "coroplast-signs",
          "billboards",
          "streets-and-traffic-signs",
        ],
      },
    ],
  },
  {
    category: "Led Signs",
    slugs: ["led-screens", "menu-screens", "led-lights"],
  },
  {
    category: "Indoor signs",
    divisions: [
      {
        name: "Way finder and safety signs",
        slugs: [
          "hygiene-and-safety-signs",
          "custom-brand-identity",
          "way-finding-and-directional",
          "illuminated-signage",
          "trade-show-and-events",
          "exterior-storefronts",
        ],
      },
      {
        name: "Office signs",
        slugs: [
          "indoor-signs",
          "room/door-signs",
          "window-frosting",
          "reception-signs",
          "led-backlit-signs",
          "directional-signs",
          "wall-graphics",
        ],
      },
    ],
  },
  {
    category: "Vehicles Signs",
    slugs: [
      "fleet-graphics",
      "car-graphics",
      "one-way-vision",
      "vehicle-lettering",
      "van-wraps",
      "truck-graphics",
      "trailer-signs",
      "boat-graphics",
      "magnetic-vehicles-signs",
    ],
  },
  {
    category: "Promotional signs",
    slugs: [
      "banners-and-flags",
      "exhibition-signage",
      "digital-printing",
      "posters",
      "window-lettering",
      "window-decals",
    ],
  },
];

const productBySlug = new Map(
  allProductsData.filter((product) => product.slug).map((product) => [product.slug, product])
);

const buildProductLink = (slug: string): ProductNavLink => {
  const product = productBySlug.get(slug);
  return {
    name: product?.title ?? slug,
    href: `/products/${encodeURIComponent(slug)}`,
  };
};

const productsData: ProductNavCategory[] = productMenuDefinition.map((category) => {
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

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blog" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products", hasDropdown: true },
];

const BouncingLink = ({ name, href }: { name: string; href: string }) => (
  <Link href={href} className="group relative flex items-center overflow-hidden text-white">
    {name.split("").map((char, i) => (
      <motion.span 
        key={i} 
        style={{ display: "inline-block" }} 
        whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 10 } }} 
        className={char === " " ? "mr-1" : ""}
      >
        {char}
      </motion.span>
    ))}
  </Link>
);

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(productsData[0]);

  const closeMobileMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { closeMobileMenu(); }, [pathname, closeMobileMenu]);

  return (
    /* Added hidden md:block here to hide on mobile */
    <div className="fixed left-0 right-0 z-[9999] transition-all duration-300 px-4 md:px-0 hidden md:block" style={{ top: "10px" }}>
    <header 
      className={`mx-auto transition-all duration-700 backdrop-blur-xl border border-white/10 w-[98%] 
      ${isScrolled 
        ? "max-w-[92%] md:max-w-[85%] rounded-full bg-[#101b55]/90 shadow-xl" 
        : "max-w-full rounded-[30px] bg-[#101b55]"
      }`}
    >
      <nav className="flex justify-between items-center h-20 px-6 lg:px-12 max-w-screen-2xl mx-auto relative">
          
          {/* Left: Logo & Text */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 z-10">
            <Image src="/Logo.png" alt="Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-white font-bold text-xl tracking-tight hidden sm:block">SIGN EXPERTS</span>
          </Link>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <LayoutGroup>
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative py-6" 
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(true)} 
                  onMouseLeave={() => setActiveDropdown(false)}
                >
                  <div className="flex items-center font-medium gap-1.5 cursor-pointer text-sm uppercase">
                    <BouncingLink name={link.name} href={link.href} />
                    {link.hasDropdown && <ChevronDown size={14} className="text-white opacity-70" />}
                  </div>

                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-1 w-[900px] bg-blue-950 text-white rounded-[2rem] p-8 shadow-2xl border border-white/10"
                      >
                        <div className="grid grid-cols-12 gap-8">
                          {/* Sidebar Categories */}
                          <div className="col-span-4 space-y-2 border-r border-white/10 pr-4">
                            <p className="text-[10px] uppercase tracking-widest text-blue-300 mb-4">Categories</p>
                            {productsData.map((item) => (
                              <button
                                key={item.category}
                                onMouseEnter={() => setActiveCategory(item)}
                                className={`flex items-center justify-between w-full text-left p-2 rounded-lg transition-all ${activeCategory.category === item.category ? "bg-blue-600 text-white" : "hover:bg-[#ffb92d] text-[#ffb92d]"}`}
                              >
                                <span className="font-semibold">{item.category}</span>
                                <ChevronRight size={16} />
                              </button>
                            ))}
                          </div>

                          {/* Content Area */}
                          <div className="col-span-8 overflow-y-auto max-h-[400px] pr-2">
                             <p className="text-[10px] uppercase tracking-widest text-blue-300 mb-4">{activeCategory.category}</p>
                             <div className="grid grid-cols-2 gap-6">
                                {activeCategory.divisions ? (
                                  activeCategory.divisions.map((div) => (
                                    <div key={div.name} className="space-y-3">
                                      <h4 className="text-blue-400 font-bold text-xs uppercase border-b border-white/5 pb-1">{div.name}</h4>
                                      {div.links.map((linkItem) => (
                                        <Link
                                          key={linkItem.href}
                                          href={linkItem.href}
                                          className="block text-sm text-white/70 hover:text-white transition-colors"
                                        >
                                          • {linkItem.name}
                                        </Link>
                                      ))}
                                    </div>
                                  ))
                                ) : (
                                  activeCategory.links?.map((linkItem) => (
                                    <Link
                                      key={linkItem.href}
                                      href={linkItem.href}
                                      className="block text-sm text-white/70 hover:text-white transition-colors"
                                    >
                                      • {linkItem.name}
                                    </Link>
                                  ))
                                )}
                             </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </LayoutGroup>
          </div>

          {/* Right: Quote Button */}
          <div className="hidden md:flex items-center z-10">
            <Link href="/quote" className="bg-[#ffb92d] text-[#101b55] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#ffcd45] transition-all shadow-lg flex items-center gap-2">
              Get a Free Quote <MoveRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <button className="p-2 text-white" onClick={() => setIsMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed inset-0 bg-blue-900 z-[10000] p-8 flex flex-col overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <span className="text-white font-bold text-xl">SIGN EXPERTS</span>
                <button onClick={closeMobileMenu} className="text-white"><X size={32} /></button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map(link => (
                  <Link key={link.name} href={link.href} className="text-2xl font-bold text-white border-b border-white/10 pb-4">{link.name}</Link>
                ))}
                <Link href="/quote" className="bg-white text-blue-600 p-4 rounded-xl text-center font-bold">Get a Free Quote</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}