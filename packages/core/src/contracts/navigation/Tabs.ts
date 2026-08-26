export interface TabsProps {
  modelValue?: string | number | null;
}

export interface TabsEmits {
  "update:modelValue": [
    value: string | number,
  ];
}