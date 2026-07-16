type ProcessStep = {
  number: string;
  title: string;
  body: string;
  paths: string[];
};

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "A Real Conversation",
    body: "We start by listening. No sales pitch, no pressure. Just an honest talk about what you want and what it will actually take.",
    paths: ["M4 5h16v10H9l-5 4z"],
  },
  {
    number: "02",
    title: "An Honest Quote",
    body: "Clear scope, fair pricing, no surprises. If something changes along the way, you hear it from us first.",
    paths: ["M7 3h7l4 4v14H7z", "M14 3v4h4"],
  },
  {
    number: "03",
    title: "Seasoned Craftsmanship",
    body: "Licensed carpenters with two decades of building science behind them. We've hit most problems before and learned how to head them off.",
    paths: ["M14 6l4 4", "M3 21l8-8", "M13 5l6 6-2.5 2.5-6-6z"],
  },
  {
    number: "04",
    title: "Work We Stand Behind",
    body: "We're not finished until you're proud of it. And when we say to call if anything ever comes up, we mean it.",
    paths: ["M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z", "M9 12l2 2 4-4"],
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="process" className="wp-section">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-14 md:py-[100px]">
        <div data-reveal className="mx-auto mb-14 max-w-[760px] text-center md:mb-16">
          <div className="eyebrow mb-4">The Whispering Pines Way</div>
          <h2 className="text-3xl leading-[1.15] text-cream md:text-[40px]">
            A new name, built on two decades of doing it right.
          </h2>
          <p className="mt-[22px] text-base leading-[1.7] text-parchment-dim">
            Here&rsquo;s what working with us looks like, from the first
            conversation to long after the last nail.
          </p>
        </div>

        <div
          data-stagger
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group border-t border-brass/40 pt-[26px] transition-colors duration-300 hover:border-brass/70"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-display text-[15px] text-brass-light">
                  {step.number}
                </span>
                <svg
                  data-draw
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c9a35f"
                  strokeWidth="1.4"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                >
                  {step.paths.map((d) => (
                    <path key={d} d={d} pathLength={1} />
                  ))}
                </svg>
              </div>
              <h3 className="mb-3 text-xl text-[#e8d9bb]">{step.title}</h3>
              <p className="text-sm leading-[1.72] text-parchment-faint">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
