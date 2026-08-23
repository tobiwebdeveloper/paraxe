export interface TableColumn<T = unknown> {
  key: string;
  label: string;

  sortable?: boolean;

  width?: string;

  align?: "start" | "center" | "end";

  render?: (value: unknown, row: T) => unknown;
}

export interface TableProps<T = unknown> {
  columns: TableColumn<T>[];
  rows: T[];

  rowKey?: string;

  sortable?: boolean;
  selectable?: boolean;
  multiple?: boolean;

  loading?: boolean;
  empty?: boolean;
}