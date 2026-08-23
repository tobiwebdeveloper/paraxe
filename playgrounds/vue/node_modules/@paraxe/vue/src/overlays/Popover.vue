<script setup lang="ts">
import {
  onBeforeUnmount,
  onMounted,
  ref,
} from "vue";

interface Props {
  placement?: "top" | "bottom" | "left" | "right";
}

const props = withDefaults(
  defineProps<Props>(),
  {
    placement: "bottom",
  },
);

const open = ref(false);

const popover = ref<HTMLElement | null>(null);

function toggle() {
  open.value = !open.value;
}

function close() {
  open.value = false;
}

function handleDocumentClick(
  event: MouseEvent,
) {
  if (!popover.value) {
    return;
  }

  const target = event.target;

  if (
    target instanceof Node &&
    !popover.value.contains(target)
  ) {
    close();
  }
}

function handleKeydown(
  event: KeyboardEvent,
) {
  if (event.key === "Escape") {
    close();
  }
}

onMounted(() => {
  document.addEventListener(
    "click",
    handleDocumentClick,
  );

  document.addEventListener(
    "keydown",
    handleKeydown,
  );
});

onBeforeUnmount(() => {
  document.removeEventListener(
    "click",
    handleDocumentClick,
  );

  document.removeEventListener(
    "keydown",
    handleKeydown,
  );
});
</script>

<template>
  <div
    ref="popover"
    class="popover"
    :class="{
      'popover--open': open,
      [`popover--${props.placement}`]:
        true,
    }"
  >
    <div
      class="popover-trigger"
      @click="toggle"
    >
      <slot name="trigger" />
    </div>

    <div
      v-if="open"
      class="popover-content"
      role="dialog"
    >
      <slot />
    </div>
  </div>
</template>