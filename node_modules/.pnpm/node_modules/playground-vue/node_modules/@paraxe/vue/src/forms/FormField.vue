<script setup lang="ts">
import Label from "../typography/Label.vue";
import Text from "../typography/Text.vue";

interface Props {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  description: undefined,
  error: undefined,
  required: false,
  optional: false,
  disabled: false,
});
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