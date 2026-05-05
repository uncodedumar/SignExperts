export interface PortfolioProject {
  id: string;
  title: string;
  image: string;
  category: string;
  slug: string;
  summary: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "01",
    title: "Outdoor Signage",
    image: "/allimages/2EC731A9-9DF6-4D99-AFD6-502D6C38244E.webp",
    category: "Illuminated",
    slug: "outdoor-signage",
    summary:
      "High-visibility outdoor signage engineered for durability, brand impact, and long-term performance in Chicago-area weather.",
  },
  {
    id: "02",
    title: "Promotional Signs",
    image: "/allimages/1f674588-30d4-4ac3-89d6-79347c896f1d.webp",
    category: "Promotional",
    slug: "custom-led",
    summary:
      "Promotional displays and campaign-ready signage that drive foot traffic and reinforce your message at events and retail.",
  },
  {
    id: "03",
    title: "Vehicle Wrap",
    image: "/c.webp",
    category: "Fleet",
    slug: "vehicle-wrap",
    summary:
      "Full and partial fleet wraps with premium materials for crisp color, UV resistance, and a professional finish on the road.",
  },
  {
    id: "04",
    title: "Wayfinding",
    image: "/g1.webp",
    category: "Indoor",
    slug: "wayfinding",
    summary:
      "Clear directional and wayfinding systems that help visitors navigate complex spaces while staying on-brand.",
  },
  {
    id: "05",
    title: "Office Graphics",
    image: "/g2.webp",
    category: "Interior",
    slug: "office-graphics",
    summary:
      "Reception walls, environmental graphics, and interior branding tailored to corporate and commercial spaces.",
  },
  {
    id: "06",
    title: "Pylon Signs",
    image: "/o.webp",
    category: "Industrial",
    slug: "pylon-signs",
    summary:
      "Monument and pylon solutions built for visibility from the roadway, with structured fabrication and compliant installation.",
  },
];
