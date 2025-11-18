"use client";
import Image from "next/image";
import { useEffect, useState, type KeyboardEvent } from "react";
import type { ImageProps } from "next/image";
import deckFrontBefore from "@/public/DeckFront_Before.jpg";
import deckFrontAfter from "@/public/DeckFront_Final.jpg";
import deckSideBefore from "@/public/DeckSide_Before.jpg";
import deckSideAfter from "@/public/DeckSide_Final.jpg";
import cedarBefore from "@/public/CedarSiding_Before.jpeg";
import cedarAfter from "@/public/CedarSiding_Collage.png";

type BeforeAfterCardProps = {
  title: string;
  beforeSrc: ImageProps["src"];
  afterSrc: ImageProps["src"];
  alt?: string;
};

function BeforeAfterCard({
  title,
  beforeSrc,
  afterSrc,
  alt,
}: BeforeAfterCardProps) {
  const [showAfter, setShowAfter] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-toggle with longer dwell on "After"
  useEffect(() => {
    const AFTER_DWELL_MS = 3600;
    const BEFORE_DWELL_MS = 2400;
    const timeout = setTimeout(
      () => {
        setShowAfter((prev) => !prev);
      },
      showAfter ? AFTER_DWELL_MS : BEFORE_DWELL_MS
    );
    return () => clearTimeout(timeout);
  }, [showAfter]);

  const toggle = () => setShowAfter((prev) => !prev);
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };
  const afterVisible = isHovering || showAfter;
  const beforeX = afterVisible ? "-100%" : "0%";
  const afterX = afterVisible ? "0%" : "100%";

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-sage-green/20 bg-linear-to-br from-cream/5 to-warm-tan/5 elev-1 transition-all hover:elev-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-green/50"
      onClick={toggle}
      role="button"
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-pressed={showAfter}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: `translateX(${beforeX})`,
            transition: "transform 600ms ease-in-out",
          }}
        >
          <Image
            src={beforeSrc}
            alt={alt ?? `${title} before`}
            fill
            priority={false}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            transform: `translateX(${afterX})`,
            transition: "transform 600ms ease-in-out",
          }}
        >
          <Image
            src={afterSrc}
            alt={alt ? `${alt} (after)` : `${title} after`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="pointer-events-none absolute left-3 top-3 rounded-md bg-black/45 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
        {afterVisible ? "After" : "Before"}
      </div>
      {/* <div className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-black/15 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
        Auto slide • Click toggles • Hover shows After
      </div> */}
      {/* <div className="border-sage-green/20 bg-linear-to-br from-cream/5 to-warm-tan/5 elev-1 p-3">
        <h4 className="font-serif text-base text-forest-green">{title}</h4>
      </div> */}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-8 py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-serif text-4xl text-sage-green md:text-5xl">
          What We Do Best
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-transparent via-wood-brown/30 to-transparent" />
      </div>

      <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <BeforeAfterCard
          title="Front Deck"
          beforeSrc={deckFrontBefore}
          afterSrc={deckFrontAfter}
        />
        <BeforeAfterCard
          title="Side Deck"
          beforeSrc={deckSideBefore}
          afterSrc={deckSideAfter}
        />
        <BeforeAfterCard
          title="Cedar Siding"
          beforeSrc={cedarBefore}
          afterSrc={cedarAfter}
        />
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <div className="group relative overflow-hidden rounded-xl border border-sage-green/20 bg-linear-to-br from-cream/5 to-warm-tan/5 p-8 elev-1 top-sheen transition-all hover:elev-2">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-forest-green/5 transition-transform group-hover:scale-150" />
          <h3 className="relative mb-3 font-serif text-2xl text-sage-green">
            Complete Builds
          </h3>
          <p className="relative mb-4 leading-relaxed text-stone-gray">
            Your architectural vision becomes reality. We handle everything from
            foundation to finishing touches, with expertise in both luxury
            estates and cozy family homes.
          </p>
          <div className="relative text-sm font-medium text-wood-brown">
            $500K to $10M+ projects
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl border border-sage-green/20 bg-linear-to-br from-warm-tan/5 to-cream/5 p-8 elev-1 top-sheen transition-all hover:elev-2">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-forest-green/5 transition-transform group-hover:scale-150" />
          <h3 className="relative mb-3 font-serif text-2xl text-sage-green">
            Smart Renovations
          </h3>
          <p className="relative mb-4 leading-relaxed text-stone-gray">
            Breathe new life into your space. Kitchen transformations, bathroom
            sanctuaries, or that addition you&rsquo;ve been sketching on napkins
            for years.
          </p>
          <div className="relative text-sm font-medium text-wood-brown">
            No project too small
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-warm-tan/5 p-8 border border-sage-green/20">
        <h3 className="mb-6 text-center text-lg font-medium text-sage-green">
          Everything In Between
        </h3>
        <div className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-gold-accent"></span>
            <span className="text-stone-gray">General Contracting</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-gold-accent"></span>
            <span className="text-stone-gray">Home Framing</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-gold-accent"></span>
            <span className="text-stone-gray">Windows & Doors</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-gold-accent"></span>
            <span className="text-stone-gray">Custom Trim</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-gold-accent"></span>
            <span className="text-stone-gray">Siding</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-gold-accent"></span>
            <span className="text-stone-gray">Decks & Fences</span>
          </div>
        </div>
        <p className="mt-6 text-center text-sm font-medium italic text-wood-brown">
          &ldquo;Creative solutions for unique problems&rdquo;
        </p>
      </div>
    </section>
  );
}
