<script setup lang="ts">

import { NButton } from 'naive-ui'

const route = useRoute()
</script>

<template>
  <div>
    <h1 class="bg-red-200">Nuxt Routing set up successfully!</h1>
    <n-button>naive-ui</n-button>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
