import type { Metadata } from "next";

import AboutHero from "../components/AboutSection";
import Count from "../components/Count";
import FinancialFrontiers from "../components/FinancialFrontiers";
import PortfolioSection from "../components/Portfolio";
import Quote from "../components/Quote";
import ValuesSection from "../components/Values";
import CTA from "../components/CTA"
import TestimonialSlider from "../components/Testimonials";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

const aboutDescription =
  "Learn about Sign Experts IL—Chicago-area signage specialists focused on craftsmanship, visibility, and end-to-end project support from design to installation.";

export const metadata: Metadata = {
  title: "About",
  description: aboutDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us | ${SITE_NAME}`,
    description: aboutDescription,
    url: `${getSiteUrl()}/about`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/Logo.webp",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us | ${SITE_NAME}`,
    description: aboutDescription,
    images: ["/Logo.webp"],
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
