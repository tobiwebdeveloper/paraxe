<script setup lang="ts">
import { computed } from "vue";

import type {
  TextareaProps,
} from "@paraxe/core";

const props = withDefaults(
  defineProps<TextareaProps>(),
  {
    modelValue: "",
    disabled: false,
    readonly: false,
    error: false,
    success: false,
    maxlength: undefined,
  },
);

const emit = defineEmits<{
  "update:modelValue": [
    value: string,
  ];
}>();

const textareaClasses = computed(() => ({
  "input-error": props.error,
  "input-success": props.success,
}));

function handleInput(
  event: Event,
): void {
  const target =
    event.target as HTMLTextAreaElement;

  emit(
    "update:modelValue",
    target.value,
  );
}
</script>

<template>
  <textarea
    class="textarea"
    :class="textareaClasses"
    :value="props.modelValue"
    :disabled="props.disabled"
    :readonly="props.readonly"
    :maxlength="props.maxlength"
    @input="handleInput"
  />
</template>