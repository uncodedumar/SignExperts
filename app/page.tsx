import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";

const Quotation = dynamic(() => import("./components/Quotation"));
const Pills = dynamic(() => import("./components/Pills"));
const Cards = dynamic(() => import("./components/CardsNavigation"));
const HighlightedServices = dynamic(
  () => import("./components/HighlightedServices"),
);
const ServicesCards = dynamic(() => import("./components/ServicesCards"));
const CTA = dynamic(() => import("./components/CTA"));

const Form = dynamic(() => import("./components/Form"));
const Faqs = dynamic(() => import("./components/Faqs"));
const Mapss = dynamic(() => import("./components/mapss"));

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <Quotation />
     
      <Pills />
      <Cards />
      <ServicesCards />
      <CTA />
      <HighlightedServices />
      <Form />
      <Faqs />
      <Mapss />
    </>
  );
}
