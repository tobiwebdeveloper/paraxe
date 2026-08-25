<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  success?: boolean;
  maxlength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  disabled: false,
  readonly: false,
  error: false,
  success: false,
  maxlength: undefined,
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const textareaClasses = computed(() => ({
  "input-error": props.error,
  "input-success": props.success,
}));

function handleInput(event: Event): void {
  const target = event.target as HTMLTextAreaElement;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <textarea
    class="textarea"
    :class="textareaClasses"
    :value="props.modelValue"
    :disabled="props.disabled"
    :readonly="props.readonly"
    :maxlength="props.maxlength"
    @input="handleInput"
  />
</template>