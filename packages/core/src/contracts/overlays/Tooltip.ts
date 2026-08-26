export type TooltipPlacement =
  | "top"
  | "bottom"
  | "left"
  | "right";

export interface TooltipProps {
  placement?: TooltipPlacement;
  text: string;
  delay?: number;
}