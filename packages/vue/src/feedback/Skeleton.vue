<script setup lang="ts">
import { computed } from "vue";

import type {
  SkeletonProps,
} from "@paraxe/core";

const props = withDefaults(
  defineProps<SkeletonProps>(),
  {
    variant: "default",
    width: undefined,
    height: undefined,
  },
);

const skeletonClasses = computed(() => ({
  skeleton: true,
  [`skeleton--${props.variant}`]:
    props.variant !== "default",
}));
</script>

<template>
  <div
    :class="skeletonClasses"
    :style="{
      width: props.width,
      height: props.height,
    }"
    aria-hidden="true"
  />
</template>