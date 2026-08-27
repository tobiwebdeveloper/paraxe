import type { SkeletonProps } from "@paraxe/core";
export function Skeleton({
  variant = "default",
  width,
  height,
}: SkeletonProps) {
  return (
    <div
      className={`skeleton${variant === "default" ? "" : ` skeleton--${variant}`}`}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}
