<script setup lang="ts">
import { ref } from "vue";
import { NDynamicInput } from "naive-ui";
const value = ref([]);
</script>

<template>
  <div>
    <label class="block my-2 text-lg" for="">Grupy umiejętności</label>
    <n-dynamic-input
      v-model:value="value"
      preset="pair"
      key-placeholder="Projects"
      value-placeholder="Projekty"
    />
  </div>
</template>