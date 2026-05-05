import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";

const Quotation = dynamic(() => import("./components/Quotation"));
const Pills = dynamic(() => import("./components/Pills"));
const Cards = dynamic(() => import("./components/CardsNavigation"));
const ServicesCards = dynamic(() => import("./components/ServicesCards"));
const CTA = dynamic(() => import("./components/CTA"));
const Imagee = dynamic(() => import("./components/Image"));
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
      <Imagee />
      <Form />
      <Faqs />
      <Mapss />
    </>
  );
}
