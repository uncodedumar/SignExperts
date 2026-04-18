import type { Metadata } from "next";

import AboutHero from "../components/AboutSection";
import Count from "../components/Count";
import FinancialFrontiers from "../components/FinancialFrontiers";
import PortfolioSection from "../components/Portfolio";
import Quote from "../components/Quote";
import ValuesSection from "../components/Values";
import CTA from "../components/CTA"
import TestimonialSlider from "../components/Testimonials";



export const metadata: Metadata = {
  title: "About Invantros | The Intersection of Academic Brilliance & Industrial Excellence",
  description:
    " Invantros is the definitive tech ecosystem for Pakistan’s next-gen leaders. By uniting the research power of top-tier universities—including NUST, FAST-NUCES, and LUMS—with seasoned industry experts, we turn sophisticated technology into market-dominant solutions. Our mission is to bridge the gap between academic theory and industrial impact, fostering an elite community where innovation meets ROI and raw talent becomes a global powerhouse.",
    keywords: [
     
  ],
  openGraph: {
    title: "The Story of Invantros | Bridging Academic Brilliance & Industrial Excellence",
    description: "Invantros is Pakistan’s premier tech ecosystem, engineered to bridge the gap between academic brilliance and industrial excellence. In partnership with the country's top-tier universities, we turn sophisticated technology into market-dominant solutions. Our mission is to foster an elite community where researchers from NUST, FAST-NUCES, and LUMS collaborate with industry visionaries to redefine the global digital landscape.",
    url: "https://invantros.com/about",
    images: [
      {
        url: "/logo.svg", // Recommended: A photo of the leadership or team office
        width: 1200,
        height: 630,
        alt: "About Invantros",
      },
    ],
    type: "profile", // "profile" is great for About pages that highlight founders/teams
  },
};

export default function Portfolio() {
  return (
    <>
      <AboutHero/>
      <Count/>
      <FinancialFrontiers/>
      <PortfolioSection/>
      <Quote/>
      <ValuesSection/>
      <CTA/>
      <TestimonialSlider/>
    </>
  );
}
