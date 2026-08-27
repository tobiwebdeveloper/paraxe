import type { AlertProps } from "@paraxe/core";
import type { ReactNode } from "react";
export function Alert({
  variant = "info",
  dismissible = false,
  onClose,
  children,
}: AlertProps & {
  children?: ReactNode;
  actions?: ReactNode;
  onClose?: () => void;
}) {
  return (
    <div className={`alert alert-${variant}`} role="alert">
      <div className="alert-content">{children}</div>
      {dismissible ? (
        <button
          className="alert-close"
          type="button"
          aria-label="Dismiss alert"
          onClick={() => onClose?.()}
        >
          ×
        </button>
      ) : null}
    </div>
  );
}
