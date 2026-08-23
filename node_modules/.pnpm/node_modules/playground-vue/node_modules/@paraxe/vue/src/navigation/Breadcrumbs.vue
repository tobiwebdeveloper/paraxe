<script setup lang="ts">
import { provide } from "vue";

interface Props {
  separator?: string;
}

const props = withDefaults(
  defineProps<Props>(),
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