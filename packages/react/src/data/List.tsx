import { createContext, useContext } from "react";
import type { ListContext, ListModelValue, ListProps } from "@paraxe/core";
import type { ReactNode } from "react";
const ListContextValue = createContext<ListContext | null>(null);
export function List({
  selectable = false,
  multiple = false,
  modelValue = null,
  onModelValueChange,
  children,
}: ListProps & {
  modelValue?: ListModelValue;
  onModelValueChange?: (value: ListModelValue) => void;
  children?: ReactNode;
}) {
  const values = new Set(
    modelValue == null
      ? []
      : Array.isArray(modelValue)
        ? modelValue
        : [modelValue],
  );
  const context: ListContext = {
    selectable,
    multiple,
    isSelected: (v) => values.has(v),
    toggleSelection: (v) => {
      if (!selectable) return;
      const next = new Set(values);
      if (multiple) next.has(v) ? next.delete(v) : next.add(v);
      else next.has(v) ? next.clear() : (next.clear(), next.add(v));
      const selected = Array.from(next);
      onModelValueChange?.(multiple ? selected : (selected[0] ?? null));
    },
  };
  return (
    <ListContextValue.Provider value={context}>
      <div className="list">{children}</div>
    </ListContextValue.Provider>
  );
}
export function useList() {
  return useContext(ListContextValue);
}
