import type { SwitchProps } from "@paraxe/core";
import type { ReactNode } from "react";
export type SwitchComponentProps = SwitchProps & {
  children?: ReactNode;
  onModelValueChange?: (value: boolean) => void;
};
export function Switch({
  modelValue = false,
  disabled = false,
  onModelValueChange,
  children,
}: SwitchComponentProps) {
  return (
    <label
      className={`switch${modelValue ? " switch--checked" : ""}${disabled ? " switch--disabled" : ""}`}
    >
      <input
        type="checkbox"
        role="switch"
        checked={modelValue}
        disabled={disabled}
        className="sr-only"
        onChange={(event) => onModelValueChange?.(event.currentTarget.checked)}
      />
      <span className="switch-control" aria-hidden="true" />
      <span>{children}</span>
    </label>
  );
}
