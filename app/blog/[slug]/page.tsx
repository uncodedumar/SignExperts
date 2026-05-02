import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogs } from '../../../lib/data';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  // Find the blog matching the URL slug
  const blog = blogs.find((b) => b.slug === slug);

  // Trigger 404 if the blog doesn't exist
  if (!blog) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pb-20 ">
      {/* --- Progress Bar (Optional UI touch) --- */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div className="h-full bg-blue-600 w-1/3"></div>
      </div>

      {/* --- Header / Hero Section --- */}
      <header className="pt-30 pb-12 container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-black text-white">
            Journal Entry
          </span>
          <span className="text-sm text-gray-500 font-mono">{blog.date}</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
          {blog.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium italic border-l-4 border-black pl-6">
          {blog.subheading}
        </p>

        <div className="mt-10 flex items-center gap-4 py-6 border-y border-gray-100">
          <div className="w-12 h-12 bg-gray-200 rounded-full border border-black overflow-hidden">
             {/* Placeholder for author avatar */}
             <div className="w-full h-full flex items-center justify-center font-bold">
               {blog.author.charAt(0)}
             </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-tight">{blog.author}</p>
            <p className="text-xs text-gray-500">Industry Contributor</p>
          </div>
        </div>
      </header>

      {/* --- Featured Image --- */}
      <section className="container mx-auto px-6 max-w-6xl mb-16">
        <div className="border-2 border-black p-2 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            width={1400}
            height={800}
            className="w-full h-auto object-cover max-h-[600px]"
          />
        </div>
      </section>

      {/* --- Content Renderer --- */}
      <section className="container mx-auto px-6 max-w-3xl">
        <div className="flex flex-col gap-8">
          {blog.content.map((block, index) => {
            switch (block.type) {
              case 'paragraph':
                return (
                  <p key={index} className="text-lg md:text-xl leading-relaxed text-gray-800">
                    {block.value}
                  </p>
                );

              case 'heading':
                return (
                  <h2 key={index} className="text-3xl md:text-4xl font-black mt-12 mb-4 uppercase tracking-tighter">
                    {block.value}
                  </h2>
                );

              case 'subheading':
                return (
                  <h3 key={index} className="text-2xl font-bold mt-8 text-blue-700">
                    {block.value}
                  </h3>
                );

              case 'image':
                return (
                  <figure key={index} className="my-10">
                    <div className="border border-gray-300 p-1 bg-gray-50">
                      <Image
                        src={block.value}
                        alt={block.alt || 'Blog illustration'}
                        width={1200}
                        height={700}
                        className="w-full h-auto"
                      />
                    </div>
                    {block.alt && (
                      <figcaption className="text-center text-sm text-gray-500 mt-4 font-mono italic">
                        {block.alt}
                      </figcaption>
                    )}
                  </figure>
                );

              default:
                return null;
            }
          })}
        </div>
      </section>

      {/* --- Simple Footer Call to Action --- */}
      <footer className="container mx-auto px-6 max-w-3xl mt-20 pt-10 border-t-2 border-black">
        <div className="bg-black text-white p-8 text-center">
          <h4 className="text-2xl font-bold mb-4">Want more insights?</h4>
          <p className="text-gray-400 mb-6">Stay ahead of the digital curve with our weekly briefings.</p>
          <button className="px-8 py-3 bg-white text-black font-bold uppercase hover:bg-blue-600 hover:text-white transition-colors">
            Subscribe Now
          </button>
        </div>
      </footer>
    </article>
  );
}