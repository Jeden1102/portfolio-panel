<script setup lang="ts">
import { ref } from "vue";
import { NDynamicInput } from "naive-ui";
const value = ref([]);
</script>

<template>
  <div>
    <label class="block my-2 text-lg" for="">Umiejętności miękkie</label>
    <n-dynamic-input
      v-model:value="value"
      preset="pair"
      key-placeholder="Communicative"
      value-placeholder="Komunikatywny"
    />
  </div>
</template>