<script setup lang="ts">
import { computed } from "vue";

import type {
    ButtonVariant,
    ButtonSize,
    ButtonWidth,
    ButtonIconPosition,
} from "@paraxe/core";

interface Props {
    variant?: ButtonVariant;
    size?: ButtonSize;
    width?: ButtonWidth;
    iconPosition?: ButtonIconPosition;
    disabled?: boolean;
    loading?: boolean;
}

const props = withDefaults(defineProps<Props>(),
{
    variant: "primary",
    size: "medium",
    width: "auto",
    iconPosition: "leading",
    disabled: false,
    loading: false,
}
)

const emit = defineEmits<{
  activate: [];
}>()

const sizeClasses: Record<ButtonSize, string> = {
  small: "btn-sm",
  medium: "btn-md",
  large: "btn-lg",
};

const buttonClasses = computed(() => [
  `btn-${props.variant}`,
  sizeClasses[props.size],
  props.width === "full" ? "btn-full" : "",
]);

</script>
<template>
    <button
    class="btn"
    :class="buttonClasses"
    :disabled="props.disabled || props.loading"
    @click="emit('activate')">
    <slot />
    </button>
</template>