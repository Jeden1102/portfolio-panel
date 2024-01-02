
<script setup lang="ts">
const fields = {
  github: "text",
  linkedin: "text",
  phone: "text",
  email: "text",
};
</script>
<template>
  <div>
    <TableEditor tableName="contact_links" :fields="fields"
      :languages="{ pl: 'Polski' }" />
  </div>
</template>