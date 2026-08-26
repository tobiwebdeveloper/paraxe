<script setup lang="ts">
import { computed } from "vue";
import type { HeadingProps } from "@paraxe/core";

const props = withDefaults(
  defineProps<HeadingProps>(),
  {
    level: "h2",
  },
);

const headingClasses = computed(() => ({
  "heading-xl": props.level === "h1",
  "heading-lg": props.level === "h2",
  "heading-md": props.level === "h3",
  "heading-sm": props.level === "h4",
  "heading-xs":
    props.level === "h5" ||
    props.level === "h6",
}));
</script>

<template>
  <component
    :is="props.level"
    :class="headingClasses"
  >
    <slot />
  </component>
</template>