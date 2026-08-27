<script setup lang="ts">
import { computed } from "vue";

import type {
  ButtonProps,
  ButtonEvents,
  ButtonSize,
} from "@paraxe/core";

const props = withDefaults(
  defineProps<ButtonProps>(),
  {
    variant: "primary",
    size: "medium",
    width: "auto",
    iconPosition: "leading",
    disabled: false,
    loading: false,
  },
);

type ButtonEmits = {
  activate: [];
};

const emit = defineEmits<ButtonEmits>();

const sizeClasses: Record<
  ButtonSize,
  string
> = {
  small: "btn-sm",
  medium: "btn-md",
  large: "btn-lg",
};

const buttonClasses = computed(() => [
  `btn-${props.variant}`,
  sizeClasses[props.size],
  props.width === "full"
    ? "btn-full"
    : "",
]);
</script>

<template>
  <button
    class="btn"
    :class="buttonClasses"
    :disabled="props.disabled || props.loading"
    @click="emit('activate')"
  >
    <slot />
  </button>
</template>