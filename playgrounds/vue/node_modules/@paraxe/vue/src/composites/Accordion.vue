<script setup lang="ts">
import { provide, ref, computed } from "vue";
import type { AccordionProps } from "@/paraxe/core"

type AccordionContext = {
  openItems: Readonly<ReturnType<typeof ref<string[]>>>;
  isOpen: (id: string) => boolean;
  toggleItem: (id: string) => void;
};

const props = withDefaults(
  defineProps<AccordionProps
  >(),
  {
    multiple: false,
    collapsible: true,
    defaultOpen: () => [],
  },
);

const openItems = ref<string[]>([...props.defaultOpen]);

function isOpen(id: string) {
  return openItems.value.includes(id);
}

function toggleItem(id: string) {
  const currentlyOpen = isOpen(id);

  if (currentlyOpen) {
    if (!props.collapsible) {
      return;
    }

    openItems.value = openItems.value.filter((item) => item !== id);
    return;
  }

  if (props.multiple) {
    openItems.value = [...openItems.value, id];
    return;
  }

  openItems.value = [id];
}

provide("loba-accordion", {
  openItems,
  isOpen,
  toggleItem,
} satisfies AccordionContext);
</script>

<template>
  <div class="accordion">
    <slot />
  </div>
</template>