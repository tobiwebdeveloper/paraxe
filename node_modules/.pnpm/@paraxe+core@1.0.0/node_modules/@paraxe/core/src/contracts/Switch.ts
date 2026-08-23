// Switch
export interface SwitchProps {
  modelValue?: boolean;
  disabled?: boolean;
}

export interface SwitchEmits {
  "update:modelValue": [value: boolean];
}