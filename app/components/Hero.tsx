"use client";

import Link from "next/link";

export default function Hero() {
  const isVisible = true;

  return (
    <>
      {/* Hero Section with Wood Background */}
      <section className="relative -mx-4 -mt-8 mb-20 overflow-hidden">
        {/* Background image + radial black overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(/WoodGrain.jpg)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.8) 100%)",
            }}
          />
        </div>

        <div className="relative">
          <div className="mx-auto max-w-6xl px-8 py-24 md:py-32">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {/* Warm badge */}
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cream/30 bg-cream/20 px-5 py-2.5 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-accent opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-accent"></span>
                </span>
                <span className="text-sm font-medium uppercase tracking-wide text-cream">
                  New in Ottawa
                </span>
              </div>

              {/* Main headline with warm colors */}
              <h1 className="max-w-4xl font-serif text-4xl font-normal leading-tight text-cream md:text-6xl lg:text-7xl">
                Building Dreams with
                <span className="mt-2 block text-5xl italic text-gold-accent md:text-7xl lg:text-8xl">
                  Heart & Hammer
                </span>
              </h1>

              {/* Subheadline with warmth */}
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-cream/90 md:text-xl">
                Twenty years of experience meets fresh enthusiasm. From
                multi-million dollar estates to your cozy bathroom reno, we
                bring craftsmanship and creative solutions to every nail we
                drive.
              </p>

              {/* Value props with warm styling */}
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

              {/* Warm, inviting CTAs */}
              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-linear-to-r from-gold-accent to-gold-accent/90 px-8 py-4 font-medium text-deep-green top-sheen elev-2 transition-all hover:scale-105 hover:elev-3"
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

              {/* Warm trust statement */}
              <p className="mt-8 text-sm font-medium italic text-gold-accent/80">
                &ldquo;Eager to earn your trust, one project at a time&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Organic wave bottom with cream */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 40C240 80 480 20 720 40C960 60 1200 30 1440 40V120H0V40Z"
              fill="#f5ead8"
            />
            <path
              d="M0 60C240 90 480 40 720 60C960 80 1200 50 1440 60V120H0V60Z"
              fill="#faf7f0"
              opacity="0.5"
            />
            <path
              d="M0 80C240 100 480 60 720 80C960 100 1200 70 1440 80V120H0V80Z"
              fill="#faf7f0"
            />
          </svg>
        </div>
      </section>

      {/* Warm transition section */}
      <section className="relative -mt-20 pb-20 pt-24">
        <div className="mx-auto max-w-6xl px-8">
          <div className="overflow-hidden rounded-2xl border border-sage-green/20 bg-cream/8 backdrop-blur-sm elev-1">
            <div className="hidden h-1 w-full bg-linear-to-r from-transparent via-wood-brown/20 to-transparent md:block" />
            <div className="flex flex-col divide-y divide-sage-green/15 md:flex-row md:divide-y-0 md:divide-x">
              <div className="flex-1 px-8 py-10 text-center">
                <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest-green/10 text-6xl text-wood-brown">
                  🏠
                </div>
                <h3 className="mt-3 mb-2 font-serif text-xl text-deep-green">
                  Custom Homes
                </h3>
                <p className="text-sm leading-relaxed text-stone-gray">
                  Dream big, we&rsquo;ll build bigger
                </p>
              </div>
              <div className="flex-1 px-8 py-10 text-center">
                <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest-green/10 text-6xl text-wood-brown">
                  🔨
                </div>
                <h3 className="mt-3 mb-2 font-serif text-xl text-deep-green">
                  Renovations
                </h3>
                <p className="text-sm leading-relaxed text-stone-gray">
                  Love your home again
                </p>
              </div>
              <div className="flex-1 px-8 py-10 text-center">
                <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest-green/10 text-6xl text-wood-brown">
                  🌲
                </div>
                <h3 className="mt-3 mb-2 font-serif text-xl text-deep-green">
                  Outdoor Living
                </h3>
                <p className="text-sm leading-relaxed text-stone-gray">
                  Decks, fences & more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-5xl px-8 py-16">
        <div className="mb-8 text-center">
          <h2 className="mb-4 font-serif text-4xl text-deep-green md:text-5xl">
            About Whispering Pines
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-transparent via-wood-brown/30 to-transparent" />
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <p className="leading-relaxed text-stone-gray">
            We are a family-run construction company in Ottawa. Two decades of
            experience meet fresh enthusiasm: from multi-million dollar estates
            to your cozy bathroom reno, we bring craftsmanship, transparency,
            and creative problem solving to every project.
          </p>
          <p className="leading-relaxed text-stone-gray">
            Our promise is simple: clear communication, fair pricing, and work
            we are proud to stand behind. If you have a napkin sketch or a full
            set of drawings, we&rsquo;ll help you get it built.
          </p>
        </div>
      </section>

      {/* Services with warm cards */}
      <section id="services" className="mx-auto max-w-6xl px-8 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl text-deep-green md:text-5xl">
            What We Do Best
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-transparent via-wood-brown/30 to-transparent" />
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {/* Service cards with warm colors */}
          <div className="group relative overflow-hidden rounded-xl border border-sage-green/20 bg-linear-to-br from-cream/5 to-warm-tan/5 p-8 elev-1 top-sheen transition-all hover:elev-2">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-forest-green/5 transition-transform group-hover:scale-150" />
            <h3 className="relative mb-3 font-serif text-2xl text-forest-green">
              Complete Builds
            </h3>
            <p className="relative mb-4 leading-relaxed text-stone-gray">
              Your architectural vision becomes reality. We handle everything
              from foundation to finishing touches, with expertise in both
              luxury estates and cozy family homes.
            </p>
            <div className="relative text-sm font-medium text-wood-brown">
              $500K to $10M+ projects
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-sage-green/20 bg-linear-to-br from-warm-tan/5 to-cream/5 p-8 elev-1 top-sheen transition-all hover:elev-2">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-forest-green/5 transition-transform group-hover:scale-150" />
            <h3 className="relative mb-3 font-serif text-2xl text-forest-green">
              Smart Renovations
            </h3>
            <p className="relative mb-4 leading-relaxed text-stone-gray">
              Breathe new life into your space. Kitchen transformations,
              bathroom sanctuaries, or that addition you&rsquo;ve been sketching
              on napkins for years.
            </p>
            <div className="relative text-sm font-medium text-wood-brown">
              No project too small
            </div>
          </div>
        </div>

        {/* Detailed services with warm background */}
        <div className="rounded-xl bg-warm-tan/5 p-8">
          <h3 className="mb-6 text-center text-lg font-medium text-deep-green">
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

      {/* Why Choose Us with warm organic feel */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h2 className="mb-12 font-serif text-3xl text-deep-green md:text-4xl">
            Why Families Choose Whispering Pines
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-warm-tan/5 p-6 elev-1 transition-all hover:elev-2">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-forest-green/10 text-3xl">
                💪
              </div>
              <h3 className="mb-2 font-serif text-lg text-forest-green">
                We Care More
              </h3>
              <p className="text-sm leading-relaxed text-stone-gray">
                As a new business, your project isn&rsquo;t just another
                job—it&rsquo;s our reputation
              </p>
            </div>
            <div className="rounded-lg bg-warm-tan/5 p-6 elev-1 transition-all hover:elev-2">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-forest-green/10 text-3xl">
                🎯
              </div>
              <h3 className="mb-2 font-serif text-lg text-forest-green">
                Real Experience
              </h3>
              <p className="text-sm leading-relaxed text-stone-gray">
                Two decades of building means we&rsquo;ve solved problems you
                haven&rsquo;t thought of yet
              </p>
            </div>
            <div className="rounded-lg bg-warm-tan/5 p-6 elev-1 transition-all hover:elev-2">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-forest-green/10 text-3xl">
                🤝
              </div>
              <h3 className="mb-2 font-serif text-lg text-forest-green">
                Fair Pricing
              </h3>
              <p className="text-sm leading-relaxed text-stone-gray">
                Building our name means building value into every quote we write
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warm testimonial */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <div className="relative">
            <svg
              className="absolute -left-4 -top-4 h-12 w-12 text-sage-green/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-serif text-2xl italic leading-relaxed text-forest-green">
              They didn&rsquo;t just renovate our kitchen—they transformed how
              our family lives together. Worth every penny and then some.
            </blockquote>
          </div>
          <div className="mt-6">
            <p className="font-medium text-deep-green">
              Sarah & Tom Richardson
            </p>
            <p className="text-sm text-stone-gray">
              Stittsville Kitchen Renovation
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="rounded-t-3xl bg-linear-to-b from-sage-green/10 to-transparent py-20"
      >
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h2 className="mb-4 font-serif text-3xl text-deep-green md:text-4xl">
            Let&rsquo;s Build Something Together
          </h2>
          <p className="mb-10 text-lg text-stone-gray">
            Free quotes, friendly service, and a genuine excitement for your
            project.
            <br />
            What are you waiting for?
          </p>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <Link
              href="mailto:hello@whisperingpines.ca"
              className="inline-flex items-center rounded-lg bg-forest-green px-8 py-4 font-medium text-cream top-sheen elev-1 transition-all hover:bg-deep-green hover:elev-2"
            >
              Email Us
            </Link>
            <div>
              <p className="mb-1 text-sm text-stone-gray">Call us anytime:</p>
              <a
                href="tel:613-555-0123"
                className="text-lg font-semibold text-forest-green hover:text-deep-green"
              >
                (613) 555-0123
              </a>
            </div>
          </div>

          <p className="mt-10 text-xs text-stone-gray">
            Proudly serving Ottawa, Kanata, Stittsville, Barrhaven, and
            surrounding communities
          </p>
        </div>
      </section>
    </>
  );
}
