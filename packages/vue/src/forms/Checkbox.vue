<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue?: boolean;
  disabled?: boolean;
  name?: string;
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false,
  required: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const checkboxClasses = computed(() => ({
  checkbox: true,
  "checkbox--checked": props.modelValue,
  "checkbox--disabled": props.disabled,
}));

function handleChange(event: Event): void {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.checked);
}
</script>

<template>
  <label :class="checkboxClasses">
    <input
      class="checkbox-input"
      type="checkbox"
      :name="props.name"
      :checked="props.modelValue"
      :disabled="props.disabled"
      :required="props.required"
      @change="handleChange"
    />

    <span
      class="checkbox-control"
      aria-hidden="true"
    />

    <span class="checkbox-label">
      <slot />
    </span>
  </label>
</template>