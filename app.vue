<template>
  <NuxtLayout>
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
<script setup>
const user = useSupabaseUser()
const route = useRoute()

watchEffect(() => {
  if (user.value) {
    setPageLayout('admin')
  } else {
    setPageLayout('login')
    if (route.path !== '/login') {
      navigateTo('/login')
    }
  }
})
</script>