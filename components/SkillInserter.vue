<script setup lang="ts">
import { ref } from "vue";
import { createClient } from "@supabase/supabase-js";
import { GroupSkillInterface, FileInterface } from "../interface/interface";

const props = defineProps(["tableName", "fields"]);

const runtimeConfig = useRuntimeConfig();
const supabase = createClient(
    runtimeConfig.public.supabase.url,
    runtimeConfig.public.supabase.key
);

const skills = ref<Array<GroupSkillInterface>>([]);
const files = ref<Array<FileInterface>>([]);

const getDbValues = async () => {
    const values: GroupSkillInterface[] = [];
    const _files: FileInterface[] = [];
    const { data, error } = await supabase.from(props.tableName).select();

    if (data) {
        data.forEach((skill) => {
            values.push({
                ...skill,
                isEditing: false,
            });
            _files.push({
                file: null,
                uri: skill.file,
                id: skill.id,
                isFromDb: true,
            });
        });
        skills.value = values;
        files.value = _files;
    }
};
onMounted(() => {
    getDbValues();
});

const addSkill = () => {
    skills.value.push({ isEditing: true, id: Date.now() });
};
const removeSkill = async (key: number, id: number) => {
    skills.value.splice(key, 1);
    const { error } = await supabase
        .from(props.tableName)
        .delete()
        .eq("id", id);
};

const saveSkill = async (key: number, id: number) => {
    skills.value[key].isEditing = false;
    const skill = skills.value.filter((skill) => skill.id === id)[0];
    if (!skill) return;
    delete skill.isEditing;
    const { data, error } = await supabase
        .from(props.tableName)
        .upsert({ ...skill })
        .select();
    if (!data) return;
    saveFillToDb(id);
};

const saveFillToDb = async (id: number) => {
    const file = files.value.filter((file) => file.id === id)[0];
    if (!file || !file.file) return;
    const { data, error } = await supabase.storage
        .from("skills")
        .upload(`public/${file.file.name}`, file.file, {
            cacheControl: "3600",
            upsert: true,
        });
    if (!data) return;
    await supabase
        .from(props.tableName)
        .upsert({ id, file: data.path })
        .select();
};

const setFile = async (ev, id: number) => {
    const file = ev.target.files[0];
    const foundFile = files.value.find((obj) => obj.id === id);
    if (foundFile) {
        foundFile.uri = URL.createObjectURL(file);
        foundFile.file = file;
        foundFile.isFromDb = false;
        return;
    }
    files.value.push({
        file,
        uri: URL.createObjectURL(file),
        id,
        isFromDb: false,
    });
};

const removeFile = (id: number) => {
    files.value = files.value.filter((file) => file.id !== id);
};

const getFileUri = (id: number) => {
    if (files.value.length === 0) return;
    const file = files.value.filter((file) => file.id === id)[0];
    if (!file) return;
    if (file.isFromDb && !file.uri) return;
    return file.isFromDb
        ? `${runtimeConfig.public.supabase.url}/storage/v1/object/public/skills/${file.uri}`
        : file.uri;
};
</script>

<template>
    <div>
        <div class="flex flex-wrap gap-4">
            <div class="p-4 pt-8 rounded-md shadow-md border border-gray-300 relative" v-for="(skill, key) in skills"
                :key="skill.id">
                <button @click="removeSkill(key, skill.id)" class="btn-error absolute right-2 top-2">
                    <Icon name="ic:baseline-delete" />
                </button>
                <div>
                    <div v-for="field in fields" class="field">
                        <label class="font-bold my-2 block">{{
                            field.label
                        }}</label>
                        <textarea v-if="field.fieldType === 'text'"
                            class="w-full border border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed" cols="30"
                            v-model="skill[field.tableKey]" :disabled="!skill.isEditing"></textarea>
                        <div v-if="field.fieldType === 'file'">
                            <input @change="setFile($event, skill.id)" type="file" :disabled="!skill.isEditing" />
                            <div class="relative w-24 h-24 my-2 group" v-if="getFileUri(skill.id)">
                                <img class="w-full h-full" :src="getFileUri(skill.id)" alt="Icon preview" />
                                <button @click="removeFile(skill.id)"
                                    class="absolute transition-all left-0 top-0 w-full h-full bg-red-300 bg-opacity-50 border border-red-500 text-red-700 text-3xl hidden group-hover:block">
                                    <Icon name="ic:baseline-delete" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 mt-4" v-if="skill.isEditing">
                        <button @click="saveSkill(key, skill.id)" class="btn-primary">
                            Save
                        </button>
                        <button @click="skills[key].isEditing = false" class="btn-danger">
                            Cancel
                        </button>
                    </div>
                </div>
                <div v-if="!skill.isEditing" class="mt-2">
                    <button @click="skills[key].isEditing = true" class="btn-primary">
                        Edit
                    </button>
                </div>
            </div>
        </div>
        <button @click="addSkill" class="btn-primary mt-8">Add skill +</button>
    </div>
</template>
