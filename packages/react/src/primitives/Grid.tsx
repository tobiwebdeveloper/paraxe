import type { GridProps } from "@paraxe/core";
import type { ReactNode } from "react";
export function Grid({
  columns = 1,
  rows = 1,
  size = "medium",
  children,
}: GridProps & { children?: ReactNode }) {
  return (
    <div
      className={`${size === "small" ? "grid-sm" : size === "large" ? "grid-lg" : "grid"} grid-cols-${columns} grid-rows-${rows}`}
    >
      {children}
    </div>
  );
}
