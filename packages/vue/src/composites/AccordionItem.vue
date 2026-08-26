<script setup lang="ts">
import { computed, inject } from "vue";

import type { AccordionItemProps } from "@paraxe/core";

const props = withDefaults(defineProps<AccordionItemProps>(), {
  disabled: false,
});

type AccordionContext = {
  isOpen: (id: string) => boolean;
  toggleItem: (id: string) => void;
};
const injectedAccordion = inject<AccordionContext>("loba-accordion");

if (!injectedAccordion) {
  throw new Error(
    "AccordionItem must be used inside an Accordion.",
  );
}

const accordion = injectedAccordion;

if (!accordion) {
  throw new Error(
    "AccordionItem must be used inside an Accordion.",
  );
}

const isOpen = computed(() => accordion.isOpen(props.id));

function toggle() {
  if (!props.disabled) {
    accordion.toggleItem(props.id);
  }
}
</script>

<template>
  <div
    class="accordion-item"
    :class="{ 'accordion-item--open': isOpen }"
  >
    <button
      type="button"
      class="accordion-trigger"
      :disabled="props.disabled"
      :aria-expanded="isOpen"
      :aria-controls="`accordion-${props.id}`"
      @click="toggle"
    >
      <slot name="trigger" />
    </button>

    <div
      v-show="isOpen"
      :id="`accordion-${props.id}`"
      class="accordion-content"
    >
      <slot />
    </div>
  </div>
</template>