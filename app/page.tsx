import dynamic from "next/dynamic";
  import HeroSection from "./components/HeroSection";
import Quotation from "./components/Quotation";
import Cards from "./components/CardsNavigation";
import Pills from "./components/Pills" 
import CTA from "./components/CTA"
import Imagee from "./components/Image"
import Form from "./components/Form"
export default function Home() {
  return (
    <>

    <HeroSection/>
   <Quotation/>
   <Cards/>
<Pills/>
<CTA/>
<Imagee/>
<Form/>

    </>
  );
}
