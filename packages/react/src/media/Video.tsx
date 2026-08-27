import type { ReactNode } from "react";

export function Video({ children }: { children?: ReactNode }) {
  return <div className="media media-video">{children}</div>;
}
