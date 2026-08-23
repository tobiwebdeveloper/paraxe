<script setup lang="ts">
import { computed } from "vue";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props {
  level?: HeadingLevel;
}

const props = withDefaults(defineProps<Props>(), {
  level: "h2",
});

const headingClasses = computed(() => ({
  "heading-xl": props.level === "h1",
  "heading-lg": props.level === "h2",
  "heading-md": props.level === "h3",
  "heading-sm": props.level === "h4",
  "heading-xs": props.level === "h5" || props.level === "h6",
}));
</script>

<template>
  <component :is="level" :class="headingClasses">
    <slot />
  </component>
</template>