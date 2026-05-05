export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'image' | 'subheading';
  value: string;
  alt?: string; // Optional for images
}

export interface BlogEntry {
  slug: string;
  title: string;
  subheading: string;
  featuredImage: string;
  content: ContentBlock[];
  author: string;
  date: string;
}

export const blogs: BlogEntry[] = [
  {
    "slug": "evolution-of-workplace-safety-signage-2026",
    "title": "The Visual Shield: How Modern Safety & Hygiene Signage Redefined the Workplace",
    "subheading": "Moving beyond basic stickers to intelligent, high-compliance safety ecosystems.",
    "featuredImage": "/SignsImages/Safety Signage.webp",
    "author": "Sign Experts iL",
    "date": "May 2, 2026",
    "content": [
      {
        "type": "paragraph",
        "value": "The landscape of workplace safety has shifted fundamentally over the last twenty-four months. What started as simple cautionary text has evolved into a multi-sensory visual powerhouse capable of protecting entire industrial facilities in seconds."
      },
      {
        "type": "paragraph",
        "value": "Safety managers who once spent weeks auditing floor markers are now leveraging custom-engineered materials and high-visibility layouts to iterate on safety protocols in real-time. This isn't just about stickers; it's about the democratization of high-fidelity hygiene standards."
      },
      {
        "type": "image",
        "value": "/SignsImages/Regulatory Safety Si.webp",
        "alt": "A visualization of a modern facility with integrated safety and hygiene signage"
      },
      {
        "type": "heading",
        "value": "The Shift to Custom Compliance Architectures"
      },
      {
        "type": "paragraph",
        "value": "Generic, off-the-shelf signs are no longer enough for enterprise-grade facilities. Today, the focus has shifted toward site-specific engineering and proprietary materials that allow brands to maintain a consistent 'safety voice' across both manufacturing floors and corporate offices."
      },
      {
        "type": "subheading",
        "value": "Why Material Durability is the New Safety Frontier"
      },
      {
        "type": "paragraph",
        "value": "As we integrate deeper with rigorous hygiene protocols, the durability of the signage material becomes paramount. Leading firms are now building 'Siloed Safety' environments where antimicrobial coatings and chemical-resistant substrates ensure that critical warnings remain visible and hygienic, even in the harshest conditions."
      },
      {
        "type": "paragraph",
        "value": "Furthermore, the rise of specialized photoluminescent technology has allowed sign experts to provide guidance in edge cases that were previously impossible to secure, leading to safer and more intuitive emergency egress paths."
      },
      {
        "type": "image",
        "value": "/SignsImages/Hygiene and Safe.webp",
        "alt": "A sterile facility setting showing advanced hygiene signage integration"
      },
      {
        "type": "heading",
        "value": "Integrating Full-Scale Visual Intelligence"
      },
      {
        "type": "paragraph",
        "value": "Modern facility management now requires a 'Safety-First' mindset. This involves building robust visual infrastructures capable of Lightbulbling high-traffic wear and tear while maintaining seamless, intuitive UI/UX (User Interface/Experience) for the staff on the ground."
      },
      {
        "type": "paragraph",
        "value": "From warehouse floor markings to clinical hygiene stations, the signage is now expected to do more than just exist—it’s expected to influence human behavior, predict risk zones, and personalize safety cues dynamically for a diverse workforce."
      }
    ]
  },
  {
    "slug": "mastering-modern-van-graphics-trends",
    "title": "The Aesthetics of 2026: Beyond Basic Vehicle Lettering",
    "subheading": "Why 'Texture Wraps' and 'Dimensional Branding' are dominating the road.",
    "featuredImage": "/SignsImages/Service Listing Decal.webp",
    "author": "Sign Experts iL",
    "date": "May 2, 2026",
    "content": [
      {
        "type": "paragraph",
        "value": "Simple vinyl lettering dominated the previous decade, but the current era is seeing a return to depth, texture, and organic visual motion on the road. Clients are no longer satisfied with flat logos; they crave tactile impact and high-speed visual storytelling that turns a fleet into a mobile landmark."
      },
      {
        "type": "image",
        "value": "/SignsImages/Van Wra.webp",
        "alt": "An example of a high-impact commercial van wrap layout"
      },
      {
        "type": "heading",
        "value": "The Psychology of Spatial Vehicle Design"
      },
      {
        "type": "paragraph",
        "value": "Spatial design, popularized by the surge in high-resolution digital media, has bled into physical vehicle branding. We are seeing more use of layered vinyl, matte-on-gloss finishes, and forced-perspective graphics to create a sense of three-dimensional space on a 2D van panel."
      },
      {
        "type": "subheading",
        "value": "Durability vs. Visual Fidelity"
      },
      {
        "type": "paragraph",
        "value": "The challenge for installers in 2026 is balancing these complex visual styles with high-performance durability. Utilizing premium cast vinyl and advanced UV-protective lamination techniques is no longer optional for brands that want to maintain a pristine image."
      },
      {
        "type": "paragraph",
        "value": "By leveraging state-of-the-art wide-format printing, we can now deliver complex gradients and high-resolution photographic elements without sacrificing the longevity and weather resistance that commercial fleets—and business owners—demand."
      }
    ]
  }
];

// data.ts
export interface SupportContent {
  heading: string;
  subheading: string;
}

export const supportData: SupportContent = {
  heading: "From Concept to Installation.",
  subheading: "Whether you need specialized design input or a full-scale rollout, our expert team manages the entire lifecycle of your signage. We Lightbulble the technical details, logistics, and craftsmanship, ensuring a seamless transition from your initial idea to a professional on-site finish.",
};

// data.ts

export interface ProductCard {
  title: string;
  description: string;
  imageUrl: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  subheading: string;
  description: string;
  products: ProductCard[];
}

export interface PrdContent {
  title: string;
  description: string;
  imageUrl: string;
  accordions: AccordionItem[];
}


// data.ts

export interface ProductCard {
  title: string;
  description: string;
  imageUrl: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  iconName: | 'Lightbulb'
  | 'Sun'
  | 'Layers'
  ;
}

export interface ProductHeroData {
  slug: string;
  title: string;
  highlightTitle: string;
  descriptionMain: string;
  descriptionSecondary: string;
  image: string;
  services: ServiceCard[];
  products: ProductCard[]; // Added this to connect the sections
}

export const productsData: ProductHeroData[] = [
  {
    slug: "3d-illuminated-letters",
    title: "3D Illuminated",
    highlightTitle: "Letters",
    descriptionMain: "3D Illuminated Channel Letters have become an extremely popular signage solution for businesses that need bold, high-visibility branding. They deliver the look of neon signs with the benefits of LED cost-effectiveness, low power consumption, brightness, and durability. Custom illuminated channel letters are widely used for storefront signs, office signage, senior living facility signs, student housing signage, mixed-use development signs, hospitality signage, and exterior building signs where day and night visibility matters",
    descriptionSecondary: "All your customers think differently...",
    image: "/SignsImages/3dilluminated.webp",
    services: [
      {
        title: "3D Illuminated Letters",
        description: "When it comes to your businessthese signs can be tailored to create an attractive and unique look that promotes your business day and night.",
        iconName: "Lightbulb"
      },
      {
        title: "Combination-lit",
        description: "These letters use clear backs customised with semi-transparent vinyl graphics that result in the desired halo colour of choice.",
        iconName: "Sun"
      },
      {
        title: "Channel Signs",
        description: "Custom fabricated channel letters for premium storefronts. Customise the style, size and colour to suit your brand. ",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Backlit Channel Letters",
        description: "The base of a 3D illuminated letter. Durable and affordable. Customise the style, size and colour to suit your brand. They may be laser/ router cut and made into 3D fabricated hollow acrylic letters, with the option of LED illumination.",
        imageUrl: "/SignsImages/Backlit Channel Let.webp",
      },
      {
        title: "Front-Lit Signs",
        description: "The most common type of 3D illuminated letter. These often have an acrylic face and aluminium sides (known as 'returns') and back, but are fully customisable. They have LED modules hidden on the interior of each letter, illuminating the 'face'. They are best for long distance visibility. Usually, the colour elements of the logo are made with cut translucent vinyl, or if the colour of the face is solid, the acrylic can be a specific colour.",
        imageUrl: "/SignsImages/Front-Lit Sig.webp",
      },
      {
        title: "Halo-lit Letters",
        description: "Also called 'Back-lit letters' or 'Reverse-lit letters', these are a softer and classy look, usually metal or aluminium letters that are illuminated from the back to cast a halo glow effect.",
        imageUrl: "/SignsImages/Halo-lit Lette.webp",
      },
    ]
  },

  {
    slug: "digital-illuminated-signs",
    title: "Digital Illuminated Signs ",
    highlightTitle: "Letters",
    descriptionMain: "3D Illuminated Channel Letters have become an extremely popular signage solution for businesses that need bold, high-visibility branding. They deliver the look of neon signs with the benefits of LED cost-effectiveness, low power consumption, brightness, and durability. Custom illuminated channel letters are widely used for storefront signs, office signage, senior living facility signs, student housing signage, mixed-use development signs, hospitality signage, and exterior building signs where day and night visibility matters. ",
    descriptionSecondary: "Sign experts deals in 3D illuminated signage, helping businesses create custom signs that strengthen brand presence and improve visibility.",
    image: "/SignsImages/Digital Illuminated Sign.webp",
    services: [
      {
        title: "24/7 Brand Visibility",
        description: "Maximize your reach with vibrant LED illumination that ensures your brand stands out day and night, regardless of weather conditions.",
        iconName: "Lightbulb"
      },
      {
        title: "Energy-Efficient Impact",
        description: "Utilize advanced low-voltage LED technology to achieve high-intensity brightness with significantly lower power consumption than traditional neon.",
        iconName: "Sun"
      },
      {
        title: "Dynamic Visual Appeal",
        description: "Capture attention with sharp contrast and modern aesthetics that give your storefront a premium, high-tech edge over the competition.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Outdoor LED Displays",
        description: "Weatherproof, high-brightness digital screens designed for maximum impact. Deliver dynamic advertisements and real-time content that stays visible even in direct sunlight.",
        imageUrl: "/SignsImages/Outdoor LED Display.webp",
      },
      {
        title: "Indoor Digital Posters",
        description: "Sleek, high-resolution slimline displays that replace traditional static posters. Perfect for retail promotions, menu boards, and engaging indoor brand storytelling.",
        imageUrl: "/SignsImages/Indoor Digital Posters.webp",
      },
      {
        title: "Scrolling LED Tickers",
        description: "Streamline communication with programmable scrolling text. Ideal for stock updates, breaking news, or promotional alerts in corporate environments and storefronts.",
        imageUrl: "/SignsImages/Scrolling LED Ticker.webp",
      },]
  },


  {
    slug: "light-box-signs",
    title: "Light Box",
    highlightTitle: "Cabinets",
    descriptionMain: "Light box signs, or cabinet signs, are the gold standard for businesses seeking maximum brand impact with a sleek, uniform glow. Unlike individual letters, these signs provide a large, seamless canvas for complex logos and vibrant graphics, ensuring your brand is unmistakable from a distance.",
    descriptionSecondary: "From ultra-slim interior displays to rugged outdoor monument cabinets, we design and manufacture custom light boxes that ensure your business never fades into the background.",
    image: "/SignsImages/lightboxx.webp",
    services: [
      {
        title: "All-Day Brand Dominance",
        description: "Maximize your market reach with vibrant LED backlighting that ensures your brand remains sharp and unmistakable, from high-noon sun to the darkest night.",
        iconName: "Lightbulb"
      },
      {
        title: "Low-Cost Performance",
        description: "Cut overhead costs without sacrificing shine. Our advanced LED systems deliver maximum lumens with a fraction of the power consumption of traditional neon or fluorescent cabinets.",
        iconName: "Sun"
      },
      {
        title: "Architectural Precision",
        description: "Give your storefront a premium edge. Our light boxes offer uniform edge-to-edge glow and high-contrast graphics that command attention in any crowded commercial landscape.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Double-Sided Projecting Boxes",
        description: "Maximize visibility from both directions with perpendicular mounting. These durable cabinets are engineered to capture foot traffic and vehicular flow, making them essential for narrow streets and busy storefronts.",
        imageUrl: "/SignsImages/Double-Sided Projecting Boxes.webp",
      },
      {
        title: "LED Fabric Lightboxes",
        description: "Achieve a premium, frameless look with tensioned fabric graphics. Our LED fabric boxes provide a sophisticated, soft-glow aesthetic with easily swappable prints, perfect for high-end retail and showroom environments.",
        imageUrl: "/SignsImages/LED Fabric Lightboxe.webp",
      },
      {
        title: "Aluminum Sign",
        description: "The industry standard for durability and scale. These heavy-duty aluminum frames are rust-resistant and built to house large-format graphics, offering a robust, long-term signage solution for exterior building facades.",
        imageUrl: "/SignsImages/Aluminum Sig.webp",
      },
    ]
  },


  {
    slug: "led-backlight-halo-lit",
    title: "LED Backlight / Halo Lit",
    highlightTitle: "Aura",
    descriptionMain: "Backlit Signs are produced with high-quality, efficient materials that provide a professional look to your business. Whether for building exteriors, windows, or rooftops, a backlit sign will shine bright. We work collaboratively with you to create effective backlit signage that suits your budget, brand, and environment, enticing customers with an elegant 'halo' effect.",
    descriptionSecondary: "Sophisticated silhouette lighting solutions designed to add depth and a high-end architectural finish to your brand identity.",
    image: "/SignsImages/LED Backlight  Halo Lit.webp",
    services: [
      {
        title: "Sophisticated Halo Effect",
        description: "Create a high-end, floating aesthetic with rear-mounted LEDs that cast a soft, brilliant glow onto the mounting surface for a prestigious 'halo' look.",
        iconName: "Sun"
      },
      {
        title: "Precision Depth & Dimension",
        description: "Enhance your architectural presence with standoff-mounted letters that add physical depth and shadow, ensuring your brand looks premium even when the lights are off.",
        iconName: "Layers"
      },
      {
        title: "Eco-Friendly Brilliance",
        description: "Achieve intense silhouette lighting using ultra-efficient, low-voltage LED modules that provide long-lasting radiance with minimal energy draw.",
        iconName: "Lightbulb"
      }
    ],
    products: [
      {
        title: "Halo-Lit Metal Letters",
        description: "Fabricated from premium stainless steel or aluminum, these letters feature an open back that allows light to wash against the wall. This creates a prestigious, floating silhouette effect ideal for high-end corporate branding.",
        imageUrl: "/SignsImages/Halo-Lit Metal Letter.webp",
      },
      {
        title: "Backlit Logo Panels",
        description: "Combine precise laser-cut detailing with integrated rear-illumination. These panels provide a clean, modern aesthetic where the light outlines your entire brand mark, perfect for reception areas and luxury storefronts.",
        imageUrl: "/SignsImages/Backlit Logo Pane.webp",
      },
      {
        title: "RGB Halo Lighting",
        description: "Take total control of your brand's mood with color-changing LED technology. Our RGB halo systems allow you to cycle through millions of colors, matching seasonal themes or brand colors with the click of a remote.",
        imageUrl: "/SignsImages/RGB Halo Lighting.webp",
      },
    ]
  },


  {
    slug: "channel-signs",
    title: "Channel Signs",
    highlightTitle: "Letters",
    descriptionMain: "Channel signs are individually crafted 3D letters that bring depth, visibility, and a premium look to your storefront. Built with durable materials and integrated LED lighting, they ensure your brand stands out clearly—day or night.",
    descriptionSecondary: "From front-lit and backlit (halo) letters to fully custom fabricated designs, our channel signs are engineered for long-lasting performance and high visual impact.",
    image: "/SignsImages/Channel Signs.webp",
    services: [
      {
        title: "Day & Night Visibility",
        description: "Stand out 24/7 with precision-engineered LED illumination. Our channel letters ensure your brand remains bold, legible, and impactful in both daylight and nighttime environments.",
        iconName: "Lightbulb"
      },
      {
        title: "Energy-Efficient Illumination",
        description: "Reduce operating costs with modern LED modules that deliver high brightness, long lifespan, and minimal power consumption compared to traditional signage lighting.",
        iconName: "Sun"
      },
      {
        title: "Custom 3D Fabrication",
        description: "Each letter is individually crafted to match your brand identity, offering depth, dimension, and a premium architectural finish for storefronts, offices, and commercial buildings.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Front-Lit Channel Letters",
        description: "The most popular signage choice for maximum visibility. These 3D letters feature illuminated acrylic faces with high-efficiency LEDs, ensuring your brand is bold, bright, and readable from long distances.",
        imageUrl: "/SignsImages/Front-Lit Channel Letters.webp",
      },
      {
        title: "Dual-Lit Channel Signs",
        description: "Combine front illumination with a halo backlit effect for a premium, Lightbulb-catching look. Dual-lit channel letters offer enhanced depth and sophistication, making them ideal for high-end retail.",
        imageUrl: "/SignsImages/Dual-Lit Channel Sign.webp",
      },
      {
        title: "Raceway Mounted Signs",
        description: "A practical and clean installation solution where all wiring and components are enclosed within a single raceway. This method reduces wall penetration and installation time.",
        imageUrl: "/SignsImages/Raceway Mounted Sign.webp",
      },
    ]
  },




  {
    slug: "ada-and-accessibility-signs",
    title: "ADA and Accessibility Signs",
    highlightTitle: "Compliance",
    descriptionMain: "Ensure your facility is inclusive and code-compliant with professional ADA signage. These signs are specifically engineered to meet federal and local accessibility standards, featuring Grade 2 Braille, tactile raised lettering, and high-contrast finishes. Beyond mere compliance, our accessibility signs provide essential wayfinding for all visitors, ensuring that restrooms, exits, and rooms are easily identifiable for those with visual impairments.",
    descriptionSecondary: "Our experts design custom ADA-compliant signage that seamlessly integrates with your building’s interior aesthetic while adhering to strict regulatory requirements.",
    image: "/SignsImages/ADAnd Accessibility Sigs.webp",
    services: [
      {
        title: "Braille & Tactile Integration",
        description: "Standardized Grade 2 Braille and 1/32\" raised tactile characters ensure your signage meets all legal requirements for touch-based identification.",
        iconName: "Lightbulb"
      },
      {
        title: "Regulatory Compliance",
        description: "Our signs are designed with precise character spacing, non-glare finishes, and correct mounting heights to pass local building inspections with ease.",
        iconName: "Sun"
      },
      {
        title: "Wayfinding Accessibility",
        description: "Clear, high-contrast pictograms and text help navigate visitors safely through offices, hospitals, schools, and public facilities.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Room Identification Signs",
        description: "Custom office and room number signs featuring tactile text and Braille, available in various materials to match your interior design.",
        imageUrl: "/SignsImages/Room Identification Sign.webp",
      },
      {
        title: "Restroom Accessibility Signs",
        description: "Standardized ADA restroom signs with universal icons and Braille, essential for public buildings and commercial spaces.",
        imageUrl: "/SignsImages/Restroom Accessibility Sign.webp",
      },
      {
        title: "Emergency Exit Signs",
        description: "Durable, high-contrast tactile exit signs and floor level markers designed to meet life-safety codes and emergency regulations.",
        imageUrl: "/SignsImages/Emergency Exit Sign.webp",
      },
    ]
  },


  {
    slug: "dimensional-letters",
    title: "Dimensional Letters",
    highlightTitle: "Depth",
    descriptionMain: "Dimensional letters offer a high-impact, 3D branding solution that adds depth and character to any surface. Unlike flat vinyl, these precision-cut letters create a professional and permanent look for storefronts, reception areas, and corporate offices. Available in a wide array of materials, thicknesses, and finishes, dimensional lettering allows you to transform your brand identity into a physical architectural element that commands attention through shadow and scale.",
    descriptionSecondary: "Our experts specialize in custom-fabricated non-illuminated signage, helping you select the perfect material and finish to match your brand's unique aesthetic.",
    image: "/SignsImages/Dimensional Letter.webp",
    services: [
      {
        title: "Versatile Material Selection",
        description: "Choose from high-grade acrylic, precision-cut metals, or durable foams to achieve the exact texture and weight your brand requires.",
        iconName: "Lightbulb"
      },
      {
        title: "Custom Finish Matching",
        description: "From matte paints and polished metallics to natural wood grains, we provide custom color and finish matching for a seamless brand experience.",
        iconName: "Sun"
      },
      {
        title: "Architectural Depth",
        description: "Add a 3D dimension to your walls with various thickness options, creating natural shadows that increase legibility and visual interest.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Flat-Cut Acrylic",
        description: "A versatile and cost-effective choice for a sleek, modern look. Our acrylic letters are laser-cut with polished edges and available in a spectrum of vibrant colors or crystal-clear finishes.",
        imageUrl: "/SignsImages/Flat-Cut Acrylic.webp",
      },
      {
        title: "Metal Laminates",
        description: "Achieve the high-end look of solid metal at a fraction of the weight and cost. These letters feature a real metal face bonded to a high-density core, perfect for sophisticated lobby displays.",
        imageUrl: "/SignsImages/Metal Laminate.webp",
      },
      {
        title: "High-Density Urethane (HDU)",
        description: "The premier choice for large-scale outdoor signage. HDU is waterproof, rot-resistant, and can be carved or sandblasted to create intricate, deep-dimension designs that withstand the elements.",
        imageUrl: "/SignsImages/High-Density Urethane .webp",
      },
    ]
  },


  {
    slug: "post-and-panels-signs",
    title: "Post and Panel Signs",
    highlightTitle: "Direction",
    descriptionMain: "Post and panel signs are the versatile workhorses of outdoor branding, offering a clean and effective solution for site identification and wayfinding. These freestanding signs are engineered for maximum durability, providing a professional presence for business parks, residential developments, and commercial properties. Whether you need a temporary real estate display or a permanent architectural monument, our post and panel systems offer high-visibility messaging that is built to withstand the elements.",
    descriptionSecondary: "Our team designs custom exterior signage solutions that simplify navigation and strengthen your property’s curb appeal through robust, high-quality fabrication.",
    image: "/SignsImages/Post and Panel Signs.webp",
    services: [
      {
        title: "Freestanding Site ID",
        description: "Create a prominent brand landmark with durable freestanding structures that don't require wall mounting, perfect for setbacks and green spaces.",
        iconName: "Lightbulb"
      },
      {
        title: "Weather-Resistant Finishes",
        description: "Utilizing UV-resistant inks and powder-coated aluminum to ensure your graphics remain vibrant and rust-free through years of outdoor exposure.",
        iconName: "Sun"
      },
      {
        title: "Modular & Scalable Design",
        description: "From simple single-panel layouts to complex multi-panel configurations, our systems are easily customized to grow alongside your development.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Aluminum Site Signs",
        description: "Heavy-duty aluminum panels mounted between sturdy posts for a permanent, premium look. Ideal for commercial property identification and long-term business park signage.",
        imageUrl: "/SignsImages/Aluminum Site Si.webp",
      },
      {
        title: "M-Panel Real Estate Signs",
        description: "A cost-effective, high-impact solution for large-scale property listings. These lightweight yet rigid panels are specifically designed for high-visibility real estate marketing and development announcements.",
        imageUrl: "/SignsImages/M-Panel Real Estate Si-1600.webp",
      },
      {
        title: "Directional Totems",
        description: "Tall, sleek vertical structures designed to guide traffic through multi-tenant facilities. These 'pylon-style' panels offer multi-directional information for optimized site navigation.",
        imageUrl: "/SignsImages/Directional Totem.webp",
      },
    ]
  },


  {
    slug: "teardrops-banners-and-flags",
    title: "Teardrops, Banners and Flags",
    highlightTitle: "Motion",
    descriptionMain: "Capture attention instantly with the high-impact movement of custom banners and flags. Designed for maximum visibility at events, storefronts, and trade shows, these dynamic signage solutions combine vibrant, full-color printing with weather-resistant fabrics. Their lightweight, portable design makes them the perfect tool for businesses that need to drive foot traffic and create an energetic brand presence in any environment.",
    descriptionSecondary: "Our experts provide high-quality soft signage solutions that blend durability with brilliant color reproduction to ensure your brand stands out in the crowd.",
    image: "/SignsImages/Teardrops Banners and Flag.webp",
    services: [
      {
        title: "High-Motion Visibility",
        description: "Utilize wind-driven movement to draw the Lightbulb, making flags a superior choice for attracting attention in busy outdoor commercial corridors.",
        iconName: "Lightbulb"
      },
      {
        title: "Portable & Easy Setup",
        description: "Engineered for rapid deployment, our flag and banner systems are lightweight and can be assembled or relocated in minutes without tools.",
        iconName: "Sun"
      },
      {
        title: "Sublimated Color Depth",
        description: "We use advanced dye-sublimation printing to ensure your graphics are deeply embedded into the fabric for fade-resistant, double-sided brilliance.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Custom Teardrop Flags",
        description: "The unique taut shape of the teardrop flag ensures your message is always visible, even in high winds. Perfect for sleek, modern branding at storefronts and festivals.",
        imageUrl: "/SignsImages/Custom Teardrop Fla.webp",
      },
      {
        title: "Feather Banners",
        description: "Tall, elegant, and highly visible from a distance. Feather banners provide a large vertical canvas for bold logos and promotional text, ideal for marking event entrances.",
        imageUrl: "/SignsImages/Feather Banne.webp",
      },
      {
        title: "Event Flags with Bases",
        description: "Versatile flag systems equipped with heavy-duty ground spikes, cross-bases, or water bags for stability on any surface, from grassy fields to concrete sidewalks.",
        imageUrl: "/SignsImages/Event Flags with Ba.webp",
      },
    ]
  },


  {
    slug: "vinyl-banners",
    title: "Vinyl Banners",
    highlightTitle: "Versatility",
    descriptionMain: "Vinyl banners are the ultimate high-impact, cost-effective solution for both temporary promotions and long-term outdoor advertising. Crafted from premium, weather-resistant materials, our banners deliver photographic print quality with reinforced strength to withstand the elements. Whether you are announcing a grand opening, promoting a seasonal event, or wrapping a construction site, our custom vinyl banners provide the scale and durability needed to make your message impossible to miss.",
    descriptionSecondary: "Our team specializes in large-format vinyl printing, providing finished banners with grommets, hems, and pole pockets tailored to your specific installation needs.",
    image: "/SignsImages/Vinyl Banner.webp",
    services: [
      {
        title: "All-Weather Durability",
        description: "Utilizing UV-resistant inks and reinforced scrim vinyl to ensure your banner remains vibrant and tear-resistant through wind, rain, and sun.",
        iconName: "Lightbulb"
      },
      {
        title: "High-Definition Printing",
        description: "Experience stunning clarity with our large-format digital printing, capable of rendering complex logos and high-resolution photography with vivid color accuracy.",
        iconName: "Sun"
      },
      {
        title: "Custom Finishing Options",
        description: "From heavy-duty heat-welded hems to brass grommets and pole pockets, we provide the hardware preparation needed for a secure and professional mount.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Heavy-Duty Scrim Vinyl",
        description: "Our toughest banner material, featuring an internal polyester mesh for maximum tear resistance. Ideal for long-term outdoor use, building wraps, and high-wind environments.",
        imageUrl: "/SignsImages/Heavy-Duty Scrim Viny.webp",
      },
      {
        title: "Mesh Banners",
        description: "Engineered with thousands of tiny perforations, mesh banners allow wind to pass through effortlessly, reducing 'sail effect' and pressure on fences or scaffolding.",
        imageUrl: "/SignsImages/Mesh Banners.webp",
      },
      {
        title: "Retractable Banners",
        description: "The gold standard for trade shows and indoor events. These premium vinyl displays pull out of a compact aluminum base in seconds for a sleek, professional presentation.",
        imageUrl: "/SignsImages/Retractable Banners.webp",
      },
    ]
  },


  {
    slug: "pylon-signs",
    title: "Pylon Signs",
    highlightTitle: "Visibility",
    descriptionMain: "Pylon signs are the ultimate landmark solution for businesses that need to be seen from great distances and high-traffic roadways. These towering, freestanding structures provide maximum brand exposure, acting as a beacon for shopping centers, car dealerships, and industrial parks. Engineered for structural integrity and long-term durability, our pylon signs can be custom-built with integrated LED illumination, ensuring your brand dominates the skyline both day and night.",
    descriptionSecondary: "Our experts specialize in the design, engineering, and installation of large-scale pylon systems that maximize your property’s commercial value and navigational clarity.",
    image: "/SignsImages/Pylon Sign.webp",
    services: [
      {
        title: "Long-Range Impact",
        description: "Strategically designed for height and scale to ensure your business is visible to high-speed traffic and from long distances, well before customers reach your entrance.",
        iconName: "Lightbulb"
      },
      {
        title: "Structural Engineering",
        description: "Built to withstand high wind loads and harsh weather, our pylons feature heavy-duty steel internal structures and high-grade aluminum cladding.",
        iconName: "Sun"
      },
      {
        title: "Illumination Excellence",
        description: "Equipped with high-output LED systems for uniform internal lighting, ensuring every tenant panel is bright, legible, and energy-efficient 24/7.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Multi-Tenant Pylons",
        description: "The ideal solution for shopping malls and business parks. These structures feature modular, illuminated panels that allow multiple businesses to share a single, high-profile landmark.",
        imageUrl: "/SignsImages/Multi-Tenant Pylon.webp",
      },
      {
        title: "Monolithic Pylons",
        description: "Sleek, modern, and seamless. Monolithic pylons offer a clean architectural look with a continuous surface from top to bottom, providing a premium feel for corporate headquarters.",
        imageUrl: "/SignsImages/Monolithic Pylo.webp",
      },
      {
        title: "Reflective Pylon Graphics",
        description: "Enhance safety and visibility even without power. We utilize high-intensity reflective vinyl for lettering and borders, ensuring the sign catches headlights and ambient light after dark.",
        imageUrl: "/SignsImages/Reflective Pylon Graphi.webp",
      },
    ]
  },


  {
    slug: "coroplast-signs",
    title: "Coroplast Signs",
    highlightTitle: "Velocity",
    descriptionMain: "Coroplast signs, often called yard signs, are the ultimate lightweight and cost-effective solution for short-term outdoor advertising. Made from corrugated plastic, these signs are waterproof, weather-resistant, and incredibly easy to deploy. Whether you are running a political campaign, promoting a local event, or marking a construction site, Coroplast provides vibrant, high-visibility messaging that can be set up in seconds.",
    descriptionSecondary: "Our experts produce high-quality corrugated plastic signage that delivers professional results on a budget, perfect for high-volume promotional needs.",
    image: "/SignsImages/coroplast.webp",
    services: [
      {
        title: "Rapid Deployment",
        description: "Engineered for speed, these signs can be installed instantly using simple wire stakes, making them ideal for large-scale marketing blitzes and directional needs.",
        iconName: "Lightbulb"
      },
      {
        title: "All-Weather Performance",
        description: "The twin-wall plastic structure is naturally waterproof and chemical resistant, ensuring your graphics stay crisp through rain, snow, and sun.",
        iconName: "Sun"
      },
      {
        title: "Budget-Friendly Impact",
        description: "Get maximum ROI with a low per-unit cost. Coroplast is the perfect choice for businesses needing multiple signs to saturate a local area or neighborhood.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "H-Stake Yard Signs",
        description: "The classic real estate and campaign solution. These signs slide directly onto galvanized steel H-stakes for a sturdy, ground-mounted display that takes seconds to install.",
        imageUrl: "/SignsImages/H-Stake Yard S.webp",
      },
      {
        title: "Custom Die-Cut Coroplast",
        description: "Break away from the rectangle. We can precision-cut Coroplast into custom shapes—like arrows, logos, or house silhouettes—to add a unique visual edge to your promotion.",
        imageUrl: "/SignsImages/Custom Die-Cut Corop.webp",
      },
      {
        title: "Large Format Coroplast",
        description: "Perfect for oversized site signs or fence-mounted displays. These larger sheets offer a rigid, lightweight canvas for site plans, construction project info, or big event sponsors.",
        imageUrl: "/SignsImages/Large Format Corop.webp",
      },
    ]
  },


  {
    slug: "billboards",
    title: "Billboards",
    highlightTitle: "Impact",
    descriptionMain: "Billboards are the pinnacle of out-of-home advertising, offering unavoidable exposure and massive brand authority. Positioned in high-traffic corridors and major intersections, these large-format displays ensure your message reaches a vast and diverse audience with high frequency. From traditional highway bulletins to vibrant urban wall wraps, our billboard solutions provide the scale and presence necessary to dominate the local market and build lasting brand recognition.",
    descriptionSecondary: "Our experts specialize in high-resolution, large-format production, delivering durable and vibrant billboard skins that command attention from miles away.",
    image: "/SignsImages/billborad.webp",
    services: [
      {
        title: "Massive Brand Reach",
        description: "Achieve unparalleled market saturation with signage that works 24/7, reaching thousands of commuters daily and establishing your brand as a household name.",
        iconName: "Lightbulb"
      },
      {
        title: "High-Visibility Locations",
        description: "We focus on strategic placement and sheer scale to ensure your message remains legible and impactful even at high speeds and from great distances.",
        iconName: "Sun"
      },
      {
        title: "Weather-Shield Fabrication",
        description: "Produced on heavy-duty, UV-treated vinyl with reinforced edges to ensure your advertisement remains vibrant and tensioned against high winds and sun exposure.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Highway Bulletins",
        description: "The largest and most impactful billboard format. These permanent structures are located along major freeways, offering a massive canvas for long-range visibility and maximum creative impact.",
        imageUrl: "/SignsImages/Highway Bullet.webp",
      },
      {
        title: "Poster Billboards",
        description: "Perfect for localized, short-term campaigns. These standardized displays are found on primary and secondary arteries, providing high frequency for product launches or seasonal promotions.",
        imageUrl: "/SignsImages/Posterbillborad.webp",
      },
      {
        title: "Wall Murals & Wraps",
        description: "Transform the side of a building into a landmark. Custom-fitted vinyl wraps and murals turn urban surfaces into premium advertising space with a high-end, integrated look.",
        imageUrl: "/SignsImages/Wall Murals & Wr.webp",
      },
    ]
  },


  {
    slug: "streets-and-traffic-signs",
    title: "Street and Traffic Signs",
    highlightTitle: "Safety",
    descriptionMain: "Street and traffic signs are the essential foundation of public safety and organized navigation. Engineered to meet strict municipal and federal standards, our signs provide clear, high-visibility guidance for drivers and pedestrians alike. Utilizing high-intensity reflective materials and rust-proof aluminum, these signs are built to remain legible under all lighting and weather conditions, ensuring safety and order in parking lots, private developments, and city streets.",
    descriptionSecondary: "Our experts provide DOT-compliant signage solutions that prioritize durability and regulatory precision to keep your roadways and facilities safe.",
    image: "/SignsImages/Street and Traffic Signs.webp",
    services: [
      {
        title: "MUTCD Compliance",
        description: "We manufacture signs that strictly adhere to the Manual on Uniform Traffic Control Devices (MUTCD) standards for shape, color, and font typography.",
        iconName: "Lightbulb"
      },
      {
        title: "Nighttime Retroreflectivity",
        description: "Utilizing advanced prismatic reflective sheeting to ensure signs are brightly visible to motorists' headlights from extreme angles and distances.",
        iconName: "Sun"
      },
      {
        title: "Vandal-Resistant Coating",
        description: "Available with protective overlays that allow for easy removal of graffiti and resist fading from harsh UV exposure and environmental pollutants.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Reflective Traffic Signs",
        description: "From Stop and Yield to Speed Limit signs, these are produced on heavy-gauge aluminum with high-intensity reflective sheeting for critical roadway safety.",
        imageUrl: "/SignsImages/Reflective Traffic Si.webp",
      },
      {
        title: "Custom Parking Signs",
        description: "Tailored solutions for private lots, including 'Reserved,' 'Customer Parking Only,' and ADA-compliant accessible stall markers with custom branding options.",
        imageUrl: "/SignsImages/Custom Parking Si.webp",
      },
      {
        title: "Street Name Plaques",
        description: "Highly visible, double-sided plaques designed for intersections. Available in various mounting styles and colors to match municipal requirements or community aesthetics.",
        imageUrl: "/SignsImages/Street Name Plaq.webp",
      },
    ]
  },


  {
    slug: "led-screens",
    title: "LED Screens",
    highlightTitle: "Visual Impact",
    descriptionMain: "Digital LED screens are the gold standard for high-impact communication and immersive visual experiences. Engineered with cutting-edge diode technology, our displays deliver vibrant colors and stunning clarity even in direct sunlight. Built to withstand environmental rigors or provide seamless close-up viewing, these screens transform any space into a dynamic communication hub, ensuring your message is seen with unrivaled brightness and precision.",
    descriptionSecondary: "From stadium-sized outdoor displays to seamless indoor video walls, our experts provide end-to-end LED solutions focused on performance, longevity, and visual excellence.",
    image: "/SignsImages/LED Screen.webp",
    services: [
      {
        title: "Seamless Integration",
        description: "We design and install bezel-free displays that create a unified, continuous canvas for a truly immersive viewing experience without visual gaps.",
        iconName: "Lightbulb"
      },
      {
        title: "Dynamic Brightness Control",
        description: "Smart sensors automatically adjust screen luminance based on ambient light conditions, optimizing visibility while reducing energy consumption.",
        iconName: "Sun"
      },
      {
        title: "Remote CMS Management",
        description: "Control your content from anywhere with cloud-based management systems, allowing for real-time updates and scheduled playback across your network.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Outdoor Video Boards",
        description: "High-nit, weather-rated displays engineered for maximum visibility in broad daylight. Built with IP65-rated enclosures to thrive in rain, wind, and extreme temperatures.",
        imageUrl: "/SignsImages/Outdoor Video Board.webp",
      },
      {
        title: "Indoor Fine-Pitch Displays",
        description: "Ultra-high-definition screens with small pixel pitches for close-proximity viewing. Perfect for corporate lobbies, command centers, and luxury retail environments.",
        imageUrl: "/SignsImages/Indoor Fine-Pitch Displa.webp",
      },
      {
        title: "Transparent LED Screens",
        description: "Innovative displays that offer up to 80% transparency, allowing natural light to pass through glass facades while showcasing high-resolution digital content.",
        imageUrl: "/SignsImages/Transparent LED Scre.webp",
      },
    ]
  },
  {
    slug: "menu-screens",
    title: "Menu Screens",
    highlightTitle: "Efficiency",
    descriptionMain: "Digital menu boards are the heartbeat of modern food service, designed to drive sales and streamline the ordering process. Our high-definition displays showcase your offerings with mouth-watering clarity, allowing for instant price updates, calorie disclosures, and automated day-parting. Built for 24/7 commercial operation, these screens eliminate printing costs and ensure your most profitable items are always center stage.",
    descriptionSecondary: "From drive-thrus to fast-casual dining, our experts deliver turnkey digital menu solutions that enhance guest experiences and maximize ROI.",
    image: "/SignsImages/Menu Screen.webp",
    services: [
      {
        title: "Automated Day-Parting",
        description: "Seamlessly transition your menu from breakfast to lunch and dinner schedules automatically, ensuring relevant content is always displayed.",
        iconName: "Lightbulb"
      },
      {
        title: "Real-Time Updates",
        description: "Instantly update prices, mark items as sold out, or launch limited-time offers across one or multiple locations via a secure cloud portal.",
        iconName: "Sun"
      },
      {
        title: "Nutritional Compliance",
        description: "Easily integrate FDA-mandated calorie counts and allergen information into your layout without compromising your brand's aesthetic.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "QSR Digital Menu Boards",
        description: "High-contrast, glare-resistant indoor arrays designed for maximum readability. Features ultra-slim bezels for a seamless 'digital wall' look behind the counter.",
        imageUrl: "/SignsImages/QSR Digital Menu Boar.webp",
      },
      {
        title: "Interactive Order Kiosks",
        description: "Self-service touchscreens that reduce wait times and increase average check size through automated upselling and intuitive user interfaces.",
        imageUrl: "/SignsImages/Interactive Order Kiosk.webp",
      },
      {
        title: "Promotional Lobby Screens",
        description: "High-brightness displays positioned to capture attention, perfect for showcasing seasonal specials, loyalty programs, and brand storytelling.",
        imageUrl: "/SignsImages/Promotional Lobby Screen.webp",
      },
    ]
  },
  {
    slug: "led-lights",
    title: "LED Lights",
    highlightTitle: "Ambiance",
    descriptionMain: "Professional LED lighting solutions transform architectural spaces through precision, color, and efficiency. Our high-performance fixtures are engineered to enhance structural features while significantly reducing energy overhead. From vibrant color-changing facades to sophisticated interior accents, our lighting systems provide long-lasting, flicker-free illumination that sets the perfect mood for any environment.",
    descriptionSecondary: "Our experts provide commercial-grade lighting layouts that prioritize thermal management and superior color rendering to bring your vision to light.",
    image: "/SignsImages/LED Light.webp",
    services: [
      {
        title: "Smart Dimming & Control",
        description: "Integrate with DMX or IoT systems for precise control over brightness levels and automated scheduling to maximize energy savings.",
        iconName: "Lightbulb"
      },
      {
        title: "High Color Rendering (CRI)",
        description: "We utilize LEDs with high CRI ratings to ensure colors appear vivid and natural, essential for retail displays and architectural highlights.",
        iconName: "Sun"
      },
      {
        title: "Weatherproof Durability",
        description: "Our outdoor fixtures carry high IP ratings, ensuring reliable performance against moisture, dust, and extreme temperature fluctuations.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "RGB Wall Washers",
        description: "Powerful linear fixtures designed to bathe large vertical surfaces in uniform light. Capable of millions of colors to create dramatic architectural facades.",
        imageUrl: "/SignsImages/RGB Wall Washe.webp",
      },
      {
        title: "LED Border Neon Flex",
        description: "A flexible, modern alternative to traditional neon. Provides a seamless line of light perfect for building outlines, signage, and decorative accents.",
        imageUrl: "/SignsImages/LED Border Neon Fle.webp",
      },
      {
        title: "Under-Cabinet & Cove Lighting",
        description: "Low-profile, high-output strips that provide discrete task lighting or indirect ambient glow for kitchens, hospitality suites, and recessed ceilings.",
        imageUrl: "/SignsImages/Under-Cabinet & Cove Light.webp",
      },
    ]
  }
  ,
  {
    slug: "hygiene-and-safety-signs",
    title: "Hygiene and Safety",
    highlightTitle: "Protection",
    descriptionMain: "Ensure a secure and compliant environment with our comprehensive range of high-visibility safety signage and protective barriers. Our solutions are designed to communicate essential information clearly while maintaining a professional aesthetic. From durable floor graphics to precision-engineered protective screens, we provide the tools necessary to safeguard your staff and customers.",
    descriptionSecondary: "Our team specializes in durable, high-impact visual communication tools that meet regulatory standards and enhance onsite safety protocols.",
    image: "/SignsImages/Hygiene and Safe.webp",
    services: [
      {
        title: "Custom Compliance Audits",
        description: "We assess your facility to ensure all safety signs and hazard markers meet local health and safety regulations.",
        iconName: "Lightbulb"
      },
      {
        title: "Durable Material Sourcing",
        description: "We utilize UV-resistant inks and industrial-grade substrates to ensure your signs remain legible in high-traffic or outdoor areas.",
        iconName: "Sun"
      },
      {
        title: "Rapid Professional Install",
        description: "Our installation experts ensure that decals, screens, and signage are mounted securely and positioned for maximum visibility.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Window Graphics & Decals",
        description: "High-quality vinyl applications for glass surfaces, perfect for displaying safety hours, social distancing instructions, or branding.",
        imageUrl: "/SignsImages/Window Graphics & Deca.webp"
      },
      {
        title: "Coroplast Signs",
        description: "Lightweight, weather-resistant corrugated plastic signs. An ideal, cost-effective solution for temporary safety notices or directional outdoor signage.",
        imageUrl: "/SignsImages/Coroplast Sign.webp"
      },
      {
        title: "Regulatory Safety Signs",
        description: "Standardized hazard, caution, and PPE-requirement signage printed on aluminum or heavy-duty PVC for long-term durability.",
        imageUrl: "/SignsImages/Regulatory Safety Si.webp"
      },
      {
        title: "Protection & Cough Screens",
        description: "Crystal-clear acrylic barriers and sneeze guards designed for reception desks and point-of-sale areas to provide a physical safety layer.",
        imageUrl: "/SignsImages/Protection & Cough Scree.webp"
      }
    ]
  },


  // --- Custom Brand Identity ---
  {
    slug: "custom-brand-identity",
    title: "Custom Brand Identity",
    highlightTitle: "Protection",
    descriptionMain: "Elevate your physical space with bespoke branding solutions that capture your company’s essence. We specialize in transforming generic environments into powerful brand experiences through high-impact visuals and custom-engineered signage. From 3D logo fabrication to immersive wall stories, we ensure your brand leaves a lasting impression on every visitor.",
    descriptionSecondary: "Our design and production experts work at the intersection of architecture and marketing to deliver premium brand environments.",
    image: "/SignsImages/Custom Brand Identit.webp",
    services: [
      {
        title: "Brand Environment Design",
        description: "We translate your digital brand guidelines into physical space, ensuring color accuracy and aesthetic consistency across all touchpoints.",
        iconName: "Lightbulb"
      },
      {
        title: "Premium Material Selection",
        description: "From brushed metals to high-end acrylics, we source materials that reflect the quality and prestige of your corporate identity.",
        iconName: "Sun"
      },
      {
        title: "Precision Execution",
        description: "Our craftsmen use CNC routing and high-resolution printing to ensure your logo and graphics are produced with mathematical precision.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Window Graphics & Decals",
        description: "High-quality vinyl applications for glass surfaces, perfect for displaying safety hours, social distancing instructions, or branding.",
        imageUrl: "/SignsImages/Window Graphics & Deca.webp"
      },
      {
        title: "Coroplast Signs",
        description: "Lightweight, weather-resistant corrugated plastic signs. An ideal, cost-effective solution for temporary safety notices or directional outdoor signage.",
        imageUrl: "/SignsImages/Coroplast Sign.webp"
      }
    ]
  },



  // --- Way Finding and Directional ---
  {
    slug: "way-finding-and-directional",
    title: "Way Finding and Directional",
    highlightTitle: "Navigation",
    descriptionMain: "Guide your visitors with clarity and confidence. We specialize in intuitive wayfinding systems that blend seamlessly with your architecture while providing essential directional cues. From complex multi-level directories to clear floor pathways, we ensure every person finds their destination effortlessly.",
    descriptionSecondary: "Our design experts focus on spatial psychology and accessibility to deliver premium navigation environments that meet regulatory standards and enhance onsite safety protocols.",
    image: "/SignsImages/Way Finding and Direction.webp",
    services: [
      {
        title: "Spatial Analysis",
        description: "We Layers out traffic flow and decision points to determine the most effective placement for directional signage and information hubs.",
        iconName: "Layers"
      },
      {
        title: "Regulatory Compliance",
        description: "Ensuring all directional and safety signage adheres to local accessibility standards and emergency protocols for total peace of mind.",
        iconName: "Sun"
      },
      {
        title: "Integrated Wayfinding",
        description: "Our craftsmen produce high-visibility signs using CNC routing and premium materials to ensure longevity in high-traffic environments.",
        iconName: "Lightbulb"
      }
    ],
    products: [
      {
        title: "Directory Boards",
        description: "Elegant and modular listing systems for lobbies and elevator banks, designed for easy updates as your tenants or departments change.",
        imageUrl: "/SignsImages/Directory Boa.webp"
      },
      {
        title: "Floor Decals",
        description: "High-durability, slip-resistant graphics perfect for directing foot traffic, marking queues, or highlighting social distancing paths.",
        imageUrl: "/SignsImages/Floor Dec.webp"
      }
    ]
  },

  // --- Illuminated Signage ---
  {
    slug: "illuminated-signage",
    title: "Illuminated Signage",
    highlightTitle: "Visibility",
    descriptionMain: "Make your brand shine day and night. We specialize in high-impact illuminated signage solutions that combine energy-efficient LED technology with premium fabrication. From iconic skyline letters to sleek indoor lightboxes, we ensure your business stands out with brilliant clarity in any lighting condition.",
    descriptionSecondary: "Our engineering team focuses on luminous efficacy and structural integrity, delivering low-maintenance, high-visibility signage that meets all electrical and safety standards.",
    image: "/SignsImages/Halo-lit Lette.webp",
    services: [
      {
        title: "Luminous Engineering",
        description: "We calculate optimal LED density and light diffusion to ensure even illumination without hotspots or shadows across your entire sign.",
        iconName: "Sun"
      },
      {
        title: "Energy Efficiency",
        description: "Utilizing the latest LED modules to provide maximum brightness with minimal power consumption and a long operational lifespan.",
        iconName: "Lightbulb"
      },
      {
        title: "Custom Fabrication",
        description: "Our craftsmen use precision CNC cutting and acrylic molding to create complex shapes and letterforms that glow perfectly.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "LED Channel Letters",
        description: "Custom-made 3D letters equipped with internal LED lighting. Available in front-lit, halo-lit, or side-lit options for a premium, high-dimensional look.",
        imageUrl: "/SignsImages/Halo-Lit Metal Letter.webp"
      },
      {
        title: "Slim Lightboxes",
        description: "Ultra-thin aluminum frames with edge-lit LED technology. Perfect for high-end retail displays, menus, and indoor promotional graphics.",
        imageUrl: "/SignsImages/Slim Lightbo.webp"
      }
    ]
  },








  // --- Trade Show and Events ---
  {
    slug: "trade-show-and-events",
    title: "Trade Show and Events",
    highlightTitle: "Engagement",
    descriptionMain: "Command attention at every event with portable, high-impact display solutions. We specialize in creating immersive brand environments for trade shows, conferences, and pop-up activations. From vibrant large-format graphics to lightweight structural displays, we help you make a professional impression that travels anywhere.",
    descriptionSecondary: "Our event specialists focus on durability and ease of assembly, ensuring your brand assets are booth-ready in minutes and built to withstand the rigors of frequent travel.",
    image: "/SignsImages/Trade Show and Event.webp",
    services: [
      {
        title: "Portable Branding",
        description: "We design lightweight, collapsible systems that maximize your visual footprint while minimizing shipping and storage costs.",
        iconName: "Lightbulb"
      },
      {
        title: "Large-Format Printing",
        description: "Utilizing high-definition dye-sublimation and UV printing to ensure colors pop under bright convention center lighting.",
        iconName: "Sun"
      },
      {
        title: "Rapid Deployment",
        description: "Our products are engineered for tool-free assembly, allowing your team to focus on networking rather than complicated booth setups.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Roll-up Banners",
        description: "Premium retractable banner stands featuring high-tension springs and stay-flat vinyl graphics for a sleek, professional look in seconds.",
        imageUrl: "/SignsImages/Roll-up Bann.webp"
      },
      {
        title: "Fabric Backdrops",
        description: "Wrinkle-resistant tension fabric displays with lightweight aluminum frames. Ideal for step-and-repeat walls or seamless booth backgrounds.",
        imageUrl: "/SignsImages/Fabric Backdro.webp"
      }
    ]
  },



  // --- Exterior Storefronts ---
  {
    slug: "exterior-storefronts",
    title: "Exterior Storefronts",
    highlightTitle: "Prescence",
    descriptionMain: "Transform your building’s facade into a landmark. We specialize in high-durability exterior branding solutions designed to capture the attention of passing traffic and withstand the elements. From soaring pylon signs to elegant architectural awnings, we ensure your business makes a bold and professional first impression.",
    descriptionSecondary: "Our exterior specialists prioritize structural engineering and weather-resistant materials, delivering permanent signage solutions that maintain their vibrance and integrity year-round.",
    image: "/SignsImages/Exterior Storefro.webp",
    services: [
      {
        title: "Architectural Integration",
        description: "We design signage that complements your building’s unique architecture while maximizing brand visibility from the street or highway.",
        iconName: "Lightbulb"
      },
      {
        title: "Weatherproofing",
        description: "Utilizing UV-resistant coatings and rust-proof hardware to ensure your storefront remains pristine despite sun, rain, or wind exposure.",
        iconName: "Sun"
      },
      {
        title: "Structural Engineering",
        description: "Our team ensures all large-scale installations are wind-load rated and securely anchored for long-term public safety.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Pylon Signs",
        description: "Massive, freestanding structures designed for maximum long-distance visibility. Perfect for shopping centers and businesses located near high-traffic roadways.",
        imageUrl: "/SignsImages/Multi-Tenant Pylon.webp"
      },
      {
        title: "Awnings & Canopies",
        description: "Custom-branded fabric or metal structures that provide shade, protection from the elements, and a sophisticated dimensional look for your entrance.",
        imageUrl: "/SignsImages/Awnings & Canop.webp"
      }
    ]
  },
  {
    slug: "indoor-signs",
    title: "Indoor Signs",
    highlightTitle: "Presence",
    descriptionMain: "Enhance your interior environment with visually striking indoor signage that guides, informs, and reinforces your brand identity. From elegant lobby displays to functional directional systems, our indoor signs are crafted to create a seamless and professional experience for visitors and employees alike.",
    descriptionSecondary: "Our indoor signage solutions focus on precision, aesthetics, and durability, using high-quality materials and finishes to maintain a polished look in any interior setting.",
    image: "/SignsImages/Indoor Sign.webp",

    services: [
      {
        title: "Architectural Integration",
        description: "We design signage that blends seamlessly with your interior space, complementing walls, lighting, and overall design aesthetics.",
        iconName: "Lightbulb"
      },
      {
        title: "Premium Finishes",
        description: "Utilizing high-end materials such as acrylic, metal, and vinyl to deliver a refined and professional indoor appearance.",
        iconName: "Layers"
      },
      {
        title: "Precision Installation",
        description: "Our team ensures accurate placement and secure installation for a clean, aligned, and long-lasting finish.",
        iconName: "Sun"
      }
    ],

    products: [
      {
        title: "Corporate Logo Plaques",
        description: "Elegant wall-mounted logo displays designed to enhance your brand presence in lobbies, reception areas, and offices.",
        imageUrl: "/SignsImages/Corporate Logo Dec.webp"
      },
      {
        title: "Wayfinding Suspended Signs",
        description: "Ceiling-mounted directional signs that help visitors navigate large indoor spaces such as offices, malls, and hospitals.",
        imageUrl: "/SignsImages/Wayfinding Suspended Sign.webp"
      },
      {
        title: "Directory Boards",
        description: "Clear and organized directory systems that provide essential information about locations, departments, or tenants within a building.",
        imageUrl: "/SignsImages/Directory Boa.webp"
      }
    ]
  },
  {
    slug: "Retractable-Banner-Stand",
    title: "Retractable Banner Stand",
    highlightTitle: "Presence",
    descriptionMain: "Make a strong visual impact at events, exhibitions, and retail spaces with sleek and portable retractable banner stands. Designed for convenience and high visibility, these banners offer a professional way to showcase your brand, promotions, or messaging within seconds.",
    descriptionSecondary: "Our retractable banner stands combine lightweight portability with durable construction and high-resolution print quality, ensuring your display looks sharp, stable, and impactful wherever you set it up.",
    image: "/SignsImages/Retractable Banner Sta.webp",

    services: [
      {
        title: "Portable Design",
        description: "Lightweight and easy-to-carry systems that can be set up or packed away in seconds, perfect for on-the-go marketing.",
        iconName: "Lightbulb"
      },
      {
        title: "High-Resolution Printing",
        description: "Crisp, vibrant graphics printed on premium materials to ensure your brand stands out in any environment.",
        iconName: "Sun"
      },
      {
        title: "Durable Mechanism",
        description: "Smooth retractable systems built for repeated use, maintaining stability and professional appearance over time.",
        iconName: "Layers"
      }
    ],

    products: [
      {
        title: "Tabletop Mini Banners",
        description: "Compact and portable banner stands designed for desks, counters, and reception areas—perfect for close-range branding and promotions.",
        imageUrl: "/SignsImages/Tabletop Mini Banner.webp"
      },
      {
        title: "Double-Sided Banner Stands",
        description: "Maximize visibility with dual-display banners, allowing your message to be seen from multiple directions in high-traffic areas.",
        imageUrl: "/SignsImages/Double-Sided Banner Stan.webp"
      },
      {
        title: "Premium Executive Roll-ups",
        description: "High-end retractable banners with enhanced finishes and sturdier bases, ideal for corporate events and professional presentations.",
        imageUrl: "/SignsImages/Premium Executive Roll-up.webp"
      }
    ]
  },




  {
    slug: "room-door-signs",
    title: "Rooms/Door Signs",
    highlightTitle: "Presence",
    descriptionMain: "Create a clear and professional environment with well-designed room and door signage. From office identification to accessibility-compliant solutions, our signs help visitors and staff easily navigate spaces while reinforcing your brand identity.",
    descriptionSecondary: "Our room and door signs are crafted with precision and durability in mind, using high-quality materials and customizable designs to ensure long-lasting performance and a polished interior appearance.",
    image: "/SignsImages/RoomsDoor Si.webp",

    services: [
      {
        title: "Custom Room Identification",
        description: "Tailored signage solutions for offices, meeting rooms, and facilities that ensure clarity and consistency across your space.",
        iconName: "Layers"
      },
      {
        title: "Accessibility Compliance",
        description: "Design and production of ADA-compliant signage, including braille and tactile elements for inclusive navigation.",
        iconName: "Sun"
      },
      {
        title: "Modular & Replaceable Systems",
        description: "Flexible signage systems that allow easy updates for changing names, departments, or room functions.",
        iconName: "Lightbulb"
      }
    ],

    products: [
      {
        title: "ADA Compliant Braille Signs",
        description: "Accessible signage featuring raised text and braille, ensuring compliance with standards while maintaining a clean and professional look.",
        imageUrl: "/SignsImages/ADA Compliant Braille Sig.webp"
      },
      {
        title: "Sliding Availability Signs",
        description: "Interactive door signs with sliding indicators such as 'Occupied' or 'Vacant', ideal for meeting rooms and private offices.",
        imageUrl: "/SignsImages/Sliding Availability Sig.webp"
      },
      {
        title: "Interchangeable Name Plates",
        description: "Modular nameplate systems that allow quick and easy updates, perfect for dynamic office environments and shared spaces.",
        imageUrl: "/SignsImages/Interchangeable Name Plat.webp"
      }
    ]
  },
  {
    slug: "window-frosting",
    title: "Window Frosting",
    highlightTitle: "Presence",
    descriptionMain: "Enhance privacy and elevate your interior aesthetics with premium window frosting solutions. Ideal for offices, meeting rooms, and storefronts, frosted films provide a sleek, modern look while allowing natural light to flow through your space.",
    descriptionSecondary: "Our window frosting solutions combine functionality and design, using high-quality films that offer privacy, durability, and custom branding options to suit any professional environment.",
    image: "/SignsImages/Window Frosti.webp",

    services: [
      {
        title: "Custom Frosted Designs",
        description: "Tailor-made frosting solutions including logos, patterns, and branding elements to match your interior identity.",
        iconName: "Lightbulb"
      },
      {
        title: "Privacy Enhancement",
        description: "Create private workspaces without sacrificing natural light, ideal for offices, conference rooms, and glass partitions.",
        iconName: "Sun"
      },
      {
        title: "Professional Installation",
        description: "Seamless, bubble-free application ensuring a clean, long-lasting finish with precise alignment.",
        iconName: "Layers"
      }
    ],

    products: [
      {
        title: "Branded Privacy Bands",
        description: "Frosted strips with integrated logos or text, offering privacy while reinforcing your brand across glass surfaces.",
        imageUrl: "/SignsImages/Branded Privacy .webp"
      },
      {
        title: "Full-Coverage Frosted Film",
        description: "Complete glass coverage solutions for maximum privacy and a clean, sophisticated appearance.",
        imageUrl: "/SignsImages/Full-Coverage Frosted F.webp"
      },
      {
        title: "Decorative Patterned Frosting",
        description: "Stylish frosted designs featuring patterns and textures that enhance visual appeal while maintaining functionality.",
        imageUrl: "/SignsImages/Decorative Patterned Frosti.webp"
      }
    ]
  },




  {
    slug: "reception-signs",
    title: "Reception Signs",
    highlightTitle: "Presence",
    descriptionMain: "Make a powerful first impression with premium reception signage that reflects your brand identity the moment visitors walk in. From bold 3D logos to elegant wall displays, our reception signs are designed to create a lasting visual impact in lobbies and front desks.",
    descriptionSecondary: "Our reception signage solutions combine high-end materials, precision craftsmanship, and modern design to deliver a professional and memorable brand presence in any corporate or commercial space.",
    image: "/SignsImages/Reception Sig.webp",

    services: [
      {
        title: "Custom Logo Design",
        description: "We transform your brand identity into striking physical signage that enhances visibility and reinforces professionalism.",
        iconName: "Lightbulb"
      },
      {
        title: "Premium Materials",
        description: "Utilizing acrylic, metal, glass, and illuminated elements to create high-end signage with a refined finish.",
        iconName: "Layers"
      },
      {
        title: "Expert Installation",
        description: "Precise alignment and secure mounting to ensure a flawless, long-lasting display in your reception area.",
        iconName: "Sun"
      }
    ],

    products: [
      {
        title: "3D Acrylic Lobby Logos",
        description: "Bold, dimensional acrylic logos that stand out on reception walls, creating a modern and impactful brand statement.",
        imageUrl: "/SignsImages/3D Acrylic Lobby .webp"
      },
      {
        title: "Brushed Aluminum Signs",
        description: "Sleek metallic signage with a professional finish, perfect for corporate environments seeking a premium look.",
        imageUrl: "/SignsImages/Brushed Aluminum Si.webp"
      },
      {
        title: "Glass Stand-off Displays",
        description: "Elegant glass panels mounted with stand-offs, offering a clean and sophisticated floating appearance for logos and information.",
        imageUrl: "/SignsImages/Glass Stand-off Displa.webp"
      }
    ]
  },




  {
    slug: "led-backlit-signs",
    title: "LED Backlit Signs",
    highlightTitle: "Presence",
    descriptionMain: "Stand out day and night with high-impact LED backlit signage designed to elevate your brand visibility. These illuminated signs create a striking visual presence, making your business instantly noticeable in both indoor and outdoor environments.",
    descriptionSecondary: "Our LED backlit signs combine energy-efficient lighting, premium materials, and precision fabrication to deliver vibrant, long-lasting illumination that enhances your brand’s presence around the clock.",
    image: "/SignsImages/Backlit Logo Pane.webp",

    services: [
      {
        title: "Custom Illuminated Design",
        description: "Tailored backlit signage solutions that highlight your brand with balanced lighting and modern aesthetics.",
        iconName: "Lightbulb"
      },
      {
        title: "Energy-Efficient LED Technology",
        description: "Advanced LED systems that provide bright, consistent illumination while minimizing energy consumption and maintenance.",
        iconName: "Sun"
      },
      {
        title: "Professional Installation",
        description: "Secure and precise installation ensuring optimal lighting performance and long-term durability.",
        iconName: "Layers"
      }
    ],

    products: [
      {
        title: "Halo-Lit Metal Logos",
        description: "Premium metal logos with soft backlit glow (halo effect), creating a sophisticated and upscale brand appearance.",
        imageUrl: "/SignsImages/Halo-Lit Metal L.webp"
      },
      {
        title: "Edge-Lit Acrylic Panels",
        description: "Sleek acrylic signage illuminated from the edges, delivering a clean and modern glowing effect.",
        imageUrl: "/SignsImages/Edge-Lit Acrylic Pan.webp"
      },
      {
        title: "Backlit Fabric Lightboxes",
        description: "Large-format illuminated displays using tension fabric graphics, perfect for vibrant and evenly lit branding.",
        imageUrl: "/SignsImages/Backlit Fabric Lightbox.webp"
      }
    ]
  },




  {
    slug: "directional-signs",
    title: "Directional Signs",
    highlightTitle: "Presence",
    descriptionMain: "Guide visitors effortlessly through your space with clear, well-designed directional signage. From office buildings to hospitals and retail environments, our signs improve navigation, reduce confusion, and enhance the overall user experience.",
    descriptionSecondary: "Our directional signage systems are designed for clarity, consistency, and durability—ensuring easy navigation while maintaining a cohesive and professional look throughout your facility.",
    image: "/SignsImages/Directory Boa.webp",

    services: [
      {
        title: "Wayfinding Strategy & Planning",
        description: "We design intuitive signage systems based on user flow and space layout, ensuring visitors can navigate your environment with ease.",
        iconName: "Lightbulb"
      },
      {
        title: "Consistent Visual Systems",
        description: "Unified typography, icons, and color coding across all signs to create a seamless and professional navigation experience.",
        iconName: "Sun"
      },
      {
        title: "Durable & High-Visibility Materials",
        description: "Using long-lasting materials and finishes that remain clear and readable in high-traffic indoor environments.",
        iconName: "Layers"
      }
    ],

    products: [
      {
        title: "Wall-Mounted Wayfinding",
        description: "Fixed wall signage providing clear directions to rooms, departments, and facilities within your space.",
        imageUrl: "/SignsImages/Wall-Mounted Wayfindi.webp"
      },
      {
        title: "Freestanding Pedestal Signs",
        description: "Standalone directional signs ideal for lobbies, entrances, and open areas requiring multi-directional guidance.",
        imageUrl: "/SignsImages/Freestanding Pedestal Sig.webp"
      },
      {
        title: "Elevator & Lobby Directories",
        description: "Comprehensive directory boards displaying floor and tenant information for easy navigation in multi-level buildings.",
        imageUrl: "/SignsImages/Elevator & Lobby Directo.webp"
      }
    ]
  },
  {
    slug: "wall-graphics",
    title: "Wall Graphics",
    highlightTitle: "Presence",
    descriptionMain: "Transform blank walls into powerful visual statements with custom wall graphics. From bold brand murals to subtle design accents, our wall graphics enhance interiors, communicate your message, and create an engaging environment.",
    descriptionSecondary: "Our wall graphics solutions combine creative design, high-resolution printing, and durable materials to deliver vibrant, long-lasting visuals that elevate your space and reflect your brand identity.",
    image: "/SignsImages/Wall Graphi.webp",

    services: [
      {




        title: "Custom Visual Design",
        description: "We create tailored wall graphic concepts that align with your brand, space, and messaging goals.",
        iconName: "Lightbulb"
      },
      {
        title: "High-Resolution Printing",
        description: "Crisp, vibrant prints using premium vinyl materials to ensure sharp visuals and long-lasting color quality.",
        iconName: "Sun"
      },
      {
        title: "Seamless Installation",
        description: "Professional application with precise alignment and bubble-free finishing for a flawless wall transformation.",
        iconName: "Layers"
      }
    ],

    products: [
      {
        title: "Full Wall Brand Murals",
        description: "Large-scale custom murals that turn entire walls into immersive brand experiences or storytelling visuals.",
        imageUrl: "/SignsImages/Full Wall Brand Mur.webp"
      },
      {
        title: "Motivational Vinyl Quotes",
        description: "Inspirational typography designs applied directly to walls, perfect for offices, gyms, and creative spaces.",
        imageUrl: "/SignsImages/Motivational Vinyl Quot.webp"
      },
      {
        title: "Topographic & Layers Graphics",
        description: "Detailed Layers-based or topographic designs that add a unique and modern visual identity to your interior.",
        imageUrl: "/SignsImages/Topographic & Map Grap.webp"
      }
    ]
  },
  {
    slug: "fleet-graphics",
    title: "Fleet Graphics",
    highlightTitle: "Presence",
    descriptionMain: "Transform blank walls and vehicle surfaces into powerful visual statements with custom fleet graphics. From bold brand murals to cohesive vehicle wraps, our graphics enhance interiors, exteriors, and mobile assets to communicate your message and create an engaging environment.",
    descriptionSecondary: "Our fleet and wall graphics solutions combine creative design, high-resolution printing, and durable materials to deliver vibrant, long-lasting visuals that elevate your space, vehicles, and reflect your brand identity.",
    image: "/SignsImages/Fleet Graphi.webp",

    services: [
      {
        title: "Fleet Branding Strategy",
        description: "We develop comprehensive branding concepts for your fleet, ensuring consistent identity across all vehicles.",
        iconName: "Lightbulb"
      },
      {
        title: "Custom Vehicle Wrap Design",
        description: "Tailored designs for full or partial wraps that highlight your brand while maintaining a sleek look.",
        iconName: "Sun"
      },
      {
        title: "Durable Vinyl Printing",
        description: "High-resolution, weather-resistant printing using premium vinyl materials for long-lasting fleet graphics.",
        iconName: "Layers"
      },     
    ],

    products: [
      {
        title: "Corporate Logo Decals",
        description: "Precision-cut vinyl decals featuring your company logo, ideal for vehicles, office walls, and storefront branding.",
        imageUrl: "/SignsImages/Corporate Logo Deca.webp"
      },
      {
        title: "Fleet Identification Numbering",
        description: "Durable numbering and lettering solutions for fleet vehicles, ensuring clear identification and compliance.",
        imageUrl: "/SignsImages/Fleet Identification Numberin.webp"
      },
      {
        title: "Cohesive Partial Wraps",
        description: "Strategic partial vehicle wraps that highlight your brand while maintaining a sleek, professional look.",
        imageUrl: "/SignsImages/Cohesive Partial.webp"
      }
    ]
  },
  {
    slug: "car-graphics",
    title: "Car Graphics",
    highlightTitle: "Presence",
    descriptionMain: "Elevate your vehicles into moving brand ambassadors with custom car graphics. From sleek full wraps to Lightbulb-catching spot graphics, our solutions transform cars into powerful marketing tools that communicate your identity wherever they go.",
    descriptionSecondary: "Our car graphics combine creative design, premium vinyl printing, and professional installation to deliver durable, high-impact visuals. Whether for commercial fleets or individual vehicles, we ensure your brand stands out on the road.",
    image: "/SignsImages/Car Graphi.webp",

    services: [
      {
        title: "Car Branding Consultation",
        description: "We analyze your brand goals and vehicle type to craft a tailored car graphics strategy.",
        iconName: "Lightbulb"
      },
      {
        title: "Custom Wrap Design",
        description: "Unique designs for full, partial, or spot wraps that maximize visibility and style.",
        iconName: "Sun"
      },
    
      {
        title: "Care & Refresh Services",
        description: "Support for maintaining, refreshing, or replacing graphics to keep your cars looking sharp.",
        iconName: "Layers"
      }
    ],

    products: [
      {
        title: "Full Commercial Wraps",
        description: "Complete vehicle wraps that turn cars into mobile billboards, delivering maximum brand exposure on the road.",
        imageUrl: "/SignsImages/Full Commercial Wra.webp"
      },
      {
        title: "Matte & Satin Finishes",
        description: "Stylish matte and satin vinyl finishes that give cars a modern, premium look while showcasing your brand.",
        imageUrl: "/SignsImages/Matte & Satin Finishe.webp"
      },
      {
        title: "Promotional Spot Graphics",
        description: "Targeted decals and spot graphics for promotions, seasonal campaigns, or highlighting key brand elements.",
        imageUrl: "/SignsImages/Promotional Spot Graphi.webp"
      },
    ],
  },
  {
    slug: "one-way-vision",
    title: "One Way Vision",
    highlightTitle: "Presence",
    descriptionMain: "Enhance privacy and brand visibility with one-way vision graphics. These perforated vinyl solutions allow clear visibility from inside while displaying bold, vibrant designs outside, making them perfect for vehicles, storefronts, and office windows.",
    descriptionSecondary: "Our one-way vision graphics combine creative design, UV-rated perforated vinyl, and professional installation to deliver durable, high-impact visuals. They provide shade, privacy, and promotional value without compromising visibility.",
    image: "/SignsImages/One Way Visi.webp",

    services: [
      {
        title: "Privacy & Branding Consultation",
        description: "We assess your needs to design one-way vision graphics that balance privacy with promotional impact.",
        iconName: "Lightbulb"
      },
      {
        title: "Custom Window Graphic Design",
        description: "Tailored designs for rear, side, or storefront windows that maximize visibility and brand presence.",
        iconName: "Sun"
      },
      {
        title: "UV-Rated Perforated Vinyl Printing",
        description: "High-resolution printing on perforated vinyl that resists fading and ensures long-lasting clarity.",
        iconName: "Layers"
      },
      
    ],

    products: [
      {
        title: "Rear Window Murals",
        description: "Bold, full-coverage rear window graphics that showcase your brand while maintaining interior visibility.",
        imageUrl: "/SignsImages/Rear Window Mu.webp"
      },
      {
        title: "Side Window Graphics",
        description: "Lightbulb-catching side window designs that add promotional impact without obstructing passenger visibility.",
        imageUrl: "/SignsImages/UV-Rated Perforated Vin.webp"
      },
      {
        title: "UV-Rated Perforated Vinyl",
        description: "Durable perforated vinyl engineered to withstand sun exposure, ensuring vibrant colors and clear visibility.",
        imageUrl: "/SignsImages/UV-Rated Perforated Vi.webp"
      },
    ]
  },
  {
    slug: "vehicle-lettering",
    title: "Vehicle Lettering",
    highlightTitle: "Presence",
    descriptionMain: "Turn your vehicles into rolling advertisements with custom lettering solutions. From bold contact details to layered multi-color text, our vehicle lettering ensures your brand message is clear, professional, and highly visible on the road.",
    descriptionSecondary: "Our lettering services combine precision design, durable vinyl materials, and expert installation to deliver sharp, long-lasting visuals. Perfect for service vehicles, fleets, and promotional cars, we help your brand speak directly to your audience.",
    image: "/SignsImages/Vehicle Letteri.webp",




    services: [
      {
        title: "Lettering Strategy Consultation",
        description: "We work with you to determine the best lettering style, placement, and messaging for maximum impact.",
        iconName: "Lightbulb"
      },
      {
        title: "Custom Typography Design",
        description: "Unique, brand-aligned text designs that make your vehicles stand out while staying professional.",
        iconName: "Sun"
      },
      {
        title: "Durable Vinyl Lettering",
        description: "High-quality vinyl lettering engineered to withstand weather, UV exposure, and daily wear.",
        iconName: "Layers"
      },
     
    ],




    products: [
      {
        title: "Cut-Vinyl Contact Info",
        description: "Clean, professional lettering for phone numbers, websites, and addresses, ensuring customers can easily reach you.",
        imageUrl: "/SignsImages/Cut-Vinyl Contact In.webp"
      },
      {
        title: "Layered Multi-Color Text",
        description: "Lightbulb-catching multi-layered vinyl text designs that add depth, vibrancy, and style to your vehicle lettering.",
        imageUrl: "/SignsImages/Layered Multi-Color Te.webp"
      },
      {
        title: "Service Listing Decals",
        description: "Custom decals that list your services directly on vehicles, turning them into mobile advertisements.",
        imageUrl: "/SignsImages/Service Listing Decal.webp"
      },

    ]
  },
 



  {
    slug: "van-wraps",
    title: "Van Wraps",
    highlightTitle: "Presence",
    descriptionMain: "Transform your vans into powerful mobile billboards with custom wrap solutions. From contractor branding to delivery van wraps, our designs ensure your message travels with impact and professionalism wherever your vans go.",
    descriptionSecondary: "Our van wrap services combine creative design, premium vinyl printing, and expert installation to deliver durable, high-impact visuals. Perfect for contractors, delivery services, and promotional fleets, we help your brand stand out on the road.",
    image: "/SignsImages/Van Wra.webp",




    services: [
      {
        title: "Van Branding Consultation",
        description: "We analyze your business needs and van type to craft a tailored wrap strategy.",
        iconName: "Lightbulb"
      },
      {
        title: "Custom Wrap Design",
        description: "Unique designs for full, partial, or panel wraps that maximize visibility and brand recognition.",
        iconName: "Sun"
      },
 
  
      {
        title: "Maintenance & Refresh Services",
        description: "Support for refreshing, repairing, or updating wraps to keep your vans looking sharp.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        title: "Contractor Branding",
        description: "Custom wraps designed for contractors, showcasing services and contact details with a professional finish.",
        imageUrl: "/SignsImages/Contractor Brandin.webp"
      },
      {
        title: "Delivery Van Wraps",
        description: "High-visibility wraps for delivery vans that promote your brand while on the move.",
        imageUrl: "/SignsImages/Delivery Van Wra.webp"
      },
      {
        title: "Panel Van Graphics",
        description: "Strategic graphics tailored for panel vans, combining bold visuals with practical branding placement.",
        imageUrl: "/SignsImages/Panel Van Graphi.webp"
      },
    ]
  },
  {
    slug: "truck-graphics",
    title: "Truck Graphics",
    highlightTitle: "Presence",
    descriptionMain: "Transform your trucks into commanding mobile billboards with custom wrap solutions. From tailgate wraps to box truck side panels, our designs ensure your brand message travels with impact and professionalism across every mile.",
    descriptionSecondary: "Our truck graphics services combine bold design, premium vinyl printing, and expert installation to deliver durable, high-impact visuals. Perfect for logistics fleets, contractors, and promotional trucks, we help your brand dominate the road.",
    image: "/SignsImages/Truck Graphi.webp",
    services: [
      {
        title: "Truck Branding Consultation",
        description: "We assess your business needs and truck type to craft a tailored graphics strategy.",
        iconName: "Lightbulb"
      },
      {
        title: "Custom Truck Wrap Design",
        description: "Unique designs for full, partial, or tailgate wraps that maximize visibility and brand recognition.",
        iconName: "Sun"
      },
    
      {
        title: "Professional Installation",
        description: "Expert application with seamless alignment and bubble-free finishing for a flawless truck transformation.",
        iconName: "Layers"
      },  
    ],
products: [
      {
        title: "Tailgate Wraps",
        description: "Bold tailgate wraps that maximize rear visibility, turning every stop into a branding opportunity.",
        imageUrl: "/SignsImages/Tailgate Wra-1600.webp"
      },
      {
        title: "Box Truck Side Panels",
        description: "Large-format side panel graphics for box trucks, delivering high-impact advertising on expansive surfaces.",
        imageUrl: "/SignsImages/Box Truck Side Panel.webp"
      },
      {
        title: "Cab & Door Branding",
        description: "Strategic cab and door graphics that highlight your logo and key details with professional precision.",
        imageUrl: "/SignsImages/Cab  Door Brandi.webp"
      },
    ]
  },
  {
    slug: "trailer-signs",
    title: "Trailer Signs",
    highlightTitle: "Presence",
    descriptionMain: "Transform your trailers into high-impact mobile billboards with custom signage solutions. From enclosed trailer wraps to utility panels, our designs ensure your brand message travels with strength and professionalism across every route.",
    descriptionSecondary: "Our trailer signage services combine bold design, heavy-duty vinyl printing, and expert installation to deliver durable, high-visibility graphics. Perfect for logistics fleets, contractors, and promotional trailers, we help your brand command attention on the road.",
    image: "/SignsImages/Trailer Si.webp",
    services: [
      {
        title: "Trailer Branding Consultation",
        description: "We evaluate your trailer type and business needs to craft a tailored signage strategy.",
        iconName: "Lightbulb"
      },
      {
        title: "Custom Trailer Wrap Design",
        description: "Creative designs for enclosed trailers, utility panels, and partial wraps that maximize visibility.",
        iconName: "Sun"
      },
      {
        title: "Heavy-Duty Vinyl Printing",
        description: "High-resolution, weather-resistant printing on durable vinyl engineered for large trailer surfaces.",
        iconName: "Layers"
      },

    ],




    products: [
      {
        title: "Enclosed Trailer Wraps",
        description: "Full wraps for enclosed trailers that deliver maximum brand exposure while protecting the trailer exterior.",
        imageUrl: "/SignsImages/Enclosed Trailer Wra.webp"
      },
      {
        title: "Utility Trailer Sign Panels",
        description: "Custom panels for utility trailers, combining bold visuals with practical branding placement.",
        imageUrl: "/SignsImages/Utility Trailer Sign Pane.webp"
      },
      {
        title: "Reflective Safety Strips",
        description: "High-visibility reflective strips that enhance nighttime safety while reinforcing your brand identity.",
        imageUrl: "/SignsImages/Reflective Safety Strip.webp"
      },
    ]
  },

  {
    slug: "magnetic-vehicles-signs",
    title: "Magnetic Vehicle Signs",
    highlightTitle: "Presence",
    descriptionMain: "Promote your brand with versatile magnetic vehicle signs that offer flexibility, durability, and high visibility. Easily removable and reusable, these signs transform your cars, trucks, and vans into mobile advertisements without permanent commitment.",
    descriptionSecondary: "Our magnetic signage solutions combine creative design, heavy-duty magnetic materials, and professional finishing to deliver sharp, long-lasting visuals. Perfect for contractors, delivery services, and promotional campaigns, we help your brand travel with impact.",
    image: "/SignsImages/Magnetic Vehicle Sig.webp",




    services: [
      {
        title: "Magnetic Sign Consultation",
        description: "We evaluate your vehicle type and branding needs to design magnetic signs that fit perfectly.",
        iconName: "Lightbulb"
      },
      {
        title: "Custom Magnetic Design",
        description: "Creative layouts tailored to your brand, ensuring your magnetic signs stand out on the road.",
        iconName: "Sun"
      },
      {
        title: "Maintenance & Replacement Support",
        description: "Assistance with refreshing worn signs or producing updated designs to keep your fleet sharp.",
        iconName: "Layers"
      }
    ],




    products: [
      {
        title: "Heavy-Duty Door Magnets",
        description: "Strong, weather-resistant door magnets that securely attach to vehicles, delivering reliable branding on the move.",
        imageUrl: "/SignsImages/Heavy-Duty Door Magnet.webp"
      },
      {
        title: "Custom Shaped Magnets",
        description: "Unique magnet designs cut to custom shapes, adding personality and distinction to your vehicle signage.",
        imageUrl: "/SignsImages/Custom Shaped Magn.webp"
      },
      {
        title: "Reflective Magnetic Signs",
        description: "High-visibility reflective magnets that enhance nighttime safety while keeping your brand message clear.",
        imageUrl: "/SignsImages/Reflective Magnetic Si.webp"
      },
    ]
  }
  

  ,


  {
    slug: "banners-and-flags",
    title: "Banners and Flags",
    highlightTitle: "Visibility",
    descriptionMain:
      "Boost your brand presence with high-impact banners and flags designed for indoor and outdoor advertising. From events to storefront promotions, our solutions ensure your message stands tall, visible, and unforgettable in any environment.",
    descriptionSecondary:
      "We combine premium materials, vibrant printing technology, and durable finishing techniques to create banners and flags that withstand weather conditions while maintaining sharp, Lightbulb-catching visuals. Perfect for events, exhibitions, retail promotions, and outdoor campaigns.",
    image: "/SignsImages/Banners and Fla.webp",
    services: [
      {
        title: "Brand Visibility Consultation",
        description:
          "We analyze your campaign goals and location to recommend the most effective banner and flag solutions for maximum exposure.",
        iconName: "Lightbulb"
      },
      {
        title: "Custom Banner Design",
        description:
          "Creative, high-impact designs tailored to your brand identity, ensuring your message stands out in crowded spaces.",
        iconName: "Sun"
      },
      {
        title: "Premium Large-Format Printing",
        description:
          "High-resolution printing using fade-resistant inks on durable materials for both indoor and outdoor use.",
        iconName: "Layers"
      },
    ],
    products: [
      {
        title: "Vinyl Event Banners",
        description:
          "Durable, weather-resistant vinyl banners designed for events, promotions, and storefront displays with vibrant full-color printing.",
        imageUrl: "/SignsImages/Double-Sided Banner Stan.webp"
      },
      {
        title: "Feather & Teardrop Flags",
        description:
          "Dynamic, wind-responsive flags perfect for outdoor branding, exhibitions, and roadside visibility with Lightbulb-catching motion.",
        imageUrl: "/SignsImages/Event Flags with Ba.webp"
      },
      {
        title: "Retractable Banner Stands",
        description:
          "Portable indoor display stands that set up in seconds, ideal for trade shows, presentations, and retail promotions.",
        imageUrl: "/SignsImages/Premium Executive Roll-up.webp"
      }
    ]
  },
  {
    slug: "exhibition-signage",
    title: "Exhibition Signage",
    highlightTitle: "Impact",
    descriptionMain:
      "Create powerful brand experiences at exhibitions, trade shows, and corporate events with premium signage solutions designed to attract, engage, and convert visitors. Our exhibition displays combine visual excellence with strategic placement to maximize attention in competitive environments.",
    descriptionSecondary:
      "We specialize in high-quality exhibition branding systems using modern display technologies, precision printing, and modular setups. Whether it's a trade show booth or a corporate expo, our solutions help your brand stand out with professionalism and clarity.",
    image: "/SignsImages/Exhibition Signa.webp",
    services: [
      {
        title: "Exhibition Space Planning",
        description:
          "Strategic layout planning to maximize booth visibility, visitor flow, and engagement within your allocated exhibition space.",
        iconName: "Lightbulb"
      },
      {
        title: "Custom Booth Branding Design",
        description:
          "Tailor-made exhibition graphics that reflect your brand identity and create a strong visual presence in crowded trade shows.",
        iconName: "Sun"
      },
      {
        title: "High-Resolution Display Printing",
        description:
          "Premium-quality printing for banners, panels, and fabric displays ensuring sharp visuals even at large viewing distances.",
        iconName: "Layers"
      },
    ],
    products: [
      {
        title: "Backlit Fabric Displays",
        description:
          "Illuminated fabric panels that enhance brand visuals with vibrant lighting, perfect for drawing attention in low-light exhibition halls.",
        imageUrl: "/SignsImages/Backlit Fabric Lightbox.webp"
      },
      {
        title: "Table Throws & Runners",
        description:
          "Custom-printed table covers that add a professional finishing touch to your booth while reinforcing brand identity.",
        imageUrl: "/SignsImages/Table Throws  Runner.webp"
      },
      {
        title: "Modular Booth Graphics",
        description:
          "Interchangeable graphic panels designed for flexible booth setups, allowing easy customization across different exhibitions.",
        imageUrl: "/SignsImages/Modular Booth Graphics.webp"
      }
    ]
  },
  {
    slug: "digital-printing",
    title: "Digital Printing",
    highlightTitle: "Precision",
    descriptionMain:
      "Bring your ideas to life with high-quality digital printing solutions designed for sharp detail, vibrant colors, and professional-grade output. From marketing materials to large-format visuals, we help brands communicate with clarity and impact across every medium.",
    descriptionSecondary:
      "Our digital printing services combine advanced print technology, premium substrates, and color-accurate processes to deliver consistent, high-resolution results. Whether for branding, advertising, or interior graphics, we ensure every print reflects your brand at its best.",
    image: "/SignsImages/Digital Printi.webp",
    services: [
      {
        title: "Print Requirement Consultation",
        description:
          "We assess your project needs to recommend the best printing materials, sizes, and finishes for optimal visual impact and durability.",
        iconName: "Lightbulb"
      },
      {
        title: "Custom Graphic Preparation",
        description:
          "We refine and optimize your artwork to ensure perfect color balance, resolution, and print readiness across all formats.",
        iconName: "Sun"
      },
      {
        title: "High-Definition Digital Printing",
        description:
          "Advanced printing technology that produces crisp details, rich colors, and consistent quality on a wide range of materials.",
        iconName: "Layers"
      },
    ],
    products: [
      {
        title: "Custom Wall Murals",
        description:
          "Large-format printed wall designs that transform interiors with immersive branding, storytelling visuals, and high-impact aesthetics.",
        imageUrl: "/SignsImages/Window Graphics & Deca.webp"
      },
      {
        title: "Floor Graphics",
        description:
          "Durable, slip-resistant printed floor decals designed for wayfinding, promotions, and creative branding in high-traffic areas.",
        imageUrl: "/SignsImages/Floor Dec.webp"
      },
      {
        title: "Window Clings",
        description:
          "Reusable adhesive graphics for glass surfaces that enhance storefront visibility while allowing easy installation and removal.",
        imageUrl: "/SignsImages/Window Clings.webp"
      }
    ]
  },
  {
    slug: "posters",
    title: "Posters",
    highlightTitle: "Clarity",
    descriptionMain:
      "Capture attention instantly with high-impact poster printing designed for bold visuals, sharp detail, and vibrant color reproduction. Ideal for advertising, promotions, events, and indoor displays, our posters turn ideas into visually powerful communication tools.",
    descriptionSecondary:
      "We use advanced digital printing technology and premium paper stocks to produce posters that stand out in both close-up and distance viewing. Whether for retail promotions or corporate messaging, our posters ensure maximum visibility and professional presentation.",
    image: "/SignsImages/Poster.webp",
    services: [
      {
        title: "Poster Concept Consultation",
        description:
          "We help you define the right poster format, size, and visual approach to effectively communicate your message to the target audience.",
        iconName: "Lightbulb"
      },
      {
        title: "Creative Layout Design",
        description:
          "Professionally crafted poster layouts that balance typography, imagery, and branding for maximum visual impact.",
        iconName: "Sun"
      },
      {
        title: "High-Resolution Poster Printing",
        description:
          "Ultra-clear printing with vibrant colors and sharp detailing, ensuring your posters stand out in any environment.",
        iconName: "Layers"
      },
    ],
    products: [
      {
        title: "Backlit Film Posters",
        description:
          "Translucent posters designed for illuminated displays, delivering vibrant visuals that shine brightly in lightboxes and signage frames.",
        imageUrl: "/SignsImages/Backlit Film Post.webp"
      },
      {
        title: "Mounting Board Posters",
        description:
          "Rigid, high-strength posters mounted on durable boards for long-lasting indoor displays, exhibitions, and presentations.",
        imageUrl: "/SignsImages/Mounting Board Posters.webp"
      },
      {
        title: "Laminated Safety Posters",
        description:
          "Protective laminated posters designed for safety instructions, industrial signage, and high-traffic environments requiring durability.",
        imageUrl: "/SignsImages/Laminated Safety Posters.webp"
      }
    ]
  },
  {
    slug: "window-lettering",
    title: "Window Lettering",
    highlightTitle: "Clarity",
    descriptionMain:
      "Enhance your storefront visibility with professional window lettering designed to communicate your brand message with precision and style. Perfect for retail shops, offices, and commercial spaces, our lettering solutions turn glass surfaces into powerful branding assets.",
    descriptionSecondary:
      "We specialize in high-quality vinyl lettering that combines durability, clean application, and striking visual appeal. Whether for promotions, branding, or essential business information, our window graphics ensure maximum readability and aesthetic balance.",
    image: "/SignsImages/Window Letteri.webp",
   services: [
      {
        title: "Storefront Visibility Planning",
        description:
          "We analyze your glass space and branding goals to design window lettering that maximizes visibility and customer engagement.",
        iconName: "Lightbulb"
      },
      {
        title: "Custom Typography Design",
        description:
          "Professionally crafted lettering styles tailored to your brand identity, ensuring clear and attractive communication on glass surfaces.",
        iconName: "Sun"
      },
      {
        title: "Precision Vinyl Cutting",
        description:
          "High-accuracy cutting technology that produces clean edges and perfectly shaped lettering for a polished finish.",
        iconName: "Layers"
      }, 
    ],
    products: [
      {
        title: "Metallic Vinyl Lettering",
        description:
          "Premium reflective metallic vinyl that adds a bold, premium look to storefront windows while maintaining high durability.",
        imageUrl: "/SignsImages/Metallic Vinyl Letter.webp"
      },
      {
        title: "Fluorescent Storefront Text",
        description:
          "High-visibility neon-style lettering designed to grab attention instantly, especially effective for promotions and nighttime appeal.",
        imageUrl: "/SignsImages/Fluorescent Storefront Text.webp"
      },
      {
        title: "Etched Glass Vinyl",
        description:
          "Frosted glass-effect vinyl that delivers a sophisticated etched appearance, ideal for offices, partitions, and privacy branding.",
        imageUrl: "/SignsImages/Etched Glass Vinyl.webp"
      }
    ]
  },
  {
    slug: "window-decals",
    title: "Window Decals",
    highlightTitle: "Clarity",
    descriptionMain:
      "Transform your windows into dynamic branding surfaces with custom decals that balance style, visibility, and impact. From die-cut logos to perforated wraps, our solutions enhance storefronts, offices, and fleet vehicles with professional precision.",

    descriptionSecondary:
      "Our window decal services combine creative design, durable vinyl materials, and expert application to deliver sharp, long-lasting visuals. Perfect for promotions, branding, or privacy solutions, we help your glass surfaces communicate with clarity and style.",
    image: "/SignsImages/Wall Murals & Wr.webp",
    services: [
      {
        title: "Window Branding Consultation",
        description:
          "We assess your glass surfaces and branding goals to design decals that maximize visibility and engagement.",
        iconName: "Layers"
      },
      {
        title: "Custom Decal Design",
        description:
          "Creative layouts tailored to your brand identity, including logos, text, and promotional graphics.",
        iconName: "Sun"
      },
      {
        title: "Precision Die-Cutting",
        description:
          "Advanced cutting technology for clean edges and perfectly shaped decals that look professional on glass.",
        iconName: "Layers"
      },
    ],
    products: [
      {
        title: "Die-Cut Logo Decals",
        description:
          "Custom-shaped decals featuring your logo, cut with precision for a clean, professional look on storefronts or vehicles.",
        imageUrl: "/SignsImages/Die-Cut Logo Decals.webp"
      },
      {
        title: "Perforated Window Wraps",
        description:
          "One-way vision wraps that display bold designs outside while maintaining clear visibility inside.",
        imageUrl: "/SignsImages/UV-Rated Perforated Vin.webp"
      },
      {
        title: "Double-Sided Window Decals",
        description:
          "Graphics visible from both inside and outside, perfect for maximizing promotional impact on glass surfaces.",
        imageUrl: "/SignsImages/Transparent LED Scre.webp"
      },
    ]
  }
]