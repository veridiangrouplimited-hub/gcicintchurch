import type { PortableTextBlock } from "sanity";
import { client } from "./client";

export type Sermon = {
  _id: string;
  title: string;
  slug: string;
  speakerName: string | null;
  speakerRefName: string | null;
  series: string | null;
  scriptureRefs: string[] | null;
  date: string;
  videoUrl: string | null;
  audioUrl: string | null;
  description: string | null;
};

export type Devotional = {
  _id: string;
  title: string;
  slug: string;
  date: string;
  scriptureRef: string | null;
  scriptureText: string | null;
  wordsOfWisdom: PortableTextBlock[] | null;
  assignment: PortableTextBlock[] | null;
  prayerPoints: string[] | null;
  declaration: string | null;
  bibleInAYearRef: string | null;
};

export type GalleryAlbum = {
  _id: string;
  title: string;
  category: string | null;
  images: { image: unknown; alt: string }[];
};

const sermonProjection = `{
  _id,
  title,
  "slug": slug.current,
  speakerName,
  "speakerRefName": speaker->name,
  series,
  scriptureRefs,
  date,
  videoUrl,
  audioUrl,
  description
}`;

export async function getSermons(): Promise<Sermon[]> {
  return client.fetch(
    `*[_type == "sermon"] | order(date desc) ${sermonProjection}`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getSermonBySlug(slug: string): Promise<Sermon | null> {
  return client.fetch(
    `*[_type == "sermon" && slug.current == $slug][0] ${sermonProjection}`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

const devotionalProjection = `{
  _id,
  title,
  "slug": slug.current,
  date,
  scriptureRef,
  scriptureText,
  wordsOfWisdom,
  assignment,
  prayerPoints,
  declaration,
  bibleInAYearRef
}`;

export async function getDevotionals(): Promise<Devotional[]> {
  return client.fetch(
    `*[_type == "devotional"] | order(date desc) ${devotionalProjection}`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getDevotionalBySlug(slug: string): Promise<Devotional | null> {
  return client.fetch(
    `*[_type == "devotional" && slug.current == $slug][0] ${devotionalProjection}`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function getGalleryAlbums(): Promise<GalleryAlbum[]> {
  return client.fetch(
    `*[_type == "galleryAlbum"]{ _id, title, category, images }`,
    {},
    { next: { revalidate: 300 } }
  );
}

export type ChurchEvent = {
  _id: string;
  title: string;
  slug: string;
  description: PortableTextBlock[] | null;
  startDateTime: string;
  endDateTime: string | null;
  location: string | null;
  isRecurring: boolean;
  recurrenceRule: string | null;
  ministryName: string | null;
  ministrySlug: string | null;
  featured: boolean;
};

const eventProjection = `{
  _id,
  title,
  "slug": slug.current,
  description,
  startDateTime,
  endDateTime,
  location,
  isRecurring,
  recurrenceRule,
  "ministryName": ministry->name,
  "ministrySlug": ministry->slug.current,
  featured
}`;

export async function getEvents(): Promise<ChurchEvent[]> {
  return client.fetch(`*[_type == "event"] ${eventProjection}`, {}, { next: { revalidate: 60 } });
}

export async function getEventBySlug(slug: string): Promise<ChurchEvent | null> {
  return client.fetch(
    `*[_type == "event" && slug.current == $slug][0] ${eventProjection}`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export type Testimony = { _id: string; name: string; testimonyText: string; submittedAt: string };

export async function getApprovedTestimonies(): Promise<Testimony[]> {
  return client.fetch(
    `*[_type == "testimony" && status == "approved"] | order(approvedAt desc) { _id, name, testimonyText, submittedAt }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  authorName: string | null;
  category: string | null;
  heroImage: unknown;
  body: PortableTextBlock[] | null;
  publishedAt: string;
  excerpt: string | null;
};

const blogPostProjection = `{
  _id,
  title,
  "slug": slug.current,
  "authorName": author->name,
  category,
  heroImage,
  body,
  publishedAt,
  excerpt
}`;

export async function getBlogPosts(): Promise<BlogPost[]> {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) ${blogPostProjection}`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] ${blogPostProjection}`,
    { slug },
    { next: { revalidate: 60 } }
  );
}
