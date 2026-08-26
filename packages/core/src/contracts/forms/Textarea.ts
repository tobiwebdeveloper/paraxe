export interface TextareaProps {
  modelValue?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  success?: boolean;
  maxlength?: number;
}

export interface TextareaEmits {
  "update:modelValue": (
    value: string,
  ) => void;
}