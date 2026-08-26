<script setup lang="ts">
import {
  onBeforeUnmount,
  ref,
  watch,
} from "vue";

import type {
  ToastProps,
} from "@paraxe/core";

const props = withDefaults(
  defineProps<ToastProps>(),
  {
    modelValue: false,
    title: undefined,
    variant: "info",
    duration: 4000,
    dismissible: true,
  },
);

const emit = defineEmits<{
  "update:modelValue": [
    value: boolean,
  ];
  close: [];
}>();

const visible = ref(
  props.modelValue,
);

let timer:
  | ReturnType<typeof setTimeout>
  | undefined;

function clearTimer() {
  if (timer) {
    clearTimeout(timer);
    timer = undefined;
  }
}

function close() {
  clearTimer();
  visible.value = false;

  emit(
    "update:modelValue",
    false,
  );

  emit("close");
}

function startTimer() {
  clearTimer();

  if (
    props.duration <= 0 ||
    !props.modelValue
  ) {
    return;
  }

  timer = setTimeout(() => {
    close();
  }, props.duration);
}

watch(
  () => props.modelValue,
  (value) => {
    visible.value = value;

    if (value) {
      startTimer();
    } else {
      clearTimer();
    }
  },
  {
    immediate: true,
  },
);

onBeforeUnmount(() => {
  clearTimer();
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="toast"
      :class="{
        'toast--visible': visible,
        [`toast-${variant}`]: true,
      }"
      role="status"
      aria-live="polite"
    >
      <div class="toast-content">
        <div
          v-if="title"
          class="toast-title"
        >
          {{ title }}
        </div>

        <div class="toast-message">
          <slot />
        </div>
      </div>

      <button
        v-if="dismissible"
        class="toast-close"
        type="button"
        aria-label="Dismiss notification"
        @click="close"
      >
        ×
      </button>
    </div>
  </Teleport>
</template>