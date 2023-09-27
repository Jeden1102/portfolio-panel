
<script setup lang="ts">
import { ref } from "vue";
import { NSpace, NInput, NButton } from "naive-ui";
function save() {
  console.log("ok");
}
const activeTab = ref(0);
const footer = ref("");
const footerEN = ref("");
</script>
<template>
  <div>
    <div class="w-96">
      <div class="flex gap-2 my-4">
        <button
          class="bg-blue-400 text-white p-2 rounded-sm px-4 hover:bg-blue-500"
          :class="{ 'bg-blue-600': activeTab === 0 }"
          @click="activeTab = 0"
        >
          Polish
        </button>
        <button
          class="bg-blue-400 text-white p-2 rounded-sm px-4 hover:bg-blue-500"
          :class="{ 'bg-blue-600': activeTab === 1 }"
          @click="activeTab = 1"
        >
          English
        </button>
      </div>
      <n-space vertical v-if="activeTab === 0">
        <n-input
          autosize
          class="w-72"
          v-model:value="footer"
          type="text"
          placeholder="Hello, Im Johny"
        />
      </n-space>
      <n-space vertical v-else>
        <n-input
          autosize
          class="w-72"
          v-model:value="footerEN"
          type="text"
          placeholder="Cześć, jestem Janek"
        />
      </n-space>
    </div>
  </div>
</template>