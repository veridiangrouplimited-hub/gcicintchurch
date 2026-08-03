import { defineField, defineType } from "sanity";

export const announcement = defineType({
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    defineField({ name: "text", title: "Text", type: "string", validation: (r) => r.required() }),
    defineField({ name: "linkLabel", title: "Link label", type: "string" }),
    defineField({ name: "linkHref", title: "Link href", type: "string" }),
    defineField({ name: "startDate", title: "Start date", type: "datetime" }),
    defineField({ name: "endDate", title: "End date", type: "datetime" }),
    defineField({ name: "isActive", title: "Active", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: { title: "text", subtitle: "isActive" },
  },
});
