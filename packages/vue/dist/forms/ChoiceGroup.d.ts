export interface ChoiceGroupProps {
    modelValue?: string | number | Array<string | number> | null;
    multiple?: boolean;
    disabled?: boolean;
}
export interface ChoiceGroupContext {
    multiple: boolean;
    disabled: boolean;
    isSelected: (value: string | number) => boolean;
    toggleChoice: (value: string | number) => void;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import('vue').DefineComponent<ChoiceGroupProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | (string | number)[] | null) => any;
}, string, import('vue').PublicProps, Readonly<ChoiceGroupProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | (string | number)[] | null) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: string | number | Array<string | number> | null;
    multiple: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
