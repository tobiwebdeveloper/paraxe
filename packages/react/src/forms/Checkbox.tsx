import type { CheckboxProps } from "@paraxe/core";
import type { ReactNode } from "react";
export type CheckboxComponentProps = CheckboxProps & {
  children?: ReactNode;
  onModelValueChange?: (value: boolean) => void;
};
export function Checkbox({
  modelValue = false,
  disabled = false,
  required = false,
  name,
  onModelValueChange,
  children,
}: CheckboxComponentProps) {
  return (
    <label
      className={`checkbox${modelValue ? " checkbox--checked" : ""}${disabled ? " checkbox--disabled" : ""}`}
    >
      <input
        className="checkbox-input"
        type="checkbox"
        name={name}
        checked={modelValue}
        disabled={disabled}
        required={required}
        onChange={(event) => onModelValueChange?.(event.currentTarget.checked)}
      />
      <span className="checkbox-control" aria-hidden="true" />
      <span className="checkbox-label">{children}</span>
    </label>
  );
}
