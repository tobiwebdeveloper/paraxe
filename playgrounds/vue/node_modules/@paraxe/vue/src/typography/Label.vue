<script setup lang="ts">
import { computed } from "vue";
import type { LabelProps } from "@paraxe/core";

const props = withDefaults(
  defineProps<LabelProps>(),
  {
    for: undefined,
    required: false,
    optional: false,
    disabled: false,
  },
);

const labelClasses = computed(() => ({
  "label-disabled": props.disabled,
}));
</script>

<template>
  <label
    :for="props.for"
    class="label"
    :class="labelClasses"
  >
    <slot />

    <span
      v-if="props.required"
      aria-hidden="true"
    >
      *
    </span>

    <span v-else-if="props.optional">
      (optional)
    </span>
  </label>
</template>