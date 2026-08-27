import { useContext } from "react";
import type { BreadcrumbProps } from "@paraxe/core";
import type { ReactNode } from "react";
import { BreadcrumbContext } from "./Breadcrumbs";
export function Breadcrumb({
  href,
  current = false,
  children,
}: BreadcrumbProps & { children?: ReactNode }) {
  const separator = useContext(BreadcrumbContext);
  return (
    <li className="breadcrumbs-item">
      {href && !current ? (
        <a className="breadcrumbs-link" href={href}>
          {children}
        </a>
      ) : (
        <span
          className="breadcrumbs-current"
          aria-current={current ? "page" : undefined}
        >
          {children}
        </span>
      )}
      <span className="breadcrumbs-separator" aria-hidden="true">
        {separator}
      </span>
    </li>
  );
}
