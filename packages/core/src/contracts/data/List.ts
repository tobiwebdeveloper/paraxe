export type ListValue = string | number;

export type ListModelValue =
  | ListValue
  | ListValue[]
  | null;

export interface ListProps {
  selectable?: boolean;
  multiple?: boolean;
}

export interface ListContext {
  selectable: boolean;
  multiple: boolean;
  isSelected: (value: ListValue) => boolean;
  toggleSelection: (value: ListValue) => void;
}
export interface ListItemProps {
  value: string | number;
  disabled?: boolean;
}