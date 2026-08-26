export interface CheckboxProps {
  modelValue?: boolean;
  disabled?: boolean;
  name?: string;
  required?: boolean;
}

export interface CheckboxEmits {
  "update:modelValue": (
    value: boolean,
  ) => void;
}