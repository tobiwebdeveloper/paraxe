import { createContext } from "react";
import type { BreadcrumbsProps } from "@paraxe/core";
import type { ReactNode } from "react";
export const BreadcrumbContext = createContext("/");
export function Breadcrumbs({
  separator = "/",
  children,
}: BreadcrumbsProps & { children?: ReactNode }) {
  return (
    <BreadcrumbContext.Provider value={separator}>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol className="breadcrumbs-list">{children}</ol>
      </nav>
    </BreadcrumbContext.Provider>
  );
}
