import type { StructureResolver } from "sanity/structure";

// Desk structure grouped as: Content, Engagement, Programme, People, Site
// (see GCIC-WEBSITE-BUILD-PROMPT.md §7).
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.listItem()
        .title("Content")
        .child(
          S.list()
            .title("Content")
            .items([
              S.documentTypeListItem("sermon").title("Sermons"),
              S.documentTypeListItem("devotional").title("Devotionals"),
              S.documentTypeListItem("blogPost").title("Blog Posts"),
            ])
        ),
      S.listItem()
        .title("Engagement")
        .child(
          S.list()
            .title("Engagement")
            .items([
              S.listItem()
                .title("Testimonies — Pending")
                .child(
                  S.documentList()
                    .title("Pending testimonies")
                    .schemaType("testimony")
                    .filter('_type == "testimony" && status == "pending"')
                ),
              S.listItem()
                .title("Testimonies — Approved")
                .child(
                  S.documentList()
                    .title("Approved testimonies")
                    .schemaType("testimony")
                    .filter('_type == "testimony" && status == "approved"')
                ),
            ])
        ),
      S.listItem()
        .title("Programme")
        .child(
          S.list()
            .title("Programme")
            .items([
              S.documentTypeListItem("ministry").title("Ministries"),
              S.documentTypeListItem("event").title("Events"),
              S.documentTypeListItem("serviceTime").title("Service Times"),
            ])
        ),
      S.listItem()
        .title("People")
        .child(
          S.list()
            .title("People")
            .items([
              S.documentTypeListItem("leader").title("Leaders"),
              S.documentTypeListItem("staffAuthor").title("Staff Authors"),
            ])
        ),
      S.listItem()
        .title("Site")
        .child(
          S.list()
            .title("Site")
            .items([
              S.documentTypeListItem("announcement").title("Announcements"),
              S.documentTypeListItem("galleryAlbum").title("Gallery Albums"),
              S.documentTypeListItem("pageSection").title("Page Sections"),
            ])
        ),
    ]);
