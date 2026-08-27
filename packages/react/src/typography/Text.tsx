import type { TextProps } from "@paraxe/core";
import type { ReactNode } from "react";
export type TextComponentProps = TextProps & { children?: ReactNode };
export function Text({
  as = "p",
  tone = "primary",
  children,
}: TextComponentProps) {
  const Tag = as;
  return <Tag className={`text-${tone}`}>{children}</Tag>;
}
