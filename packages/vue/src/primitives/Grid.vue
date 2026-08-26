<script setup lang="ts">
import { computed } from "vue";
import type { GridProps } from "@paraxe/core";

const props = withDefaults(
  defineProps<GridProps>(),
  {
    columns: 1,
    rows: 1,
    size: "medium",
  },
);

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

<template>
  <div :class="gridClasses">
    <slot />
  </div>
</template>