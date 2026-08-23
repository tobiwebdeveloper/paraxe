<script setup lang="ts">
import { computed } from "vue";

export interface SidebarProps {
  collapsed?: boolean;
}

const props = withDefaults(
  defineProps<SidebarProps>(),
  {
    collapsed: false,
  },
);

const sidebarClasses = computed(() => ({
  sidebar: true,
  "sidebar--collapsed": props.collapsed,
}));
</script>

<template>
  <aside :class="sidebarClasses">
    <div class="sidebar-header">
      <slot name="header" />
    </div>

    <nav class="sidebar-navigation">
      <slot />
    </nav>

    <div class="sidebar-footer">
      <slot name="footer" />
    </div>
  </aside>
</template>