import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { ToastProps } from "@paraxe/core";
import type { ReactNode } from "react";
export function Toast({
  modelValue = false,
  title,
  variant = "info",
  duration = 4000,
  dismissible = true,
  onModelValueChange,
  onClose,
  children,
}: ToastProps & {
  children?: ReactNode;
  onModelValueChange?: (value: boolean) => void;
  onClose?: () => void;
}) {
  const [visible, setVisible] = useState(modelValue);
  const close = () => {
    setVisible(false);
    onModelValueChange?.(false);
    onClose?.();
  };
  useEffect(() => {
    setVisible(modelValue);
    if (!modelValue || duration <= 0) return;
    const timer = setTimeout(close, duration);
    return () => clearTimeout(timer);
  }, [modelValue, duration]);
  if (!visible || typeof document === "undefined") return null;
  return createPortal(
    <div
      className={`toast toast--visible toast-${variant}`}
      role="status"
      aria-live="polite"
    >
      <div className="toast-content">
        {title ? <div className="toast-title">{title}</div> : null}
        <div className="toast-message">{children}</div>
      </div>
      {dismissible ? (
        <button
          className="toast-close"
          type="button"
          aria-label="Dismiss notification"
          onClick={close}
        >
          ×
        </button>
      ) : null}
    </div>,
    document.body,
  );
}
