import { ProgressProps } from '@paraxe/core';
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    label?: (props: typeof __VLS_3) => any;
};
declare const __VLS_base: import('vue').DefineComponent<ProgressProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ProgressProps> & Readonly<{}>, {
    variant: import('@paraxe/core').ProgressVariant;
    value: number;
    max: number;
    indeterminate: boolean;
    showValue: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
