type SkeletonVariant = "text" | "heading" | "avatar" | "circle" | "button" | "default";
interface Props {
    variant?: SkeletonVariant;
    width?: string;
    height?: string;
}
declare const __VLS_export: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    variant: SkeletonVariant;
    width: string;
    height: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
