<script setup lang="ts">
import {
  computed,
  inject,
} from "vue";

export interface ChoiceProps {
  value: string | number;
  disabled?: boolean;
}

const props = withDefaults(
  defineProps<ChoiceProps>(),
  {
    disabled: false,
  },
);

interface ChoiceGroupContext {
  multiple: boolean;
  disabled: boolean;

  isSelected: (
    value: string | number,
  ) => boolean;

  toggleChoice: (
    value: string | number,
  ) => void;
}

const injectedGroup = inject<ChoiceGroupContext>(
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