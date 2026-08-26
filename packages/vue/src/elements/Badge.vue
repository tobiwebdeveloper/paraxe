<script setup lang="ts">
import { computed } from "vue";

import type {
  BadgeProps,
} from "@paraxe/core";

const props = withDefaults(
  defineProps<BadgeProps>(),
  {
    variant: "default",
  },
);

const badgeClasses = computed(() => ({
  badge: true,
  [`badge-${props.variant}`]: true,
}));
</script>

<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>