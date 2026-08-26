export type TextTone =
  | "primary"
  | "secondary"
  | "muted"
  | "accent"
  | "inverse"
  | "brand";

export type TextElement =
  | "p"
  | "span"
  | "div";

export interface TextProps {
  as?: TextElement;
  tone?: TextTone;
}