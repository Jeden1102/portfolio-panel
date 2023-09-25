
<script setup lang="ts">
import { ref } from "vue";
import { NSpace, NInput, NButton } from "naive-ui";
function save() {
  console.log("ok");
}
const footer = ref("");
</script>
<template>
  <div>
    <div class="w-96">
      <n-space vertical>
        <n-input
          autosize
          class="w-72"
          v-model:value="footer"
          type="text"
          placeholder="Footer text"
        />
        <n-button class="bg-green-500 text-white" @click="save">Save</n-button>
      </n-space>
    </div>
  </div>
</template>