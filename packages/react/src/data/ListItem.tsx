import type { ListItemProps } from "@paraxe/core";
import type { ReactNode } from "react";
import { useList } from "./List";
export function ListItem({
  value,
  disabled = false,
  children,
}: ListItemProps & { children?: ReactNode }) {
  const list = useList();
  if (!list) throw new Error("ListItem must be used inside a List.");
  const selected = list.isSelected(value);
  const interactive = list.selectable && !disabled;
  const handle = () => interactive && list.toggleSelection(value);
  return (
    <div
      className={`list-item${interactive ? " list-item--selectable" : ""}${selected ? " list-item--selected" : ""}${disabled ? " list-item--disabled" : ""}`}
      tabIndex={interactive ? 0 : undefined}
      aria-selected={list.selectable ? selected : undefined}
      aria-disabled={disabled || undefined}
      role="listitem"
      onClick={handle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handle();
        }
      }}
    >
      {children}
    </div>
  );
}
