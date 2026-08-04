import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PhotoGallery } from "@/components/PhotoGallery";
import { getGalleryAlbums } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Photos from life at God's City International Church.",
};

export const revalidate = 300;

export default async function GalleryPage() {
  const albums = await getGalleryAlbums();
  const images = albums.flatMap((album) =>
    album.images.map((img) => ({ image: img.image, alt: img.alt, albumTitle: album.title }))
  );

  return (
    <>
      <PageHeader title="Photo Gallery" crumbLabel="Photo Gallery" crumbHref="/gallery" eyebrow="Media" />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        {images.length === 0 ? (
          <p className="mx-auto max-w-xl text-center font-sans text-ink-600">
            No photos have been added to the gallery yet. Check back soon.
          </p>
        ) : (
          <div className="mx-auto max-w-6xl">
            <PhotoGallery images={images} />
          </div>
        )}
      </section>
    </>
  );
}
