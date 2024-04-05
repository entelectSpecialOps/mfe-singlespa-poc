<script setup lang="ts">
import { useUser } from "./composables/useAuth";
import type { IUser } from "./types/IUser";

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});

const user: IUser = await useUser();
</script>
<template>
  <div>
    <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>
