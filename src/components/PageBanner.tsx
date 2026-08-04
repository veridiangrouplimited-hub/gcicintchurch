import Image from "next/image";

export function PageBanner({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="px-4 pt-8 sm:px-6 lg:px-8">
      <div className="relative mx-auto aspect-[21/9] w-full max-w-5xl overflow-hidden rounded-[var(--radius-media)] border border-sand-200">
        <Image src={image} alt={alt} fill className="object-cover" priority />
      </div>
    </div>
  );
}
