<script setup lang="ts">
import { computed } from "vue";

type SkeletonVariant =
  | "text"
  | "heading"
  | "avatar"
  | "circle"
  | "button"
  | "default";

interface Props {
  variant?: SkeletonVariant;
  width?: string;
  height?: string;
}

const props = withDefaults(
  defineProps<Props>(),
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