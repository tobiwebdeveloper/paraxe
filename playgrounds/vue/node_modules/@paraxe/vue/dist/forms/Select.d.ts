interface Props {
    value?: string;
    disabled?: boolean;
    error?: boolean;
    success?: boolean;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: string) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
}>, {
    disabled: boolean;
    error: boolean;
    success: boolean;
    value: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
