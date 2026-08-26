export type SectionHeaderWidth = "default" | "wide";
export type SectionHeaderAlign = "left" | "center";

export interface SectionHeaderProps {
  width?: SectionHeaderWidth;
  align?: SectionHeaderAlign;
}