import type { TabProps } from "@paraxe/core";
import type { ReactNode } from "react";
import { useTabs } from "./Tabs";
export function Tab({
  value,
  disabled = false,
  children,
}: TabProps & { children?: ReactNode }) {
  const tabs = useTabs();
  if (!tabs) throw new Error("Tab must be used inside Tabs.");
  const active = tabs.active === value;
  return (
    <button
      type="button"
      className={`tab${active ? " tab--active" : ""}${disabled ? " tab--disabled" : ""}`}
      role="tab"
      aria-selected={active}
      aria-disabled={disabled || undefined}
      tabIndex={active ? 0 : -1}
      onClick={() => !disabled && tabs.select(value)}
    >
      {children}
    </button>
  );
}
