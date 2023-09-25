<script setup lang="ts">
import { ref } from "vue";
import { NDynamicTags } from "naive-ui";
const tags = ref([]);
</script>

<template>
  <div>
    <label class="block my-2 text-lg" for="">Grupy umiejętności</label>
    <n-dynamic-tags v-model:value="tags" />
  </div>
</template>