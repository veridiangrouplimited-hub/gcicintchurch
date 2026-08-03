"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/image";

type GalleryImage = { image: unknown; alt: string; albumTitle: string };

export function PhotoGallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : Math.min(i + 1, images.length - 1)));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : Math.max(i - 1, 0)));
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, images.length]);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="mb-4 block w-full overflow-hidden rounded-[var(--radius-media)] border border-sand-200"
          >
            <Image
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              src={urlFor(img.image as any).width(600).url()}
              alt={img.alt}
              width={600}
              height={450}
              className="h-auto w-full object-cover transition-transform hover:scale-105"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 text-3xl text-ivory"
            onClick={() => setLightboxIndex(null)}
          >
            &times;
          </button>
          {lightboxIndex > 0 && (
            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-4 text-4xl text-ivory"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? i : Math.max(i - 1, 0)));
              }}
            >
              &larr;
            </button>
          )}
          {lightboxIndex < images.length - 1 && (
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-4 text-4xl text-ivory"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? i : Math.min(i + 1, images.length - 1)));
              }}
            >
              &rarr;
            </button>
          )}
          <div className="relative max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              src={urlFor(images[lightboxIndex].image as any).width(1600).url()}
              alt={images[lightboxIndex].alt}
              width={1600}
              height={1200}
              className="max-h-[85vh] w-auto rounded-[var(--radius-media)] object-contain"
            />
            <p className="mt-2 text-center font-sans text-sm text-ivory/80">{images[lightboxIndex].albumTitle}</p>
          </div>
        </div>
      )}
    </>
  );
}
