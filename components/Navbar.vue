<script setup lang="ts">
import { ref } from 'vue';
import { NAvatar, NButton } from 'naive-ui';
const notificationsVisible = ref(false);
const logoutVisible = ref(false);
</script>

<template>
    <div class="flex justify-between">
        <h1 class="text-lg font-bold">Dominik Raducki</h1>
        <div class="flex gap-4 items-center justify-center">
            <div class="relative">
                <button @click="notificationsVisible = !notificationsVisible">
                    <Icon size="24px" name="ri:notification-2-line" />
                </button>
                <div v-if="notificationsVisible"
                    class="absolute top-full right-0 shadow-md p-3 bg-white">
                    Notifications
                </div>
            </div>
            <div class="relative">
                <button @click="logoutVisible = !logoutVisible">
                    <Icon size="24px" name="ri:account-circle-line" />
                </button>
                <div v-if="logoutVisible"
                    class="absolute top-full right-0 shadow-md p-3 bg-white">
                    Logout
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped></style>