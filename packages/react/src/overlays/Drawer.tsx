import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { DrawerProps } from "@paraxe/core";
import type { ReactNode } from "react";
const selector =
  "button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex='-1'])";
export function Drawer({
  modelValue = false,
  side = "right",
  closeOnBackdrop = true,
  closeOnEscape = true,
  onModelValueChange,
  children,
}: DrawerProps & {
  children?: ReactNode;
  onModelValueChange?: (value: boolean) => void;
}) {
  const ref = useRef<HTMLElement>(null),
    previous = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!modelValue) return;
    previous.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    ref.current?.querySelector<HTMLElement>(selector)?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEscape) {
        e.preventDefault();
        onModelValueChange?.(false);
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("keydown", key);
      previous.current?.focus();
    };
  }, [modelValue, closeOnEscape, onModelValueChange]);
  if (!modelValue || typeof document === "undefined") return null;
  return createPortal(
    <div className={`drawer drawer--open drawer--${side}`} role="presentation">
      <button
        className="drawer-backdrop"
        type="button"
        aria-label="Close drawer"
        tabIndex={-1}
        onClick={() => closeOnBackdrop && onModelValueChange?.(false)}
      />
      <aside ref={ref} className="drawer-panel" role="dialog" aria-modal="true">
        <div className="drawer-content">{children}</div>
      </aside>
    </div>,
    document.body,
  );
}
