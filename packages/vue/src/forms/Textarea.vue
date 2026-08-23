<script setup lang="ts">
import { computed } from "vue";

interface Props {
  value?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  success?: boolean;
  maxlength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  value: "",
  disabled: false,
  readonly: false,
  error: false,
  success: false,
  maxlength: undefined,
});

const emit = defineEmits<{
  input: [value: string];
  change: [value: string];
}>();

const textareaClasses = computed(() => ({
  "input-error": props.error,
  "input-success": props.success,
}));

function handleInput(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  emit("input", target.value);
}

function handleChange(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  emit("change", target.value);
}
</script>

<template>
  <textarea
    class="textarea"
    :class="textareaClasses"
    :value="props.value"
    :disabled="props.disabled"
    :readonly="props.readonly"
    :maxlength="props.maxlength"
    @input="handleInput"
    @change="handleChange"
  />
</template>