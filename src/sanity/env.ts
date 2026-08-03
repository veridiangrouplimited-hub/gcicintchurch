// NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET are required before
// the Studio or any live content fetch will work — see .env.local.example and
// GCIC-WEBSITE-BUILD-PROMPT.md §9. Falls back to placeholders so `npm run dev` /
// `npm run build` don't crash before a Sanity project has been created.
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder-project-id";
