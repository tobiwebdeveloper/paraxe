import type { SidebarProps } from "@paraxe/core";
import type { ReactNode } from "react";
export function Sidebar({
  collapsed = false,
  header,
  footer,
  children,
}: SidebarProps & {
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <aside className={`sidebar${collapsed ? " sidebar--collapsed" : ""}`}>
      <div className="sidebar-header">{header}</div>
      <nav className="sidebar-navigation">{children}</nav>
      <div className="sidebar-footer">{footer}</div>
    </aside>
  );
}
