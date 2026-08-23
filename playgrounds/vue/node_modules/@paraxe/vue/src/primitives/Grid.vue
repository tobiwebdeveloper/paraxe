<script setup lang="ts">
import { computed } from "vue";

type GridColumns = 1 | 2 | 3 | 4 | 5 | 6;
type GridRows = 1 | 2 | 3 | 4 | 5 | 6;
type GridSize = "small" | "medium" | "large";

interface Props {
  columns?: GridColumns;
  rows?: GridRows;
  size?: GridSize;
}

const props = withDefaults(defineProps<Props>(), {
  columns: 1,
  rows: 1,
  size: "medium",
});

const gridClasses = computed(() => [
  props.size === "small"
    ? "grid-sm"
    : props.size === "large"
      ? "grid-lg"
      : "grid",

  `grid-cols-${props.columns}`,
  `grid-rows-${props.rows}`,
]);
</script>

<template>
  <div :class="gridClasses">
    <slot />
  </div>
</template>