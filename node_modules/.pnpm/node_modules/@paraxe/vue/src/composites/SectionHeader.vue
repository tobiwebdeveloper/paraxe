<script setup lang="ts">
interface Props {
  width?: "default" | "wide";
  align?: "left" | "center";
}

const props = withDefaults(defineProps<Props>(), {
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