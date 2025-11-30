"use client";
import Image from "next/image";
import { useEffect, useState, type KeyboardEvent } from "react";
import type { ImageProps } from "next/image";
import deckFrontBefore from "@/public/DeckFront_Before.jpg";
import deckFrontAfter from "@/public/DeckFront_Final.jpg";
import deckSideBefore from "@/public/DeckSide_Before.jpg";
import deckSideAfter from "@/public/DeckSide_Final.jpg";
import cedarBefore from "@/public/CedarSiding_Before.jpeg";
import cedarAfter from "@/public/CedarSiding_Collage.png";

function getBlurDataURL(src: ImageProps["src"]): string | undefined {
  if (typeof src === "object" && src && "blurDataURL" in src) {
    return (src as unknown as { blurDataURL?: string }).blurDataURL;
  }
  return undefined;
}

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mql = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const update = () => setIsSmall(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);
  return isSmall;
}

type LightboxItem = {
  title: string;
  beforeSrc: ImageProps["src"];
  afterSrc: ImageProps["src"];
  alt?: string;
};

type BeforeAfterCardProps = {
  title: string;
  beforeSrc: ImageProps["src"];
  afterSrc: ImageProps["src"];
  alt?: string;
  onEnlarge?: (item: LightboxItem) => void;
};

function BeforeAfterCard({
  title,
  beforeSrc,
  afterSrc,
  alt,
  onEnlarge,
}: BeforeAfterCardProps) {
  const isSmallScreen = useIsSmallScreen();
  const [showAfter, setShowAfter] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [beforeLoaded, setBeforeLoaded] = useState(false);
  const [afterLoaded, setAfterLoaded] = useState(false);

  // Low-res readiness using blurDataURL preloading
  const beforeBlur = getBlurDataURL(beforeSrc);
  const afterBlur = getBlurDataURL(afterSrc);
  const [beforeLowReady, setBeforeLowReady] = useState<boolean>(!beforeBlur);
  const [afterLowReady, setAfterLowReady] = useState<boolean>(!afterBlur);

  // Auto-toggle with longer dwell on "After"
  useEffect(() => {
    const AFTER_DWELL_MS = 3600;
    const BEFORE_DWELL_MS = 2400;
    const timeout = setTimeout(
      () => {
        setShowAfter((prev) => !prev);
      },
      showAfter ? AFTER_DWELL_MS : BEFORE_DWELL_MS
    );
    return () => clearTimeout(timeout);
  }, [showAfter]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!isSmallScreen) {
        onEnlarge?.({ title, beforeSrc, afterSrc, alt });
      }
    }
  };
  const afterVisible = (!isSmallScreen && isHovering) || showAfter;
  const beforeX = afterVisible ? "-100%" : "0%";
  const afterX = afterVisible ? "0%" : "100%";
  // We now always load after image as soon as component mounts

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-sage-green/20 bg-linear-to-br from-cream/5 to-warm-tan/5 elev-1 transition-all hover:elev-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-green/50"
      onClick={() => {
        if (!isSmallScreen) {
          onEnlarge?.({ title, beforeSrc, afterSrc, alt });
        }
      }}
      role="button"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => {
        if (!isSmallScreen) setIsHovering(true);
      }}
      onMouseLeave={() => {
        if (!isSmallScreen) setIsHovering(false);
      }}
    >
      {/* Hidden preloaders for blurDataURL to get a real onLoad event */}
      {beforeBlur && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={beforeBlur}
          alt=""
          aria-hidden="true"
          className="hidden"
          onLoad={() => setBeforeLowReady(true)}
        />
      )}
      {afterBlur && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={afterBlur}
          alt=""
          aria-hidden="true"
          className="hidden"
          onLoad={() => setAfterLowReady(true)}
        />
      )}

      <div className="relative aspect-16/10 w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: `translateX(${beforeX})`,
            transition: "transform 600ms ease-in-out",
          }}
        >
          {/* Low-res background using blurDataURL if available */}
          {beforeBlur && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${beforeBlur}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(0px)",
                transform: "scale(1.02)",
              }}
            />
          )}
          <Image
            src={beforeSrc}
            alt={alt ?? `${title} before`}
            fill
            loading="eager"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            placeholder="blur"
            style={{
              opacity: beforeLoaded ? 1 : 0,
              transition: "opacity 300ms ease",
            }}
            onLoad={() => setBeforeLoaded(true)}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            transform: `translateX(${afterX})`,
            transition: "transform 600ms ease-in-out",
          }}
        >
          {/* Low-res background using blurDataURL if available */}
          {afterBlur && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${afterBlur}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(0px)",
                transform: "scale(1.02)",
              }}
            />
          )}
          <Image
            src={afterSrc}
            alt={alt ? `${alt} (after)` : `${title} after`}
            fill
            loading="eager"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            placeholder="blur"
            style={{
              opacity: afterLoaded ? 1 : 0,
              transition: "opacity 300ms ease",
            }}
            onLoad={() => setAfterLoaded(true)}
          />
          {/* Overlay skeleton while After is visible and neither blur nor full image is ready */}
          {afterVisible && !(afterLowReady || afterLoaded) && (
            <div className="absolute inset-0 z-10 bg-black/10 backdrop-blur-[1px]">
              <div className="absolute inset-0 animate-pulse bg-linear-to-br from-stone-100/70 to-stone-300/70 dark:from-stone-700/70 dark:to-stone-800/70" />
            </div>
          )}
        </div>
        {/* Before skeleton overlay until either blur or full image is ready */}
        {!(beforeLowReady || beforeLoaded) && (
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-0 animate-pulse bg-linear-to-br from-stone-100 to-stone-200 dark:from-stone-700 dark:to-stone-800" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-8 w-8 rounded-full border-2 border-white/40 border-t-white animate-spin" />
            </div>
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute left-3 top-3 rounded-md bg-black/45 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
        {afterVisible ? "After" : "Before"}
      </div>
      {/* <div className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-black/15 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
        Auto slide • Click toggles • Hover shows After
      </div> */}
      {/* <div className="border-sage-green/20 bg-linear-to-br from-cream/5 to-warm-tan/5 elev-1 p-3">
        <h4 className="font-serif text-base text-forest-green">{title}</h4>
      </div> */}
    </div>
  );
}

function Lightbox({
  open,
  item,
  onClose,
}: {
  open: boolean;
  item: LightboxItem | null;
  onClose: () => void;
}) {
  const [showAfter, setShowAfter] = useState(true);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        setShowAfter((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !item) return null;

  const beforeX = showAfter ? "-100%" : "0%";
  const afterX = showAfter ? "0%" : "100%";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-[min(80vw,80rem)] h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          className="absolute -right-2 -top-2 z-10 rounded-full bg-black/70 px-3 py-1 text-white hover:bg-black/80"
          onClick={onClose}
        >
          ×
        </button>
        <div
          className="relative h-full w-full overflow-hidden rounded-xl border border-sage-green/30 bg-black"
          onClick={() => setShowAfter((prev) => !prev)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setShowAfter((prev) => !prev);
            }
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: `translateX(${beforeX})`,
              transition: "transform 600ms ease-in-out",
            }}
          >
            <Image
              src={item.beforeSrc}
              alt={item.alt ?? `${item.title} before`}
              fill
              sizes="100vw"
              className="object-cover"
              unoptimized
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              transform: `translateX(${afterX})`,
              transition: "transform 600ms ease-in-out",
            }}
          >
            <Image
              src={item.afterSrc}
              alt={item.alt ? `${item.alt} (after)` : `${item.title} after`}
              fill
              sizes="100vw"
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="pointer-events-none absolute left-3 top-3 rounded-md bg-black/50 px-2 py-1 text-xs font-medium text-white">
            {showAfter ? "After" : "Before"}
          </div>
        </div>
        <div className="mt-3 text-center text-sm text-white/90">
          {item.title} • Press ⌘/Ctrl+←/→ or click to toggle
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);
  return (
    <section id="services" className="mx-auto max-w-6xl px-8 py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-serif text-4xl text-sage-green md:text-5xl">
          Recent Projects
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-transparent via-wood-brown/30 to-transparent" />
      </div>

      <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <BeforeAfterCard
          title="Front Deck"
          beforeSrc={deckFrontBefore}
          afterSrc={deckFrontAfter}
          onEnlarge={setLightboxItem}
        />
        <BeforeAfterCard
          title="Side Deck"
          beforeSrc={deckSideBefore}
          afterSrc={deckSideAfter}
          onEnlarge={setLightboxItem}
        />
        <BeforeAfterCard
          title="Cedar Siding"
          beforeSrc={cedarBefore}
          afterSrc={cedarAfter}
          onEnlarge={setLightboxItem}
        />
      </div>

      <Lightbox
        key={lightboxItem?.title ?? "lightbox"}
        open={!!lightboxItem}
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />
    </section>
  );
}
