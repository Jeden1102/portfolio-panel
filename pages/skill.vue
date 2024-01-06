<script setup>
const fields = [
    {
        tableKey: "name",
        fieldType: "text",
        label: "Nazwa",
    },
    {
        tableKey: "rating",
        fieldType: "text",
        label: "Ocena",
    },
    {
        tableKey: "description",
        fieldType: "text",
        label: "Opis",
    },
    {
        tableKey: "file",
        fieldType: "file",
        label: "Ikona",
    },
];
</script>
<template>
    <div>
        <div class="w-96">
            <SkillInserter tableName="skills" :fields="fields" />
        </div>
    </div>
</template>
