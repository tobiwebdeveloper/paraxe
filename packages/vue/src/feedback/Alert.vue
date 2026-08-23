<script setup lang="ts">
import { computed } from "vue";

type AlertVariant =
  | "info"
  | "success"
  | "warning"
  | "danger";

interface Props {
  variant?: AlertVariant;
  dismissible?: boolean;
}

const props = withDefaults(
  defineProps<Props>(),
  {
    variant: "info",
    dismissible: false,
  },
);

const emit = defineEmits<{
  close: [];
}>();

const alertClasses = computed(() => ({
  alert: true,
  [`alert-${props.variant}`]: true,
}));

function handleClose() {
  emit("close");
}
</script>

<template>
  <div
    :class="alertClasses"
    role="alert"
  >
    <div class="alert-content">
      <slot />
      
      <div
        v-if="$slots.actions"
        class="alert-actions"
      >
        <slot name="actions" />
      </div>
    </div>

    <button
      v-if="dismissible"
      class="alert-close"
      type="button"
      aria-label="Dismiss alert"
      @click="handleClose"
    >
      ×
    </button>
  </div>
</template>