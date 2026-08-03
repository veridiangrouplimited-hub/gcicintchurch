import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
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
    defineField({ name: "description", title: "Description", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "startDateTime", title: "Start", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "endDateTime", title: "End", type: "datetime" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "isRecurring", title: "Recurring", type: "boolean", initialValue: false }),
    defineField({
      name: "recurrenceRule",
      title: "Recurrence rule (RRULE)",
      type: "string",
      description: "e.g. FREQ=MONTHLY;BYDAY=-1FR for 'last Friday of every month'",
      hidden: ({ document }) => !document?.isRecurring,
    }),
    defineField({ name: "ministry", title: "Ministry", type: "reference", to: [{ type: "ministry" }] }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
  ],
  orderings: [{ title: "Soonest first", name: "startAsc", by: [{ field: "startDateTime", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "location", media: "image" },
  },
});
