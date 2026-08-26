<script setup lang="ts">
import { computed } from "vue";
import type { StackProps } from "@paraxe/core";

const props = withDefaults(
  defineProps<StackProps>(),
  {
    size: "medium",
    fullWidth: false,
  },
);

const stackClasses = computed(() => ({
  stack: props.size === "medium",
  "stack-sm": props.size === "small",
  "stack-lg": props.size === "large",
  "stack-full": props.fullWidth,
}));
</script>

<template>
  <div :class="stackClasses">
    <slot />
  </div>
</template>

