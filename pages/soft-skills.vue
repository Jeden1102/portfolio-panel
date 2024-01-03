<script setup lang="ts">
import { ref } from "vue";
import { NDynamicInput } from "naive-ui";
import { createClient } from '@supabase/supabase-js'
import { SkillInterface } from '../interface/interface';

const runtimeConfig = useRuntimeConfig();
const supabase = createClient(runtimeConfig.public.supabase.url, runtimeConfig.public.supabase.key);

const skills = ref<Array<SkillInterface>>([]);

const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const removeValue = async (id: number) => {
  const { error } = await supabase
    .from('soft_skills')
    .delete()
    .eq('id', skills.value[id].id)
}

const setNewValues = async () => {
  skills.value.forEach(async skill => {
    const { data, error } = await supabase
      .from('soft_skills')
      .upsert({ id: skill.id ? skill.id : getRandomIntInclusive(100, 999999), skill: skill.key, skill_en: skill.value })
      .select();
  })
}

const getDbValues = async () => {
  const values: SkillInterface[] = [];
  const { data, error } = await supabase
    .from('soft_skills')
    .select()

  if (data) {
    data.forEach((skill) => {
      values.push({
        key: skill.skill,
        value: skill.skill_en,
        id: skill.id
      })
    })
    skills.value = values;
  }
}
onMounted(() => {
  getDbValues();
});
</script>

<template>
  <div>
    <label class="block my-2 text-lg" for="">Umiejętności miękkie</label>
    <n-dynamic-input :on-remove="(val) => removeValue(val)" v-model:value="skills" preset="pair"
      key-placeholder="Communicative" value-placeholder="Komunikatywny" />
  </div>
  <n-button @click="setNewValues()" type="primary"
    class="bg-gray-600 text-gray-100 px-5 py-3 mt-4 rounded-sm w-fit cursor-pointer">
    Save
  </n-button>
</template>