import type { CardProps } from "@paraxe/core";
import type { ReactNode } from "react";
export function Card({
  variant = "default",
  as = "div",
  children,
}: CardProps & { children?: ReactNode }) {
  const Tag = as as keyof React.JSX.IntrinsicElements;
  return <Tag className={`card card-${variant}`}>{children}</Tag>;
}
