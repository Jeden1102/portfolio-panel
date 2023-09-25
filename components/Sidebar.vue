<script setup lang="ts">
import { ref } from "vue";
import { NCollapse, NCollapseItem } from "naive-ui";
const sidebarCollapsed = ref(false);
</script>

<template>
  <div class="flex flex-col py-8 px-2 relative">
    <button
      class="md:hidden"
      v-if="sidebarCollapsed"
      @click="sidebarCollapsed = !sidebarCollapsed"
    >
      <Icon size="24px" name="ri:menu-fold-line" />
    </button>
    <button
      class="md:hidden"
      v-else
      @click="sidebarCollapsed = !sidebarCollapsed"
    >
      <Icon size="24px" name="ri:menu-unfold-line" />
    </button>
    <n-collapse
      class="absolute min-w-[300px] left-0 top-16 bg-white transition z-10 shadow-lg p-8 w-fit translate-x-[-100%] md:static md:translate-x-0"
      :class="{ 'translate-unset': sidebarCollapsed }"
    >
      <n-collapse-item title="Zawartość" name="1">
        <n-collapse>
          <n-collapse-item title="Kategorie" name="1">
            <NuxtLink class="menu-link" to="/skills-group">
              <Icon size="24px" name="ic:sharp-checklist" />
              <span>Grupa umiejętności</span>
            </NuxtLink>
            <NuxtLink class="menu-link" to="/soft-skills">
              <Icon size="24px" name="solar:user-speak-broken" />
              <span>Umiejętności miękkie</span>
            </NuxtLink>
          </n-collapse-item>
          <n-collapse-item title="Rodzaje zawartości" name="2">
            <NuxtLink class="menu-link" to="/skill">
              <Icon
                size="24px"
                name="streamline:interface-file-clipboard-check-checkmark-edit-task-edition-checklist-check-success-clipboard-form"
              />
              <span>Umiejętność</span>
            </NuxtLink>
          </n-collapse-item>
        </n-collapse>
      </n-collapse-item>
      <n-collapse-item title="Podstawowe ustawienia witryny" name="2">
        <NuxtLink class="menu-link" to="/main-page">
          <Icon size="24px" name="system-uicons:pages" />
          <span>Strona główna</span>
        </NuxtLink>
        <NuxtLink class="menu-link" to="/about">
          <Icon size="24px" name="ph:person-arms-spread-light" />
          <span>O mnie</span>
        </NuxtLink>
        <NuxtLink class="menu-link" to="/general">
          <Icon size="24px" name="solar:settings-linear" />
          <span>Ogólne</span>
        </NuxtLink>
        <n-collapse-item title="Kontakt" name="3">
          <NuxtLink class="menu-link" to="/contact-page">
            <Icon size="24px" name="system-uicons:pages" />
            <span>Strona</span>
          </NuxtLink>
          <NuxtLink class="menu-link" to="/contact-details">
            <Icon size="24px" name="solar:user-rounded-linear" />
            <span>Dane kontaktowe</span>
          </NuxtLink>
        </n-collapse-item>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>
<style scoped lang="scss">
.translate-unset {
  transform: unset !important;
}

.menu-link {
  @apply flex gap-4 items-center my-2 px-4 py-2 rounded-sm;

  &:not(.router-link-active) {
    @apply hover:bg-gray-100;
  }

  &.router-link-active {
    @apply bg-gray-200;
  }
}
</style>