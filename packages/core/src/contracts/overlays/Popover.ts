export type PopoverPlacement =
  | "top"
  | "bottom"
  | "left"
  | "right";

export interface PopoverProps {
  placement?: PopoverPlacement;
}