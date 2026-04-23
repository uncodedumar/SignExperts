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
    slug: "evolution-of-generative-ai-2026",
    title: "The Silent Revolution: How Generative AI Redefined Creative Agencies",
    subheading: "Moving beyond chatbots to autonomous creative ecosystems.",
    featuredImage: "/images/blog/ai-revolution-header.jpg",
    author: "Tech Insights Team",
    date: "April 22, 2026",
    content: [
      {
        type: "paragraph",
        value: "The landscape of digital creation has shifted fundamentally over the last twenty-four months. What started as simple text generation has evolved into a multi-modal powerhouse capable of orchestrating entire brand identities in seconds."
      },
      {
        type: "paragraph",
        value: "Agencies that once spent weeks on mood boards are now leveraging custom-trained latent diffusion models to iterate on visual concepts in real-time during client meetings. This isn't just about speed; it's about the democratization of high-fidelity design."
      },
      {
        type: "image",
        value: "/images/blog/neural-network-visualization.jpg",
        alt: "A visualization of a neural network processing creative data"
      },
      {
        type: "heading",
        value: "The Shift to Custom Model Architectures"
      },
      {
        type: "paragraph",
        value: "Generic models are no longer enough for enterprise-grade solutions. Today, the focus has shifted toward Fine-Tuned LoRAs (Low-Rank Adaptation) and proprietary datasets that allow brands to maintain a consistent 'voice' across both text and art."
      },
      {
        type: "subheading",
        value: "Why Data Privacy is the New Creative Frontier"
      },
      {
        type: "paragraph",
        value: "As we integrate deeper with AI, the security of the training data becomes paramount. Leading firms are now building 'Siloed AI' environments where client data never touches the public cloud, ensuring that unique brand assets remain truly unique."
      },
      {
        type: "paragraph",
        value: "Furthermore, the rise of synthetic data has allowed developers to train models on edge cases that were previously impossible to document, leading to more inclusive and diverse AI outputs."
      },
      {
        type: "image",
        value: "/images/blog/future-office.jpg",
        alt: "A futuristic office setting showing human-AI collaboration"
      },
      {
        type: "heading",
        value: "Integrating Full-Stack Intelligence"
      },
      {
        type: "paragraph",
        value: "Modern full-stack development now requires an 'AI-First' mindset. This involves building robust AWS infrastructures capable of handling high-compute inference tasks while maintaining seamless UI/UX for the end user."
      },
      {
        type: "paragraph",
        value: "From headless CMS architectures to Shopify Hydrogen storefronts, the backend is now expected to do more than just serve data—it’s expected to predict user intent and personalize content dynamically."
      }
    ]
  },
  {
    slug: "mastering-modern-ui-ux-trends",
    title: "The Aesthetics of 2026: Beyond Minimalist Design",
    subheading: "Why 'Bento Grids' and 'Neumorphism 2.0' are dominating the web.",
    featuredImage: "/images/blog/ui-ux-trends.jpg",
    author: "Design Lead",
    date: "April 15, 2026",
    content: [
      {
        type: "paragraph",
        value: "Minimalism dominated the 2010s, but the current era is seeing a return to depth, texture, and organic motion. Users are no longer satisfied with flat interfaces; they crave tactile feedback and visual storytelling."
      },
      {
        type: "image",
        value: "/images/blog/bento-grid-example.jpg",
        alt: "An example of a Bento Grid UI layout"
      },
      {
        type: "heading",
        value: "The Psychology of Spatial Interfaces"
      },
      {
        type: "paragraph",
        value: "Spatial UI, popularized by the surge in AR/VR hardware, has bled into traditional web design. We are seeing more use of Z-axis layering and glassmorphism to create a sense of physical space within a 2D screen."
      },
      {
        type: "subheading",
        value: "Performance vs. Visual Fidelity"
      },
      {
        type: "paragraph",
        value: "The challenge for developers in 2026 is balancing these heavy visual styles with high-performance metrics. Utilizing Next.js Server Components and advanced image optimization techniques is no longer optional."
      },
      {
        type: "paragraph",
        value: "By leveraging edge computing, we can now deliver complex 3D assets and high-resolution illustrations without sacrificing the sub-second load times that users—and search engines—demand."
      }
    ]
  }
];

// data.ts
export interface SupportContent {
  imageUrl: string;
  heading: string;
  subheading: string;
}

export const supportData: SupportContent = {
  imageUrl: "/signarama/signarama-usa-professional-printing-services-48600977087-o-square-64b5c5cc4ff68.webp",
  heading: "Need support to take your signage\n project from idea to installation?",
  subheading: "Whether you’re after a little design help or a reliable set of hands for a complex national project, it’s easy with our design and service team looking after you. We can take care of your project from first conversation to final installation.",
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

export const PrdData: Record<string, PrdContent> = {
  "wayfinder-and-saftey-signs": {
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
    title: "Need support to take your signage\n project from idea to installation?",
    description: "Whether you’re after a little design help or a reliable set of hands for a complex national project, it’s easy with our design and service team looking after you. We can take care of your project from first conversation to final installation.",
    accordions: [
      {
        id: "acc-0",
        title: "Hygiene and Safety Signs",
        subheading: "Wall signage and safety stickers",
        description: "Remind people of distance and hygiene rules with these best practice safety signs, or Sign Experts can make something to your requirements.",
        products: [
          { title: "Window Graphics", description: "Turning underutilized storefronts and interior glass into high-impact visual displays", imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
          { title: "Choroplast signs", description: "The go-to solution for businesses needing a balance of affordability and resilience.", imageUrl: "/SIGNS/INDOOR/Way finder and safety signs/hygine and safety signs/choroplast signs/Screenshot 2026-04-23 at 4.37.10ΓÇ»PM.png" },
          { title: "Safety Signs", description: "Critical component of any operational environment, designed to mitigate risk.", imageUrl: "/SIGNS/INDOOR/Way finder and safety signs/hygine and safety signs/safety signs/Screenshot 2026-04-23 at 4.39.31ΓÇ»PM.png" },
          { title: "Window Decals", description: "Ultimate tool for converting glass storefronts into premium advertising space.", imageUrl: "/SIGNS/INDOOR/Way finder and safety signs/hygine and safety signs/window decals/Screenshot 2026-04-23 at 4.40.08ΓÇ»PM.png" },
          { title: "Protection Screens", description: "Essential for maintaining a safe and professional interface between staff and customers.", imageUrl: "/SIGNS/INDOOR/Way finder and safety signs/hygine and safety signs/protection screens/Screenshot 2026-04-23 at 4.39.02ΓÇ»PM.png" },
          { title: "Cough Screens", description: "Hygiene shields, commonly known as sneeze screens, for high-traffic environments.", imageUrl: "/SIGNS/INDOOR/Way finder and safety signs/hygine and safety signs/cough screens/Screenshot 2026-04-23 at 4.38.26ΓÇ»PM.png" },
        ]
      },
      {
        id: "acc-1",
        title: "Custom Brand Identity",
        subheading: "Logo and visual design integration",
        description: "Work with our design team to translate your brand guidelines into stunning physical assets that command attention.",
        products: [
          { title: "Logo Fabrication", description: "3D dimensional logos crafted from acrylic, metal, or wood.", imageUrl: "/SIGNS/INDOOR/Way finder and safety signs/customs brand identity/logo fabrications/Screenshot 2026-04-23 at 4.42.46ΓÇ»PM.png" },
          { title: "Brand Wall Graphics", description: "Full-scale vinyl wraps that tell your brand story on any interior wall.", imageUrl:"/SIGNS/INDOOR/Way finder and safety signs/customs brand identity/brand wall graphics/Screenshot 2026-04-23 at 4.43.14ΓÇ»PM.png"  }
        ]
      },
      {
        id: "acc-2",
        title: "Wayfinding & Directional",
        subheading: "Navigation and flow management",
        description: "Ensure a seamless visitor experience with intuitive mapping, directional arrows, and room identification signs.",
        products: [
          { title: "Directory Boards", description: "Elegant slat systems or digital displays for building lobbies.", imageUrl: "/SIGNS/INDOOR/Way finder and safety signs/wayfinding and directional/directory boards/Screenshot 2026-04-23 at 4.44.58ΓÇ»PM.png" },
          { title: "Floor Decals", description: "High-durability non-slip graphics for pathway guidance.", imageUrl: "/SIGNS/INDOOR/Way finder and safety signs/wayfinding and directional/floor decals/Screenshot 2026-04-23 at 4.45.28ΓÇ»PM.png" }
        ]
      },
      {
        id: "acc-3",
        title: "Illuminated Signage",
        subheading: "24/7 brand visibility",
        description: "Stay visible day or night with energy-efficient LED solutions, including backlit letters and lightboxes.",
        products: [
          { title: "LED Channel Letters", description: "Premium front-lit or halo-lit lettering for maximum impact.", imageUrl: "/SIGNS/INDOOR/Way finder and safety signs/iluminated signage/led channel letters/Screenshot 2026-04-23 at 4.48.00ΓÇ»PM.png" },
          { title: "Slim Lightboxes", description: "Ultra-thin profiles for high-end retail displays.", imageUrl: "/SIGNS/INDOOR/Way finder and safety signs/iluminated signage/slim lightboxes/Screenshot 2026-04-23 at 4.47.14ΓÇ»PM.png" }
        ]
      },
      {
        id: "acc-4",
        title: "Trade Show & Events",
        subheading: "Portable and modular displays",
        description: "Everything you need for a professional presence on the road, from pop-up banners to modular booth systems.",
        products: [
          { title: "Roll-up Banners", description: "Lightweight, portable, and sets up in seconds.", imageUrl: "/SIGNS/INDOOR/Way finder and safety signs/tradeshow and events/rollups banners/Screenshot 2026-04-23 at 4.53.02ΓÇ»PM.png" },
          { title: "Fabric Backdrops", description: "Seamless, wrinkle-free graphics for event photography.", imageUrl: "/SIGNS/INDOOR/Way finder and safety signs./tradeshow and events/fabric backdrops/Screenshot 2026-04-23 at 4.52.32ΓÇ»PM.png" }
        ]
      },
      {
        id: "acc-5",
        title: "Exterior Storefronts",
        subheading: "Outdoor durability and impact",
        description: "Weather-resistant materials designed to withstand the elements while maintaining a premium look.",
        products: [
          { title: "Pylon Signs", description: "Freestanding structures for maximum roadside visibility.", imageUrl: "/SIGNS/INDOOR/Way finder and safety signs/exterior storefronts/awnings canopies/Screenshot 2026-04-23 at 4.51.23ΓÇ»PM.png" },
          { title: "Awnings & Canopies", description: "Combining functional shade with custom branding.", imageUrl: "/SIGNS/INDOOR/Way finder and safety signs/exterior storefronts/awnings canopies/Screenshot 2026-04-23 at 4.51.58ΓÇ»PM.png" }
        ]
      }
    ]
  },

  "illuminated-signs": {
    imageUrl: '/signarama/signarama-usa-owners-corp-square-61a5efe7433bd.jpg.jpeg',
    title: "Premium Illuminated Signs by Sign Experts IL\n Elevate Your Brand Visibility",
    description: "Transform your storefront with high-impact lighting solutions. From custom neon to energy-efficient LED channel letters, Sign Experts IL provides end-to-end design, fabrication, and professional installation for businesses across Illinois.",
    accordions: [

      {
        "id": "acc-0",
        "title": "3D Illuminated Letters",
        "subheading": "Dimensional LED Storefront Signage",
        "description": "Maximize brand depth with custom-fabricated 3D letters. Our dimensional signs offer superior visibility and a professional finish for modern retail and corporate exteriors.",
        "products": [
          { "title": "Acrylic 3D Letters", "description": "Precision-cut acrylic lettering with internal LED modules for a vibrant, uniform glow.", "imageUrl": '/SIGNS/OUTDOOR/ILUMINATED/3D ILLUMINATED/ACRYLIC 3D LETTERS/download (1).jpeg'},
          { "title": "Stainless Steel 3D Signs", "description": "High-durability metal letters with face-lit illumination for a premium architectural look.", "imageUrl": '/SIGNS/OUTDOOR/ILUMINATED/3D ILLUMINATED/Stainless Steel 3D Signs/download (2).jpeg'},
          { "title": "Trimless 3D Letters", "description": "Sleek, modern design with no visible borders for a clean and seamless light output.", "imageUrl": '/SIGNS/OUTDOOR/ILUMINATED/3D ILLUMINATED/Trimless 3D Letters/download (4).jpeg' }
        ]
      },
      {
        "id": "acc-1",
        "title": "Neon Letters",
        "subheading": "Classic & Modern Neon Signage",
        "description": "Capture the iconic glow of neon with our custom glass or LED neon flex options. Perfect for interior branding, restaurants, and high-traffic entertainment venues.",
        "products": [
          { "title": "Custom Glass Neon", "description": "Traditional hand-crafted gas-filled tubes for an authentic vintage aesthetic and warm glow.", "imageUrl":  '/SIGNS/OUTDOOR/ILUMINATED/NEON LIGHTS/Custom Glass Neon/download (5).jpeg' },
          { "title": "LED Neon Flex", "description": "Energy-efficient, durable, and flexible alternative to traditional neon with color-changing options.", "imageUrl":  '/SIGNS/OUTDOOR/ILUMINATED/NEON LIGHTS/LED Neon Flex/' },
          { "title": "Neon Art Displays", "description": "Bespoke neon wall art and logos designed to create Instagrammable moments in your space.", "imageUrl":  '/SIGNS/OUTDOOR/ILUMINATED/NEON LIGHTS/Neon Art Displays/DOWNLOAD.png' }
        ]
      },
      {
        "id": "acc-2",
        "title": "Digital LED Signs",
        "subheading": "Programmable Electronic Message Centers",
        "description": "Communicate in real-time with high-resolution digital LED displays. Perfect for dynamic promotions, community updates, and versatile outdoor advertising.",
        "products": [
          { "title": "Outdoor LED Displays", "description": "Weather-resistant, high-brightness screens for roadside visibility and large-scale messaging.", "imageUrl": "/SIGNS/OUTDOOR/ILUMINATED/Digital Led Signs/Outdoor LED Displays/download (7).jpeg" },
          { "title": "Indoor Digital Posters", "description": "Slim, high-definition LED screens for retail promotions and interactive lobby directories.", "imageUrl": "/SIGNS/OUTDOOR/ILUMINATED/Digital Led Signs/Indoor Digital Posters/download (8).jpeg" },
          { "title": "Scrolling LED Tickers", "description": "Dynamic text displays for stock updates, news feeds, or real-time event announcements.", "imageUrl": "/SIGNS/OUTDOOR/ILUMINATED/Digital Led Signs/Scrolling LED Tickers/Scrolling LED Tickers.jpeg" }
        ]
      },
      {
        "id": "acc-3",
        "title": "Light Box Signs",
        "subheading": "Backlit Cabinet & Fabric Signs",
        "description": "Ensure your message is seen 24/7 with professional light box cabinets. Our durable frames and high-quality graphics offer a cost-effective lighting solution.",
        "products": [
          { "title": "Double-Sided Projecting Boxes", "description": "Maximize sidewalk visibility with illuminated blade signs that catch traffic from both directions.", "imageUrl": "/SIGNS/OUTDOOR/ILUMINATED/Light Box Signs/DS Projections/Screenshot 2026-04-22 at 11.09.03ΓÇ»PM.png" },
          { "title": "LED Fabric Lightboxes", "description": "Ultra-slim frames with tension fabric graphics for a vibrant, glare-free indoor display.", "imageUrl": "/SIGNS/OUTDOOR/ILUMINATED/Light Box Signs/LED Fabric Lightboxes/2.png" },
          { "title": "Aluminum Sign Cabinets", "description": "Heavy-duty outdoor light boxes featuring translucent acrylic faces and long-lasting LED kits.", "imageUrl": "/SIGNS/OUTDOOR/ILUMINATED/Light Box Signs/Aluminum Sign Cabinets/download (10).jpeg" }
        ]
      },
      {
        "id": "acc-4",
        "title": "LED Backlight / Halo Lit",
        "subheading": "Elegant Reverse Channel Lighting",
        "description": "Create a sophisticated 'halo' effect with reverse-lit channel letters. These signs cast a soft glow against the wall, perfect for high-end boutiques and corporate offices.",
        "products": [
          { "title": "Halo-Lit Metal Letters", "description": "Premium brushed metal letters with rear-facing LEDs for a subtle, upscale atmospheric glow.", "imageUrl": "/SIGNS/OUTDOOR/ILUMINATED/Halo lit/Halo-Lit Metal Letters/Screenshot 2026-04-22 at 11.16.36ΓÇ»PM.png" },
          { "title": "Backlit Logo Panels", "description": "Custom-cut metal panels with integrated backlighting for a modern, multi-dimensional look.", "imageUrl": "/SIGNS/OUTDOOR/ILUMINATED/Halo lit/Backlit/Screenshot 2026-04-22 at 11.17.24ΓÇ»PM.png" },
          { "title": "RGB Halo Lighting", "description": "Smart LED systems that allow you to change the halo color via remote or mobile app.", "imageUrl": "/SIGNS/OUTDOOR/ILUMINATED/Halo lit/RGB Halo Lighting/Screenshot 2026-04-22 at 11.21.11ΓÇ»PM.png" }
        ]
      },
      {
        "id": "acc-5",
        "title": "Channel Signs",
        "subheading": "Standard & Custom Channel Lettering",
        "description": "The industry standard for commercial buildings. Our channel letters are custom-designed to match your font and brand colors with maximum brightness and clarity.",
        "products": [
          { "title": "Front-Lit Channel Letters", "description": "The most popular choice for retail, featuring colorful acrylic faces that pop at night.", "imageUrl": "/SIGNS/OUTDOOR/ILUMINATED/Channel Signs/Front-Lit Channel Letters/Screenshot 2026-04-22 at 11.23.22ΓÇ»PM.png" },
          { "title": "Dual-Lit Channel Signs", "description": "Hybrid lighting that illuminates both the face and the back for a striking visual impact.", "imageUrl": "/SIGNS/OUTDOOR/ILUMINATED/Channel Signs/Dual-Lit Channel Signs/images.jpeg" },
          { "title": "Raceway Mounted Signs", "description": "Pre-assembled channel letters on a metal bar for easy installation and minimal building wall penetrations.", "imageUrl": "/SIGNS/OUTDOOR/ILUMINATED/Channel Signs/Raceway Mounted Signs/download (12).jpeg" }
        ]
      }
    ]
  },
  "non-illuminated-signs": {
    imageUrl: "/signarama/signarama-usa-monument-signs-original-61a5c3c48f7ba.webp",
    title: "Professional Non-Illuminated Signage Solutions\n Durability Meets Design",
    description: "Sign Experts IL provides high-quality, non-electric signage solutions for every industry. From regulatory ADA compliance to massive roadside billboards, we deliver durable materials and expert installation to keep your brand visible and compliant.",
    accordions: [
      {
        "id": "acc-0",
        "title": "ADA & Accessibility Signs",
        "subheading": "Compliant Braille and Wayfinding",
        "description": "Ensure your facility meets all legal requirements with high-quality ADA-compliant signage. We specialize in tactile lettering, Grade 2 Braille, and high-contrast designs.",
        "products": [
          { "title": "Tactile Room IDs", "description": "Custom ADA signs with raised text and Braille for offices, restrooms, and exits.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/ADA/Tactile Room IDs/a.png" },
          { "title": "Wayfinding Plaques", "description": "Accessible directional signage designed for high-traffic public environments.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/ADA/Wayfinding Plaques/a.png" },
          { "title": "Safety Evacuation Maps", "description": "Durable, high-contrast maps and emergency exit signs for building compliance.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/ADA/Safety Evacuation Maps/s.png" }
        ]
      },
      {
        "id": "acc-1",
        "title": "Dimensional Letters",
        "subheading": "Non-Lit 3D Wall Signage",
        "description": "Add depth and texture to your brand without the need for electrical wiring. Ideal for reception areas, exterior facades, and architectural branding.",
        "products": [
          { "title": "Flat-Cut Acrylic", "description": "Sleek, high-gloss letters available in various thicknesses and custom brand colors.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Dimensional Letters/Flat-Cut Acrylic/a.png" },
          { "title": "Metal Laminates", "description": "The look of solid metal at a fraction of the weight, perfect for professional lobbies.", "imageUrl": "/signarama/signarama-usa-monument-signs-original-61a5c3c48f7ba.webp" },
          { "title": "High-Density Urethane", "description": "Weather-resistant, carved signs that mimic the texture of wood or stone.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Dimensional Letters/Metal Laminates sign/Screenshot 2026-04-22 at 11.38.09ΓÇ»PM.png" }
        ]
      },
      {
        "id": "acc-2",
        "title": "Post and Panel Signs",
        "subheading": "Versatile Site and Directional Signs",
        "description": "The perfect solution for business parks, construction sites, and real estate. Durable, professional, and easy to update.",
        "products": [
          { "title": "Aluminum Site Signs", "description": "Heavy-duty double-post systems designed for long-term outdoor brand exposure.", "imageUrl": "//SIGNS/OUTDOOR/Non ILLUMINATED/Posts and Panels Signs/Aluminum Site Signs/Screenshot 2026-04-22 at 11.43.15ΓÇ»PM.png" },
          { "title": "M-Panel Real Estate Signs", "description": "Reinforced panels that offer a rigid, high-end look for commercial listings.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Posts and Panels Signs/M-Panel Real Estate Signs/Screenshot 2026-04-22 at 11.44.47ΓÇ»PM.png" },
          { "title": "Directional Totems", "description": "Slim-profile post signs used to guide visitors through large campus layouts.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Posts and Panels Signs/Directional Totems/Screenshot 2026-04-22 at 11.46.01ΓÇ»PM.png" }
        ]
      },
      {
        "id": "acc-3",
        "title": "Teardrop Banners & Flags",
        "subheading": "Portable Outdoor Promotional Displays",
        "description": "Catch the breeze and the attention of passersby. Our custom flags are lightweight, weather-resistant, and perfect for outdoor events.",
        "products": [
          { "title": "Custom Teardrop Flags", "description": "Unique shape prevents wrapping and ensures your logo is always visible.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Teardrops flags/Customs/a.png" },
          { "title": "Feather Banners", "description": "Tall, slim promotional flags designed for maximum height and roadside impact.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Teardrops flags/Feather/Screenshot 2026-04-22 at 11.49.08ΓÇ»PM.png" },
          { "title": "Event Flags with Bases", "description": "Interchangeable flag systems with ground stakes or heavy-duty indoor bases.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Teardrops flags/Event Flags with Bases/Screenshot 2026-04-22 at 11.50.05ΓÇ»PM.png" }
        ]
      },
      {
        "id": "acc-4",
        "title": "Vinyl Banners",
        "subheading": "High-Impact Large Format Graphics",
        "description": "From grand openings to seasonal sales, our vinyl banners offer a cost-effective way to get your message across in vibrant color.",
        "products": [
          { "title": "Heavy-Duty Scrim Vinyl", "description": "Reinforced material designed to withstand wind and rain for outdoor use.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Vinyl Banners/Heavy-Duty Scrim Vinyl/Screenshot 2026-04-22 at 11.52.49ΓÇ»PM.png" },
          { "title": "Mesh Banners", "description": "Perforated vinyl that allows wind to pass through, ideal for fences and scaffolding.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Vinyl Banners/Mesh Banners/Screenshot 2026-04-22 at 11.53.40ΓÇ»PM.png" },
          { "title": "Retractable Banners", "description": "Portable pull-up stands for trade shows, presentations, and retail displays.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Vinyl Banners/Retractable Banners/a.png" }
        ]
      },
      {
        "id": "acc-5",
        "title": "Pylon Signs",
        "subheading": "High-Rise Roadside Identity",
        "description": "Stand tall above the competition. Our non-illuminated pylon structures provide massive brand visibility for shopping centers and industrial parks.",
        "products": [
          { "title": "Multi-Tenant Pylons", "description": "Large-scale structures featuring individual panels for multiple businesses.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Pylons/Multi-Tenant Pylons/a.png" },
          { "title": "Monolithic Pylons", "description": "Sleek, modern towers designed for a single corporate brand identity.", "imageUrl": "/signarama/signarama-usa-monument-signs-original-61a5c3c48f7ba.webp" },
          { "title": "Reflective Pylon Graphics", "description": "Using high-intensity reflective vinyl for night visibility without electricity.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Pylons/Reflective Pylon Graphics/q.png" }
        ]
      },
      {
        "id": "acc-6",
        "title": "Monument Signs",
        "subheading": "Low-Profile Architectural Landmarks",
        "description": "Make a permanent statement. Our monument signs are built from stone, brick, or high-end foam to blend seamlessly with your landscaping.",
        "products": [
          { "title": "Brick & Stone Monuments", "description": "Traditional masonry signs that provide a sense of permanence and prestige.", "imageUrl": "//SIGNS/OUTDOOR/Non ILLUMINATED/Monument signs/Brick & Stone Monuments/Screenshot 2026-04-23 at 12.04.34ΓÇ»AM.png" },
          { "title": "Faux Stone EPS Signs", "description": "Lightweight, durable foam signs that look identical to real stone and masonry.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Monument signs/Faux Stone EPS Signs/a.png" },
          { "title": "Contemporary Metal Monuments", "description": "Modern aluminum or steel monuments for a sharp, tech-forward brand image.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Monument signs/Contemporary Metal Monuments/Screenshot 2026-04-23 at 12.05.17ΓÇ»AM" }
        ]
      },
      {
        "id": "acc-7",
        "title": "Coroplast Signs",
        "subheading": "Economical Yard & Event Signage",
        "description": "The industry standard for temporary signage. Perfect for political campaigns, lawn care, and short-term event directions.",
        "products": [
          { "title": "H-Stake Yard Signs", "description": "Affordable corrugated plastic signs that are easy to install in grass or soil.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Coroplast signs/H-Stake Yard Signs/s.png" },
          { "title": "Custom Die-Cut Coroplast", "description": "Signs cut to custom shapes for unique branding and promotional standees.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Coroplast signs/Custom Die-Cut Coroplast/q.png" },
          { "title": "Large Format Coroplast", "description": "Over-sized panels for construction site barriers or large outdoor displays.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Coroplast signs/Large Format Coroplast/e.png" }
        ]
      },
      {
        "id": "acc-8",
        "title": "Billboards",
        "subheading": "Large-Scale Outdoor Advertising",
        "description": "Dominate the skyline. We design and install high-impact billboard graphics that reach thousands of daily commuters.",
        "products": [
          { "title": "Highway Bulletins", "description": "Extra-large format displays designed for maximum readability from a distance.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Billboards/Highway Bulletins/e.png" },
          { "title": "Poster Billboards", "description": "Standardized advertising panels for local street-level brand awareness.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Billboards/Poster Billboards/e.png" },
          { "title": "Wall Murals & Wraps", "description": "Transform building exteriors into massive advertisements with vinyl wraps.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Billboards/Wall Murals/r.png" }
        ]
      },
      {
        "id": "acc-9",
        "title": "Street and Traffic Signs",
        "subheading": "Regulatory and Informational Signage",
        "description": "Keep your parking lots and private roads safe. We provide DOT-compliant street signs, parking markers, and safety instructions.",
        "products": [
          { "title": "Reflective Traffic Signs", "description": "Standardized stop, yield, and speed limit signs with high-visibility finishes.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Traffic Signs/Reflective Traffic Signs/d.png" },
          { "title": "Custom Parking Signs", "description": "Branded reserved parking, handicap, and directional signs for your facility.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Traffic Signs/Custom Parking Signs/e.png" },
          { "title": "Street Name Plaques", "description": "Durable aluminum street identification signs for residential and commercial zones.", "imageUrl": "/SIGNS/OUTDOOR/Non ILLUMINATED/Traffic Signs/Street Name Plaques/a.png" }
        ]
      }
    ]
  },
  "vehicles-signs": {
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
    title: "Mobile Advertising & Vehicle Signs by Sign Experts IL\n Turn Your Miles Into Leads",
    description: "Transform your commercial vehicles into powerful mobile billboards. From full high-definition wraps to professional fleet lettering, Sign Experts IL provides durable, high-performance vinyl solutions designed to withstand the road and maximize your brand's local reach.",
    accordions: [
      {
        "id": "acc-0",
        "title": "Fleet Graphics",
        "subheading": "Unified Branding for Commercial Fleets",
        "description": "Ensure brand consistency across your entire fleet with scalable graphics solutions designed for longevity and professional impact.",
        "products": [
          { "title": "Corporate Logo Decals", "description": "High-durability vinyl logos precision-cut for consistent placement on every company vehicle.", "imageUrl": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
          { "title": "Fleet Identification Numbering", "description": "Standardized DOT and unit numbering using premium-grade cast vinyl for easy tracking.", "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0" },
          { "title": "Cohesive Partial Wraps", "description": "Cost-effective branding that utilizes the vehicle's base color while adding high-impact graphics.", "imageUrl": "https://images.unsplash.com/photo-1572044162444-ad60f128bde2" }
        ]
      },
      {
        "id": "acc-1",
        "title": "Car Wraps",
        "subheading": "Full & Partial Automotive Color Changes",
        "description": "Protect your paint and promote your brand with premium automotive wraps. Our installers ensure a seamless, paint-like finish.",
        "products": [
          { "title": "Full Commercial Wraps", "description": "Total vehicle coverage with vibrant, high-resolution graphics and a UV-protective laminate.", "imageUrl": "https://images.unsplash.com/photo-1497366216548-37526070297c" },
          { "title": "Matte & Satin Finishes", "description": "Specialty textured wraps that provide a sophisticated, modern look for executive vehicles.", "imageUrl": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853" },
          { "title": "Promotional Spot Graphics", "description": "Focused branding on hoods, doors, or trunks for targeted marketing campaigns.", "imageUrl": "https://images.unsplash.com/photo-1540575467063-178a50c2df87" }
        ]
      },
      {
        "id": "acc-2",
        "title": "One Way Vision",
        "subheading": "Perforated Window Graphics",
        "description": "Utilize your vehicle’s glass for advertising without sacrificing driver visibility. Perfect for rear windows and side glass.",
        "products": [
          { "title": "Rear Window Murals", "description": "Full-color perforated vinyl that lets you see out while displaying your brand to those behind you.", "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
          { "title": "Side Window Graphics", "description": "Integrated designs that extend from the vehicle body onto the glass for a massive visual canvas.", "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },
          { "title": "UV-Rated Perforated Vinyl", "description": "Specialized window film that reduces heat and glare inside the vehicle while promoting your business.", "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d" }
        ]
      },
      {
        "id": "acc-3",
        "title": "Vehicle Lettering",
        "subheading": "Clean & Professional Vinyl Decals",
        "description": "The most cost-effective way to brand your vehicle. Clean, sharp lettering that communicates your name, services, and contact info.",
        "products": [
          { "title": "Cut-Vinyl Contact Info", "description": "Precision-cut phone numbers and web addresses in various fonts and high-visibility colors.", "imageUrl": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" },
          { "title": "Layered Multi-Color Text", "description": "Add depth to your lettering with drop shadows and outlines for better readability at a distance.", "imageUrl": "https://images.unsplash.com/photo-1568244035171-8041c2c3666b" },
          { "title": "Service Listing Decals", "description": "Bullet-point lists of your core services expertly applied to doors or side panels.", "imageUrl": "https://images.unsplash.com/photo-1503387762-592dea58ef21" }
        ]
      },
      {
        "id": "acc-4",
        "title": "Van Wraps",
        "subheading": "Service Van & Cargo Van Graphics",
        "description": "Maximize the large flat surfaces of your cargo van with high-impact graphics designed for service industries.",
        "products": [
          { "title": "Contractor Branding", "description": "Heavy-duty wraps for HVAC, plumbing, and electrical vans that stand out in neighborhoods.", "imageUrl": "https://images.unsplash.com/photo-1520690214124-2405c5217036" },
          { "title": "Delivery Van Wraps", "description": "Clean, identifiable designs for courier and food delivery vehicles to ensure brand trust.", "imageUrl": "https://images.unsplash.com/photo-1581092160562-40aa08e78837" },
          { "title": "Panel Van Graphics", "description": "Seamless application over rivets and curves for a professional, factory-installed appearance.", "imageUrl": "https://images.unsplash.com/photo-1519608487953-e999c86e7455" }
        ]
      },
      {
        "id": "acc-5",
        "title": "Truck Graphics",
        "subheading": "Pickup & Box Truck Branding",
        "description": "From tailgate decals to full box truck panels, we provide durable graphics that withstand heavy-duty use.",
        "products": [
          { "title": "Tailgate Wraps", "description": "Custom graphics for the back of your pickup truck, the highest visibility area for drivers behind you.", "imageUrl": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678" },
          { "title": "Box Truck Side Panels", "description": "Large-scale flat panel graphics that turn your truck into a moving billboard.", "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0" },
          { "title": "Cab & Door Branding", "description": "Professional door logos and USDOT lettering for heavy-duty commercial trucks.", "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d" }
        ]
      },
      {
        "id": "acc-6",
        "title": "Trailer Signs",
        "subheading": "Enclosed & Utility Trailer Wraps",
        "description": "Don't leave your trailer blank. Utilize that massive surface area to promote your business while on the job or parked.",
        "products": [
          { "title": "Enclosed Trailer Wraps", "description": "Full-coverage vinyl for landscaping, construction, and mobile workshop trailers.", "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
          { "title": "Utility Trailer Sign Panels", "description": "Rigid aluminum sign panels mounted to the rails of open trailers for durable branding.", "imageUrl": "https://images.unsplash.com/photo-1519608487953-e999c86e7455" },
          { "title": "Reflective Safety Strips", "description": "Integrated branding with high-visibility reflective elements for increased night safety.", "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f" }
        ]
      },
      {
        "id": "acc-7",
        "title": "Boat Graphics",
        "subheading": "Marine-Grade Vinyl Lettering & Wraps",
        "description": "Saltwater and UV-resistant graphics for personal watercraft and commercial vessels. Stay branded on the water.",
        "products": [
          { "title": "Boat Name & Registration", "description": "Custom-designed boat names and registration numbers using marine-grade premium vinyl.", "imageUrl": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853" },
          { "title": "Full Hull Wraps", "description": "Transform your boat’s appearance with a complete color change or custom graphic hull wrap.", "imageUrl": "https://images.unsplash.com/photo-1572044162444-ad60f128bde2" },
          { "title": "Marine Brand Logos", "description": "Durable sponsor and brand logos for fishing teams and commercial marine services.", "imageUrl": "https://images.unsplash.com/photo-1540575467063-178a50c2df87" }
        ]
      },
      {
        "id": "acc-8",
        "title": "Magnetic Vehicle Signs",
        "subheading": "Removable Branding for Shared Vehicles",
        "description": "The perfect solution for vehicles used for both business and personal use. High-strength magnets that stay secure at highway speeds.",
        "products": [
          { "title": "Heavy-Duty Door Magnets", "description": "Standard 12x24 inch magnetic signs with high-gloss graphics and rounded corners.", "imageUrl": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" },
          { "title": "Custom Shaped Magnets", "description": "Die-cut magnetic signs that follow the shape of your logo for a more integrated look.", "imageUrl": "https://images.unsplash.com/photo-1568244035171-8041c2c3666b" },
          { "title": "Reflective Magnetic Signs", "description": "Magnetics featuring reflective vinyl for nighttime delivery visibility and safety.", "imageUrl": "https://images.unsplash.com/photo-1581092160562-40aa08e78837" }
        ]
      },
      {
        "id": "acc-9",
        "title": "Reflective Vehicle Signs",
        "subheading": "High-Visibility Safety & Utility Graphics",
        "description": "Essential for emergency vehicles, utility trucks, and nighttime delivery fleets. Be seen in low-light conditions.",
        "products": [
          { "title": "Chevron Safety Strips", "description": "High-intensity reflective rear chevrons for service trucks and emergency response units.", "imageUrl": "https://images.unsplash.com/photo-1503387762-592dea58ef21" },
          { "title": "Reflective Fleet Decals", "description": "Your logo rendered in reflective vinyl that glows when hit by headlights at night.", "imageUrl": "https://images.unsplash.com/photo-1497366216548-37526070297c" },
          { "title": "Emergency Vehicle Graphics", "description": "Full-spec reflective marking kits for police, fire, and ambulance service vehicles.", "imageUrl": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678" }
        ]
      }
    ]
  },
  "promotional-signs": {
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
    title: "High-Impact Promotional Signage by Sign Experts IL\n Drive Traffic and Boost Sales",
    description: "Capture attention and convert passersby into customers with our custom promotional signs. From vibrant storefront window decals to professional trade show displays, Sign Experts IL specializes in high-quality, SEO-optimized visual marketing solutions for Illinois businesses.",
    accordions: [
      {
        "id": "acc-0",
        "title": "Banners and Flags",
        "subheading": "Versatile Outdoor & Indoor Advertising",
        "description": "Dynamic, weather-resistant banners and flags designed to catch the eye in any setting. Perfect for grand openings, seasonal sales, and outdoor events.",
        "products": [
          { "title": "Vinyl Event Banners", "description": "Durable, high-definition vinyl banners with grommets for easy hanging and long-lasting promotion.", "imageUrl": "https://images.unsplash.com/photo-1520690214124-2405c5217036" },
          { "title": "Feather & Teardrop Flags", "description": "High-visibility wind-resistant flags that provide motion and height to your roadside marketing.", "imageUrl": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853" },
          { "title": "Retractable Banner Stands", "description": "Professional, portable pull-up banners perfect for retail lobbies and point-of-purchase displays.", "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0" }
        ]
      },
      {
        "id": "acc-1",
        "title": "Exhibition Signage",
        "subheading": "Trade Show & Conference Displays",
        "description": "Stand out in a crowded hall with premium exhibition assets. We provide modular systems and custom graphics that elevate your professional presence.",
        "products": [
          { "title": "Backlit Fabric Displays", "description": "Tension fabric walls with integrated LED lighting to make your booth the centerpiece of any floor.", "imageUrl": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678" },
          { "title": "Table Throws & Runners", "description": "Custom-printed, wrinkle-resistant table covers that reinforce your brand identity at every event.", "imageUrl": "https://images.unsplash.com/photo-1540575467063-178a50c2df87" },
          { "title": "Modular Booth Graphics", "description": "Easy-to-install graphic panels designed to fit standard trade show booth configurations.", "imageUrl": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" }
        ]
      },
      {
        "id": "acc-2",
        "title": "Digital Printing",
        "subheading": "Wide-Format High-Resolution Graphics",
        "description": "State-of-the-art digital printing for crisp, vibrant imagery on a variety of substrates including vinyl, paper, and rigid boards.",
        "products": [
          { "title": "Custom Wall Murals", "description": "Transform interior walls into immersive brand experiences with high-resolution adhesive vinyl.", "imageUrl": "https://images.unsplash.com/photo-1497366216548-37526070297c" },
          { "title": "Floor Graphics", "description": "Slip-resistant, durable floor decals for social distancing, wayfinding, or unique branding.", "imageUrl": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" },
          { "title": "Window Clings", "description": "Static-cling graphics that are easy to apply and remove, ideal for short-term retail promotions.", "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f" }
        ]
      },
      {
        "id": "acc-3",
        "title": "Posters",
        "subheading": "Retail & Informational Point-of-Sale",
        "description": "High-quality poster printing that delivers your message with clarity. Available in various finishes from matte to high-gloss.",
        "products": [
          { "title": "Backlit Film Posters", "description": "Semi-translucent posters designed for lightboxes to create vibrant, glowing indoor displays.", "imageUrl": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853" },
          { "title": "Mounting Board Posters", "description": "Sturdy posters mounted on foam core or PVC for professional easel or wall presentations.", "imageUrl": "https://images.unsplash.com/photo-1568244035171-8041c2c3666b" },
          { "title": "Laminated Safety Posters", "description": "Durable, easy-to-clean posters for workplace compliance and instructional signage.", "imageUrl": "https://images.unsplash.com/photo-1503387762-592dea58ef21" }
        ]
      },
      {
        "id": "acc-4",
        "title": "Window Lettering",
        "subheading": "Storefront Business Hour & Branding",
        "description": "Clean and professional cut-vinyl lettering for your storefront. Essential for displaying business hours, logos, and services.",
        "products": [
          { "title": "Metallic Vinyl Lettering", "description": "Premium gold or silver leaf vinyl text for a sophisticated, high-end boutique look.", "imageUrl": "https://images.unsplash.com/photo-1572044162444-ad60f128bde2" },
          { "title": "Fluorescent Storefront Text", "description": "High-visibility 'neon-look' vinyl lettering to announce sales and special offers.", "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d" },
          { "title": "Etched Glass Vinyl", "description": "Frosted vinyl lettering that provides privacy while maintaining a clean, professional appearance.", "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0" }
        ]
      },
      {
        "id": "acc-5",
        "title": "Window Decals",
        "subheading": "Full-Color Storefront Visuals",
        "description": "Maximize your glass real estate with full-color window decals. From small logos to full window wraps, we help you claim your space.",
        "products": [
          { "title": "Die-Cut Logo Decals", "description": "Custom-shaped decals that follow the contour of your brand logo for a seamless look.", "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
          { "title": "Perforated Window Wraps", "description": "See-through window graphics that display full-color ads while maintaining natural light inside.", "imageUrl": "https://images.unsplash.com/photo-1519608487953-e999c86e7455" },
          { "title": "Double-Sided Window Decals", "description": "Innovative decals that show branding to both outside traffic and inside customers simultaneously.", "imageUrl": "https://images.unsplash.com/photo-1581092160562-40aa08e78837" }
        ]
      }
    ]
  },

  "digital-led-solutions": {
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
    title: "High-Impact Promotional Signage by Sign Experts IL\n Drive Traffic and Boost Sales",
    description: "Capture attention and convert passersby into customers with our custom promotional signs. From vibrant storefront window decals to professional trade show displays, Sign Experts IL specializes in high-quality, SEO-optimized visual marketing solutions for Illinois businesses.",
    accordions: [
      {
        "id": "acc-0",
        "title": "LED Screens",
        "subheading": "Large Format Digital Video Walls",
        "description": "High-impact LED video walls designed for seamless visual performance. Perfect for stadiums, corporate lobbies, and large-scale outdoor advertising in Illinois.",
        "products": [
          {
            "title": "Outdoor Video Boards",
            "description": "Weatherproof, high-brightness LED panels designed to remain visible even in direct sunlight for 24/7 advertising.",
            "imageUrl": "https://images.unsplash.com/photo-1519608487953-e999c86e7455"
          },
          {
            "title": "Indoor Fine-Pitch Displays",
            "description": "Ultra-high-resolution LED walls with a small pixel pitch for crisp, detailed viewing at close distances.",
            "imageUrl": "https://images.unsplash.com/photo-1497366216548-37526070297c"
          },
          {
            "title": "Transparent LED Screens",
            "description": "Innovative glass-mounted LED displays that show vibrant content while maintaining window transparency.",
            "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d"
          }
        ]
      },
      {
        "id": "acc-1",
        "title": "Menu Screens",
        "subheading": "Digital Menu Boards & Indoor Displays",
        "description": "Revolutionize your restaurant or retail space with easy-to-manage digital menus. Update prices, items, and promotions instantly across all screens.",
        "products": [
          {
            "title": "QSR Digital Menu Boards",
            "description": "Bright, commercial-grade screens designed for continuous operation in quick-service restaurant environments.",
            "imageUrl": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853"
          },
          {
            "title": "Interactive Order Kiosks",
            "description": "Touch-enabled digital screens that allow customers to browse menus and place orders independently.",
            "imageUrl": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          },
          {
            "title": "Promotional Lobby Screens",
            "description": "Vertical digital posters used to showcase daily specials, brand stories, or high-definition product videos.",
            "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
          }
        ]
      },
      {
        "id": "acc-2",
        "title": "LED Lights",
        "subheading": "Architectural & Decorative LED Accents",
        "description": "Enhance your physical space with custom LED lighting solutions. We provide more than just signs; we provide atmospheric lighting that defines your brand.",
        "products": [
          {
            "title": "RGB Wall Washers",
            "description": "Programmable LED lighting systems that bathe your building exterior in customizable brand colors.",
            "imageUrl": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
          },
          {
            "title": "LED Border Neon Flex",
            "description": "Flexible LED tubing used to outline rooflines or architectural features with a vibrant, neon-like glow.",
            "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d"
          },
          {
            "title": "Under-Cabinet & Cove Lighting",
            "description": "Subtle LED strips for interior retail displays that highlight premium products with professional-grade lumens.",
            "imageUrl": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
          }
        ]
      }
    ]
  },
  "shop-signs": {
    "imageUrl": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    "title": "Premium Shop Signage Solutions by Sign Experts IL\n Elevate Your Storefront Presence",
    "description": "Make a lasting first impression with professional shop signs tailored for Illinois businesses. From elegant restaurant displays to bold 3D lettering, we combine craftsmanship with high-visibility design to help your brand stand out on any street.",
    "accordions": [
      {
        "id": "acc-0",
        "title": "Cafe & Restaurants",
        "subheading": "Inviting & Durable Hospitality Signage",
        "description": "Create an atmosphere that draws diners in. We specialize in weather-resistant, stylish signs that reflect your culinary brand and enhance the guest experience.",
        "products": [
          { "title": "Illuminated Menu Boards", "description": "Bright, easy-to-read indoor and outdoor menu displays that highlight your daily specials and favorites.", "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5" },
          { "title": "Chalkboard-Style Graphics", "description": "The rustic charm of a hand-drawn chalkboard with the durability of high-quality digital printing.", "imageUrl": "https://images.unsplash.com/photo-1514933651103-005eec06c04b" },
          { "title": "Projecting Blade Signs", "description": "Classic double-sided signs that hang perpendicular to your building, perfect for attracting foot traffic from both directions.", "imageUrl": "https://images.unsplash.com/photo-1559339352-11d035aa65de" }
        ]
      },
      {
        "id": "acc-1",
        "title": "3D Signs & Lettering",
        "subheading": "Dimensional Branding for Maximum Impact",
        "description": "Add depth and sophistication to your storefront. Our 3D lettering is available in various materials to provide a high-end, professional look.",
        "products": [
          { "title": "Acrylic Stand-off Letters", "description": "Sleek, laser-cut acrylic letters mounted with spacers to create a modern floating effect.", "imageUrl": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe5" },
          { "title": "Fabricated Stainless Steel", "description": "Premium metal lettering that offers unmatched durability and a polished, prestigious finish.", "imageUrl": "https://images.unsplash.com/photo-1542744173-05336fcc7ad4" },
          { "title": "Channel Letters", "description": "Individually lit letters that provide 24/7 visibility for your brand name or logo.", "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d" }
        ]
      },
      {
        "id": "acc-2",
        "title": "Custom Signs",
        "subheading": "Tailor-Made Solutions for Unique Brands",
        "description": "When 'off-the-shelf' won't do, we design and build bespoke signage that captures your exact brand identity and specific location requirements.",
        "products": [
          { "title": "Neon & LED Neon Flex", "description": "Vibrant, eye-catching light signs that offer a retro aesthetic with modern energy efficiency.", "imageUrl": "https://images.unsplash.com/photo-1567449303183-ae0d0ed1bd98" },
          { "title": "Engraved Wood Signage", "description": "Natural, high-quality wood signs perfect for boutiques, salons, and artisanal shops.", "imageUrl": "https://images.unsplash.com/photo-1516962080544-eac695c93791" },
          { "title": "Wayfinding Pylon Signs", "description": "Custom-built freestanding structures designed to guide customers to your entrance from a distance.", "imageUrl": "https://images.unsplash.com/photo-1542744095-291d1f67b221" }
        ]
      },
      {
        "id": "acc-3",
        "title": "Store Front Signs",
        "subheading": "The Face of Your Business",
        "description": "Transform your exterior into a powerful marketing tool. Our storefront solutions are designed for longevity and high-contrast visibility.",
        "products": [
          { "title": "Lightboxes", "description": "Internally illuminated sign boxes that keep your brand glowing and visible throughout the night.", "imageUrl": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" },
          { "title": "Aluminum Composite Panels", "description": "Clean, flat panels that provide a smooth background for vinyl graphics or 3D lettering.", "imageUrl": "https://images.unsplash.com/photo-1497366754035-f200968a6e72" },
          { "title": "Backlit Halo Signs", "description": "Elegant signage where light emits from behind the letters, creating a soft, sophisticated glow against the wall.", "imageUrl": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48" }
        ]
      },
      {
        "id": "acc-4",
        "title": "Awning & Fascia Signs",
        "subheading": "Functional Style & Overhead Branding",
        "description": "Combine weather protection with bold branding. Our fascia signs and awnings maximize your available signage area for better visibility.",
        "products": [
          { "title": "Illuminated Fascia Panels", "description": "Full-width signage panels that sit above your shop entrance, providing a seamless look for the entire storefront.", "imageUrl": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
          { "title": "Custom Printed Awnings", "description": "Durable fabric awnings featuring your logo and colors, providing shade while acting as a 24/7 billboard.", "imageUrl": "https://images.unsplash.com/photo-1519608487953-e999c86e7455" },
          { "title": "Fixed Canopy Signs", "description": "Rigid overhead structures that offer a permanent, architectural branding solution for high-end retail locations.", "imageUrl": "https://images.unsplash.com/photo-1441986300917-64674bd600d8" }
        ]
      }
    ]
  },
  "office-signs": {
    "imageUrl": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    "title": "Professional Office Signage by Sign Experts IL\n Elevate Your Corporate Environment",
    "description": "Transform your workspace into a professional, cohesive brand experience. From sophisticated reception displays to functional wayfinding, Sign Experts IL provides Illinois businesses with high-quality, custom office signage solutions designed for modern interiors.",
    "accordions": [
      {
        "id": "acc-0",
        "title": "Indoor Signs",
        "subheading": "Comprehensive Interior Branding",
        "description": "Establish a consistent professional identity throughout your facility with high-quality indoor signage. We use premium materials to ensure your brand message is clear and sophisticated.",
        "products": [
          { "title": "Corporate Logo Plaques", "description": "Elegant brushed metal or acrylic plaques featuring your company logo for corridors and common areas.", "imageUrl": "https://images.unsplash.com/photo-1560179707-f14e90ef3623" },
          { "title": "Wayfinding Suspended Signs", "description": "Ceiling-mounted signs that provide clear navigation for employees and visitors in large office layouts.", "imageUrl": "https://images.unsplash.com/photo-1542744173-05336fcc7ad4" },
          { "title": "Directory Boards", "description": "Professional slat-system directories for lobbies that are easily updatable as your team grows.", "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf" }
        ]
      },
      {
        "id": "acc-1",
        "title": "Retractable Banner Stands",
        "subheading": "Portable & Professional Presentations",
        "description": "Perfect for office lobbies, recruitment fairs, or internal events. Our pull-up banners offer high-impact visuals with effortless setup.",
        "products": [
          { "title": "Premium Executive Roll-ups", "description": "High-tension, anti-curl banners with a sleek chrome base for a high-end corporate feel.", "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0" },
          { "title": "Double-Sided Banner Stands", "description": "Maximize visibility in high-traffic hallways with graphics displayed on both sides.", "imageUrl": "https://images.unsplash.com/photo-1582213726892-35ca1507f300" },
          { "title": "Tabletop Mini Banners", "description": "Compact retractable banners designed for reception desks and conference room tables.", "imageUrl": "https://images.unsplash.com/photo-1551836022-d5d88e9218df" }
        ]
      },
      {
        "id": "acc-2",
        "title": "Room / Door Signs",
        "subheading": "Functional Identification Systems",
        "description": "Keep your office organized with clear identification for meeting rooms, offices, and utility areas. Available in various finishes to match your decor.",
        "products": [
          { "title": "ADA Compliant Braille Signs", "description": "Tactile room signs that ensure your office meets accessibility standards while maintaining a clean aesthetic.", "imageUrl": "https://images.unsplash.com/photo-1516533075015-a3838414c3cb" },
          { "title": "Sliding Availability Signs", "description": "Functional door signs with 'In Use / Vacant' sliders perfect for private offices and boardrooms.", "imageUrl": "https://images.unsplash.com/photo-1497366811353-6870744d04b2" },
          { "title": "Interchangeable Name Plates", "description": "Modern acrylic or metal door plates with easy-to-swap inserts for evolving personnel needs.", "imageUrl": "https://images.unsplash.com/photo-1568992687345-269c83527a8e" }
        ]
      },
      {
        "id": "acc-3",
        "title": "Window Frosting",
        "subheading": "Privacy Meets Modern Design",
        "description": "Enhance office privacy without sacrificing natural light. Our etched-glass vinyl solutions offer a high-end look for glass partitions.",
        "products": [
          { "title": "Branded Privacy Bands", "description": "Horizontal frosted strips featuring die-cut logos or patterns for a balance of privacy and transparency.", "imageUrl": "https://images.unsplash.com/photo-1497366216548-37526070297c" },
          { "title": "Full-Coverage Frosted Film", "description": "Total glass coverage for conference rooms or sensitive areas, providing a modern sandblasted appearance.", "imageUrl": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" },
          { "title": "Decorative Patterned Frosting", "description": "Geometric or custom-designed frosted patterns that turn glass walls into works of art.", "imageUrl": "https://images.unsplash.com/photo-1531973576160-7125cd663d86" }
        ]
      },
      {
        "id": "acc-4",
        "title": "Reception Signs",
        "subheading": "Your Brand's First Impression",
        "description": "Make a statement the moment clients walk through the door. Our lobby signs are crafted using premium acrylic, metal, and lighting.",
        "products": [
          { "title": "3D Acrylic Lobby Logos", "description": "High-gloss, laser-cut acrylic logos that provide a dimensional and vibrant brand presence.", "imageUrl": "https://images.unsplash.com/photo-1497215842964-222b430dc094" },
          { "title": "Brushed Aluminum Signs", "description": "Professional metal signage that conveys stability, trust, and corporate longevity.", "imageUrl": "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed" },
          { "title": "Glass Stand-off Displays", "description": "Tempered glass panels with vinyl or metal accents, mounted with stainless steel stand-offs.", "imageUrl": "https://images.unsplash.com/photo-1524758631624-e2822e304c36" }
        ]
      },
      {
        "id": "acc-5",
        "title": "LED Backlit Signs",
        "subheading": "Illuminated Sophistication",
        "description": "Add a modern glow to your brand. Backlit signs create a premium halo effect that stands out in any interior lighting condition.",
        "products": [
          { "title": "Halo-Lit Metal Logos", "description": "Stainless steel letters with integrated LED modules that cast a soft, prestigious glow against the wall.", "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d" },
          { "title": "Edge-Lit Acrylic Panels", "description": "Thin, sophisticated panels where the light catches the engraved edges for a futuristic look.", "imageUrl": "https://images.unsplash.com/photo-1567449303183-ae0d0ed1bd98" },
          { "title": "Backlit Fabric Lightboxes", "description": "Ultra-vibrant, high-resolution graphics on tension fabric with uniform LED backlighting.", "imageUrl": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678" }
        ]
      },
      {
        "id": "acc-6",
        "title": "Directional",
        "subheading": "Smart Wayfinding Solutions",
        "description": "Minimize visitor confusion with strategically placed directional signs. We design layouts that guide traffic flow naturally through your office.",
        "products": [
          { "title": "Wall-Mounted Wayfinding", "description": "Clean, modular signs placed at key decision points to direct visitors to departments and exits.", "imageUrl": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" },
          { "title": "Freestanding Pedestal Signs", "description": "Portable and sturdy signs for guiding traffic during specific corporate events or renovations.", "imageUrl": "https://images.unsplash.com/photo-1581092160562-40aa08e78837" },
          { "title": "Elevator & Lobby Directories", "description": "Comprehensive floor-by-floor guides designed for readability and high-end aesthetic appeal.", "imageUrl": "https://images.unsplash.com/photo-1563986768609-322da13575f3" }
        ]
      },
      {
        "id": "acc-7",
        "title": "Wall Graphics",
        "subheading": "Inspiring Large-Format Visuals",
        "description": "Utilize your wall space to tell your brand story, display company values, or simply inspire your team with custom-designed murals.",
        "products": [
          { "title": "Full Wall Brand Murals", "description": "High-resolution vinyl wraps that transform entire office walls into immersive brand environments.", "imageUrl": "https://images.unsplash.com/photo-1531482615713-2afd69097998" },
          { "title": "Motivational Vinyl Quotes", "description": "Custom-cut lettering to display mission statements or core values on common area walls.", "imageUrl": "https://images.unsplash.com/photo-1522071823914-721cc31c4714" },
          { "title": "Topographic & Map Graphics", "description": "Creative maps or technical drawings printed on durable vinyl for a unique, intelligent design touch.", "imageUrl": "https://images.unsplash.com/photo-1454165833267-0e090f8490a0" }
        ]
      }
    ]
  }
};