import type { ButtonGroupProps } from "@paraxe/core";
import type { ReactNode } from "react";
export function ButtonGroup({
  align = "start",
  stack = false,
  children,
}: ButtonGroupProps & { children?: ReactNode }) {
  return (
    <div
      className={`button-group${align === "center" ? " button-group--center" : align === "end" ? " button-group--end" : ""}${stack ? " button-group--stack" : ""}`}
    >
      {children}
    </div>
  );
}
