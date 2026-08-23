<script setup lang="ts">
import { computed } from "vue";

type StackSize = "small" | "medium" | "large";

interface Props {
  size?: StackSize;
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
  fullWidth: false,
});

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