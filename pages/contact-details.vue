
<script setup lang="ts">
import { ref } from "vue";
import { NSpace, NInput, NButton } from "naive-ui";
function save() {
  console.log(contactOptions.value);
}
const contactOptions = ref({
  github: "",
  email: "",
  linkedin: "",
  phone: "",
});
</script>
<template>
  <div>
    <div class="w-96">
      <n-space vertical>
        <n-input
          v-for="(value, key) in contactOptions"
          autosize
          class="w-72"
          v-model:value="contactOptions[key]"
          type="text"
          :placeholder="key"
        />
        <n-button class="bg-green-500 text-white" @click="save"
          >Zapisz</n-button
        >
      </n-space>
    </div>
  </div>
</template>