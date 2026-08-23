import { InputType } from '@paraxe/core';
interface Props {
    type?: InputType;
    placeholder?: string;
    modelValue?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    error?: boolean;
    success?: boolean;
}
declare const __VLS_export: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    disabled: boolean;
    type: InputType;
    placeholder: string;
    modelValue: string;
    required: boolean;
    readonly: boolean;
    error: boolean;
    success: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
