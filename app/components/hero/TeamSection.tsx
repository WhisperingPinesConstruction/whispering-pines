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

  if (!loading && members.length === 0) return null;

  return (
    <section
      id="team"
      className="wp-section mx-auto max-w-[1000px] px-5 py-20 text-center md:px-14 md:py-24"
    >
      <div data-reveal>
        <div className="eyebrow mb-3.5">The People</div>
        <h2 className="text-3xl text-[#e8d9bb] md:text-[38px]">
          Meet the Team
        </h2>
      </div>
      <div data-rule className="brass-rule mx-auto mb-12 mt-[22px] md:mb-[52px]" />

      <div data-reveal className="flex flex-wrap justify-center gap-6">
        {loading
          ? Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="w-full max-w-[340px] animate-pulse rounded-2xl border border-brass/15 bg-pine-card p-9"
              >
                <div className="mx-auto mb-5 h-[120px] w-[120px] rounded-full bg-pine-tile" />
                <div className="mx-auto mb-2 h-5 w-32 rounded bg-pine-tile" />
                <div className="mx-auto mb-4 h-4 w-44 rounded bg-pine-tile" />
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-pine-tile" />
                  <div className="h-3 w-full rounded bg-pine-tile" />
                  <div className="h-3 w-3/4 rounded bg-pine-tile" />
                </div>
              </div>
            ))
          : members.map((member) => (
              <div
                key={member._id}
                className="card-lift group w-full max-w-[340px] rounded-2xl border border-brass/25 bg-pine-card p-9 text-center hover:border-brass/50"
              >
                {member.photo ? (
                  <div className="mx-auto mb-[22px] h-[120px] w-[120px] overflow-hidden rounded-full border border-brass/40 transition-shadow duration-300 group-hover:shadow-[0_0_0_3px_rgba(185,147,91,0.2)]">
                    <Image
                      src={urlFor(member.photo)
                        .width(240)
                        .height(240)
                        .quality(80)
                        .url()}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="mx-auto mb-[22px] flex h-[120px] w-[120px] items-center justify-center rounded-full border border-brass/40 bg-pine transition-shadow duration-300 group-hover:shadow-[0_0_0_3px_rgba(185,147,91,0.2)]">
                    <span className="font-display text-[34px] text-brass-light">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}

                <h3 className="mb-[5px] text-[21px] text-cream">
                  {member.name}
                </h3>
                <p className="mb-4 text-[13px] tracking-[0.05em] text-brass-light">
                  {member.role}
                </p>
                <p className="text-sm leading-[1.7] text-parchment-faint">
                  {member.bio}
                </p>
              </div>
            ))}
      </div>
    </section>
  );
}
