"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { highlightedProducts } from "@/lib/highlightedProducts";

function HighlightCard({
  slug,
  title,
  subtitle,
  description,
  image,
  tag,
  index,
}: (typeof highlightedProducts)[number] & { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur-md shadow-2xl",
        "hover:border-yellow-500/40 hover:bg-neutral-900/80 transition-all duration-500",
      )}
    >
      <Link href={`/products/${slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">
          View {title} {subtitle}
        </span>
      </Link>

      {/* Glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-yellow-500/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} ${subtitle}`}
          fill
          sizes="(max-width: 768px) 85vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

        {tag ? (
          <div className="absolute left-4 top-4 z-[1] inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.55)]" />
            {tag}
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="relative z-[2] p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-black tracking-tight text-white">
              {title}{" "}
              <span className="text-yellow-500 transition-colors duration-500 group-hover:text-yellow-400">
                {subtitle}
              </span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300 line-clamp-3 group-hover:text-neutral-200 transition-colors duration-500">
              {description}
            </p>
          </div>

          <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-all duration-500 group-hover:border-yellow-500/40 group-hover:bg-yellow-500 group-hover:text-black">
            <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-white/70">
          <span className="h-[2px] w-10 rounded-full bg-yellow-500/80 shadow-[0_0_12px_rgba(234,179,8,0.35)] transition-all duration-500 group-hover:w-14" />
          Explore
        </div>
      </div>
    </motion.article>
  );
}

export default function HighlightedServices() {
  return (
    <section className="relative bg-[#101b55] py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
              Featured{" "}
              <span className="text-yellow-500">Products</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              Our top LED products, curated for fast browsing—tap a card to see
              details.
            </p>
          </div>

          <Link
            href="/#pills"
            className={cn(
              "group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3",
              "text-[11px] font-bold uppercase tracking-[0.25em] text-white/80 backdrop-blur",
              "hover:border-yellow-500/40 hover:bg-yellow-500 hover:text-black transition-all duration-500",
            )}
          >
            View all products
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlightedProducts.map((item, index) => (
            <HighlightCard key={item.slug} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

