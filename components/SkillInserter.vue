<script setup lang="ts">
import { ref } from "vue";
import { createClient } from "@supabase/supabase-js";
import { GroupSkillInterface } from "../interface/interface";

const props = defineProps(["tableName", "fields"]);

const runtimeConfig = useRuntimeConfig();
const supabase = createClient(
    runtimeConfig.public.supabase.url,
    runtimeConfig.public.supabase.key
);

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
const skills = ref<Array<GroupSkillInterface>>([]);

const addSkill = () => {
    skills.value.push({ isEditing: true });
};
const removeSkill = (key: number) => {
    console.log(key);
    skills.value.splice(key, 1);
};

const cancelSkill = (key: number) => {
    skills.value[key].isEditing = false;
};

const saveSkill = (key: number) => {
    skills.value[key].isEditing = false;
};
const testFile = ref(null);
const setFile = async (ev) => {
    console.log(testFile.value);

    const avatarFile = ev.target.files[0];
    const { data, error } = await supabase.storage
        .from("skills")
        .upload("public/avatar1.png", avatarFile, {
            cacheControl: "3600",
            upsert: false,
        });
};
</script>

<template>
    <div>
        <div class="flex flex-wrap gap-4">
            <div
                class="p-4 pt-8 rounded-md shadow-md border border-gray-300 relative"
                v-for="(skill, key) in skills"
                :key="key"
            >
                <button
                    @click="removeSkill(key)"
                    class="btn-error absolute right-2 top-2"
                >
                    <Icon name="ic:baseline-delete" />
                </button>
                <div v-if="skill.isEditing">
                    <div v-for="field in fields" class="field">
                        <label class="font-bold my-2 block">{{
                            field.label
                        }}</label>
                        <textarea
                            v-if="field.fieldType === 'text'"
                            class="w-full border border-gray-300"
                            cols="30"
                            v-model="skill[field.tableKey]"
                        ></textarea>
                        <input
                            v-if="field.fieldType === 'file'"
                            @change="setFile"
                            type="file"
                            name=""
                            id=""
                        />
                    </div>
                    <div class="flex gap-2 mt-4">
                        <button @click="saveSkill(key)" class="btn-primary">
                            Save
                        </button>
                        <button
                            @click="skills[key].isEditing = false"
                            class="btn-danger"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
                <div v-else>
                    <button
                        @click="skills[key].isEditing = true"
                        class="btn-primary"
                    >
                        Edit
                    </button>
                </div>
                <p>{{ skill.name }}</p>
            </div>
        </div>

        <button @click="addSkill" class="btn-primary mt-8">Add skill +</button>
    </div>
</template>
