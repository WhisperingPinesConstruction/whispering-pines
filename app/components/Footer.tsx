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
                  href="tel:613-614-7016"
                  className="flex items-center gap-2 transition-colors hover:text-cream"
                >
                  <span className="text-gold-accent">📞</span>
                  (613) 614-7016
                </a>
              </li>
              <li>
                <a
                  href="mailto:rwilkes@whispering-pines-construction.com"
                  className="flex items-center gap-2 transition-colors hover:text-cream"
                >
                  <span className="text-gold-accent">✉️</span>
                  rwilkes@whispering-pines-construction.com
                </a>
              </li>
              <li className="pt-2">
                <address className="not-italic">
                  <span className="text-gold-accent">📍</span> Serving Ottawa & The Surrounding Area
                  <br />
                </address>
              </li>
            </ul>
            {/* Social Links */}
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61577892232306"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream/80 transition-all hover:bg-gold-accent hover:text-deep-green"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/whisperingpines_construction/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream/80 transition-all hover:bg-gold-accent hover:text-deep-green"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
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
              "The Contractor Who Puts Your Project First."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
