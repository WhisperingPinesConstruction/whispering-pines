import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-forest-green text-cream top-sheen elev-1">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 pb-8 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 font-serif text-2xl text-cream">
              Whispering Pines
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-cream/80">
              New business, experienced builders. Creating exceptional homes
              with 20 years of expertise and fresh enthusiasm.
            </p>
            {/* Trust badges */}
            <div className="flex gap-3">
              <div className="rounded bg-cream/10 px-3 py-1 text-xs font-semibold text-gold-accent">
                Licensed
              </div>
              <div className="rounded bg-cream/10 px-3 py-1 text-xs font-semibold text-gold-accent">
                Insured
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-accent">
              Our Work
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects#custom"
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  Custom Homes
                </Link>
              </li>
              <li>
                <Link
                  href="/projects#renovation"
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  Renovations
                </Link>
              </li>
              <li>
                <Link
                  href="/projects#framing"
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  Framing & Structure
                </Link>
              </li>
              <li>
                <Link
                  href="/projects#outdoor"
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  Decks & Fences
                </Link>
              </li>
              <li>
                <Link
                  href="/projects#finishing"
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  Windows & Siding
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-accent">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  Recent Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-accent">
              Let&rsquo;s Talk
            </h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <a
                  href="tel:613-555-0123"
                  className="flex items-center gap-2 transition-colors hover:text-cream"
                >
                  <span className="text-gold-accent">📞</span>
                  (613) 555-0123
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@whisperingpines.ca"
                  className="flex items-center gap-2 transition-colors hover:text-cream"
                >
                  <span className="text-gold-accent">✉️</span>
                  hello@whisperingpines.ca
                </a>
              </li>
              <li className="pt-2">
                <address className="not-italic">
                  <span className="text-gold-accent">📍</span> Serving Ottawa
                  Valley
                  <br />
                  <span className="ml-6 text-xs">
                    Ottawa • Kanata • Stittsville • Barrhaven
                  </span>
                </address>
              </li>
            </ul>
            {/* Call to action */}
            <Link
              href="/#contact"
              className="mt-4 inline-block rounded-lg bg-gold-accent px-4 py-2 text-sm font-semibold text-deep-green transition-all hover:bg-cream top-sheen elev-1 hover:elev-2"
            >
              Start Your Project →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-cream/60 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Whispering Pines Construction. All
              rights reserved.
            </p>
            <p className="italic">
              &ldquo;Building dreams with heart & hammer&rdquo;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
