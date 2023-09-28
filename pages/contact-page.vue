
<script setup lang="ts">
import { ref } from "vue";
import { NSpace, NInput, NTabs, NTabPane } from "naive-ui";
import { ValuesInterface } from "../interface/interface";
const languages = {
  pl: "Polski",
  en: "Angielski",
};
const fields = {
  heading: "text",
  description: "textarea",
};
const values: Ref<ValuesInterface> = ref({});
</script>
<template>
  <div>
    <div class="w-96">
      <n-tabs type="segment">
        <n-tab-pane
          v-for="(value, key) in languages"
          :name="value"
          :tab="key"
          display-directive="show"
        >
          <n-space vertical v-for="(fieldValue, fieldKey) in fields">
            <n-input
              autosize
              class="w-72 my-1"
              :type="fieldValue"
              :placeholder="fieldKey"
              @change="(val) => (values[`${fieldKey}_${key}`] = val)"
            />
          </n-space>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>