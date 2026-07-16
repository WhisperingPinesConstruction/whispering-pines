import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Whispering Pines",
  description: "Projects and work at Whispering Pines",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-4 text-4xl text-cream">Projects</h1>
      <p className="text-parchment-dim">
        A curated list of projects will appear here.
      </p>
    </section>
  );
}


