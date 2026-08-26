<script setup lang="ts">
import { computed } from "vue";
import type {
  CardProps,
} from "@paraxe/core";


const props = withDefaults(defineProps<CardProps>(), {
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