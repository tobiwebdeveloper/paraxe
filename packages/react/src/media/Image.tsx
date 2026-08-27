import type { ImageProps } from "@paraxe/core";
export function Image({
  src,
  alt,
  fit = "cover",
  aspectRatio = "auto",
}: ImageProps) {
  return (
    <div
      className={`media${aspectRatio === "auto" ? "" : ` media-${aspectRatio}`}${fit === "contain" ? " media-contain" : ""}`}
    >
      <img src={src} alt={alt} />
    </div>
  );
}
