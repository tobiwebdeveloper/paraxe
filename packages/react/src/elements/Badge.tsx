import type { BadgeProps } from "@paraxe/core";
import type { ReactNode } from "react";
export function Badge({
  variant = "default",
  children,
}: BadgeProps & { children?: ReactNode }) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
