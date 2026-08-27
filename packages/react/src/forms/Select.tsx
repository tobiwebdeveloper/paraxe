import type { SelectProps } from "@paraxe/core";
import type { ReactNode } from "react";
export type SelectComponentProps = SelectProps & {
  children?: ReactNode;
  onModelValueChange?: (value: string) => void;
};
export function Select({
  modelValue = "",
  disabled = false,
  error = false,
  success = false,
  onModelValueChange,
  children,
}: SelectComponentProps) {
  return (
    <select
      className={`select${error ? " input-error" : ""}${success ? " input-success" : ""}`}
      value={modelValue}
      disabled={disabled}
      onChange={(event) => onModelValueChange?.(event.currentTarget.value)}
    >
      {children}
    </select>
  );
}
