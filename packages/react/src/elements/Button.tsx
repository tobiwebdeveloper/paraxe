import type { ButtonProps } from "@paraxe/core";
import type { ReactNode } from "react";
export type ButtonComponentProps = ButtonProps & {
  children?: ReactNode;
  onActivate?: () => void;
};
export function Button({
  variant = "primary",
  size = "medium",
  width = "auto",
  disabled = false,
  loading = false,
  onActivate,
  children,
}: ButtonComponentProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}${width === "full" ? " btn-full" : ""}`}
      disabled={disabled || loading}
      onClick={() => onActivate?.()}
    >
      {children}
    </button>
  );
}
