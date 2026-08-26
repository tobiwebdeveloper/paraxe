<script setup lang="ts">
import type { SectionHeaderProps } from "@paraxe/core";

const props = withDefaults(defineProps<SectionHeaderProps>(), {
  width: "default",
  align: "left",
});
</script>

<template>
  <header
    class="section-header"
    :class="{
      'section-header--wide': props.width === 'wide',
      'section-header--center': props.align === 'center',
    }"
  >
    <slot />
  </header>
</template>