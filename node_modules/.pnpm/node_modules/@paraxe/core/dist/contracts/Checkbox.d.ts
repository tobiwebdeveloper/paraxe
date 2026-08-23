export interface CheckboxProps {
    value?: boolean;
    disabled?: boolean;
    name?: string;
    required?: boolean;
}
export interface CheckboxEmits {
    change: [value: boolean];
}
