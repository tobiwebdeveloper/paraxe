import { useEffect, useRef, useState } from "react";
import type { TooltipProps } from "@paraxe/core";
import type { ReactNode } from "react";
export function Tooltip({
  text,
  placement = "top",
  delay = 300,
  children,
}: TooltipProps & { children?: ReactNode }) {
  const [visible, setVisible] = useState(false),
    timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const show = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(true), delay);
  };
  const hide = () => {
    clearTimeout(timer.current);
    setVisible(false);
  };
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <span
      className={`tooltip${visible ? " tooltip--visible" : ""} tooltip--${placement}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <span className="tooltip-trigger">{children}</span>
      <span className="tooltip-content" role="tooltip">
        {text}
      </span>
    </span>
  );
}
