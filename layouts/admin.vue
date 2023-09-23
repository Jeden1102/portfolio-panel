<template>
    <div class="flex">
        <Sidebar />
        <div class="flex flex-col">
            <Navbar />
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>