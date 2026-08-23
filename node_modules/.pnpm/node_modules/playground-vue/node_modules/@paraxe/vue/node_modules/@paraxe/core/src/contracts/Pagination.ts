export interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;

  siblingCount?: number;
  compact?: boolean;
}
export interface PaginationEmits {
  (event: "update:currentPage", page: number): void;
}