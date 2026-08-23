<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue?: string;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  disabled: false,
  error: false,
  success: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

function handleChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit("update:modelValue", target.value);
}

const selectClasses = computed(() => ({
  "input-error": props.error,
  "input-success": props.success,
}));

</script>

<template>
 <select
  class="select"
  :class="selectClasses"
  :value="props.modelValue"
  :disabled="props.disabled"
  @change="handleChange"
>
  <slot />
</select>
</template>