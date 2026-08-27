import { useEffect, useRef, useState } from "react";
import type { PopoverProps } from "@paraxe/core";
import type { ReactNode } from "react";
export function Popover({
  placement = "bottom",
  trigger,
  children,
}: PopoverProps & { trigger?: ReactNode; children?: ReactNode }) {
  const [open, setOpen] = useState(false),
    ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const click = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("click", click);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("click", click);
      document.removeEventListener("keydown", key);
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`popover${open ? " popover--open" : ""} popover--${placement}`}
    >
      <div className="popover-trigger" onClick={() => setOpen(!open)}>
        {trigger}
      </div>
      {open ? (
        <div className="popover-content" role="dialog">
          {children}
        </div>
      ) : null}
    </div>
  );
}
