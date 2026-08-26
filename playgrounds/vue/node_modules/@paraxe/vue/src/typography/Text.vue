<script setup lang="ts">
import { computed } from "vue";
import type { TextProps } from "@paraxe/core";

const props = withDefaults(
  defineProps<TextProps>(),
  {
    as: "p",
    tone: "primary",
  },
);

const textClasses = computed(() => ({
  "text-primary":
    props.tone === "primary",
  "text-secondary":
    props.tone === "secondary",
  "text-muted":
    props.tone === "muted",
  "text-accent":
    props.tone === "accent",
  "text-inverse":
    props.tone === "inverse",
  "text-brand":
    props.tone === "brand",
}));
</script>

<template>
  <component
    :is="props.as"
    :class="textClasses"
  >
    <slot />
  </component>
</template>