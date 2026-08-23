<script setup lang="ts">
import { computed } from "vue";

export type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "brand";

interface Props {
  variant?: BadgeVariant;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
});

const badgeClasses = computed(() => ({
  "badge": true,
  [`badge-${props.variant}`]: true,
}));
</script>

<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>