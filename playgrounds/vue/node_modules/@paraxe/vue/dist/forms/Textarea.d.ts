interface Props {
    value?: string;
    disabled?: boolean;
    readonly?: boolean;
    error?: boolean;
    success?: boolean;
    maxlength?: number;
}
declare const __VLS_export: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    input: (value: string) => any;
    change: (value: string) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onInput?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
}>, {
    disabled: boolean;
    readonly: boolean;
    error: boolean;
    success: boolean;
    value: string;
    maxlength: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
