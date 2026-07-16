import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | Whispering Pines",
  description: "Latest news from Whispering Pines",
};

export default function NewsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-4 text-4xl text-cream">News</h1>
      <p className="text-parchment-dim">
        Updates and announcements will be posted here.
      </p>
    </section>
  );
}





