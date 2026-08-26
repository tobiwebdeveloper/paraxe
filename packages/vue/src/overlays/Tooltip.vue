<script setup lang="ts">
import {
  onBeforeUnmount,
  ref,
} from "vue";
import type {
  TooltipProps,
} from "@paraxe/core";

const props = withDefaults(
  defineProps<TooltipProps>(),
  {
    placement: "top",
    delay: 300,
  },
);

const visible = ref(false);

let timer:
  | ReturnType<typeof setTimeout>
  | undefined;

function show() {
  clearTimeout(timer);

  timer = setTimeout(() => {
    visible.value = true;
  }, props.delay);
}

function hide() {
  clearTimeout(timer);
  visible.value = false;
}

onBeforeUnmount(() => {
  clearTimeout(timer);
});
</script>

<template>
  <span
    class="tooltip"
    :class="{
      'tooltip--visible': visible,
      [`tooltip--${props.placement}`]:
        true,
    }"
    @mouseenter="show"
    @mouseleave="hide"
    @focusin="show"
    @focusout="hide"
  >
    <span class="tooltip-trigger">
      <slot />
    </span>

    <span
      class="tooltip-content"
      role="tooltip"
    >
      {{ props.text }}
    </span>
  </span>
</template>