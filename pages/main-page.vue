
<script setup lang="ts">
import { ref } from "vue";
import { NSpace, NInput, NButton } from "naive-ui";
function save() {
  console.log("ok");
}
const activeTab = ref(0);
const heading = ref("");
const description = ref("");
const headingEN = ref("");
const descriptionEN = ref("");
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
          v-model:value="headingEN"
          type="text"
          placeholder="Hello, Im Johny"
        />
        <n-input
          v-model:value="descriptionEN"
          type="textarea"
          placeholder="I'am a programmer..."
        />
      </n-space>
      <n-space vertical v-else>
        <n-input
          autosize
          class="w-72"
          v-model:value="heading"
          type="text"
          placeholder="Cześć, jestem Janek"
        />
        <n-input
          v-model:value="description"
          type="textarea"
          placeholder="Jestem programistą..."
        />
      </n-space>
    </div>
  </div>
</template>