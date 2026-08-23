export type ImageFit = "cover" | "contain";

export type ImageAspectRatio =
| "auto"
| "square"
| "video"
| "portrait"
| "wide";

export interface ImageProps {
    src: string;
    alt: string;
    fit?: ImageFit;
    aspectRatio?: ImageAspectRatio;
}

export interface ImageContract {
    props: ImageProps;
}