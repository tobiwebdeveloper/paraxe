<script setup lang="ts">
import { ref } from "vue";
import { Select, Text } from "@paraxe/vue";

const value = ref("");
</script>

<template>
  <div>
    <Select v-model="value">
      <option value="" disabled>
        Choose a prospect
      </option>

      <option value="15">
        Prospect 15
      </option>

      <option value="20">
        Prospect 20
      </option>

      <option value="25">
        Prospect 25
      </option>
    </Select>

    <Text>
      Selected: {{ value }}
    </Text>
  </div>
</template>