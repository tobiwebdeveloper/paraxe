<script setup lang="ts">
import {
  computed,
  inject,
} from "vue";

import type {
  ChoiceProps,
  ChoiceGroupContext,
} from "@paraxe/core";

const props = withDefaults(
  defineProps<ChoiceProps>(),
  {
    disabled: false,
  },
);

const injectedGroup =
  inject<ChoiceGroupContext>(
    "loba-choice-group",
  );

if (!injectedGroup) {
  throw new Error(
    "Choice must be used inside a ChoiceGroup.",
  );
}

const group = injectedGroup;

const selected = computed(() =>
  group.isSelected(props.value),
);

const disabled = computed(
  () =>
    props.disabled ||
    group.disabled,
);

const classes = computed(() => ({
  choice: true,
  "choice--selected":
    selected.value,
  "choice--disabled":
    disabled.value,
}));

function handleClick() {
  if (disabled.value) {
    return;
  }

  group.toggleChoice(props.value);
}
</script>

<template>
  <button
    type="button"
    :class="classes"
    :disabled="disabled"
    :aria-pressed="selected"
    @click="handleClick"
  >
    <slot />
  </button>
</template>