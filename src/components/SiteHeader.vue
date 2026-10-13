<script setup lang="ts">
import { ref } from "vue";
import AppIcon from "./AppIcon.vue";
import { profile, sections } from "../data/site";
import { useTheme } from "../composables/useTheme";
import { useActiveSection } from "../composables/useActiveSection";

const { theme, toggle } = useTheme();
const active = useActiveSection(sections.map((s) => s.id));
const menuOpen = ref(false);
</script>

<template>
    <header
        class="sticky top-0 z-40 border-b border-line/70 bg-canvas/75 backdrop-blur-xl"
    >
        <div
            class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
        >
            <a
                href="#top"
                class="group flex items-center gap-2.5 font-mono text-sm font-medium"
            >
                <span
                    class="grid size-9 place-items-center rounded-lg bg-accent text-canvas transition-transform group-hover:-rotate-6"
                >
                    <AppIcon name="logo" class="size-6" />
                </span>
                <span>@{{ profile.handle }}</span>
            </a>

            <nav aria-label="Sections" class="hidden md:block">
                <ul class="flex items-center gap-1 text-sm">
                    <li v-for="section in sections" :key="section.id">
                        <a
                            :href="`#${section.id}`"
                            class="rounded-full px-3 py-1.5 transition-colors hover:text-ink"
                            :class="
                                active === section.id
                                    ? 'bg-accent-soft text-ink'
                                    : 'text-muted'
                            "
                            >{{ section.label }}</a
                        >
                    </li>
                </ul>
            </nav>

            <div class="flex items-center gap-2">
                <a
                    :href="profile.resume"
                    target="_blank"
                    class="hidden rounded-full border border-line px-4 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent sm:inline-block"
                    >Resume</a
                >
                <button
                    type="button"
                    class="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:text-ink"
                    :aria-label="
                        theme === 'dark'
                            ? 'Switch to light theme'
                            : 'Switch to dark theme'
                    "
                    @click="toggle"
                >
                    <AppIcon
                        :name="theme === 'dark' ? 'sun' : 'moon'"
                        class="size-4"
                    />
                </button>
                <button
                    type="button"
                    class="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:text-ink md:hidden"
                    :aria-expanded="menuOpen"
                    aria-controls="mobile-menu"
                    :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
                    @click="menuOpen = !menuOpen"
                >
                    <AppIcon :name="menuOpen ? 'close' : 'menu'" class="size-4" />
                </button>
            </div>
        </div>

        <nav
            v-show="menuOpen"
            id="mobile-menu"
            aria-label="Sections"
            class="border-t border-line/70 px-4 pb-4 md:hidden"
        >
            <ul class="flex flex-col pt-2">
                <li v-for="section in sections" :key="section.id">
                    <a
                        :href="`#${section.id}`"
                        class="block rounded-lg px-3 py-2.5 text-muted hover:bg-surface hover:text-ink"
                        @click="menuOpen = false"
                        >{{ section.label }}</a
                    >
                </li>
                <li>
                    <a
                        :href="profile.resume"
                        target="_blank"
                        class="block rounded-lg px-3 py-2.5 text-muted hover:bg-surface hover:text-ink"
                        >Resume</a
                    >
                </li>
            </ul>
        </nav>
    </header>
</template>
