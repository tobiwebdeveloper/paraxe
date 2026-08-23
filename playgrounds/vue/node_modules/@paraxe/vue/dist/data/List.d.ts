export interface ListProps {
    selectable?: boolean;
    multiple?: boolean;
}
export interface ListContext {
    selectable: boolean;
    multiple: boolean;
    isSelected: (value: string | number) => boolean;
    toggleSelection: (value: string | number) => void;
}
type __VLS_Props = ListProps;
type __VLS_ModelProps = {
    modelValue?: string | number | Array<string | number> | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: unknown[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((...args: unknown[]) => any) | undefined;
}>, {
    multiple: boolean;
    selectable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
