"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import woodBG from "@/public/WoodGrain.jpg";
import deckPhoto from "@/public/DeckFront_Final.jpg";

const STATS = [
  { value: "20+", label: "Years" },
  { value: "Family", label: "Owned" },
  { value: "Free", label: "Quotes" },
];

export default function HeroTop() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mm = gsap.matchMedia(sectionRef);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });
      tl.from("[data-hero-reveal]", {
        opacity: 0,
        y: 26,
        stagger: 0.1,
      }).from(
        "[data-hero-card]",
        { opacity: 0, y: 34, scale: 0.975, duration: 1.15 },
        0.35
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="top" ref={sectionRef} className="relative overflow-hidden bg-pine">
      {/* Wood grain texture + tonal gradient + brass glow */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.16] mix-blend-luminosity"
        style={{ backgroundImage: `url(${woodBG.src})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(3,20,12,.96) 0%, rgba(4,40,26,.72) 55%, rgba(4,47,30,.5) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-36 -top-40 h-[620px] w-[620px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(185,147,91,.18) 0%, rgba(185,147,91,0) 66%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_.95fr] md:gap-[52px] md:px-14 md:pb-[92px] md:pt-[84px]">
        {/* Left column */}
        <div>
          <div
            data-hero-reveal
            className="mb-7 inline-flex items-center gap-[11px] rounded-full border border-[#e8d9bb]/30 bg-[#e8d9bb]/[0.07] px-4 py-2"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="pulse-dot absolute inset-0 rounded-full bg-brass-light" />
              <span className="relative h-2 w-2 rounded-full bg-brass-light" />
            </span>
            <span className="text-[11.5px] tracking-[0.2em] text-[#e8d9bb]">
              NEW IN OTTAWA
            </span>
          </div>

          <h1
            data-hero-reveal
            className="text-4xl leading-[1.1] tracking-[-0.01em] text-cream-bright md:text-[58px] md:leading-[1.06]"
          >
            The Contractor Who Puts Your Project First.
          </h1>
          <p
            data-hero-reveal
            className="font-accent mt-3.5 text-[26px] text-brass-pale md:text-[38px]"
          >
            Built as if it were our own.
          </p>

          <p
            data-hero-reveal
            className="mt-7 max-w-[510px] text-[17px] leading-[1.72] text-[#dcd2bd]"
          >
            Twenty years on the tools, a brand-new sign on the truck. From full
            custom builds to the bathroom you&rsquo;ve been meaning to fix,
            every project gets the same careful hands.
          </p>

          <div
            data-hero-reveal
            className="mt-9 flex flex-wrap items-center gap-6"
          >
            <Link
              href="/#contact"
              className="btn-brass px-7 py-4 text-[13.5px] uppercase"
            >
              Get Your Free Quote
              <span className="btn-arrow relative z-10">→</span>
            </Link>
            <Link
              href="/#work"
              className="link-underline border-b border-[#e8d9bb]/35 pb-[3px] text-sm text-[#e8d9bb]"
            >
              Explore Our Work
            </Link>
          </div>

          <p
            data-hero-reveal
            className="font-accent mt-8 text-[19px] text-brass-pale/85"
          >
            &ldquo;Eager to earn your trust, one project at a time&rdquo;
          </p>
        </div>

        {/* Right column — photo card + stat strip */}
        <div
          data-hero-card
          className="overflow-hidden rounded-[14px] border border-brass/35 bg-[#03140c]/50 shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={deckPhoto}
              alt="Backyard cedar deck built by Whispering Pines in Ottawa"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              placeholder="blur"
              className="ken-burns object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(4,16,10,0) 55%, rgba(4,16,10,.72) 100%)",
              }}
            />
            <div className="font-display absolute bottom-4 left-[18px] text-[15px] text-cream">
              Backyard Cedar Deck · Ottawa
            </div>
          </div>
          <div className="grid grid-cols-3 bg-pine">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-2 py-[18px] text-center ${
                  i < STATS.length - 1 ? "border-r border-brass/20" : ""
                }`}
              >
                <div className="font-display text-2xl text-cream">
                  {stat.value}
                </div>
                <div className="mt-[5px] text-[9.5px] uppercase tracking-[0.16em] text-brass-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
