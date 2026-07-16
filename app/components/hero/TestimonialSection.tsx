"use client";

import { useEffect, useState, useCallback } from "react";
import { fetchTestimonials, type SanityTestimonial } from "@/lib/sanity";

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<SanityTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    fetchTestimonials()
      .then(setTestimonials)
      .catch((err) =>
        console.error("Failed to fetch testimonials from Sanity:", err)
      )
      .finally(() => setLoading(false));
  }, []);

  const count = testimonials.length;

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (animating || count === 0) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => setAnimating(false), 50);
      }, 300);
    },
    [animating, count]
  );

  const next = useCallback(() => {
    if (count === 0) return;
    goTo((current + 1) % count, "right");
  }, [current, count, goTo]);

  const prev = useCallback(() => {
    if (count === 0) return;
    goTo((current - 1 + count) % count, "left");
  }, [current, count, goTo]);

  // Auto-advance, paused while the reader hovers
  useEffect(() => {
    if (count <= 1 || isHovering) return;
    const interval = setInterval(next, 7500);
    return () => clearInterval(interval);
  }, [count, isHovering, next]);

  if (!loading && count === 0) return null;

  const t = testimonials[current];

  return (
    <section
      className="wp-section relative overflow-hidden border-t border-brass/[0.18] bg-pine"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="pointer-events-none absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(185,147,91,.14) 0%, rgba(185,147,91,0) 66%)",
        }}
      />

      <div
        data-reveal
        className="relative mx-auto max-w-[860px] px-5 py-20 text-center md:px-14 md:py-24"
      >
        {loading || !t ? (
          <div className="animate-pulse space-y-4">
            <div className="mx-auto h-10 w-10 rounded bg-pine-card" />
            <div className="mx-auto h-6 w-3/4 rounded bg-pine-card" />
            <div className="mx-auto h-6 w-2/3 rounded bg-pine-card" />
            <div className="mx-auto mt-6 h-4 w-32 rounded bg-pine-card" />
          </div>
        ) : (
          <div className="relative">
            {/* Arrows */}
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="absolute -left-1 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brass/30 text-brass-light transition-all hover:border-brass/60 hover:text-brass-pale sm:flex md:-left-10"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="absolute -right-1 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brass/30 text-brass-light transition-all hover:border-brass/60 hover:text-brass-pale sm:flex md:-right-10"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            <svg
              className="mx-auto mb-6 h-[42px] w-[42px]"
              fill="rgba(201,163,95,.35)"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <div
              className={`transition-all duration-300 ${
                animating
                  ? `opacity-0 ${
                      direction === "right"
                        ? "-translate-x-4"
                        : "translate-x-4"
                    }`
                  : "translate-x-0 opacity-100"
              }`}
            >
              <blockquote className="font-accent min-h-[100px] text-[22px] leading-[1.5] text-cream md:min-h-[135px] md:text-[30px]">
                {t.quote.split("\n").map((paragraph, i, arr) => (
                  <p key={i} className={i > 0 ? "mt-3" : ""}>
                    {i === 0 ? `“${paragraph}` : paragraph}
                    {i === arr.length - 1 ? "”" : ""}
                  </p>
                ))}
              </blockquote>
              <div className="mt-[26px]">
                <div className="font-display text-[17px] text-brass-pale">
                  {t.name}
                </div>
                {t.location && (
                  <div className="mt-1 text-[13px] text-sage-light">
                    {t.location}
                  </div>
                )}
              </div>
            </div>

            {/* Dot indicators */}
            {count > 1 && (
              <div className="mt-[34px] flex justify-center gap-[9px]">
                {testimonials.map((item, i) => (
                  <button
                    key={item._id}
                    type="button"
                    onClick={() => goTo(i, i > current ? "right" : "left")}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-[26px] bg-brass-light"
                        : "w-2 bg-brass-light/30 hover:bg-brass-light/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
