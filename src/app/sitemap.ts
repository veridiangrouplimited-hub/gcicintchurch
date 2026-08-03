import type { MetadataRoute } from "next";
import { ministries } from "@/content/ministries";
import { getBlogPosts, getDevotionals, getEvents, getSermons } from "@/sanity/queries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const staticRoutes = [
  "/",
  "/new-here",
  "/about",
  "/about/leadership",
  "/about/membership-class",
  "/ministries",
  "/watch",
  "/sermons",
  "/devotionals",
  "/radio",
  "/events",
  "/give",
  "/get-involved",
  "/prayer",
  "/testimony",
  "/contact",
  "/night-vigil",
  "/blog",
  "/gallery",
  "/privacy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [sermons, devotionals, events, blogPosts] = await Promise.all([
    getSermons(),
    getDevotionals(),
    getEvents(),
    getBlogPosts(),
  ]);

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  for (const m of ministries) {
    entries.push({ url: `${siteUrl}/ministries/${m.slug}`, lastModified: new Date() });
  }
  for (const s of sermons) {
    entries.push({ url: `${siteUrl}/sermons/${s.slug}`, lastModified: new Date(s.date) });
  }
  for (const d of devotionals) {
    entries.push({ url: `${siteUrl}/devotionals/${d.slug}`, lastModified: new Date(d.date) });
  }
  for (const e of events) {
    entries.push({ url: `${siteUrl}/events/${e.slug}`, lastModified: new Date() });
  }
  for (const p of blogPosts) {
    entries.push({ url: `${siteUrl}/blog/${p.slug}`, lastModified: new Date(p.publishedAt) });
  }

  return entries;
}
