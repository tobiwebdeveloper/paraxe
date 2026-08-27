import type { SectionHeaderProps } from "@paraxe/core";
import type { ReactNode } from "react";
export function SectionHeader({
  width = "default",
  align = "left",
  children,
}: SectionHeaderProps & { children?: ReactNode }) {
  return (
    <header
      className={`section-header${width === "wide" ? " section-header--wide" : ""}${align === "center" ? " section-header--center" : ""}`}
    >
      {children}
    </header>
  );
}
