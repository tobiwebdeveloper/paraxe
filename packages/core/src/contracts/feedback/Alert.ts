export type AlertVariant =
  | "info"
  | "success"
  | "warning"
  | "danger";

export interface AlertProps {
  variant?: AlertVariant;
  dismissible?: boolean;
}

export interface AlertEmits {
  close: () => void;
}