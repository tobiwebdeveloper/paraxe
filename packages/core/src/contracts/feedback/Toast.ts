export type ToastVariant =
  | "info"
  | "success"
  | "warning"
  | "danger";

export interface ToastProps {
  modelValue?: boolean;
  title?: string;
  variant?: ToastVariant;
  duration?: number;
  dismissible?: boolean;
}

export interface ToastEmits {
  "update:modelValue": (
    value: boolean,
  ) => void;
  close: () => void;
}