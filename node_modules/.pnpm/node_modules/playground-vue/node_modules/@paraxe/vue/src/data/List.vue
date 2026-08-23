<script setup lang="ts">
import {
  provide,
  ref,
  watch,
} from "vue";

export interface ListProps {
  selectable?: boolean;
  multiple?: boolean;
}

export interface ListContext {
  selectable: boolean;
  multiple: boolean;


  isSelected: (
    value: string | number
  ) => boolean;

  toggleSelection: (
    value: string | number
  ) => void;
}

const props = withDefaults(
  defineProps<ListProps>(),
  {
    selectable: false,
    multiple: false,
  },
);

const selectedValues = ref<
  Set<string | number>
>(new Set());

const emit = defineEmits<{
  "update:modelValue": [
    value:
      | string
      | number
      | Array<string | number>
      | null,
  ];
}>();

const modelValue = defineModel<
  string | number | Array<string | number> | null
>({
  default: null,
});

watch(
  modelValue,
  (value) => {
    if (value === null || value === undefined) {
      selectedValues.value = new Set();
      return;
    }

    selectedValues.value = new Set(
      Array.isArray(value)
        ? value
        : [value],
    );
  },
  { immediate: true },
);

function isSelected(
  value: string | number,
) {
  return selectedValues.value.has(value);
}

function toggleSelection(
  value: string | number,
) {
  if (!props.selectable) {
    return;
  }

  const next = new Set(
    selectedValues.value,
  );

  if (props.multiple) {
    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }
  } else {
    if (next.has(value)) {
      next.clear();
    } else {
      next.clear();
      next.add(value);
    }
  }

  selectedValues.value = next;

  const values = [...next];

  modelValue.value = props.multiple
    ? values
    : (values[0] ?? null);
}

provide<ListContext>("loba-list", {
  selectable: props.selectable,
  multiple: props.multiple,
  isSelected,
  toggleSelection,
});
</script>

<template>
  <div class="list">
    <slot />
  </div>
</template>