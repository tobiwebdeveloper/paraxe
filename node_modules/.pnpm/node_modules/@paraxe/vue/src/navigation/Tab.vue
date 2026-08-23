<script setup lang="ts">
import {
  computed,
  inject,
} from "vue";

interface Props {
  value: string | number;
  disabled?: boolean;
}

const props = withDefaults(
  defineProps<Props>(),
  {
    disabled: false,
  },
);

interface TabsContext {
  activeValue: () =>
    | string
    | number
    | null;

  selectTab: (
    value: string | number,
  ) => void;
}

const injectedTabs =
  inject<TabsContext>("loba-tabs");

if (!injectedTabs) {
  throw new Error(
    "Tab must be used inside Tabs.",
  );
}

const tabs = injectedTabs;

const active = computed(
  () =>
    tabs.activeValue() ===
    props.value,
);

const tabClasses = computed(() => ({
  tab: true,
  "tab--active": active.value,
  "tab--disabled": props.disabled,
}));

function handleClick() {
  if (props.disabled) {
    return;
  }

  tabs.selectTab(props.value);
}
</script>

<template>
  <button
    type="button"
    :class="tabClasses"
    role="tab"
    :aria-selected="active"
    :aria-disabled="
      props.disabled || undefined
    "
    :tabindex="
      active ? 0 : -1
    "
    @click="handleClick"
  >
    <slot />
  </button>
</template>