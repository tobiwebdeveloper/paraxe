export interface SelectProps {
  modelValue?: string;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
}

export interface SelectEmits {
  "update:modelValue": (
    value: string,
  ) => void;
}