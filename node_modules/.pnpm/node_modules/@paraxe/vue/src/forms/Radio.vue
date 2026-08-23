<script setup lang="ts">
import { computed } from "vue";

export interface RadioProps {
  modelValue?: string | number | null;
  value: string | number;
  name: string;
  disabled?: boolean;
}

const props = withDefaults(
  defineProps<RadioProps>(),
  {
    modelValue: null,
    disabled: false,
  },
);

const emit = defineEmits<{
  "update:modelValue": [
    value: string | number,
  ];
}>();

const checked = computed(
  () => props.modelValue === props.value,
);

const classes = computed(() => ({
  radio: true,
  "radio--checked": checked.value,
  "radio--disabled": props.disabled,
}));

function handleChange() {
  emit(
    "update:modelValue",
    props.value,
  );
}
</script>

<template>
  <label :class="classes">
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      class="sr-only"
      @change="handleChange"
    />

    <span
      class="radio-control"
      aria-hidden="true"
    />

    <span>
      <slot />
    </span>
  </label>
</template>