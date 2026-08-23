export interface PaginationProps {
    currentPage: number;
    totalItems: number;
    pageSize: number;
    siblingCount?: number;
    compact?: boolean;
}
declare const __VLS_export: import('vue').DefineComponent<PaginationProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:currentPage": (page: number) => any;
}, string, import('vue').PublicProps, Readonly<PaginationProps> & Readonly<{
    "onUpdate:currentPage"?: ((page: number) => any) | undefined;
}>, {
    siblingCount: number;
    compact: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
