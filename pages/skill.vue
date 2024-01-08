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
        <div>
            <SkillInserter tableName="skill" :fields="fields" />
        </div>
    </div>
</template>
