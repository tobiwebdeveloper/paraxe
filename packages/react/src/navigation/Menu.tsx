import type { ReactNode } from "react";

export function Menu({ children }: { children?: ReactNode }) {
  return <nav className="menu">{children}</nav>;
}
