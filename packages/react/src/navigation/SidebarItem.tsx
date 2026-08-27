import { useState } from "react";
import type { ReactNode } from "react";
export function SidebarItem({
  active = false,
  disabled = false,
  href,
  expanded = false,
  icon,
  childItems,
  children,
}: {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  expanded?: boolean;
  icon?: ReactNode;
  childItems?: ReactNode;
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(expanded);
  const hasChildren = childItems != null;
  const cls = `sidebar-item${active ? " sidebar-item--active" : ""}${disabled ? " sidebar-item--disabled" : ""}${hasChildren ? " sidebar-item--expandable" : ""}${hasChildren && open ? " sidebar-item--expanded" : ""}`;
  const content = (
    <>
      <span className="sidebar-item-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="sidebar-item-label">{children}</span>
      {hasChildren ? (
        <span className="sidebar-item-chevron" aria-hidden="true">
          <span className={open ? "sidebar-item-chevron--expanded" : undefined}>
            ›
          </span>
        </span>
      ) : null}
    </>
  );
  return (
    <div className="sidebar-item-wrapper">
      {hasChildren ? (
        <button
          type="button"
          className={cls}
          disabled={disabled}
          aria-current={active ? "page" : undefined}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {content}
        </button>
      ) : (
        <a
          className={cls}
          href={href}
          aria-current={active ? "page" : undefined}
          aria-disabled={disabled || undefined}
          onClick={(e) => disabled && e.preventDefault()}
        >
          {content}
        </a>
      )}
      {hasChildren && open ? (
        <div className="sidebar-item-children">{childItems}</div>
      ) : null}
    </div>
  );
}
