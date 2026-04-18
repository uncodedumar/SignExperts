// app/products/[slug]/page.tsx
import PrdSection from '@/app/components/PrdHero';
import CTA from '@/app/components/CTA';
import PrdAccordian from '@/app/components/PrdAccordian';
import Cards from "@/app/components/CardsNavigation";


export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main>
      <PrdSection slug={params.slug} />
      <CTA/>
      <PrdAccordian />

      <Cards/>
    </main>
  );
}