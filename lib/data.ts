// data.ts
export interface SupportContent {
    imageUrl: string;
    heading: string;
    subheading: string;
  }
  
  export const supportData: SupportContent = {
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
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
   "design-and-installation": {
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
        { title: "Choroplast signs", description: "The go-to solution for businesses needing a balance of affordability and resilience.", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },
        { title: "Safety Signs", description: "Critical component of any operational environment, designed to mitigate risk.", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
        { title: "Window Decals", description: "Ultimate tool for converting glass storefronts into premium advertising space.", imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0" },
        { title: "Protection Screens", description: "Essential for maintaining a safe and professional interface between staff and customers.", imageUrl: "https://images.unsplash.com/photo-1503387762-592dea58ef21" },
        { title: "Cough Screens", description: "Hygiene shields, commonly known as sneeze screens, for high-traffic environments.", imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837" },
      ]
    },
    {
      id: "acc-1",
      title: "Custom Brand Identity",
      subheading: "Logo and visual design integration",
      description: "Work with our design team to translate your brand guidelines into stunning physical assets that command attention.",
      products: [
        { title: "Logo Fabrication", description: "3D dimensional logos crafted from acrylic, metal, or wood.", imageUrl: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2" },
        { title: "Brand Wall Graphics", description: "Full-scale vinyl wraps that tell your brand story on any interior wall.", imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c" }
      ]
    },
    {
      id: "acc-2",
      title: "Wayfinding & Directional",
      subheading: "Navigation and flow management",
      description: "Ensure a seamless visitor experience with intuitive mapping, directional arrows, and room identification signs.",
      products: [
        { title: "Directory Boards", description: "Elegant slat systems or digital displays for building lobbies.", imageUrl: "https://images.unsplash.com/photo-1568244035171-8041c2c3666b" },
        { title: "Floor Decals", description: "High-durability non-slip graphics for pathway guidance.", imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" }
      ]
    },
    {
      id: "acc-3",
      title: "Illuminated Signage",
      subheading: "24/7 brand visibility",
      description: "Stay visible day or night with energy-efficient LED solutions, including backlit letters and lightboxes.",
      products: [
        { title: "LED Channel Letters", description: "Premium front-lit or halo-lit lettering for maximum impact.", imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d" },
        { title: "Slim Lightboxes", description: "Ultra-thin profiles for high-end retail displays.", imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853" }
      ]
    },
    {
      id: "acc-4",
      title: "Trade Show & Events",
      subheading: "Portable and modular displays",
      description: "Everything you need for a professional presence on the road, from pop-up banners to modular booth systems.",
      products: [
        { title: "Roll-up Banners", description: "Lightweight, portable, and sets up in seconds.", imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87" },
        { title: "Fabric Backdrops", description: "Seamless, wrinkle-free graphics for event photography.", imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678" }
      ]
    },
    {
      id: "acc-5",
      title: "Exterior Storefronts",
      subheading: "Outdoor durability and impact",
      description: "Weather-resistant materials designed to withstand the elements while maintaining a premium look.",
      products: [
        { title: "Pylon Signs", description: "Freestanding structures for maximum roadside visibility.", imageUrl: "https://images.unsplash.com/photo-1519608487953-e999c86e7455" },
        { title: "Awnings & Canopies", description: "Combining functional shade with custom branding.", imageUrl: "https://images.unsplash.com/photo-1520690214124-2405c5217036" }
      ]
    }
  ]
}
    // ... Repeat structure for other slugs
  };