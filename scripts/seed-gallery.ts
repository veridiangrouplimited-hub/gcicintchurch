/**
 * Seeds two galleryAlbum documents (Children, Community) using real
 * congregation photos recovered from the old site — see
 * GCIC-WEBSITE-BUILD-PROMPT.md §5.6-5.13 (children photo gallery) and §5.27.
 *
 * Unlike scripts/seed.ts, this uploads actual image binaries as Sanity
 * assets first, then references them from the album documents.
 *
 *   npx tsx scripts/seed-gallery.ts
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

const assetsDir = path.join(__dirname, "gallery-assets");

async function uploadImage(relativePath: string) {
  const filePath = path.join(assetsDir, relativePath);
  const asset = await client.assets.upload("image", createReadStream(filePath), {
    filename: path.basename(filePath),
  });
  return asset;
}

async function seedGallery() {
  console.log("Uploading children ministry photos...");
  const childrenFiles = ["children-1.png", "children-3.png", "children-4.png", "children-5.png", "children-6.png", "babies.png"];
  const childrenImages = [];
  for (const f of childrenFiles) {
    const asset = await uploadImage(path.join("children", f));
    childrenImages.push({
      _key: asset._id,
      _type: "galleryImage",
      image: { _type: "image", asset: { _type: "reference", _ref: asset._id } },
      alt: "GCIC Children and Youth Club",
    });
    console.log(`  ✓ ${f}`);
  }

  await client.createOrReplace({
    _id: "galleryAlbum.children",
    _type: "galleryAlbum",
    title: "Children and Youth Club",
    category: "Children",
    images: childrenImages,
  });
  console.log("✓ galleryAlbum.children");

  console.log("Uploading community/worship photos...");
  const communityFiles = [
    { file: "praise-concert.jpg", alt: "Praise concert at GCIC" },
    { file: "communion.jpg", alt: "Communion service at GCIC" },
    { file: "community-1.jpg", alt: "GCIC congregation" },
    { file: "community-2.jpg", alt: "GCIC congregation" },
    { file: "worship.jpg", alt: "Worship at GCIC" },
  ];
  const communityImages = [];
  for (const { file, alt } of communityFiles) {
    const asset = await uploadImage(path.join("community", file));
    communityImages.push({
      _key: asset._id,
      _type: "galleryImage",
      image: { _type: "image", asset: { _type: "reference", _ref: asset._id } },
      alt,
    });
    console.log(`  ✓ ${file}`);
  }

  await client.createOrReplace({
    _id: "galleryAlbum.community",
    _type: "galleryAlbum",
    title: "Worship & Community Life",
    category: "Worship",
    images: communityImages,
  });
  console.log("✓ galleryAlbum.community");

  console.log("\nGallery seed complete.");
}

seedGallery().catch((err) => {
  console.error(err);
  process.exit(1);
});
