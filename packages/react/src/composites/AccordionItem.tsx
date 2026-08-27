import type { AccordionItemProps } from "@paraxe/core";
import type { ReactNode } from "react";
import { useAccordion } from "./Accordion";
export function AccordionItem({
  id,
  disabled = false,
  trigger,
  children,
}: AccordionItemProps & { trigger?: ReactNode; children?: ReactNode }) {
  const accordion = useAccordion();
  if (!accordion)
    throw new Error("AccordionItem must be used inside an Accordion.");
  const open = accordion.isOpen(id);
  return (
    <div className={`accordion-item${open ? " accordion-item--open" : ""}`}>
      <button
        type="button"
        className="accordion-trigger"
        disabled={disabled}
        aria-expanded={open}
        aria-controls={`accordion-${id}`}
        onClick={() => !disabled && accordion.toggleItem(id)}
      >
        {trigger}
      </button>
      <div id={`accordion-${id}`} className="accordion-content" hidden={!open}>
        {children}
      </div>
    </div>
  );
}
