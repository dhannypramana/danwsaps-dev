<script lang="ts" setup>
definePageMeta({
    name: 'catchAll',
    layout: 'blank',
});
</script>

<template>
    <VContainer class="min-h-dvh flex items-center justify-center">
        <VEmpty>
            <VEmptyHeader>
                <VEmptyMedia variant="icon">
                    <VIcon name="lucide:message-circle-warning" />
                </VEmptyMedia>
                <VEmptyTitle class="font-semibold">
                    {{ $t('states.not_found') }}
                </VEmptyTitle>
                <VEmptyDescription>
                    {{ $t('explanations.not_found_desc') }}
                </VEmptyDescription>
            </VEmptyHeader>
            <VEmptyContent class="flex-row justify-center">
                <VButton as-child>
                    <NuxtLink to="/">
                        {{ $t('redirects.go_home') }}
                    </NuxtLink>
                </VButton>
            </VEmptyContent>
        </VEmpty>
    </VContainer>
</template>
