<script setup lang="ts">
import { computed } from "vue";

type ContainerSize = "default" | "narrow";

interface Props {
  size?: ContainerSize;
}

const props = withDefaults(defineProps<Props>(), {
  size: "default",
});

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