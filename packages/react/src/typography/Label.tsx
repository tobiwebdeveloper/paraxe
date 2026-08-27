import type { LabelProps } from "@paraxe/core";
import type { ReactNode } from "react";
export type LabelComponentProps = LabelProps & { children?: ReactNode };
export function Label({
  for: htmlFor,
  required = false,
  optional = false,
  disabled = false,
  children,
}: LabelComponentProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`label${disabled ? " label-disabled" : ""}`}
    >
      {children}
      {required ? (
        <span aria-hidden="true">*</span>
      ) : optional ? (
        <span> (optional)</span>
      ) : null}
    </label>
  );
}
