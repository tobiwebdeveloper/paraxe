<script setup lang="ts">
import { computed } from "vue";

import type {
  SelectProps,
} from "@paraxe/core";

const props = withDefaults(
  defineProps<SelectProps>(),
  {
    modelValue: "",
    disabled: false,
    error: false,
    success: false,
  },
);

const emit = defineEmits<{
  "update:modelValue": [
    value: string,
  ];
}>();

function handleChange(
  event: Event,
) {
  const target =
    event.target as HTMLSelectElement;

  emit(
    "update:modelValue",
    target.value,
  );
}

const selectClasses = computed(() => ({
  "input-error": props.error,
  "input-success": props.success,
}));
</script>

<template>
 <select
  class="select"
  :class="selectClasses"
  :value="props.modelValue"
  :disabled="props.disabled"
  @change="handleChange"
>
  <slot />
</select>
</template>