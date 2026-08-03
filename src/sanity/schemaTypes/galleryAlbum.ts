import { defineField, defineType } from "sanity";

export const galleryAlbum = defineType({
  name: "galleryAlbum",
  title: "Gallery Album",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Children", "Women", "Worship", "Communion", "Community", "Events"],
      },
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          name: "galleryImage",
          fields: [
            defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
            defineField({ name: "alt", title: "Alt text", type: "string", validation: (r) => r.required() }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
});
