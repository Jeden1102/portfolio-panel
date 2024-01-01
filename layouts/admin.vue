<template>
    <div class="flex">
        <Sidebar />
        <div class="flex flex-col w-full px-8 py-4 max-w-[1200px]">
            <Navbar />
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const route = useRoute()
if (!user.value) {
    if (route.path !== '/login') {
        navigateTo('/login')
    }
}
</script>