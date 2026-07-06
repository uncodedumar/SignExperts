import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PrdsSection from "@/app/components/Productshero";
import ProductSpecsSection from "@/app/components/ProductSpecsSection";
import ProcessFeatures from "@/app/components/ProcessFeatures";
import LeadSection from "@/app/components/LeadSection";
import CTA from "@/app/components/CTA";
import { productsData } from "@/lib/data";
import { truncateMetaDescription } from "@/lib/seo";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

type PageProps = { params: Promise<{ slugs: string }> };

export function generateStaticParams() {
  return productsData.map((p) => ({ slugs: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slugs } = await params;
  const product = productsData.find((item) => item.slug === slugs);
  if (!product) return {};

  const base = getSiteUrl();
  const title = `${product.title} ${product.highlightTitle}`.trim();
  const description = truncateMetaDescription(product.descriptionMain);

  return {
    title,
    description,
    alternates: { canonical: `/products/${slugs}` },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${base}/products/${slugs}`,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [product.image],
    },
  };
}

export default async function Page({ params }: PageProps) {
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
      <CTA />
      <LeadSection currentSlug={slugs} />
    </main>
  );
}
