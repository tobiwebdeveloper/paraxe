export interface SidebarItemProps {
    active?: boolean;
    disabled?: boolean;
    href?: string;
    expanded?: boolean;
}
declare var __VLS_9: {}, __VLS_11: {}, __VLS_13: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_9) => any;
} & {
    default?: (props: typeof __VLS_11) => any;
} & {
    children?: (props: typeof __VLS_13) => any;
};
declare const __VLS_base: import('vue').DefineComponent<SidebarItemProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<SidebarItemProps> & Readonly<{}>, {
    disabled: boolean;
    active: boolean;
    href: string;
    expanded: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
