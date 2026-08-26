<script setup lang="ts">
import { computed } from "vue";

type ButtonGroupAlign = "start" | "center" | "end";

import type { ButtonGroupProps } from "@paraxe/core";

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  align: "start",
  stack: false,
});

const buttonGroupClasses = computed(() => ({
  "button-group--center": props.align === "center",
  "button-group--end": props.align === "end",
  "button-group--stack": props.stack,
}));
</script>

<template>
  <div class="button-group" :class="buttonGroupClasses">
    <slot />
  </div>
</template>