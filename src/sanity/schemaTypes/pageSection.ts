import { defineField, defineType } from "sanity";

// Generic, church-editable copy block for marketing pages that don't warrant
// their own document type (see GCIC-WEBSITE-BUILD-PROMPT.md §7).
export const pageSection = defineType({
  name: "pageSection",
  title: "Page Section",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page",
      type: "string",
      options: {
        list: [
          "home",
          "new-here",
          "about",
          "about-leadership",
          "about-membership-class",
          "give",
          "get-involved",
          "prayer",
          "testimony",
          "contact",
          "night-vigil",
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "sectionKey", title: "Section key", type: "string", validation: (r) => r.required() }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    select: { title: "sectionKey", subtitle: "page" },
  },
});
