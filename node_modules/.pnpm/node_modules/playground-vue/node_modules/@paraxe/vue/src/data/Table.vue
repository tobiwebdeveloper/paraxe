<script setup lang="ts">
import {
  computed,
  ref,
} from "vue";

export interface TableColumn<
  T = unknown,
> {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  align?: "start" | "center" | "end";
}

export interface TableProps<
  T = unknown,
> {
  columns: TableColumn<T>[];
  rows: T[];
  rowKey?: string;
  sortable?: boolean;
  selectable?: boolean;
  multiple?: boolean;
  loading?: boolean;
}

const props = withDefaults(
  defineProps<TableProps>(),
  {
    rowKey: "id",
    sortable: false,
    selectable: false,
    multiple: false,
    loading: false,
  },
);

const emit = defineEmits<{
  "update:selectedRows": [
    rows: unknown[],
  ];

  sort: [
    payload: {
      key: string;
      direction: "asc" | "desc";
    },
  ];
}>();

const sortKey = ref<string | null>(
  null,
);

const sortDirection = ref<
  "asc" | "desc"
>("asc");

const selectedKeys = ref<
  Set<string | number>
>(new Set());

function getRowValue(
  row: unknown,
  key: string,
) {
  if (
    typeof row !== "object" ||
    row === null
  ) {
    return undefined;
  }

  return (
    row as Record<
      string,
      unknown
    >
  )[key];
}

function getRowKey(
  row: unknown,
): string | number {
  const value = getRowValue(
    row,
    props.rowKey,
  );

  if (
    typeof value === "string" ||
    typeof value === "number"
  ) {
    return value;
  }

  return props.rows.indexOf(row);
}

function isSelected(
  row: unknown,
) {
  return selectedKeys.value.has(
    getRowKey(row),
  );
}

const sortedRows = computed(() => {
  if (
    !props.sortable ||
    !sortKey.value
  ) {
    return props.rows;
  }

  const key = sortKey.value;
  const direction =
    sortDirection.value;

  return [...props.rows].sort(
    (a, b) => {
      const aValue =
        getRowValue(a, key);
      const bValue =
        getRowValue(b, key);

      if (
        aValue === bValue
      ) {
        return 0;
      }

      if (
        aValue === undefined ||
        aValue === null
      ) {
        return 1;
      }

      if (
        bValue === undefined ||
        bValue === null
      ) {
        return -1;
      }

      if (
        typeof aValue === "number" &&
        typeof bValue === "number"
      ) {
        return direction === "asc"
          ? aValue - bValue
          : bValue - aValue;
      }

      const result =
        String(aValue).localeCompare(
          String(bValue),
          undefined,
          {
            numeric: true,
            sensitivity: "base",
          },
        );

      return direction === "asc"
        ? result
        : -result;
    },
  );
});

function toggleSort(
  column: TableColumn,
) {
  if (
    !props.sortable ||
    !column.sortable
  ) {
    return;
  }

  if (sortKey.value !== column.key) {
    sortKey.value = column.key;
    sortDirection.value = "asc";
  } else {
    sortDirection.value =
      sortDirection.value === "asc"
        ? "desc"
        : "asc";
  }

  emit("sort", {
    key: column.key,
    direction:
      sortDirection.value,
  });
}

function toggleRowSelection(
  row: unknown,
) {
  if (!props.selectable) {
    return;
  }

  const key = getRowKey(row);

  const next = new Set(
    selectedKeys.value,
  );

  if (props.multiple) {
    if (next.has(key)) {
      next.delete(key);
    } else {
      next.add(key);
    }
  } else {
    next.clear();
    next.add(key);
  }

  selectedKeys.value = next;

  emit(
    "update:selectedRows",
    props.rows.filter((item) =>
      next.has(getRowKey(item)),
    ),
  );
}

function sortIndicator(
  column: TableColumn,
) {
  if (
    sortKey.value !== column.key
  ) {
    return "";
  }

  return sortDirection.value ===
    "asc"
    ? "↑"
    : "↓";
}

function cellClass(
  column: TableColumn,
) {
  return {
    [`table-cell--${column.align ?? "start"}`]:
      true,
  };
}

function isSorted(
  column: TableColumn,
) {
  return (
    sortKey.value === column.key
  );
}
</script>

<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            :style="{
              width: column.width,
            }"
            :class="[
              cellClass(column),
              {
                'table-header--sortable':
                  sortable &&
                  column.sortable,

                'table-header--sorted':
                  isSorted(column),
              },
            ]"
            :tabindex="
              sortable &&
              column.sortable
                ? 0
                : undefined
            "
            :aria-sort="
              isSorted(column)
                ? sortDirection ===
                  'asc'
                  ? 'ascending'
                  : 'descending'
                : undefined
            "
            @click="
              toggleSort(column)
            "
            @keydown.enter="
              toggleSort(column)
            "
            @keydown.space.prevent="
              toggleSort(column)
            "
          >
            <span>
              {{ column.label }}
            </span>

            <span
              v-if="
                sortable &&
                column.sortable
              "
              aria-hidden="true"
            >
              {{
                sortIndicator(column)
              }}
            </span>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="row in sortedRows"
          :key="getRowKey(row)"
          :class="{
            'table-row--selected':
              isSelected(row),
          }"
          @click="
            selectable &&
            toggleRowSelection(row)
          "
        >
          <td
            v-for="column in columns"
            :key="column.key"
            :class="
              cellClass(column)
            "
          >
            <slot
              :name="`cell-${column.key}`"
              :row="row"
              :value="
                getRowValue(
                  row,
                  column.key,
                )
              "
            >
              {{
                getRowValue(
                  row,
                  column.key,
                )
              }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>

    <div
      v-if="loading"
      class="table-loading"
      aria-hidden="true"
    />
  </div>
</template>