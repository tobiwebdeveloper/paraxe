import { ImageAspectRatio, ImageFit } from '@paraxe/core';
interface Props {
    src: string;
    alt: string;
    fit?: ImageFit;
    aspectRatio?: ImageAspectRatio;
}
declare const __VLS_export: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    fit: ImageFit;
    aspectRatio: ImageAspectRatio;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
