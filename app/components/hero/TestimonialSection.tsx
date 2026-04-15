"use client";

import { useEffect, useState, useCallback } from "react";
import {
  fetchTestimonials,
  type SanityTestimonial,
} from "@/lib/sanity";

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

  // Auto-advance
  useEffect(() => {
    if (count <= 1 || isHovering) return;
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, [count, isHovering, next]);

  if (loading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-8">
          <div className="animate-pulse space-y-4 text-center">
            <div className="mx-auto h-6 w-3/4 rounded bg-stone-200" />
            <div className="mx-auto h-6 w-2/3 rounded bg-stone-200" />
            <div className="mx-auto h-6 w-1/2 rounded bg-stone-200" />
            <div className="mx-auto mt-6 h-4 w-32 rounded bg-stone-200" />
          </div>
        </div>
      </section>
    );
  }

  if (count === 0) return null;

  const t = testimonials[current];

  return (
    <section
      className="py-20"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="mx-auto max-w-4xl px-8">
        <div className="relative">
          {/* Arrows */}
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="absolute -left-2 top-1/2 -translate-y-1/2 rounded-full bg-sage-green/10 p-2 text-sage-green/60 transition-all hover:bg-sage-green/20 hover:text-sage-green md:-left-12"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full bg-sage-green/10 p-2 text-sage-green/60 transition-all hover:bg-sage-green/20 hover:text-sage-green md:-right-12"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Quote content */}
          <div className="text-center">
            <svg
              className="mx-auto mb-4 h-10 w-10 text-sage-green/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <div
              className={`transition-all duration-300 ${
                animating
                  ? `opacity-0 ${direction === "right" ? "-translate-x-4" : "translate-x-4"}`
                  : "opacity-100 translate-x-0"
              }`}
            >
              <blockquote className="font-serif text-xl italic leading-relaxed text-sage-green md:text-2xl">
                {t.quote.split("\n").map((paragraph, i) => (
                  <p key={i} className={i > 0 ? "mt-3" : ""}>
                    {i === 0 ? `\u201C${paragraph}` : paragraph}
                    {i === t.quote.split("\n").length - 1 ? "\u201D" : ""}
                  </p>
                ))}
              </blockquote>
              <div className="mt-6">
                <p className="font-medium text-gold-accent/65">{t.name}</p>
                {t.location && (
                  <p className="text-sm text-stone-gray">{t.location}</p>
                )}
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          {count > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={testimonials[i]._id}
                  type="button"
                  onClick={() => goTo(i, i > current ? "right" : "left")}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-sage-green/50"
                      : "w-2 bg-sage-green/20 hover:bg-sage-green/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
