export interface DialogProps {
    modelValue?: boolean;
    closeOnBackdrop?: boolean;
    closeOnEscape?: boolean;
}
export interface DialogEmits {
    "update:modelValue": [value: boolean];
}
