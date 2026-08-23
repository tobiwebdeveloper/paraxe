<script setup lang="ts">
import { Input } from "@paraxe/vue";
import { ref } from "vue";

const value = ref("Hello");

const emitValue = (event: Event) => {
  value.value = (event.target as HTMLInputElement).value;
};
</script>

<template>
  <Input v-model="value" />

  <Text>Value: {{ value }}</Text>
</template>