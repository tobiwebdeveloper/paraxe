import type { EmptyStateProps } from "@paraxe/core";
import type { ReactNode } from "react";
export function EmptyState({
  as = "div",
  icon,
  actions,
  children,
}: EmptyStateProps & {
  icon?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}) {
  const Tag = as as keyof React.JSX.IntrinsicElements;
  return (
    <Tag className="empty-state">
      {icon ? <div className="empty-state-icon">{icon}</div> : null}
      <div className="empty-state-content">{children}</div>
      {actions ? <div className="empty-state-actions">{actions}</div> : null}
    </Tag>
  );
}
