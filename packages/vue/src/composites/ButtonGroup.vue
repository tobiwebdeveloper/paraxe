<script setup lang="ts">
import { computed } from "vue";

type ButtonGroupAlign = "start" | "center" | "end";

interface Props {
  align?: ButtonGroupAlign;
  stack?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
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