import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/lib/portfolio-projects";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return {};

  const base = getSiteUrl();
  const title = project.title;
  const description = project.summary;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${base}/projects/${slug}`,
      siteName: SITE_NAME,
      images: [{ url: project.image, alt: project.title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#101b55]">
      <article className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ffb92d]">
          {project.category}
        </p>
        <h1 className="mb-6 text-4xl font-black uppercase italic tracking-tighter md:text-5xl">
          {project.title}
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-gray-600 leading-relaxed">
          {project.summary}
        </p>

        <div className="relative mb-12 aspect-[16/10] overflow-hidden rounded-2xl border-2 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border-2 border-black bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#101b55] hover:text-white transition-colors"
          >
            More work
          </Link>
          <Link
            href="/#contact-form"
            className="inline-flex items-center justify-center rounded-full bg-[#ffb92d] px-8 py-3 text-sm font-bold uppercase tracking-wide text-black hover:bg-[#ffcd45] transition-colors"
          >
            Get a quote
          </Link>
        </div>
      </article>
    </main>
  );
}
