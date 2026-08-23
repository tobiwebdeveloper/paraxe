<script setup lang="ts">
import {
  computed,
  inject,
} from "vue";

interface Props {
  href?: string;
  current?: boolean;
}

const props = withDefaults(
  defineProps<Props>(),
  {
    href: undefined,
    current: false,
  },
);

const separator = inject(
  "loba-breadcrumbs-separator",
  "/",
);

const classes = computed(() => ({
  "breadcrumbs-item": true,
}));
</script>

<template>
  <li :class="classes">
    <a
      v-if="props.href && !props.current"
      class="breadcrumbs-link"
      :href="props.href"
    >
      <slot />
    </a>

    <span
      v-else
      class="breadcrumbs-current"
      :aria-current="
        props.current
          ? 'page'
          : undefined
      "
    >
      <slot />
    </span>

    <span
      class="breadcrumbs-separator"
      aria-hidden="true"
    >
      {{ separator }}
    </span>
  </li>
</template>