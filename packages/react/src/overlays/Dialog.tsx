import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { DialogProps } from "@paraxe/core";
import type { ReactNode } from "react";
const selector =
  "button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex='-1'])";
export function Dialog({
  modelValue = false,
  closeOnBackdrop = true,
  closeOnEscape = true,
  onModelValueChange,
  children,
}: DialogProps & {
  children?: ReactNode;
  onModelValueChange?: (value: boolean) => void;
}) {
  const ref = useRef<HTMLDivElement>(null),
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
    <div className="dialog dialog--open" role="presentation">
      <button
        className="dialog-backdrop"
        type="button"
        aria-label="Close dialog"
        tabIndex={-1}
        onClick={() => closeOnBackdrop && onModelValueChange?.(false)}
      />
      <div ref={ref} className="dialog-content" role="dialog" aria-modal="true">
        {children}
      </div>
    </div>,
    document.body,
  );
}
