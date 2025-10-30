"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect, useRef } from "react";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Portfolio" },
  { href: "/news", label: "News" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const floatingLogoRef = useRef<HTMLDivElement | null>(null);
  const logoTargetRef = useRef<HTMLDivElement | null>(null);
  const floatingContainerRef = useRef<HTMLDivElement | null>(null);
  const floatingImgRef = useRef<HTMLImageElement | null>(null);
  const logoTargetImgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    type Killable = { kill?: () => void };
    type TimelineApi = Killable & {
      to?: (
        target: unknown,
        vars: Record<string, unknown>,
        position?: number | string
      ) => unknown;
    };

    let tl: Killable | null = null;
    let removeResize: (() => void) | null = null;

    (async () => {
      try {
        const [{ gsap }, scrollTriggerMod] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger").catch(
            () => import("gsap/dist/ScrollTrigger")
          ),
        ]);
        const ScrollTriggerExport = (
          scrollTriggerMod as { ScrollTrigger: unknown }
        ).ScrollTrigger;
        gsap.registerPlugin(ScrollTriggerExport as unknown);

        const floating = floatingLogoRef.current;
        const target = logoTargetRef.current;
        const floatingImg = floatingImgRef.current;
        const targetImg = logoTargetImgRef.current;
        if (!floating || !target || !floatingImg || !targetImg) {
          setIsScrolled(true);
          return;
        }

        const GSAP = gsap as unknown as {
          timeline: (vars?: Record<string, unknown>) => TimelineApi;
          set: (target: unknown, vars: Record<string, unknown>) => void;
          registerPlugin: (...plugins: unknown[]) => void;
        };

        const build = () => {
          GSAP.set(floating, {
            x: 0,
            y: 0,
            scale: 1,
            transformOrigin: "top left",
          });
          const floatingRect = floatingImg.getBoundingClientRect();
          const targetRect = targetImg.getBoundingClientRect();
          const dx = targetRect.left - floatingRect.left;
          const dy = targetRect.top - floatingRect.top;
          const scale = (targetRect.height || 1) / (floatingRect.height || 1);

          (tl as Killable | null)?.kill?.();
          const newTl = GSAP.timeline({
            scrollTrigger: {
              trigger: document.documentElement,
              start: "top top", // delay start by 120px of scroll
              end: "+=300",
              scrub: true,
              onUpdate: (self: { progress: number }) => {
                setIsScrolled(self.progress >= 0.33);
              },
              onLeaveBack: () => setIsScrolled(false),
            },
          }) as TimelineApi;

          newTl.to?.(floating, { x: dx, y: dy, scale, ease: "power1.out" }, 0);
          newTl.to?.(target, { opacity: 1 }, 0.85);
          newTl.to?.(floating, { opacity: 0 }, 0.95);
          tl = newTl;
        };

        // Defer to next frame so layout is settled
        requestAnimationFrame(build);
        const onResize = () => requestAnimationFrame(build);
        window.addEventListener("resize", onResize);
        removeResize = () => window.removeEventListener("resize", onResize);
      } catch {
        // Fallback: solid after small scroll
        const onScroll = () => setIsScrolled(window.scrollY > 1);
        window.addEventListener("scroll", onScroll);
        removeResize = () => window.removeEventListener("scroll", onScroll);
      }
    })();

    return () => {
      (tl as Killable | null)?.kill?.();
      removeResize?.();
    };
  }, []);

  const activeHref = useMemo(() => {
    if (!pathname) return "/";
    return pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-forest-green/95 backdrop-blur-md elev-3 top-sheen"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div
            ref={logoTargetRef}
            id="header-logo-target"
            className={`rounded-full p-2 elev-1 transition-opacity duration-300 ${
              isScrolled ? "bg-cream/10 opacity-100" : "opacity-0"
            }`}
          >
            <Image
              ref={logoTargetImgRef}
              src="/whisperingpineslogo.png"
              alt="Whispering Pines"
              width={400}
              height={400}
              priority
              className="h-10 w-auto md:h-12"
            />
          </div>
          <div
            className={`hidden sm:block transition-opacity duration-100 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
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
            className="rounded-lg bg-gold-accent px-6 py-2.5 text-sm font-semibold text-deep-green transition-all hover:bg-cream top-sheen elev-1 hover:elev-2"
          >
            Get Quote
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

      {/* Floating header logo that shrinks and attaches */}
      <div
        ref={floatingContainerRef}
        id="header-floating-logo"
        className="pointer-events-auto absolute left-1/2 -translate-x-1/2 top-[calc(100%+16px)] z-40"
      >
        <div ref={floatingLogoRef} className="mx-auto will-change-transform">
          <Link href="/">
            <Image
              ref={floatingImgRef}
              src="/whisperingpineslogo.png"
              alt="Whispering Pines"
              width={900}
              height={900}
              priority
              className="h-24 w-auto md:h-40 lg:h-52 opacity-95 drop-shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            />
          </Link>
        </div>
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
                  className="block rounded-lg bg-gold-accent py-2.5 text-center font-semibold text-deep-green top-sheen elev-1 hover:elev-2"
                >
                  Get Free Quote
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
