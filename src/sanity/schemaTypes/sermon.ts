import { defineField, defineType } from "sanity";

export const sermon = defineType({
  name: "sermon",
  title: "Sermon",
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
    defineField({
      name: "speaker",
      title: "Speaker",
      type: "reference",
      to: [{ type: "leader" }],
    }),
    defineField({ name: "speakerName", title: "Speaker (free text, if not a listed leader)", type: "string" }),
    defineField({ name: "series", title: "Series", type: "string" }),
    defineField({
      name: "scriptureRefs",
      title: "Scripture references",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "videoUrl", title: "Video URL (YouTube)", type: "url" }),
    defineField({ name: "audioUrl", title: "Audio URL", type: "url" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "notesFile", title: "Notes file", type: "file" }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
  ],
  orderings: [{ title: "Newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "series", media: "speaker.photo" },
  },
});
