import { defineField, defineType } from "sanity";

export const testimony = defineType({
  name: "testimony",
  title: "Testimony",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "email",
      title: "Email (private)",
      type: "string",
      description: "Never expose this field in public-facing GROQ projections.",
    }),
    defineField({ name: "testimonyText", title: "Testimony", type: "text", rows: 6, validation: (r) => r.required() }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["pending", "approved", "rejected"] },
      initialValue: "pending",
      validation: (r) => r.required(),
    }),
    defineField({ name: "submittedAt", title: "Submitted at", type: "datetime", readOnly: true }),
    defineField({ name: "approvedAt", title: "Approved at", type: "datetime" }),
  ],
  orderings: [{ title: "Newest first", name: "submittedDesc", by: [{ field: "submittedAt", direction: "desc" }] }],
  preview: {
    select: { title: "name", subtitle: "status" },
  },
});
