/**
 * Attaches a hero image to each of the three seeded blog posts (see
 * scripts/seed-blog.ts). Reuses real GCIC photography already in
 * public/images rather than uploading new binaries.
 *
 *   npx tsx scripts/seed-blog-images.ts
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { createReadStream } from "node:fs";
import path from "node:path";

config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: "2024-01-01", token, useCdn: false });

const imagesDir = path.join(__dirname, "..", "public", "images");

async function uploadImage(filename: string) {
  const filePath = path.join(imagesDir, filename);
  const asset = await client.assets.upload("image", createReadStream(filePath), { filename });
  return asset;
}

const posts = [
  { id: "blogPost.vine-and-branches", file: "worship-hands-raised.jpg", alt: "Worship at GCIC" },
  { id: "blogPost.bearing-one-anothers-burdens", file: "serving-team.jpg", alt: "GCIC members serving together" },
  { id: "blogPost.you-are-what-you-think-and-say", file: "pastor-mic-blue.jpg", alt: "A GCIC pastor speaking" },
];

async function run() {
  for (const p of posts) {
    console.log(`Uploading ${p.file}...`);
    const asset = await uploadImage(p.file);
    await client
      .patch(p.id)
      .set({ heroImage: { _type: "image", asset: { _type: "reference", _ref: asset._id } } })
      .commit();
    console.log(`  ✓ ${p.id}`);
  }
  console.log("\nBlog image seed complete.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
