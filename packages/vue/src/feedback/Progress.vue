<script setup lang="ts">
import { computed } from "vue";

import type {
  ProgressProps,
} from "@paraxe/core";

const props = withDefaults(
  defineProps<ProgressProps>(),
  {
    value: 0,
    max: 100,
    indeterminate: false,
    variant: "default",
    showValue: false,
  },
);

const percentage = computed(() => {
  if (props.max <= 0) {
    return 0;
  }

  return Math.min(
    100,
    Math.max(
      0,
      (props.value / props.max) * 100,
    ),
  );
});

const progressClasses = computed(() => ({
  progress: true,
  [`progress--${props.variant}`]:
    true,
  "progress--indeterminate":
    props.indeterminate,
}));
</script>

<template>
  <div
    :class="progressClasses"
    role="progressbar"
    :aria-valuemin="indeterminate ? undefined : 0"
    :aria-valuemax="indeterminate ? undefined : max"
    :aria-valuenow="
      indeterminate
        ? undefined
        : value
    "
  >
    <div class="progress-track">
      <div
        class="progress-value"
        :style="
          indeterminate
            ? undefined
            : {
                width: `${percentage}%`,
              }
        "
      />
    </div>

    <div
      v-if="showValue"
      class="progress-label"
    >
      <span>
        <slot />
      </span>

      <span>
        {{ Math.round(percentage) }}%
      </span>
    </div>

    <slot
      v-else
      name="label"
    />
  </div>
</template>