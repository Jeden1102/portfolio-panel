<template>
  <dynamic-input-editor
    label="Cecha projektu"
    tableKey="project_feature"
    tableValue="project_feature_en"
    tableName="project_feature"
    keyPlaceholder="Rozbudowany panel"
    valuePlaceholder="Extended panel"
    :tableColumns="['project_feature_en', 'project_feature']"
  />
</template>
