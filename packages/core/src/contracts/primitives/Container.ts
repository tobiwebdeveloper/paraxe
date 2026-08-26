export type ContainerSize =
  | "default"
  | "narrow";

export interface ContainerProps {
  size?: ContainerSize;
}