export type HighlightedProduct = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag?: string;
};

/**
 * Curated homepage highlights.
 * Keep this list small to avoid bundling the full products dataset on the homepage.
 */
export const highlightedProducts: HighlightedProduct[] = [
  {
    slug: "led-screens",
    title: "LED Screens",
    subtitle: "Visual Impact",
    description:
      "High‑impact displays with stunning clarity—built for indoor and outdoor use.",
    image: "/SignsImages/LED Screen.webp",
    tag: "LED Signs",
  },
  {
    slug: "menu-screens",
    title: "Menu Screens",
    subtitle: "Efficiency",
    description:
      "Digital menu boards for fast, beautiful updates that drive sales and simplify operations.",
    image: "/SignsImages/Menu Screen.webp",
    tag: "LED Signs",
  },
  {
    slug: "led-lights",
    title: "LED Lights",
    subtitle: "Ambiance",
    description:
      "Commercial lighting solutions engineered for precision, color, and efficiency.",
    image: "/SignsImages/LED Light.webp",
    tag: "LED Signs",
  },
];

