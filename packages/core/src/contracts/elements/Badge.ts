export type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "brand";

export interface BadgeProps {
  variant?: BadgeVariant;
}