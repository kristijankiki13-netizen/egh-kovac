import type { CSSProperties } from "react";

type BlueprintImageProps = {
  /** Unsplash or CDN URL — replace with the client's real photo when available. */
  src: string;
  alt: string;
  /** Classes for the wrapping container (sizing, rounding, positioning). */
  className?: string;
  /** Classes for the inner <img> (object-fit, object-position tweaks). */
  imgClassName?: string;
  /** Optional override for the navy overlay (default: bg-blue-900/20). */
  overlayClassName?: string;
  /** Optional slot label rendered only in development for easy QA. */
  slot?: "A" | "B" | "C";
};

const blueprintStyle: CSSProperties = {
  filter: "grayscale(1) contrast(1.2)",
};

/**
 * BlueprintImage
 * Consistent "blueprint" treatment for every photo on the site:
 *   - grayscale(1) contrast(1.2) CSS filter
 *   - navy blue semi-transparent overlay (bg-blue-950/40)
 *
 * NOTE: We intentionally use a native <img> (not next/image) during the
 * prototype phase to avoid Next.js image optimization errors at deploy time.
 */
export function BlueprintImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  overlayClassName = "bg-blue-900/20",
  slot,
}: BlueprintImageProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      data-blueprint-slot={slot}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={blueprintStyle}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
      <div className={`pointer-events-none absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
