<script setup>
const fields = [
    {
        tableKey: "name",
        fieldType: "text",
        label: "Nazwa",
    },
    {
        tableKey: "uri_github",
        fieldType: "text",
        label: "Link github",
    },
    {
        tableKey: "uri_live",
        fieldType: "text",
        label: "Link live",
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
        <div>
            <SkillInserter tableName="projects" :fields="fields" />
        </div>
    </div>
</template>
