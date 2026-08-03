import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // Singleton — the Studio desk structure should only ever expose one instance of this document.
  fields: [
    defineField({ name: "churchName", title: "Church name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "shortName", title: "Short name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "mandateStatement", title: "Mandate statement", type: "string" }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        defineField({ name: "line1", title: "Line 1", type: "string" }),
        defineField({ name: "line2", title: "Line 2", type: "string" }),
        defineField({ name: "city", title: "City", type: "string" }),
        defineField({ name: "country", title: "Country", type: "string" }),
      ],
    }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "socials",
      title: "Social links",
      type: "object",
      fields: [
        defineField({ name: "facebook", title: "Facebook", type: "url" }),
        defineField({ name: "instagram", title: "Instagram", type: "url" }),
        defineField({ name: "twitter", title: "Twitter / X", type: "url" }),
        defineField({ name: "youtube", title: "YouTube", type: "url" }),
        defineField({ name: "spotify", title: "Spotify", type: "url" }),
      ],
    }),
    defineField({
      name: "giving",
      title: "Giving details",
      type: "object",
      fields: [
        defineField({ name: "ngnAccountName", title: "NGN account name", type: "string" }),
        defineField({ name: "ngnAccountNumber", title: "NGN account number", type: "string" }),
        defineField({ name: "ngnBankName", title: "NGN bank name", type: "string" }),
        defineField({ name: "forexAccountName", title: "Forex account name", type: "string" }),
        defineField({ name: "forexAccountNumber", title: "Forex account number", type: "string" }),
        defineField({ name: "forexSwift", title: "Forex SWIFT", type: "string" }),
        defineField({ name: "forexSortCode", title: "Forex sort code", type: "string" }),
        defineField({
          name: "categories",
          title: "Giving categories",
          type: "array",
          of: [{ type: "string" }],
          options: {
            list: ["Offering", "Tithe", "Seed", "First Fruit", "Thanksgiving Offering", "Others"],
          },
        }),
      ],
    }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "wordmarkSvg", title: "Wordmark SVG", type: "file" }),
    defineField({ name: "favicon", title: "Favicon", type: "image" }),
    defineField({
      name: "defaultSeo",
      title: "Default SEO",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
        defineField({ name: "ogImage", title: "OG image", type: "image" }),
      ],
    }),
  ],
});
