"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import logoPng from "@/public/whisperingpineslogo.png";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/news", label: "News" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeHref = useMemo(() => {
    if (!pathname) return "/";
    return pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-forest-green/95 backdrop-blur-md elev-3 top-sheen"
          : "bg-forest-green/90 backdrop-blur-sm elev-2 top-sheen"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-full bg-cream/80 p-2 elev-1">
            <Image
              src={logoPng}
              alt="Whispering Pines"
              width={400}
              height={400}
              priority
              className="h-10 w-auto md:h-12"
            />
          </div>
          <div className="hidden sm:block">
            <div className="font-serif text-xl text-cream">
              Whispering Pines
            </div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-gold-accent/80">
              Construction
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map(({ href, label }) => {
              const isActive =
                href === "/"
                  ? activeHref === "/"
                  : activeHref === href || activeHref.startsWith(href + "/");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      relative py-2 text-sm font-medium transition-all duration-300
                      ${
                        isActive
                          ? "text-gold-accent"
                          : "text-cream/90 hover:text-cream"
                      }
                    `}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gold-accent" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="relative inline-flex items-center justify-center rounded-lg bg-gold-accent px-6 py-2.5 text-sm font-semibold text-deep-green transition-all hover:bg-cream top-sheen elev-1 hover:elev-2 shimmer-sweep [--shine-duration:3.2s]"
          >
            <span className="relative z-10">Get Quote</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden rounded-lg bg-cream/10 p-2 text-cream"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-cream/10 bg-forest-green/95 backdrop-blur-md elev-2">
          <nav className="px-6 py-4">
            <ul className="space-y-2">
              {NAV_ITEMS.map(({ href, label }) => {
                const isActive =
                  href === "/"
                    ? activeHref === "/"
                    : activeHref === href || activeHref.startsWith(href + "/");
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        block rounded-lg px-4 py-2 transition-all
                        ${
                          isActive
                            ? "surface-1 text-gold-accent font-semibold elev-1"
                            : "text-cream/90 hover:surface-1 hover:text-cream hover:elev-1"
                        }
                      `}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative inline-flex w-full items-center justify-center rounded-lg bg-gold-accent py-2.5 text-center font-semibold text-deep-green top-sheen elev-1 hover:elev-2 shimmer-sweep [--shine-duration:3.2s]"
                >
                  <span className="relative z-10">Get Free Quote</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
