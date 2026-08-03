import { defineField, defineType } from "sanity";

export const ministry = defineType({
  name: "ministry",
  title: "Ministry",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "anchorScripture",
      title: "Anchor scripture",
      type: "object",
      fields: [
        defineField({ name: "reference", title: "Reference", type: "string" }),
        defineField({ name: "text", title: "Text", type: "text", rows: 3 }),
      ],
    }),
    defineField({ name: "meetingInfo", title: "Meeting info", type: "reference", to: [{ type: "serviceTime" }] }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
    defineField({ name: "ctaHref", title: "CTA link", type: "string" }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
  ],
  orderings: [
    { title: "Sort order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "summary", media: "heroImage" },
  },
});
