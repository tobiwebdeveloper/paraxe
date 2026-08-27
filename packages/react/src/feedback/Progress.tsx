import type { ProgressProps } from "@paraxe/core";
import type { ReactNode } from "react";
export function Progress({
  value = 0,
  max = 100,
  indeterminate = false,
  variant = "default",
  showValue = false,
  children,
}: ProgressProps & { children?: ReactNode }) {
  const percentage =
    max <= 0 ? 0 : Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div
      className={`progress progress--${variant}${indeterminate ? " progress--indeterminate" : ""}`}
      role="progressbar"
      aria-valuemin={indeterminate ? undefined : 0}
      aria-valuemax={indeterminate ? undefined : max}
      aria-valuenow={indeterminate ? undefined : value}
    >
      <div className="progress-track">
        <div
          className="progress-value"
          style={indeterminate ? undefined : { width: `${percentage}%` }}
        />
      </div>
      {showValue ? (
        <div className="progress-label">
          <span>{children}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
