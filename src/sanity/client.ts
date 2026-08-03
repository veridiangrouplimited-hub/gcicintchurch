import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // CDN reads are fine (and faster) once content settles in production, but
  // they lag freshly-written content by up to a minute — a bad trade-off in
  // dev, where the loop is edit-content -> reload -> check.
  useCdn: process.env.NODE_ENV === "production",
  // Read-only token so server-side fetches work even if the dataset's
  // default visibility is private (the "production" dataset here is).
  token: process.env.SANITY_API_READ_TOKEN,
});
