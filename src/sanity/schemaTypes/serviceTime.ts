import { defineField, defineType } from "sanity";

export const serviceTime = defineType({
  name: "serviceTime",
  title: "Service Time",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "days",
      title: "Days",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    }),
    defineField({ name: "time", title: "Time", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "cadence",
      title: "Cadence",
      type: "string",
      options: {
        list: [
          { title: "Weekly", value: "weekly" },
          { title: "Daily", value: "daily" },
          { title: "Monthly — last Friday", value: "monthlyLastFriday" },
          { title: "Monthly — last Thursday", value: "monthlyLastThursday" },
          { title: "Bi-monthly", value: "biMonthly" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "ministry", title: "Ministry", type: "reference", to: [{ type: "ministry" }] }),
    defineField({ name: "isFeatured", title: "Featured on homepage strip", type: "boolean", initialValue: false }),
  ],
  preview: {
    select: { title: "label", subtitle: "time" },
  },
});
