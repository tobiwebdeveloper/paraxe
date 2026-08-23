<script setup lang="ts">
import { computed } from "vue";

export type CardVariant =
  | "default"
  | "outlined"
  | "elevated"
  | "interactive"
  | "selected";

export interface Props {
  variant?: CardVariant;
  as?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  as: "div",
});

const cardClasses = computed(() => [
  "card",
  `card-${props.variant}`,
]);
</script>

<template>
  <component
    :is="props.as"
    :class="cardClasses"
  >
    <slot />
  </component>
</template>