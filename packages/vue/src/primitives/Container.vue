<script setup lang="ts">
import { computed } from "vue";
import type { ContainerProps } from "@paraxe/core";

const props = withDefaults(
  defineProps<ContainerProps>(),
  {
    size: "default",
  },
);

const containerClasses = computed(() => ({
  container: props.size === "default",
  "container-narrow": props.size === "narrow",
}));
</script>

<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>