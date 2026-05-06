import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import BlogHero from '@/app/components/BlogHero';
import { blogs, type BlogEntry } from '../../lib/data';
import { getSiteUrl, SITE_NAME } from '@/lib/site';

const blogIndexDescription =
  'Articles on signage trends, safety signage, fleet graphics, and visual branding from Sign Experts IL.';

export const metadata: Metadata = {
  title: 'Blog',
  description: blogIndexDescription,
  alternates: { canonical: '/blog' },
  openGraph: {
    title: `Signage Blog | ${SITE_NAME}`,
    description: blogIndexDescription,
    url: `${getSiteUrl()}/blog`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: '/Logo.webp', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Signage Blog | ${SITE_NAME}`,
    description: blogIndexDescription,
    images: ['/Logo.webp'],
  },
};

const BlogListPage = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <BlogHero />

      {/* --- Blog Grid Section --- */}
      <main className="container mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-tight">Latest Stories</h2>
          <span className="text-sm font-mono text-gray-500">{blogs.length} Articles</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog: BlogEntry) => (
            <Link 
              href={`/blog/${blog.slug}`} 
              key={blog.slug}
              className="group flex flex-col border-2 border-transparent hover:border-black transition-all duration-300 p-2"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-200 border border-black">
                <Image
                  src={blog.featuredImage}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="py-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase px-2 py-1 bg-black text-white">
                    Signage
                  </span>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                    {blog.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-extrabold leading-tight mb-3 group-hover:underline decoration-4">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 line-clamp-3 leading-relaxed mb-6">
                  {blog.subheading}
                </p>

                <div className="mt-auto pt-4 flex items-center gap-2 font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  Read Article 
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      
    </div>
  );
};

export default BlogListPage;