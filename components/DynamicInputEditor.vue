<script setup lang="ts">
import { ref } from "vue";
import { NDynamicInput } from "naive-ui";
import { createClient } from "@supabase/supabase-js";
import { SkillInterface } from "../interface/interface";

const props = defineProps([
  "tableName",
  "tableColumns",
  "label",
  "keyPlaceholder",
  "valuePlaceholder",
]);

const runtimeConfig = useRuntimeConfig();
const supabase = createClient(
  runtimeConfig.public.supabase.url,
  runtimeConfig.public.supabase.key
);

const skills = ref<Array<SkillInterface>>([]);

const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const removeValue = async (id: number) => {
  const { error } = await supabase
    .from(props.tableName)
    .delete()
    .eq("id", skills.value[id].id);
};

const setNewValues = async () => {
  skills.value.forEach(async (skill) => {
    const { data, error } = await supabase
      .from(props.tableName)
      .upsert({
        id: skill.id ? skill.id : getRandomIntInclusive(100, 999999),
        [props.tableColumns[0]]: skill.column_1,
        [props.tableColumns[1]]: skill.column_2,
        [props.tableColumns[2]]: skill.column_3,
      })
      .select();
  });
};

const getDbValues = async () => {
  const values: SkillInterface[] = [];
  const { data, error } = await supabase.from(props.tableName).select();

  if (data) {
    data.forEach((skill) => {
      values.push({
        column_1: skill[props.tableColumns[0]],
        column_2: skill[props.tableColumns[1]],
        column_3: skill[props.tableColumns[2]],
        id: skill.id,
      });
    });
    skills.value = values;
    console.info(skills.value);
  }
};
const onCreate = () => {
  return {
    skills_en: "A String",
  };
};
onMounted(() => {
  getDbValues();
});
</script>

<template>
  <div>
    <label class="block my-2 text-lg">{{ label }}</label>
    <n-dynamic-input
      :on-remove="(val) => removeValue(val)"
      v-model:value="skills"
      :on-create="onCreate"
    >
      <template #default="{ value }">
        <div style="display: flex; align-items: center; width: 100%; gap: 4px">
          <input
            class="border rounded-md p-2 border-gray-400"
            v-model="value.column_1"
            type="text"
          />
          <input
            class="border rounded-md p-2 border-gray-400"
            v-model="value.column_2"
            type="text"
          />
          <input
            class="border rounded-md p-2 border-gray-400"
            v-model="value.column_3"
            type="text"
          />
        </div>
      </template>
    </n-dynamic-input>
  </div>
  <n-button
    @click="setNewValues()"
    type="primary"
    class="bg-gray-600 text-gray-100 px-5 py-3 mt-4 rounded-sm w-fit cursor-pointer"
  >
    Save
  </n-button>
</template>
