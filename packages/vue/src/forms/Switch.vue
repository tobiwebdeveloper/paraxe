<script setup lang="ts">
import { computed } from "vue";

import type {
  SwitchProps,
} from "@paraxe/core";

const props = withDefaults(
  defineProps<SwitchProps>(),
  {
    modelValue: false,
    disabled: false,
  },
);

const emit = defineEmits<{
  "update:modelValue": [
    value: boolean,
  ];
}>();

const classes = computed(() => ({
  switch: true,
  "switch--checked":
    props.modelValue,
  "switch--disabled":
    props.disabled,
}));

function handleChange(
  event: Event,
) {
  const input =
    event.target as HTMLInputElement;

  emit(
    "update:modelValue",
    input.checked,
  );
}
</script>
<template>
  <label :class="classes">
    <input
      type="checkbox"
      role="switch"
      :checked="modelValue"
      :disabled="disabled"
      class="sr-only"
      @change="handleChange"
    />

    <span
      class="switch-control"
      aria-hidden="true"
    />

    <span>
      <slot />
    </span>
  </label>
</template>