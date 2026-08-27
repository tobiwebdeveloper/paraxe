import type { ContainerProps } from "@paraxe/core";
import type { ReactNode } from "react";
export function Container({
  size = "default",
  children,
}: ContainerProps & { children?: ReactNode }) {
  return (
    <div className={size === "narrow" ? "container-narrow" : "container"}>
      {children}
    </div>
  );
}
