"use client";

import Link from "next/link";
import woodBG from "@/public/WoodGrain.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroTop() {
  const isVisible = true;
  const sectionRef = useRef<HTMLElement | null>(null);
  const leadRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lead = leadRef.current;
    const title = titleRef.current;
    const section = sectionRef.current;
    if (!lead || !title) return;

    gsap.set([lead, title], { opacity: 0 });
    gsap.set(lead, { xPercent: -120 });
    gsap.set(title, { xPercent: 120 });

    const tl = gsap.timeline({
      defaults: { duration: 1.1, ease: "power3.out" },
      scrollTrigger: {
        trigger: section ?? lead,
        start: "top 80%",
        once: true,
      },
    });
    tl.to(lead, { xPercent: 0, opacity: 1 }, 0).to(
      title,
      { xPercent: 0, opacity: 1 },
      0.05
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative -mx-4 -mt-8 mb-20 overflow-hidden min-h-[60vh] lg:min-h-[70vh]"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${woodBG.src})`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.8) 100%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-8 pt-24 md:pt-32 pb-28 md:pb-40">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cream/30 bg-cream/20 px-5 py-2.5 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-accent opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-accent"></span>
              </span>
              <span className="text-sm font-medium uppercase tracking-wide text-cream">
                New in Ottawa
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-4xl font-normal leading-tight text-cream md:text-6xl lg:text-7xl">
              <span ref={leadRef} className="block">
                Building Dreams with
              </span>
              <span
                ref={titleRef}
                className="mt-2 block text-5xl italic text-gold-accent md:text-7xl lg:text-8xl"
              >
                Heart & Hammer
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-cream/90 md:text-xl">
              Twenty years of experience meets fresh enthusiasm. From
              multi-million dollar estates to your cozy bathroom reno, we bring
              craftsmanship and creative solutions to every nail we drive.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-lg bg-warm-tan/30 px-4 py-2 text-sm font-medium text-cream backdrop-blur-sm">
                ✓ Family-Owned
              </span>
              <span className="rounded-lg bg-warm-tan/30 px-4 py-2 text-sm font-medium text-cream backdrop-blur-sm">
                ✓ 20 Years Experience
              </span>
              <span className="rounded-lg bg-warm-tan/30 px-4 py-2 text-sm font-medium text-cream backdrop-blur-sm">
                ✓ Free Quotes
              </span>
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-linear-to-r from-gold-accent to-gold-accent/90 px-8 py-4 font-medium text-deep-green top-sheen elev-2 shimmer-sweep transition-all hover:scale-105 hover:elev-3"
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  Get Your Free Quote
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-cream to-gold-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>

              <Link
                href="#services"
                className="group inline-flex items-center gap-2 border-b-2 border-cream/30 px-2 py-1 text-cream transition-all hover:border-cream/60"
              >
                <span>Explore Our Work</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </Link>
            </div>

            <p className="mt-8 text-sm font-medium italic text-gold-accent/80">
              &ldquo;Eager to earn your trust, one project at a time&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-1 left-0 right-0 z-0 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0 40C240 80 480 20 720 40C960 60 1200 30 1440 40V120H0V40Z"
            fill="#042f1c"
          />
          <path
            d="M0 60C240 90 480 40 720 60C960 80 1200 50 1440 60V120H0V60Z"
            fill="#021f13"
            opacity="0.5"
          />
          <path
            d="M0 80C240 100 480 60 720 80C960 100 1200 70 1440 80V120H0V80Z"
            fill="#010904"
          />
        </svg>
      </div>
    </section>
  );
}
