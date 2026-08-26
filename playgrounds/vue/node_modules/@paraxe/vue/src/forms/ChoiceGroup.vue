<script setup lang="ts">
import { computed, provide } from "vue";

import type {
  ChoiceGroupProps,
  ChoiceGroupContext,
} from "@paraxe/core";

const props = withDefaults(
  defineProps<ChoiceGroupProps>(),
  {
    modelValue: null,
    multiple: false,
    disabled: false,
  },
);

const emit = defineEmits<{
  "update:modelValue": [
    value:
      | string
      | number
      | Array<string | number>
      | null,
  ];
}>();

const classes = computed(() => ({
  "choice-group": true,
  "choice-group--multiple":
    props.multiple,
}));

const selectedValues = computed<
  Array<string | number>
>(() => {
  if (
    Array.isArray(props.modelValue)
  ) {
    return props.modelValue;
  }

  if (
    props.modelValue === null ||
    props.modelValue === undefined
  ) {
    return [];
  }

  return [props.modelValue];
});

function isSelected(
  value: string | number,
) {
  return selectedValues.value.includes(
    value,
  );
}

function toggleChoice(
  value: string | number,
) {
  if (props.disabled) {
    return;
  }

  if (props.multiple) {
    const next = new Set(
      selectedValues.value,
    );

    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }

    emit(
      "update:modelValue",
      [...next],
    );

    return;
  }

  emit(
    "update:modelValue",
    value,
  );
}

provide<ChoiceGroupContext>(
  "loba-choice-group",
  {
    multiple: props.multiple,
    disabled: props.disabled,
    isSelected,
    toggleChoice,
  },
);
</script>

<template>
  <div
    :class="classes"
    role="group"
  >
    <slot />
  </div>
</template>