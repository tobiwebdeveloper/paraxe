import type { PaginationProps } from "@paraxe/core";
export function Pagination({
  currentPage,
  totalItems,
  pageSize,
  siblingCount = 1,
  compact = false,
  onCurrentPageChange,
}: PaginationProps & { onCurrentPageChange?: (page: number) => void }) {
  const total = Math.max(1, Math.ceil(totalItems / pageSize));
  const current = Math.min(Math.max(currentPage, 1), total);
  const pages: Array<number | "..."> =
    total <= 7
      ? Array.from({ length: total }, (_, i) => i + 1)
      : [
          1,
          ...(current - siblingCount > 2 ? ["..." as const] : []),
          ...Array.from(
            {
              length:
                Math.min(total - 1, current + siblingCount) -
                Math.max(2, current - siblingCount) +
                1,
            },
            (_, i) => Math.max(2, current - siblingCount) + i,
          ),
          ...(current + siblingCount < total - 1 ? ["..." as const] : []),
          total,
        ];
  const go = (p: number) => {
    const next = Math.min(Math.max(p, 1), total);
    if (next !== current) onCurrentPageChange?.(next);
  };
  const b = (label: string, p: number, disabled: boolean, text: string) => (
    <button
      className={`pagination-item${disabled ? " pagination-item--disabled" : ""}`}
      type="button"
      disabled={disabled}
      aria-label={label}
      onClick={() => go(p)}
    >
      {text}
    </button>
  );
  return (
    <nav
      className={`pagination${compact ? " pagination-compact" : ""}`}
      aria-label="Pagination"
    >
      <div className="pagination-controls">
        {b("First page", 1, current === 1, "«")}
        {b("Previous page", current - 1, current === 1, "‹")}
      </div>
      <div className="pagination-pages">
        {pages.map((p, i) =>
          p === "..." ? (
            <span key={`${p}-${i}`} className="pagination-ellipsis">
              …
            </span>
          ) : (
            <button
              key={p}
              className={`pagination-item${p === current ? " pagination-item--current" : ""}`}
              type="button"
              aria-current={p === current ? "page" : undefined}
              onClick={() => go(p)}
            >
              {p}
            </button>
          ),
        )}
      </div>
      <div className="pagination-controls">
        {b("Next page", current + 1, current === total, "›")}
        {b("Last page", total, current === total, "»")}
      </div>
    </nav>
  );
}
