import { defineField, defineType } from "sanity";

// Deliberately separate from `leader` — used to enforce "verified staff only"
// authorship on blogPost (see GCIC-WEBSITE-BUILD-PROMPT.md §5.26 / §7), so the
// blog can never again be hijacked into an open, spam-injectable feed.
export const staffAuthor = defineType({
  name: "staffAuthor",
  title: "Staff Author",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "role", title: "Role", type: "string" }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
});
