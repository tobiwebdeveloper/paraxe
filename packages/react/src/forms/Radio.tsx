import type { RadioProps } from "@paraxe/core";
import type { ReactNode } from "react";
export type RadioComponentProps = RadioProps & {
  children?: ReactNode;
  onModelValueChange?: (value: string | number) => void;
};
export function Radio({
  modelValue = null,
  value,
  name,
  disabled = false,
  onModelValueChange,
  children,
}: RadioComponentProps) {
  const checked = modelValue === value;
  return (
    <label
      className={`radio${checked ? " radio--checked" : ""}${disabled ? " radio--disabled" : ""}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        className="sr-only"
        onChange={() => onModelValueChange?.(value)}
      />
      <span className="radio-control" aria-hidden="true" />
      <span>{children}</span>
    </label>
  );
}
