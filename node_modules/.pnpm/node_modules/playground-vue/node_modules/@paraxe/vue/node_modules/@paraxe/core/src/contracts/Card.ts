export type CardVariant =
  | "default"
  | "outlined"
  | "elevated"
  | "interactive"
  | "selected";
export interface Props {
  variant?: CardVariant;
  as?: string;
}