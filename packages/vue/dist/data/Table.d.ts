export interface TableColumn<T = unknown> {
    key: string;
    label: string;
    sortable?: boolean;
    width?: string;
    align?: "start" | "center" | "end";
}
export interface TableProps<T = unknown> {
    columns: TableColumn<T>[];
    rows: T[];
    rowKey?: string;
    sortable?: boolean;
    selectable?: boolean;
    multiple?: boolean;
    loading?: boolean;
}
type __VLS_Props = TableProps;
declare var __VLS_2: `cell-${string}`, __VLS_3: {
    row: unknown;
    value: unknown;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_2>]?: (props: typeof __VLS_3) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    sort: (payload: {
        key: string;
        direction: "asc" | "desc";
    }) => any;
    "update:selectedRows": (rows: unknown[]) => any;
    "row-click": (row: unknown) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSort?: ((payload: {
        key: string;
        direction: "asc" | "desc";
    }) => any) | undefined;
    "onUpdate:selectedRows"?: ((rows: unknown[]) => any) | undefined;
    "onRow-click"?: ((row: unknown) => any) | undefined;
}>, {
    loading: boolean;
    multiple: boolean;
    selectable: boolean;
    rowKey: string;
    sortable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
