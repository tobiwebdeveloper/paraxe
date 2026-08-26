export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6;

export type GridRows = 1 | 2 | 3 | 4 | 5 | 6;

export type GridSize =
  | "small"
  | "medium"
  | "large";

export interface GridProps {
  columns?: GridColumns;
  rows?: GridRows;
  size?: GridSize;
}