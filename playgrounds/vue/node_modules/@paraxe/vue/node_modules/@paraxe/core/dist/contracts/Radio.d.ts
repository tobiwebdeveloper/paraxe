export interface RadioProps {
    modelValue?: string | number | null;
    value: string | number;
    name: string;
    disabled?: boolean;
}
export interface RadioEmits {
    "update:modelValue": [value: string | number];
}
