/**
 * Seeds the three legitimate, non-spam blog posts recovered from the
 * compromised old site's crawl — see GCIC-WEBSITE-BUILD-PROMPT.md §12. The
 * old blog feed was hijacked with hundreds of gambling/dating/legal-services
 * spam posts; these three ("I AM The Vine, You Are The Branches", "Bearing
 * One Another's Burdens", "You Are What You Think And Say") were read in
 * full and confirmed clean, category "Christianity", from
 * pages/page-b082e3.md, pages/page-ca5978.md, pages/page-46b688.md in the
 * recovered scrape. Everything else in that feed still needs individual
 * screening before use — this is not a bulk import.
 *
 *   npx tsx scripts/seed-blog.ts
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import burdensBody from "./seed-content/burdens.json";
import thinksayBody from "./seed-content/thinksay.json";
import vineBody from "./seed-content/vine.json";

config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: "2024-01-01", token, useCdn: false });

async function seedBlog() {
  console.log("Seeding staff author...");
  await client.createOrReplace({
    _id: "staffAuthor.gcicMedia",
    _type: "staffAuthor",
    name: "GCIC Media Team",
    role: "Content Team",
  });
  console.log("  ✓ staffAuthor.gcicMedia");

  const posts = [
    {
      _id: "blogPost.vine-and-branches",
      title: "I AM The Vine, You Are The Branches",
      slug: { _type: "slug", current: "i-am-the-vine-you-are-the-branches" },
      category: "Christianity",
      excerpt:
        "What does Jesus mean when He says “I am the vine, you are the branches” — and what does it actually look like to remain in Him?",
      publishedAt: "2018-03-02T09:00:00.000Z",
      body: vineBody,
    },
    {
      _id: "blogPost.bearing-one-anothers-burdens",
      title: "Bearing One Another's Burdens",
      slug: { _type: "slug", current: "bearing-one-anothers-burdens" },
      category: "Christianity",
      excerpt:
        "Why does Jesus ask us to bear one another's burdens? A look at Galatians 6:2 and practical ways to carry each other's weight.",
      publishedAt: "2018-03-02T09:00:00.000Z",
      body: burdensBody,
    },
    {
      _id: "blogPost.you-are-what-you-think-and-say",
      title: "You Are What You Think And Say",
      slug: { _type: "slug", current: "you-are-what-you-think-and-say" },
      category: "Christianity",
      excerpt:
        "“As a man thinks in his heart, so is he” — what Proverbs 23:7 reveals about the heart behind our words.",
      publishedAt: "2022-03-07T09:00:00.000Z",
      body: thinksayBody,
    },
  ];

  for (const p of posts) {
    const { _id, ...rest } = p;
    await client.createOrReplace({
      _id,
      _type: "blogPost",
      ...rest,
      author: { _type: "reference", _ref: "staffAuthor.gcicMedia" },
    });
    console.log(`  ✓ ${p.title}`);
  }

  console.log("\nBlog seed complete.");
}

seedBlog().catch((err) => {
  console.error(err);
  process.exit(1);
});
