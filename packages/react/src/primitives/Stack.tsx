import type { StackProps } from "@paraxe/core";
import type { ReactNode } from "react";
export function Stack({
  size = "medium",
  fullWidth = false,
  children,
}: StackProps & { children?: ReactNode }) {
  return (
    <div
      className={`${size === "small" ? "stack-sm" : size === "large" ? "stack-lg" : "stack"}${fullWidth ? " stack-full" : ""}`}
    >
      {children}
    </div>
  );
}
