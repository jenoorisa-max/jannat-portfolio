import { useState } from "react";
import type { ImageAsset } from "../../types/content";

const aspectClass: Record<string, string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[16/10]",
  wide: "aspect-[21/9]",
  card: "aspect-[4/3]",
};

interface ImageSlotProps {
  image: ImageAsset;
  aspect?: keyof typeof aspectClass;
  className?: string;
  showCaption?: boolean;
}

export function ImageSlot({
  image,
  aspect = "card",
  className = "",
  showCaption = false,
}: ImageSlotProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(image.src) && !failed;

  return (
    <figure className={`overflow-hidden ${className}`}>
      <div
        className={`${aspectClass[aspect]} relative w-full overflow-hidden rounded-[1.25rem] border border-sand/70 bg-cream`}
      >
        {showImage ? (
          <img
            src={image.src ?? undefined}
            alt={image.alt}
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            role="img"
            aria-label={`${image.alt}. Photograph to be added later.`}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[linear-gradient(165deg,#e6d9c6,#cbb99a)] px-4 text-center"
          >
            <span className="font-serif text-3xl text-bronze/80">JF</span>
            <span className="max-w-[14rem] text-xs tracking-[0.14em] text-mute uppercase">
              {image.caption ?? "Image to be added"}
            </span>
          </div>
        )}
      </div>
      {showCaption ? (
        <figcaption className="mt-2 text-sm text-mute">{image.alt}</figcaption>
      ) : null}
    </figure>
  );
}
