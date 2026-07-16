const FEATURES = [
  {
    title: "Complete Builds",
    body: "Your architectural vision becomes reality. We handle everything from foundation to finishing touches, with expertise in both luxury estates and cozy family homes.",
    caption: "$500K to $10M+ projects",
  },
  {
    title: "Smart Renovations",
    body: "Breathe new life into your space. Kitchen transformations, bathroom sanctuaries, or that addition you've been sketching on napkins for years.",
    caption: "No project too small",
  },
];

type ServiceTile = {
  title: string;
  blurb: string;
  paths: string[];
  rect?: { x: number; y: number; width: number; height: number; rx: number };
};

const SERVICES: ServiceTile[] = [
  {
    title: "Custom Homes",
    blurb: "Dream big. We'll build bigger.",
    paths: ["M4 11l8-6 8 6", "M6 10v9h12v-9"],
  },
  {
    title: "Renovations",
    blurb: "Love your home again.",
    paths: ["M14 6l4 4", "M3 21l8-8", "M13 5l6 6-2.5 2.5-6-6z"],
  },
  {
    title: "Outdoor Living",
    blurb: "Decks, fences & more.",
    paths: ["M12 3l5 7h-3l4 6H6l4-6H7z", "M12 16v5"],
  },
  {
    title: "Windows & Doors",
    blurb: "Energy-efficient upgrades.",
    paths: ["M12 4v16", "M4 12h16"],
    rect: { x: 4, y: 4, width: 16, height: 16, rx: 1 },
  },
  {
    title: "Siding",
    blurb: "Weather-tight and beautiful.",
    paths: ["M4 7h16", "M4 12h16", "M4 17h16"],
  },
  {
    title: "Residential Framing",
    blurb: "The bones your home stands on.",
    paths: ["M4 20V6l8-3 8 3v14", "M9 20v-6h6v6"],
  },
];

export default function TransitionSection() {
  return (
    <section id="services" className="wp-section">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-14 md:py-24">
        <div data-reveal className="mb-14 text-center md:mb-16">
          <div className="eyebrow mb-3.5">What We Build</div>
          <h2 className="text-3xl text-[#e8d9bb] md:text-[40px]">
            From Foundation to Finishing Touch
          </h2>
        </div>

        {/* Feature cards */}
        <div data-stagger className="mb-8 grid grid-cols-1 gap-6 md:mb-10 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="card-lift relative overflow-hidden rounded-2xl border border-brass/[0.28] p-8 hover:border-brass/50 md:p-10"
              style={{
                background: "linear-gradient(150deg, #07160e, #052015)",
              }}
            >
              <h3 className="mb-4 text-[26px] text-cream">{feature.title}</h3>
              <p className="mb-6 max-w-[440px] text-[15px] leading-[1.75] text-parchment-dim">
                {feature.body}
              </p>
              <span className="inline-block border-t border-brass/30 pt-4 text-[13px] tracking-[0.04em] text-brass-light">
                {feature.caption}
              </span>
            </div>
          ))}
        </div>

        {/* Service tile grid — 1px brass gaps in a unified container */}
        <div
          data-stagger
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-brass/[0.18] bg-brass/[0.18] sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-pine-tile px-8 py-9 transition-colors duration-300 hover:bg-[#071a10] md:px-9 md:py-10"
            >
              <svg
                data-draw
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c9a35f"
                strokeWidth="1.4"
                aria-hidden="true"
                className="mb-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:stroke-[#d8b98a]"
              >
                {service.rect && <rect {...service.rect} pathLength={1} />}
                {service.paths.map((d) => (
                  <path key={d} d={d} pathLength={1} />
                ))}
              </svg>
              <h4 className="mb-2.5 text-lg text-brass-pale">
                {service.title}
              </h4>
              <p className="text-[13.5px] leading-[1.65] text-parchment-faint">
                {service.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
