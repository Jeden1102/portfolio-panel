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
    tableKey: "skill",
    fieldType: "relation",
    fieldLabel: "name",
    label: "Skills",
  },
  {
    tableKey: "project_feature",
    fieldLabel: "project_feature",
    fieldType: "relation",
    label: "Cechy projektu",
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
