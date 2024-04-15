<template>
  <dynamic-input-editor
    label="Grupa umiejetnosci"
    tableName="skills_group"
    :tableColumns="['skill', 'skill_en', 'skill_icon']"
    keyPlaceholder="Front-end"
    valuePlaceholder="Front-end"
  />
</template>
