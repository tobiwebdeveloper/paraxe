<script setup lang="ts">
import { computed } from "vue";

interface Props {
  value?: string;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  value: "",
  disabled: false,
  error: false,
  success: false,
});

const emit = defineEmits<{
  change: [value: string];
}>();

const selectClasses = computed(() => ({
  "input-error": props.error,
  "input-success": props.success,
}));

function handleChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit("change", target.value);
}
</script>

<template>
  <select
    class="select"
    :class="selectClasses"
    :value="props.value"
    :disabled="props.disabled"
    @change="handleChange"
  >
    <slot />
  </select>
</template>