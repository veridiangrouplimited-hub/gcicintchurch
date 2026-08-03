import { defineField, defineType } from "sanity";

export const devotional = defineType({
  name: "devotional",
  title: "Devotional",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "scriptureRef", title: "Scripture reference", type: "string" }),
    defineField({ name: "scriptureText", title: "Scripture text", type: "text", rows: 3 }),
    defineField({ name: "wordsOfWisdom", title: "Words of wisdom", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "assignment", title: "Assignment", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "prayerPoints", title: "Prayer points", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "declaration", title: "Prophetic declaration", type: "text", rows: 3 }),
    defineField({ name: "bibleInAYearRef", title: "Bible in a Year reference", type: "string" }),
    defineField({
      name: "relatedArticles",
      title: "Related articles",
      type: "array",
      of: [{ type: "reference", to: [{ type: "devotional" }, { type: "blogPost" }] }],
    }),
  ],
  orderings: [{ title: "Newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "scriptureRef" },
  },
});
