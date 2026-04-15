import { createClient } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "wf09a0lh",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export type SanityProject = {
  _id: string;
  title: string;
  beforeImage: SanityImageSource;
  afterImage: SanityImageSource;
  alt?: string;
  order?: number;
};

const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  beforeImage,
  afterImage,
  alt,
  order
}`;

export async function fetchProjects(): Promise<SanityProject[]> {
  return sanityClient.fetch(PROJECTS_QUERY);
}

export type SanityTeamMember = {
  _id: string;
  name: string;
  role: string;
  photo?: SanityImageSource;
  bio: string;
  order?: number;
};

const TEAM_QUERY = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  photo,
  bio,
  order
}`;

export async function fetchTeamMembers(): Promise<SanityTeamMember[]> {
  return sanityClient.fetch(TEAM_QUERY);
}

export type SanityTestimonial = {
  _id: string;
  quote: string;
  name: string;
  location?: string;
  order?: number;
};

const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc) {
  _id,
  quote,
  name,
  location,
  order
}`;

export async function fetchTestimonials(): Promise<SanityTestimonial[]> {
  return sanityClient.fetch(TESTIMONIALS_QUERY);
}
