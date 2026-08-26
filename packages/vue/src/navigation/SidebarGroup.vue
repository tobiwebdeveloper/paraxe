<script setup lang="ts">
import { computed } from "vue";
import type { SidebarGroupProps } from "@paraxe/core";

const props = withDefaults(
  defineProps<SidebarGroupProps>(),
  {
    label: "",
  },
);

const groupClasses = computed(() => ({
  "sidebar-group": true,
  "sidebar-group--labeled": Boolean(
    props.label,
  ),
}));
</script>

<template>
  <div :class="groupClasses">
    <div
      v-if="props.label"
      class="sidebar-group-label"
    >
      {{ props.label }}
    </div>

    <div class="sidebar-group-items">
      <slot />
    </div>
  </div>
</template>