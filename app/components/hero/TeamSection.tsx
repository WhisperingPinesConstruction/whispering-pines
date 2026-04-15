"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchTeamMembers, urlFor, type SanityTeamMember } from "@/lib/sanity";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function TeamSection() {
  const [members, setMembers] = useState<SanityTeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers()
      .then(setMembers)
      .catch((err) =>
        console.error("Failed to fetch team members from Sanity:", err)
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="team" className="mx-auto max-w-5xl px-8 py-16">
      <div className="text-center">
        <h2 className="mb-4 font-serif text-3xl text-sage-green md:text-4xl">
          Meet the Team
        </h2>
        <div className="mx-auto mb-12 h-1 w-24 rounded-full bg-gradient-to-r from-gold-accent/60 via-gold-accent to-gold-accent/60" />
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {loading
          ? Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="w-full max-w-sm animate-pulse rounded-xl border border-sage-green/20 bg-linear-to-br from-cream/5 to-warm-tan/5 p-8"
              >
                <div className="mx-auto mb-5 h-36 w-36 rounded-full bg-stone-200" />
                <div className="mx-auto mb-2 h-5 w-32 rounded bg-stone-200" />
                <div className="mx-auto mb-4 h-4 w-48 rounded bg-stone-200" />
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-stone-200" />
                  <div className="h-3 w-full rounded bg-stone-200" />
                  <div className="h-3 w-3/4 rounded bg-stone-200" />
                </div>
              </div>
            ))
          : members.map((member) => (
              <div
                key={member._id}
                className="w-full max-w-sm rounded-xl border border-sage-green/20 bg-linear-to-br from-cream/5 to-warm-tan/5 p-8 text-center elev-1 top-sheen transition-all hover:elev-2"
              >
                {member.photo ? (
                  <div className="mx-auto mb-5 h-36 w-36 overflow-hidden rounded-full border-2 border-sage-green/20">
                    <Image
                      src={urlFor(member.photo)
                        .width(288)
                        .height(288)
                        .quality(80)
                        .url()}
                      alt={member.name}
                      width={144}
                      height={144}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="mx-auto mb-5 flex h-36 w-36 items-center justify-center rounded-full border-2 border-sage-green/20 bg-linear-to-br from-sage-green/10 to-warm-tan/10">
                    <span className="font-serif text-3xl text-sage-green/60">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}

                <h3 className="mb-1 font-serif text-xl text-sage-green">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm font-medium text-gold-accent">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-stone-gray">
                  {member.bio}
                </p>
              </div>
            ))}
      </div>
    </section>
  );
}
