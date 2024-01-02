<script setup lang="ts">
import { ref, onMounted } from "vue";
import { NSpace, NTabs, NTabPane } from "naive-ui";
import { ValuesInterface } from "../interface/interface";
import { createClient } from '@supabase/supabase-js'

const props = defineProps(["tableName", "fields", "languages"]);

const runtimeConfig = useRuntimeConfig();
const supabase = createClient(runtimeConfig.public.supabase.url, runtimeConfig.public.supabase.key);

const values: Ref<ValuesInterface> = ref({});

const changeValue = (val: InputEvent, fieldKey: string, key: string) => {
    if (!val.target) return;
    const _key = key !== 'pl' ? `${fieldKey}_${key}` : `${fieldKey}`;
    values.value[_key] = (val.target as HTMLTextAreaElement).value;
    setDbValues();
}

const setDbValues = async () => {
    const { data, error } = await supabase
        .from(props.tableName)
        .upsert({ id: 1, ...values.value })
        .select();
}

const getDbValues = async () => {
    const { data, error } = await supabase
        .from(props.tableName)
        .select()
        .limit(1);

    if (data) {
        values.value = { ...data[0] };
    }
}

onMounted(() => {
    getDbValues();
});
</script>

<template>
    <div>
        <div class="w-96">
            <n-tabs type="segment">
                <n-tab-pane v-for="(value, key) in languages" :name="value" :tab="value" display-directive="show"
                    :key="key">
                    <n-space vertical v-for="(fieldValue, fieldKey) in fields" :key="fieldKey">
                        <textarea rows="3" :value="key === 'pl' ? values[`${fieldKey}`] : values[`${fieldKey}_${key}`]"
                            class="w-96 border p-2 my-2 rounded-md" :type="fieldValue"
                            @change="(val) => changeValue(val, fieldKey, key)" :placeholder="fieldKey" />
                    </n-space>
                </n-tab-pane>
            </n-tabs>
        </div>
    </div>
</template>
