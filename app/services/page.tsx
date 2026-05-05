import type { Metadata } from "next";

import SerHero from "../components/SerHero";
import CTA from "../components/CTA"
import ServicesAccordion from "../components/ServicesAccordion"
import Cards from "../components/CardsNavigation";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

const servicesDescription =
  "Custom sign fabrication, installation, design, and maintenance for Illinois businesses—outdoor signs, LED, vehicle wraps, indoor graphics, and more.";

export const metadata: Metadata = {
  title: "Services",
  description: servicesDescription,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Signage Services | ${SITE_NAME}`,
    description: servicesDescription,
    url: `${getSiteUrl()}/services`,
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
    title: `Signage Services | ${SITE_NAME}`,
    description: servicesDescription,
    images: ["/Logo.webp"],
  },
};

export default function Portfolio() {
  return (
    <>
      <SerHero/>
      <CTA/>
      
      <ServicesAccordion/>
      <Cards/>

    </>
  );
}
