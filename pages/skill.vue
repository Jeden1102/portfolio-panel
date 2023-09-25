
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
        Każda technologia lub skill na hoverze szczegóły co z tym robiłem i
        linki do appek gdzie używałem. Do przemyślenia jak z kategoriami np.
        dodać kategorie "Technologie"?

        <n-button class="bg-green-500 text-white" @click="save">Save</n-button>
      </n-space>
    </div>
  </div>
</template>