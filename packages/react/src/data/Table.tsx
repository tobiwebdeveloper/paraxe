import { useState } from "react";
import type { ReactNode } from "react";
import type { TableColumn, TableProps } from "@paraxe/core";
export type TableComponentProps<T> = TableProps<T> & {
  onSelectedRowsChange?: (rows: T[]) => void;
  onSort?: (payload: { key: string; direction: "asc" | "desc" }) => void;
  onRowClick?: (row: T) => void;
  renderCell?: (column: TableColumn<T>, row: T, value: unknown) => ReactNode;
};
export function Table<T>({
  columns,
  rows,
  rowKey = "id",
  sortable = false,
  selectable = false,
  multiple = false,
  loading = false,
  onSelectedRowsChange,
  onSort,
  onRowClick,
  renderCell,
}: TableComponentProps<T>) {
  const [sort, setSort] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [selected, setSelected] = useState<Set<string | number>>(new Set());
  const value = (row: T, key: string) =>
    row && typeof row === "object"
      ? (row as Record<string, unknown>)[key]
      : undefined;
  const key = (row: T) => {
    const v = value(row, rowKey);
    return typeof v === "string" || typeof v === "number"
      ? v
      : rows.indexOf(row);
  };
  const sorted =
    !sortable || !sort
      ? rows
      : [...rows].sort((a, b) => {
          const av = value(a, sort.key),
            bv = value(b, sort.key);
          const r =
            av == null
              ? 1
              : bv == null
                ? -1
                : typeof av === "number" && typeof bv === "number"
                  ? av - bv
                  : String(av).localeCompare(String(bv), undefined, {
                      numeric: true,
                      sensitivity: "base",
                    });
          return sort.direction === "asc" ? r : -r;
        });
  const toggleSort = (c: TableColumn<T>) => {
    if (!sortable || !c.sortable) return;
    const next =
      sort?.key === c.key
        ? {
            key: c.key,
            direction:
              sort.direction === "asc" ? ("desc" as const) : ("asc" as const),
          }
        : { key: c.key, direction: "asc" as const };
    setSort(next);
    onSort?.(next);
  };
  const click = (row: T) => {
    if (selectable) {
      const next = new Set(selected),
        k = key(row);
      if (multiple) next.has(k) ? next.delete(k) : next.add(k);
      else {
        next.clear();
        next.add(k);
      }
      setSelected(next);
      onSelectedRowsChange?.(rows.filter((item) => next.has(key(item))));
    }
    onRowClick?.(row);
  };
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {columns.map((c) => (
              <th
                key={c.key}
                style={{ width: c.width }}
                className={`table-cell--${c.align ?? "start"}${sortable && c.sortable ? " table-header--sortable" : ""}${sort?.key === c.key ? " table-header--sorted" : ""}`}
                tabIndex={sortable && c.sortable ? 0 : undefined}
                aria-sort={
                  sort?.key === c.key
                    ? sort.direction === "asc"
                      ? "ascending"
                      : "descending"
                    : undefined
                }
                onClick={() => toggleSort(c)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleSort(c);
                  }
                }}
              >
                <span>{c.label}</span>
                {sortable && c.sortable ? (
                  <span aria-hidden="true">
                    {sort?.key === c.key
                      ? sort.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </span>
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row) => (
            <tr
              key={key(row)}
              className={`${selected.has(key(row)) ? "table-row--selected " : ""}table-row--clickable`}
              onClick={() => click(row)}
            >
              {columns.map((c) => {
                const v = value(row, c.key);
                return (
                  <td
                    key={c.key}
                    className={`table-cell--${c.align ?? "start"}`}
                  >
                    {renderCell
                      ? renderCell(c, row, v)
                      : c.render
                        ? String(c.render(v, row) ?? "")
                        : String(v ?? "")}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {loading ? <div className="table-loading" aria-hidden="true" /> : null}
    </div>
  );
}
