export type StackSize =
  | "small"
  | "medium"
  | "large";

export interface StackProps {
  size?: StackSize;
  fullWidth?: boolean;
}