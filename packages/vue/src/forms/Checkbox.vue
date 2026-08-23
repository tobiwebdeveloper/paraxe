<script setup lang="ts">
import { computed } from "vue";

interface Props {
  value?: boolean;
  disabled?: boolean;
  name?: string;
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  value: false,
  disabled: false,
  required: false,
});

const emit = defineEmits<{
  change: [value: boolean];
}>();

const checkboxClasses = computed(() => ({
  checkbox: true,
  "checkbox--checked": props.value,
  "checkbox--disabled": props.disabled,
}));
</script>

<template>
  <label :class="checkboxClasses">
    <input
      class="checkbox-input"
      type="checkbox"
      :name="props.name"
      :checked="props.value"
      :disabled="props.disabled"
      :required="props.required"
      @change="
        emit(
          'change',
          ($event.target as HTMLInputElement).checked,
        )
      "
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