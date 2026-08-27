import type { ReactNode } from "react";
export function Avatar({ children }: { children?: ReactNode }) {
  return <span className="avatar">{children}</span>;
}
