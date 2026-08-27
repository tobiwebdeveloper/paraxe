<script setup lang="ts">
import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";

import type { DrawerProps } from "@paraxe/core";

const props = withDefaults(
  defineProps<DrawerProps>(),
  {
    modelValue: false,
    side: "right",
    closeOnBackdrop: true,
    closeOnEscape: true,
  },
);

const emit = defineEmits<{
  "update:modelValue": [
    value: boolean,
  ];
}>();

const panel =
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
  emit(
    "update:modelValue",
    false,
  );
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
    !panel.value
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
      panel.value.querySelectorAll<HTMLElement>(
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

async function openDrawer() {
  previouslyFocused =
    document.activeElement instanceof
    HTMLElement
      ? document.activeElement
      : null;

  await nextTick();

  const focusable =
    panel.value?.querySelector<HTMLElement>(
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
      await openDrawer();
    } else {
      restoreFocus();
    }
  },
);

onMounted(() => {
  document.addEventListener(
    "keydown",
    handleKeydown,
  );

  if (props.modelValue) {
    openDrawer();
  }
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
      v-if="props.modelValue"
      class="drawer"
      :class="{
        'drawer--open': props.modelValue,
        'drawer--left': props.side === 'left',
        'drawer--right': props.side === 'right',
      }"
      role="presentation"
    >
      <button
        class="drawer-backdrop"
        type="button"
        aria-label="Close drawer"
        tabindex="-1"
        @click="handleBackdropClick"
      />

      <aside
        ref="panel"
        class="drawer-panel"
        role="dialog"
        aria-modal="true"
      >
        <div class="drawer-content">
          <slot />
        </div>
      </aside>
    </div>
  </Teleport>
</template>