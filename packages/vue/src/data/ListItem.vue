<script setup lang="ts">
import {
  computed,
  inject,
} from "vue";

export interface ListItemProps {
  value: string | number;
  disabled?: boolean;
}

const props = withDefaults(
  defineProps<ListItemProps>(),
  {
    disabled: false,
  },
);

interface ListContext {
  selectable: boolean;
  multiple: boolean;

  isSelected: (
    value: string | number
  ) => boolean;

  toggleSelection: (
    value: string | number
  ) => void;
}

const injectedList = inject<ListContext>("loba-list");

if (!injectedList) {
  throw new Error(
    "ListItem must be used inside a List.",
  );
}

const list = injectedList;

if (!list) {
  throw new Error(
    "ListItem must be used inside a List.",
  );
}

const isSelected = computed(() =>
  list.isSelected(props.value),
);

const classes = computed(() => ({
  "list-item": true,
  "list-item--selectable":
    list.selectable && !props.disabled,
  "list-item--selected":
    isSelected.value,
  "list-item--disabled":
    props.disabled,
}));

function handleClick() {
  if (
    props.disabled ||
    !list.selectable
  ) {
    return;
  }

  list.toggleSelection(props.value);
}
</script>

<template>
  <div
    :class="classes"
    :tabindex="
      list.selectable && !props.disabled
        ? 0
        : undefined
    "
    :aria-selected="
      list.selectable
        ? isSelected
        : undefined
    "
    :aria-disabled="
      props.disabled || undefined
    "
    role="listitem"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <slot />
  </div>
</template>