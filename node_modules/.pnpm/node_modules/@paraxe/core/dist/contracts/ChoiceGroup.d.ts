export interface ChoiceGroupProps {
    modelValue?: string | number | Array<string | number> | null;
    multiple?: boolean;
    disabled?: boolean;
}
export interface ChoiceGroupEmits {
    "update:modelValue": [
        value: string | number | Array<string | number> | null
    ];
}
