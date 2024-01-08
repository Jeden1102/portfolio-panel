<script setup lang="ts">
import { ref } from 'vue';
const notificationsVisible = ref(false);
const logoutVisible = ref(false);

const { auth } = useSupabaseClient()

const logOut = async () => {
  auth.signOut()
  logoutVisible.value = false;
}
</script>

<template>
    <div class="flex justify-between p-4 shadow-md">
        <h1 class="text-lg font-bold">Dominik Raducki</h1>
        <div class="flex gap-4 items-center justify-center">
            <div class="relative">
                <button @click="notificationsVisible = !notificationsVisible">
                    <Icon size="24px" name="solar:bell-line-duotone" />
                </button>
                <div
                    class="absolute top-full right-0 shadow-md p-4 bg-white min-w-fit z-10  transition-all"
                    :class="{'opacity-1 translate-y-0 pointer-events-auto' : notificationsVisible, 'opacity-0 -translate-y-2 pointer-events-none': !notificationsVisible}"
                    >
                    <div class="flex gap-8 flex-col">
                        <div class="flex gap-16 items-center">
                            <h3 class="font-bold">Notifications</h3>
                        <button
                            class="text-blue-400 text-sm w-52 hover:text-blue-500">
                            Oznacz jako przeczytane
                        </button>
                        </div>

                        <div class="flex gap-4">
                            <div class="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center">
                                <Icon class="text-white" name="solar:chat-line-linear" size="24px"/>
                            </div>
                            <div class="flex flex-col">
                                <h4 class="font-bold">Nowa wiadomość</h4>
                                <p class="font-light">Lorem ipsum dolor sit amet.</p>
                                <p class="font-light text-sm">5 mins ago.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="relative">
                <button @click="logoutVisible = !logoutVisible">
                    <Icon size="24px" name="solar:user-rounded-linear" />
                </button>
                <button v-if="logoutVisible" @click="logOut"
                    class="absolute top-full right-0 shadow-md p-3 bg-white flex items-center gap-2">
                    <Icon name="material-symbols:logout-sharp"/>
                    Logout
                </button>
            </div>
        </div>
    </div>
</template>