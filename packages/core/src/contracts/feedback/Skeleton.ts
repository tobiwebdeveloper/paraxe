export type SkeletonVariant =
  | "text"
  | "heading"
  | "avatar"
  | "circle"
  | "button"
  | "default";

export interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: string;
  height?: string;
}