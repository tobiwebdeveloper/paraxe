export type SurfaceVariant = "base" | "raised" | "card" | "elevated-1" | "elevated-2" | "elevated-3";
export type SurfaceEffect = "glass" | "glass-strong";
export interface Props {
    variant?: SurfaceVariant;
    effect?: SurfaceEffect;
    as?: string;
}
