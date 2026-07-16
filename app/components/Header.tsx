"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logoPng from "@/public/whisperingpineslogo.png";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Projects" },
  { href: "/#process", label: "Our Process" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-brass/20 bg-pine/95 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      <div
        className={`relative mx-auto flex max-w-7xl items-center justify-between px-5 transition-[padding] duration-300 md:px-10 ${
          isScrolled ? "py-2.5" : "py-4"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3.5">
          <div className="flex h-[46px] w-[46px] items-center justify-center overflow-hidden rounded-full bg-disc transition-transform duration-300 group-hover:scale-105">
            <Image
              src={logoPng}
              alt="Whispering Pines Construction"
              width={400}
              height={400}
              sizes="46px"
              fetchPriority="high"
              className="h-[42px] w-[42px] object-contain"
            />
          </div>
          {/* Wordmark yields to the CTA on the narrowest screens */}
          <div className="hidden min-[430px]:block">
            <div className="font-display text-[19px] leading-none text-cream">
              Whispering Pines
            </div>
            <div className="mt-1 text-[9.5px] uppercase tracking-[0.32em] text-brass-light">
              Construction
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2.5 md:gap-8">
          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {NAV_ITEMS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="link-underline py-1 text-[13.5px] text-[#e4dcc9]"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA — always visible, every screen size */}
          <Link
            href="/#contact"
            className="btn-brass px-4 py-2.5 text-[11.5px] uppercase md:px-5 md:text-xs"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-brass/40 text-cream transition-colors hover:border-brass/70 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.6}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.6}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation — slide-down panel anchored to header */}
        {isMobileMenuOpen && (
          <div className="menu-in absolute inset-x-0 top-full flex flex-col border-t border-brass/20 bg-pine px-6 pb-4 pt-2 shadow-[0_20px_40px_rgba(0,0,0,0.45)] md:hidden">
            {NAV_ITEMS.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3.5 text-[15px] text-[#e4dcc9] transition-colors hover:text-brass-pale ${
                  i < NAV_ITEMS.length - 1 ? "border-b border-brass/15" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
