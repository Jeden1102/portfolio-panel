<script setup lang="ts">
import { ref } from 'vue';
import { NCollapse, NCollapseItem } from 'naive-ui';
const sidebarCollapsed = ref(false);
</script>

<template>
    <div class="flex flex-col py-4 px-2 relative">
        <button v-if="sidebarCollapsed"
            @click="sidebarCollapsed = !sidebarCollapsed">
            <Icon size="24px" name="ri:menu-fold-line" />
        </button>
        <button v-else @click="sidebarCollapsed = !sidebarCollapsed">
            <Icon size="24px" name="ri:menu-unfold-line" />
        </button>
        <n-collapse class="absolute left-0 top-16 bg-white transition z-10 shadow-lg p-8 w-fit translate-x-[-100%] md:static md:translate-x-0"
            :class="{ 'translate-unset': sidebarCollapsed }">
            <n-collapse-item title="Zawartość" name="1">
                <n-collapse>
                    <n-collapse-item title="Kategorie" name="1">
                        <div>
                            <Icon name="ri:task-fill" />
                            <span>Grupa umiejętności</span>
                        </div>
                        <div>
                            <Icon name="ri:speak-fill" />
                            <span>Umiejętności miękkie</span>
                        </div>
                    </n-collapse-item>
                </n-collapse>
            </n-collapse-item>
            <n-collapse-item title="Podstawowe ustawienia witryny" name="2">
                <div>
                    <Icon name="ri:price-tag-line" />
                    <span>Strona główna</span>
                </div>
                <div>
                    <Icon name="ri:shield-user-fill" />
                    <span>O mnie</span>
                </div>
                <n-collapse-item title="Kontakt" name="3">
                    <div>
                        <Icon name="ri:pentagon-line" />
                        <span>Strona</span>
                    </div>
                    <div>
                        <Icon name="ri:contacts-book-2-line" />
                        <span>Dane kontaktowe</span>
                    </div>
                </n-collapse-item>
            </n-collapse-item>
        </n-collapse>

    </div>
</template>



<style scoped>
.translate-unset{
    transform: unset !important;
}
</style>