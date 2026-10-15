<script setup lang="ts">
defineProps<{
    id: string;
    index: string;
    title: string;
    lede?: string;
}>();
</script>

<template>
    <section
        :id="id"
        :aria-labelledby="`${id}-title`"
        class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-17"
    >
        <div v-reveal class="mb-10 max-w-2xl">
            <p class="font-mono text-sm text-accent">{{ index }}</p>
            <h2
                :id="`${id}-title`"
                class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
                {{ title }}
            </h2>
            <p v-if="lede" class="mt-3 text-muted text-pretty">{{ lede }}</p>
        </div>
        <slot />
    </section>
</template>
