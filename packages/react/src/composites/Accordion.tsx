import { createContext, useContext, useState } from "react";
import type { AccordionProps } from "@paraxe/core";
import type { ReactNode } from "react";
const AccordionContext = createContext<{
  isOpen: (id: string) => boolean;
  toggleItem: (id: string) => void;
} | null>(null);
export function Accordion({
  multiple = false,
  collapsible = true,
  defaultOpen = [],
  children,
}: AccordionProps & { children?: ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  const toggleItem = (id: string) =>
    setOpen((current) =>
      current.includes(id)
        ? collapsible
          ? current.filter((item) => item !== id)
          : current
        : multiple
          ? [...current, id]
          : [id],
    );
  return (
    <AccordionContext.Provider
      value={{ isOpen: (id) => open.includes(id), toggleItem }}
    >
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}
export function useAccordion() {
  return useContext(AccordionContext);
}
