<script setup lang="ts">
import {
  computed,
  ref,
  useSlots,
} from "vue";

export interface SidebarItemProps {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  expanded?: boolean;
}

const props = withDefaults(
  defineProps<SidebarItemProps>(),
  {
    active: false,
    disabled: false,
    href: undefined,
    expanded: false,
  },
);

const slots = useSlots();

const isExpanded = ref(
  props.expanded,
);

const hasChildren = computed(
  () => Boolean(slots.children),
);

const itemClasses = computed(() => ({
  "sidebar-item": true,
  "sidebar-item--active":
    props.active,
  "sidebar-item--disabled":
    props.disabled,
  "sidebar-item--expandable":
    hasChildren.value,
  "sidebar-item--expanded":
    hasChildren.value &&
    isExpanded.value,
}));

function handleClick(event: MouseEvent) {
  if (props.disabled) {
    event.preventDefault();
    return;
  }

  if (hasChildren.value) {
    event.preventDefault();
    isExpanded.value =
      !isExpanded.value;
  }
}
</script>

<template>
  <div class="sidebar-item-wrapper">
    <component
      :is="hasChildren ? 'button' : 'a'"
      :href="
        hasChildren || !props.href
          ? undefined
          : props.href
      "
      :type="
        hasChildren
          ? 'button'
          : undefined
      "
      :class="itemClasses"
      :disabled="
        hasChildren
          ? props.disabled
          : undefined
      "
      :aria-current="
        props.active
          ? 'page'
          : undefined
      "
      :aria-expanded="
        hasChildren
          ? isExpanded
          : undefined
      "
      :aria-disabled="
        props.disabled
          ? 'true'
          : undefined
      "
      @click="handleClick"
    >
      <span
        v-if="$slots.icon"
        class="sidebar-item-icon"
        aria-hidden="true"
      >
        <slot name="icon" />
      </span>

      <span class="sidebar-item-label">
        <slot />
      </span>

      <span
        v-if="hasChildren"
        class="sidebar-item-chevron"
        aria-hidden="true"
      >
        <span
          :class="{
            'sidebar-item-chevron--expanded':
              isExpanded,
          }"
        >
          ›
        </span>
      </span>
    </component>

    <div
      v-if="
        hasChildren &&
        isExpanded
      "
      class="sidebar-item-children"
    >
      <slot name="children" />
    </div>
  </div>
</template>