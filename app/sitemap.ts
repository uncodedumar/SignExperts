import type { MetadataRoute } from "next";
import { blogs, productsData } from "@/lib/data";
import { portfolioProjects } from "@/lib/portfolio-projects";
import { getSiteUrl } from "@/lib/site";

/** Regenerate sitemap daily so new blog/product entries appear after deploy. */
export const revalidate = 86_400;

type SitemapEntry = MetadataRoute.Sitemap[number];

const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: SitemapEntry["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
];

function toAbsoluteUrl(base: string, path: string): string {
  if (path === "/") return `${base}/`;
  return `${base}${path}`;
}

function parseBlogDate(date: string): Date {
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? new Date() : new Date(parsed);
}

function staticEntries(base: string): MetadataRoute.Sitemap {
  return STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: toAbsoluteUrl(base, path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

function blogEntries(base: string): MetadataRoute.Sitemap {
  return blogs
    .filter((b) => b.slug?.trim())
    .map((b) => ({
      url: `${base}/blog/${b.slug}`,
      lastModified: parseBlogDate(b.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
}

function productEntries(base: string): MetadataRoute.Sitemap {
  return productsData
    .filter((p) => p.slug?.trim())
    .map((p) => ({
      url: `${base}/products/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }));
}

function projectEntries(base: string): MetadataRoute.Sitemap {
  return portfolioProjects
    .filter((p) => p.slug?.trim())
    .map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return [
    ...staticEntries(base),
    ...productEntries(base),
    ...blogEntries(base),
    ...projectEntries(base),
  ];
}
