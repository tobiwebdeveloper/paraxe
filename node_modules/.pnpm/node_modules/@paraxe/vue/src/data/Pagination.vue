<script setup lang="ts">
import { computed } from "vue";

export interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  siblingCount?: number;
  compact?: boolean;
}

const props = withDefaults(
  defineProps<PaginationProps>(),
  {
    siblingCount: 1,
    compact: false,
  },
);

const emit = defineEmits<{
  "update:currentPage": [
    page: number,
  ];
}>();

const totalPages = computed(() =>
  Math.max(
    1,
    Math.ceil(
      props.totalItems / props.pageSize,
    ),
  ),
);

const safeCurrentPage = computed(() =>
  Math.min(
    Math.max(props.currentPage, 1),
    totalPages.value,
  ),
);

type PaginationItem =
  | number
  | "...";

const pages = computed<PaginationItem[]>(() => {
  const total = totalPages.value;
  const current = safeCurrentPage.value;
  const siblings = Math.max(
    0,
    props.siblingCount,
  );

  if (total <= 7) {
    return Array.from(
      { length: total },
      (_, index) => index + 1,
    );
  }

  const left = Math.max(
    current - siblings,
    1,
  );

  const right = Math.min(
    current + siblings,
    total,
  );

  const showLeftDots = left > 2;
  const showRightDots =
    right < total - 1;

  const result: PaginationItem[] = [1];

  if (showLeftDots) {
    result.push("...");
  }

  const start = showLeftDots
    ? left
    : 2;

  const end = showRightDots
    ? right
    : total - 1;

  for (
    let page = start;
    page <= end;
    page++
  ) {
    result.push(page);
  }

  if (showRightDots) {
    result.push("...");
  }

  result.push(total);

  return result;
});

const classes = computed(() => ({
  pagination: true,
  "pagination-compact":
    props.compact,
}));

function goTo(page: number) {
  const next = Math.min(
    Math.max(page, 1),
    totalPages.value,
  );

  if (
    next === safeCurrentPage.value
  ) {
    return;
  }

  emit(
    "update:currentPage",
    next,
  );
}

function goPrevious() {
  goTo(safeCurrentPage.value - 1);
}

function goNext() {
  goTo(safeCurrentPage.value + 1);
}

function goFirst() {
  goTo(1);
}

function goLast() {
  goTo(totalPages.value);
}
</script>

<template>
  <nav
    :class="classes"
    aria-label="Pagination"
  >
    <div class="pagination-controls">
      <button
        class="pagination-item"
        type="button"
        :disabled="
          safeCurrentPage === 1
        "
        :class="{
          'pagination-item--disabled':
            safeCurrentPage === 1,
        }"
        aria-label="First page"
        @click="goFirst"
      >
        «
      </button>

      <button
        class="pagination-item"
        type="button"
        :disabled="
          safeCurrentPage === 1
        "
        :class="{
          'pagination-item--disabled':
            safeCurrentPage === 1,
        }"
        aria-label="Previous page"
        @click="goPrevious"
      >
        ‹
      </button>
    </div>

    <div class="pagination-pages">
      <template
        v-for="(item, index) in pages"
        :key="`${item}-${index}`"
      >
        <span
          v-if="item === '...'"
          class="pagination-ellipsis"
        >
          …
        </span>

        <button
          v-else
          class="pagination-item"
          type="button"
          :class="{
            'pagination-item--current':
              item === safeCurrentPage,
          }"
          :aria-current="
            item === safeCurrentPage
              ? 'page'
              : undefined
          "
          @click="goTo(item)"
        >
          {{ item }}
        </button>
      </template>
    </div>

    <div class="pagination-controls">
      <button
        class="pagination-item"
        type="button"
        :disabled="
          safeCurrentPage === totalPages
        "
        :class="{
          'pagination-item--disabled':
            safeCurrentPage ===
            totalPages,
        }"
        aria-label="Next page"
        @click="goNext"
      >
        ›
      </button>

      <button
        class="pagination-item"
        type="button"
        :disabled="
          safeCurrentPage === totalPages
        "
        :class="{
          'pagination-item--disabled':
            safeCurrentPage ===
            totalPages,
        }"
        aria-label="Last page"
        @click="goLast"
      >
        »
      </button>
    </div>
  </nav>
</template>