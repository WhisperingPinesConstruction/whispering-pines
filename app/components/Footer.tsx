import Link from "next/link";

const WORK_LINKS = [
  { href: "/#services", label: "Custom Homes" },
  { href: "/#services", label: "Renovations" },
  { href: "/#services", label: "Framing & Structure" },
  { href: "/#services", label: "Decks & Fences" },
  { href: "/#services", label: "Windows & Siding" },
];

const COMPANY_LINKS = [
  { href: "/#about", label: "Our Story" },
  { href: "/#process", label: "Our Process" },
  { href: "/#work", label: "Recent Projects" },
  { href: "/#contact", label: "Free Quote" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brass/[0.22] bg-pine">
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-14 md:px-14 md:pt-16">
        <div className="grid grid-cols-1 gap-10 pb-11 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="font-display mb-4 text-[22px] text-cream">
              Whispering Pines
            </div>
            <p className="mb-[22px] max-w-[280px] text-sm leading-[1.7] text-parchment-dim">
              A new name in Ottawa backed by twenty years on the tools. We
              build the kind of work we&rsquo;d want in our own homes.
            </p>
            <div className="flex gap-2.5">
              <span className="rounded-[3px] border border-brass/35 px-3 py-1.5 text-[11px] tracking-[0.08em] text-brass-light">
                LICENSED
              </span>
              <span className="rounded-[3px] border border-brass/35 px-3 py-1.5 text-[11px] tracking-[0.08em] text-brass-light">
                INSURED
              </span>
            </div>
          </div>

          {/* Our Work */}
          <div>
            <h4 className="font-sans mb-[18px] text-[11px] tracking-[0.2em] text-brass-light">
              OUR WORK
            </h4>
            <ul className="flex flex-col gap-[11px] text-sm text-parchment-dim">
              {WORK_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="link-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans mb-[18px] text-[11px] tracking-[0.2em] text-brass-light">
              COMPANY
            </h4>
            <ul className="flex flex-col gap-[11px] text-sm text-parchment-dim">
              {COMPANY_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="link-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Let's Talk */}
          <div>
            <h4 className="font-sans mb-[18px] text-[11px] tracking-[0.2em] text-brass-light">
              LET&rsquo;S TALK
            </h4>
            <div className="flex flex-col gap-[13px] text-sm text-parchment-dim">
              <a
                href="tel:613-614-7016"
                className="transition-colors hover:text-brass-pale"
              >
                (613) 614-7016
              </a>
              <a
                href="mailto:rwilkes@whispering-pines-construction.com"
                className="break-all transition-colors hover:text-brass-pale"
              >
                rwilkes@whispering-pines-construction.com
              </a>
              <span className="text-sage">
                Serving Ottawa &amp; the Surrounding Area
              </span>
            </div>
            <Link
              href="/#contact"
              className="btn-brass mt-5 px-5 py-[11px] text-[12.5px]"
            >
              Start Your Project
              <span className="btn-arrow relative z-10">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-brass/20 pt-[26px] text-[12.5px] text-sage sm:flex-row">
          <span>
            © {new Date().getFullYear()} Whispering Pines Construction. All
            rights reserved.
          </span>
          <span className="font-accent text-[15px] text-sage-light">
            &ldquo;The Contractor Who Puts Your Project First.&rdquo;
          </span>
        </div>
      </div>
    </footer>
  );
}
