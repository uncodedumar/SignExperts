// app/products/[slug]/page.tsx
import PrdSection from '@/app/components/PrdHero';
import CTA from '@/app/components/CTA';
import PrdAccordian from '@/app/components/PrdAccordian';
import Cards from "@/app/components/CardsNavigation";


export default async function Page({ params }: { params: Promise<{ slugs: string }> }) {
  const { slugs } = await params;

  return (
    <main>
      <PrdSection slug={slugs} />
      <CTA/>
      <PrdAccordian slug={slugs}  />

      <Cards/>
    </main>
  );
}