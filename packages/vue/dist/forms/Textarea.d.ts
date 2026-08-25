interface Props {
    modelValue?: string;
    disabled?: boolean;
    readonly?: boolean;
    error?: boolean;
    success?: boolean;
    maxlength?: number;
}
declare const __VLS_export: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: string;
    readonly: boolean;
    error: boolean;
    success: boolean;
    maxlength: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
