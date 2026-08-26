<script setup lang="ts">
import { computed } from "vue";

import type {
  InputProps,
} from "@paraxe/core";

const props = withDefaults(
  defineProps<InputProps>(),
  {
    type: "text",
    placeholder: "",
    modelValue: "",
    required: false,
    disabled: false,
    readonly: false,
    error: false,
    success: false,
  },
);

const emit = defineEmits<{
  "update:modelValue": [
    value: string,
  ];
}>();

const inputClasses = computed(() => ({
  "input-error": props.error,
  "input-success": props.success,
}));

function handleInput(
  event: Event,
): void {
  emit(
    "update:modelValue",
    (event.target as HTMLInputElement).value,
  );
}
</script>

<template>
  <input
    :class="['input', inputClasses]"
    :type="props.type"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    :required="props.required"
    :disabled="props.disabled"
    :readonly="props.readonly"
    @input="handleInput"
  />
</template>