"use client";

import Image from "next/image";
import { useEffect, useState, type KeyboardEvent } from "react";
import { fetchProjects, urlFor, type SanityProject } from "@/lib/sanity";

const AUTO_TOGGLE_MS = 3800;
const IMAGE_WIDTH = 900;

function useIsTouchLike() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mql = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const update = () => setIsTouch(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);
  return isTouch;
}

type LightboxItem = {
  title: string;
  beforeSrc?: string;
  afterSrc: string;
  alt?: string;
};

type ProjectCardProps = {
  title: string;
  tag?: string;
  beforeSrc?: string;
  afterSrc: string;
  alt?: string;
  autoAfter: boolean;
  onEnlarge?: (item: LightboxItem) => void;
};

function ProjectCard({
  title,
  tag,
  beforeSrc,
  afterSrc,
  alt,
  autoAfter,
  onEnlarge,
}: ProjectCardProps) {
  const isTouchLike = useIsTouchLike();
  const [isHovering, setIsHovering] = useState(false);
  const [afterLoaded, setAfterLoaded] = useState(false);

  const hasPair = Boolean(beforeSrc);
  const afterVisible = !hasPair || (!isTouchLike && isHovering) || autoAfter;

  const enlarge = () => {
    if (!isTouchLike) onEnlarge?.({ title, beforeSrc, afterSrc, alt });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      enlarge();
    }
  };

  return (
    <div
      className="card-lift group cursor-pointer overflow-hidden rounded-[14px] border border-brass/30 bg-pine-night hover:border-brass/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-light/60"
      onClick={enlarge}
      role="button"
      tabIndex={0}
      aria-label={`View ${title} photos`}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        {/* Shimmer until the primary image is in */}
        {!afterLoaded && (
          <div className="absolute inset-0 animate-pulse bg-pine-card" />
        )}
        {hasPair && beforeSrc && (
          <Image
            src={beforeSrc}
            alt={alt ?? `${title}, before`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-[opacity,transform] duration-[800ms] ease-in-out group-hover:scale-[1.04]"
            style={{ opacity: afterVisible ? 0 : 1 }}
          />
        )}
        <Image
          src={afterSrc}
          alt={
            hasPair ? (alt ? `${alt} (after)` : `${title}, after`) : alt ?? title
          }
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-[opacity,transform] duration-[800ms] ease-in-out group-hover:scale-[1.04]"
          style={{ opacity: afterLoaded && !afterVisible ? 0 : afterLoaded ? 1 : 0 }}
          onLoad={() => setAfterLoaded(true)}
        />
        {hasPair && (
          <span className="absolute left-3 top-3 rounded-full border border-brass/45 bg-[rgba(4,47,30,0.82)] px-3 py-[5px] text-[10.5px] tracking-[0.12em] text-[#e8d9bb]">
            {afterVisible ? "After" : "Before"}
          </span>
        )}
      </div>
      <div className="flex items-baseline justify-between gap-3 px-[18px] py-4">
        <span className="font-display text-[17px] text-cream">{title}</span>
        {tag && (
          <span className="shrink-0 text-[11px] uppercase tracking-[0.1em] text-brass">
            {tag}
          </span>
        )}
      </div>
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
  const hasPair = Boolean(item?.beforeSrc);

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative h-[80vh] w-[min(80vw,80rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          className="absolute -right-2 -top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-brass/40 bg-pine text-lg text-cream transition-colors hover:border-brass/70 hover:text-brass-pale"
          onClick={onClose}
        >
          ×
        </button>
        <div
          className="relative h-full w-full overflow-hidden rounded-[14px] border border-brass/30 bg-pine-night"
          onClick={() => hasPair && setShowAfter((prev) => !prev)}
          role={hasPair ? "button" : undefined}
          tabIndex={hasPair ? 0 : undefined}
          onKeyDown={(e) => {
            if (hasPair && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              setShowAfter((prev) => !prev);
            }
          }}
        >
          {hasPair && item.beforeSrc && (
            <div
              className="absolute inset-0 transition-transform duration-[600ms] ease-in-out"
              style={{ transform: `translateX(${beforeX})` }}
            >
              <Image
                src={item.beforeSrc}
                alt={item.alt ?? `${item.title}, before`}
                fill
                sizes="100vw"
                className="object-cover"
                unoptimized
              />
            </div>
          )}
          <div
            className="absolute inset-0 transition-transform duration-[600ms] ease-in-out"
            style={{
              transform: hasPair ? `translateX(${afterX})` : undefined,
            }}
          >
            <Image
              src={item.afterSrc}
              alt={item.alt ? `${item.alt} (after)` : item.title}
              fill
              sizes="100vw"
              className="object-cover"
              unoptimized
            />
          </div>
          {hasPair && (
            <span className="absolute left-3 top-3 rounded-full border border-brass/45 bg-[rgba(4,47,30,0.82)] px-3 py-[5px] text-[10.5px] tracking-[0.12em] text-[#e8d9bb]">
              {showAfter ? "After" : "Before"}
            </span>
          )}
        </div>
        <div className="mt-3 text-center text-sm text-parchment">
          {item.title}
          {hasPair && " · Click or press ←/→ to compare"}
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [projects, setProjects] = useState<SanityProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);
  const [autoAfter, setAutoAfter] = useState(false);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch((err) =>
        console.error("Failed to fetch projects from Sanity:", err)
      )
      .finally(() => setLoading(false));
  }, []);

  // One shared clock so every card flips together
  useEffect(() => {
    const interval = setInterval(
      () => setAutoAfter((prev) => !prev),
      AUTO_TOGGLE_MS
    );
    return () => clearInterval(interval);
  }, []);

  if (!loading && projects.length === 0) return null;

  return (
    <section
      id="work"
      className="wp-section border-y border-brass/15 bg-pine-deep"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-14 md:py-[88px]">
        <div
          data-reveal
          className="mb-11 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <div className="eyebrow mb-3">Selected Work</div>
            <h2 className="text-3xl text-cream md:text-[40px]">
              Recent Projects
            </h2>
          </div>
          <span className="font-accent hidden text-lg text-sage md:inline">
            Hover to reveal the transformation
          </span>
        </div>

        <div
          data-reveal
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[16/11] animate-pulse rounded-[14px] border border-brass/15 bg-pine-card"
                />
              ))
            : projects.map((project) => {
                const afterSource = project.afterImage ?? project.beforeImage;
                if (!afterSource) return null;
                const beforeSrc =
                  project.afterImage && project.beforeImage
                    ? urlFor(project.beforeImage)
                        .width(IMAGE_WIDTH)
                        .quality(80)
                        .url()
                    : undefined;
                return (
                  <ProjectCard
                    key={project._id}
                    title={project.title}
                    tag={project.tag}
                    beforeSrc={beforeSrc}
                    afterSrc={urlFor(afterSource)
                      .width(IMAGE_WIDTH)
                      .quality(80)
                      .url()}
                    alt={project.alt}
                    autoAfter={autoAfter}
                    onEnlarge={setLightboxItem}
                  />
                );
              })}
        </div>
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
