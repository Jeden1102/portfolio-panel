<template>
  <NuxtLayout name="admin">
    <NuxtPage class="p-4 rounded-md shadow-md" />
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translateX(-50px);
}
</style>