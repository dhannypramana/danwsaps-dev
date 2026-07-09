<script lang="ts" setup>
useThemeStore();
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <ClientOnly>
        <VToast />
    </ClientOnly>
</template>
