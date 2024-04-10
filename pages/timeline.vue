<script setup>
const fields = [
  {
    tableKey: "title",
    fieldType: "text",
    label: "Nazwa",
  },
  {
    tableKey: "description",
    fieldType: "text",
    label: "Opis",
  },
  {
    tableKey: "title_en",
    fieldType: "text",
    label: "Nazwa EN",
  },
  {
    tableKey: "description_en",
    fieldType: "text",
    label: "Opis EN",
  },
  {
    tableKey: "icon",
    fieldType: "text",
    label: "Ikona",
  },
  {
    tableKey: "date",
    fieldType: "date",
    label: "Data",
  },
];
</script>
<template>
  <div>
    <div>
      <SkillInserter tableName="timeline" :fields="fields" />
    </div>
  </div>
</template>
