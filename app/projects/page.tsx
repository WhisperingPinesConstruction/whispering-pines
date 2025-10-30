import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Whispering Pines",
  description: "Projects and work at Whispering Pines",
};

export default function ProjectsPage() {
  return (
    <section className="prose prose-zinc max-w-none dark:prose-invert">
      <h1>Projects</h1>
      <p>A curated list of projects will appear here.</p>
      <ul>
        <li>Project A — brief description</li>
        <li>Project B — brief description</li>
      </ul>
    </section>
  );
}

