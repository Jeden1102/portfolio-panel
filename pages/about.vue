
<script setup lang="ts">
import { ref } from "vue";
import { NSpace, NInput, NButton } from "naive-ui";
function save() {
  console.log("ok");
}
const heading = ref("");
const description = ref("");
</script>
<template>
  <div>
    <div class="w-96">
      <n-space vertical>
        <n-input
          autosize
          class="w-72"
          v-model:value="heading"
          type="text"
          placeholder="Dominik Raducki"
        />
        <n-input
          v-model:value="description"
          type="textarea"
          placeholder="I'am a programmer..."
        />
        <n-button class="bg-green-500 text-white" @click="save">Save</n-button>
      </n-space>
    </div>
  </div>
</template>