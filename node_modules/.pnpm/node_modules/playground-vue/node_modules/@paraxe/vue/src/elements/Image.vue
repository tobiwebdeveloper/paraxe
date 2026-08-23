<script setup lang="ts">
import type {
  ImageAspectRatio,
  ImageFit,
} from "@paraxe/core";

interface Props {
  src: string;
  alt: string;
  fit?: ImageFit;
  aspectRatio?: ImageAspectRatio;
}

const props = withDefaults(defineProps<Props>(), {
  fit: "cover",
  aspectRatio: "auto",
});
</script>

<template>
  <div
    class="media"
    :class="{
      'media-square': props.aspectRatio === 'square',
      'media-video': props.aspectRatio === 'video',
      'media-portrait': props.aspectRatio === 'portrait',
      'media-wide': props.aspectRatio === 'wide',
      'media-contain': props.fit === 'contain',
    }"
  >
    <img
      :src="props.src"
      :alt="props.alt"
    />
  </div>
</template>