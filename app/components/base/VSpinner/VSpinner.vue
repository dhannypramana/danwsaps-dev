<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <VIcon
        name="lucide:loader-circle"
        role="status"
        aria-label="loading"
        :class="cn('animate-spin block', props.class)"
    />
</template>
