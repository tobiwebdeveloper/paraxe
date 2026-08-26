<script setup lang="ts">
import {
  computed,
  inject,
} from "vue";

import type {
  ListItemProps,
  ListContext,
} from "@paraxe/core";

const props = withDefaults(
  defineProps<ListItemProps>(),
  {
    disabled: false,
  },
);

const injectedList = inject<ListContext>("loba-list");

if (!injectedList) {
  throw new Error(
    "ListItem must be used inside a List.",
  );
}

const list = injectedList;

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