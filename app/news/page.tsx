import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | Whispering Pines",
  description: "Latest news from Whispering Pines",
};

export default function NewsPage() {
  return (
    <section className="prose prose-zinc max-w-none dark:prose-invert">
      <h1>News</h1>
      <p>Updates and announcements will be posted here.</p>
      <article>
        <h2>Welcome to the News page</h2>
        <p>Start adding posts or connect a CMS later.</p>
      </article>
    </section>
  );
}





