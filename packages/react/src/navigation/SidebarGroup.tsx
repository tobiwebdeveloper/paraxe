import type { ReactNode } from "react";
export function SidebarGroup({
  label = "",
  children,
}: {
  label?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`sidebar-group${label ? " sidebar-group--labeled" : ""}`}>
      {label ? <div className="sidebar-group-label">{label}</div> : null}
      <div className="sidebar-group-items">{children}</div>
    </div>
  );
}
