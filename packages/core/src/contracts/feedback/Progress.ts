export type ProgressVariant =
  | "default"
  | "success"
  | "warning"
  | "danger";

export interface ProgressProps {
  value?: number;
  max?: number;
  indeterminate?: boolean;
  variant?: ProgressVariant;
  showValue?: boolean;
}