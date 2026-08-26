export type CardVariant =
  | "default"
  | "outlined"
  | "elevated"
  | "interactive"
  | "selected";

export interface CardProps {
  variant?: CardVariant;
  as?: string;
}