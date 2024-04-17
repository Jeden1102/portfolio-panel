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
    tableKey: "description_en",
    fieldType: "text",
    label: "Opis EN",
  },
  {
    tableKey: "file",
    fieldType: "file",
    label: "Ikona",
  },
  {
    tableKey: "is_main",
    fieldType: "boolean",
    label: "Jest glownym",
  },
  {
    tableKey: "skills_group",
    fieldType: "relation",
    fieldLabel: "skill",
    label: "Grupa umiejetnosci",
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
