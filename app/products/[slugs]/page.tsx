// app/products/[slug]/page.tsx
import PrdsSection from '@/app/components/Productshero';
import ProductSpecsSection from '@/app/components/ProductSpecsSection';
import ProcessFeatures from '@/app/components/ProcessFeatures';
import LeadSection from '@/app/components/LeadSection';
import CTA from '@/app/components/CTA';
import { notFound } from 'next/navigation';
import { productsData } from '@/lib/data';



export default async function Page({ params }: { params: Promise<{ slugs: string }> }) {
  const { slugs } = await params;
  const product = productsData.find((item) => item.slug === slugs);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <PrdsSection data={product} />
      <ProductSpecsSection services={product.services} />
      <ProcessFeatures products={product.products} />

      <CTA/>
      <LeadSection currentSlug={slugs} />
      
    </main>
  );
}