<script setup lang="ts">
import { computed } from "vue";
import type { EmptyStateProps } from "@paraxe/core";

const props = withDefaults(defineProps<EmptyStateProps>(), {
  as: "div",
});

const classes = computed(() => [
  "empty-state",
]);
</script>

<template>
  <component
    :is="props.as"
    :class="classes"
  >
    <div
      v-if="$slots.icon"
      class="empty-state-icon"
    >
      <slot name="icon" />
    </div>

    <div class="empty-state-content">
      <slot />
    </div>

    <div
      v-if="$slots.actions"
      class="empty-state-actions"
    >
      <slot name="actions" />
    </div>
  </component>
</template>