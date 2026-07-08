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
        :class="cn('size-4 animate-spin', props.class)"
    />
</template>
