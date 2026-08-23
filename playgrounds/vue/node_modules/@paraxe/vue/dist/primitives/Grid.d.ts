type GridColumns = 1 | 2 | 3 | 4 | 5 | 6;
type GridRows = 1 | 2 | 3 | 4 | 5 | 6;
type GridSize = "small" | "medium" | "large";
interface Props {
    columns?: GridColumns;
    rows?: GridRows;
    size?: GridSize;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    size: GridSize;
    columns: GridColumns;
    rows: GridRows;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
