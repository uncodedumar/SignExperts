import type { MetadataRoute } from "next";
import { blogs, productsData } from "@/lib/data";
import { portfolioProjects } from "@/lib/portfolio-projects";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const staticPaths = ["", "/about", "/services", "/blog"];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path, i) => ({
    url: `${base}${path === "" ? "/" : path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: i === 0 ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${base}/blog/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = productsData.map((p) => ({
      url: `${base}/products/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    }));

  const projectEntries: MetadataRoute.Sitemap = portfolioProjects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticEntries, ...blogEntries, ...productEntries, ...projectEntries];
}
