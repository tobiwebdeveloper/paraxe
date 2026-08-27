import { createContext, useContext } from "react";
import type { ChoiceGroupContext, ChoiceGroupProps } from "@paraxe/core";
import type { ReactNode } from "react";
const ChoiceContext = createContext<ChoiceGroupContext | null>(null);
export type ChoiceGroupComponentProps = ChoiceGroupProps & {
  children?: ReactNode;
  onModelValueChange?: (
    value: string | number | Array<string | number> | null,
  ) => void;
};
export function ChoiceGroup({
  modelValue = null,
  multiple = false,
  disabled = false,
  onModelValueChange,
  children,
}: ChoiceGroupComponentProps) {
  const values = Array.isArray(modelValue)
    ? modelValue
    : modelValue == null
      ? []
      : [modelValue];
  const context: ChoiceGroupContext = {
    multiple,
    disabled,
    isSelected: (value) => values.includes(value),
    toggleChoice: (value) => {
      if (disabled) return;
      if (multiple) {
        const next = new Set(values);
        next.has(value) ? next.delete(value) : next.add(value);
        onModelValueChange?.(Array.from(next));
      } else onModelValueChange?.(value);
    },
  };
  return (
    <ChoiceContext.Provider value={context}>
      <div
        className={`choice-group${multiple ? " choice-group--multiple" : ""}`}
        role="group"
      >
        {children}
      </div>
    </ChoiceContext.Provider>
  );
}
export function useChoiceGroup() {
  return useContext(ChoiceContext);
}
