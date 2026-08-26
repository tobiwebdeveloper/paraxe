<script setup lang="ts">
import Label from "../typography/Label.vue";
import Text from "../typography/Text.vue";

import type {
  FormFieldProps,
} from "@paraxe/core";

const props = withDefaults(
  defineProps<FormFieldProps>(),
  {
    label: undefined,
    description: undefined,
    error: undefined,
    required: false,
    optional: false,
    disabled: false,
  },
);
</script>

<template>
  <div
    class="form-field"
  >
    <Label
      v-if="props.label"
      :for="props.id"
      :required="props.required"
      :optional="props.optional"
      :disabled="props.disabled"
    >
      {{ props.label }}
    </Label>

    <slot />

    <Text
      v-if="props.description && !props.error"
      tone="muted"
    >
      {{ props.description }}
    </Text>

    <Text
      v-if="props.error"
      tone="accent"
    >
      {{ props.error }}
    </Text>
  </div>
</template>