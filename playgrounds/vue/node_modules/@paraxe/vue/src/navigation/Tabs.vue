<script setup lang="ts">
import {
  provide,
  ref,
  watch,
} from "vue";
import type {
  TabsProps,
} from "@paraxe/core";

interface TabsContext {
  activeValue: () =>
    | string
    | number
    | null;

  selectTab: (
    value: string | number,
  ) => void;
}

const props = withDefaults(
  defineProps<TabsProps>(),
  {
    modelValue: null,
  },
);

const emit = defineEmits<{
  "update:modelValue": [
    value: string | number,
  ];
}>();

const activeValue = ref<
  string | number | null
>(props.modelValue);

watch(
  () => props.modelValue,
  (value) => {
    activeValue.value = value;
  },
);

function selectTab(
  value: string | number,
) {
  activeValue.value = value;

  emit(
    "update:modelValue",
    value,
  );
}

provide<TabsContext>(
  "loba-tabs",
  {
    activeValue: () =>
      activeValue.value,
    selectTab,
  },
);
</script>

<template>
  <div class="tabs">
    <div
      class="tabs-list"
      role="tablist"
    >
      <slot />
    </div>
  </div>
</template>