import type { HeadingProps } from "@paraxe/core";
import type { ReactNode } from "react";
export type HeadingComponentProps = HeadingProps & { children?: ReactNode };
export function Heading({ level = "h2", children }: HeadingComponentProps) {
  const Tag = level;
  const size =
    level === "h1"
      ? "heading-xl"
      : level === "h2"
        ? "heading-lg"
        : level === "h3"
          ? "heading-md"
          : level === "h4"
            ? "heading-sm"
            : "heading-xs";
  return <Tag className={size}>{children}</Tag>;
}
