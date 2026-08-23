<script setup lang="ts">
import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";

interface Props {
  modelValue?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
}

const props = withDefaults(
  defineProps<Props>(),
  {
    modelValue: false,
    closeOnBackdrop: true,
    closeOnEscape: true,
  },
);

const emit = defineEmits<{
  "update:modelValue": [
    value: boolean,
  ];
}>();

const dialogElement =
  ref<HTMLElement | null>(null);

let previouslyFocused:
  | HTMLElement
  | null = null;

const focusableSelector = [
  "button:not([disabled])",
  "[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(", ");

function close() {
  emit("update:modelValue", false);
}

function handleBackdropClick() {
  if (props.closeOnBackdrop) {
    close();
  }
}

function handleKeydown(
  event: KeyboardEvent,
) {
  if (
    !props.modelValue ||
    !dialogElement.value
  ) {
    return;
  }

  if (
    event.key === "Escape" &&
    props.closeOnEscape
  ) {
    event.preventDefault();
    close();
    return;
  }

  if (event.key !== "Tab") {
    return;
  }

  const focusable =
    Array.from(
      dialogElement.value.querySelectorAll<HTMLElement>(
        focusableSelector,
      ),
    );

  if (focusable.length === 0) {
    event.preventDefault();
    return;
  }

  const first = focusable[0];
  const last =
    focusable[focusable.length - 1];

  if (
    event.shiftKey &&
    document.activeElement === first
  ) {
    event.preventDefault();
    last.focus();
    return;
  }

  if (
    !event.shiftKey &&
    document.activeElement === last
  ) {
    event.preventDefault();
    first.focus();
  }
}

async function openDialog() {
  previouslyFocused =
    document.activeElement instanceof
    HTMLElement
      ? document.activeElement
      : null;

  await nextTick();

  const focusable =
    dialogElement.value?.querySelector<HTMLElement>(
      focusableSelector,
    );

  focusable?.focus();
}

function restoreFocus() {
  previouslyFocused?.focus();
  previouslyFocused = null;
}

watch(
  () => props.modelValue,
  async (open) => {
    if (open) {
      await openDialog();
    } else {
      restoreFocus();
    }
  },
);

onMounted(() => {
  if (props.modelValue) {
    openDialog();
  }

  document.addEventListener(
    "keydown",
    handleKeydown,
  );
});

onBeforeUnmount(() => {
  document.removeEventListener(
    "keydown",
    handleKeydown,
  );

  restoreFocus();
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="dialog dialog--open"
      role="presentation"
    >
      <button
        class="dialog-backdrop"
        type="button"
        aria-label="Close dialog"
        tabindex="-1"
        @click="handleBackdropClick"
      />

      <div
        ref="dialogElement"
        class="dialog-content"
        role="dialog"
        aria-modal="true"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>