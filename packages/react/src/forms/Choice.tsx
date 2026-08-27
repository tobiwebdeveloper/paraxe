import type { ChoiceProps } from "@paraxe/core";
import type { ReactNode } from "react";
import { useChoiceGroup } from "./ChoiceGroup";
export function Choice({
  value,
  disabled = false,
  children,
}: ChoiceProps & { children?: ReactNode }) {
  const group = useChoiceGroup();
  if (!group) throw new Error("Choice must be used inside a ChoiceGroup.");
  const selected = group.isSelected(value);
  const isDisabled = disabled || group.disabled;
  return (
    <button
      type="button"
      className={`choice${selected ? " choice--selected" : ""}${isDisabled ? " choice--disabled" : ""}`}
      disabled={isDisabled}
      aria-pressed={selected}
      onClick={() => {
        if (!isDisabled) group.toggleChoice(value);
      }}
    >
      {children}
    </button>
  );
}
