<script setup lang="ts">
import { provide } from "vue";
import type { BreadcrumbsProps } from "@paraxe/core";

const props = withDefaults(
  defineProps<BreadcrumbsProps>(),
  {
    separator: "/",
  },
);

provide(
  "loba-breadcrumbs-separator",
  props.separator,
);
</script>

<template>
  <nav
    class="breadcrumbs"
    aria-label="Breadcrumb"
  >
    <ol class="breadcrumbs-list">
      <slot />
    </ol>
  </nav>
</template>