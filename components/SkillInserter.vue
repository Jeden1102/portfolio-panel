<script setup lang="ts">
import { ref } from "vue";
import { createClient } from '@supabase/supabase-js'
import { SkillInterface } from '../interface/interface';


const props = defineProps(["tableName", "fields"]);

const runtimeConfig = useRuntimeConfig();
const supabase = createClient(runtimeConfig.public.supabase.url, runtimeConfig.public.supabase.key);

const skills = ref<Array<SkillInterface>>([]);

// const getRandomIntInclusive = (min: number, max: number) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const removeValue = async (id: number) => {
//     const { error } = await supabase
//         .from(props.tableName)
//         .delete()
//         .eq('id', skills.value[id].id)
// }

// const setNewValues = async () => {
//     skills.value.forEach(async skill => {
//         const { data, error } = await supabase
//             .from(props.tableName)
//             .upsert({ id: skill.id ? skill.id : getRandomIntInclusive(100, 999999), [props.tableKey]: skill.key, [props.tableValue]: skill.value })
//             .select();
//     })
// }

// const getDbValues = async () => {
//     const values: SkillInterface[] = [];
//     const { data, error } = await supabase
//         .from(props.tableName)
//         .select()

//     if (data) {
//         data.forEach((skill) => {
//             console.log(skill, props.tableKey)
//             values.push({
//                 key: skill[props.tableKey],
//                 value: skill[props.tableValue],
//                 id: skill.id
//             })
//         })
//         skills.value = values;
//     }
// }
// onMounted(() => {
//     getDbValues();
// });
// HERE fields in format {tableKey:'desc', type :'text', ....}
// Loop trough fields.
const testFile = ref(null);
const setFile = async (ev) => {
    console.log(testFile.value)

const avatarFile = ev.target.files[0]
    const { data, error } = await supabase
        .storage
        .from('skills')
        .upload('public/avatar1.png', avatarFile, {
            cacheControl: '3600',
            upsert: false
        })
}
</script>

<template>
    <div>
        {{ tableName }}
        {{ fields }}
        <input @change="setFile" type="file" name="" id="">
    </div>
</template>