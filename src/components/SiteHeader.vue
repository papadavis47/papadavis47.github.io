<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import AppIcon from "./AppIcon.vue";
import MobileMenu from "./MobileMenu.vue";
import { profile, sections } from "../data/site";
import { useTheme } from "../composables/useTheme";
import { useActiveSection } from "../composables/useActiveSection";

const { theme, toggle } = useTheme();
const active = useActiveSection(sections.map((s) => s.id));
const menuOpen = ref(false);
const menuButton = ref<HTMLButtonElement | null>(null);

// Unlock scrolling synchronously so a tapped section link can scroll the page.
function setMenuOpen(open: boolean) {
    menuOpen.value = open;
    document.documentElement.style.overflow = open ? "hidden" : "";
}

function closeMenu(restoreFocus: boolean) {
    if (!menuOpen.value) return;
    setMenuOpen(false);
    if (restoreFocus) menuButton.value?.focus({ preventScroll: true });
}

// The menu only exists below the md breakpoint; close it if the window widens.
const desktop = window.matchMedia("(min-width: 48rem)");
const onBreakpoint = (event: MediaQueryListEvent) => {
    if (event.matches) closeMenu(false);
};
onMounted(() => desktop.addEventListener("change", onBreakpoint));
onBeforeUnmount(() => {
    desktop.removeEventListener("change", onBreakpoint);
    setMenuOpen(false);
});
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
                class="group flex items-end gap-2.5 font-mono text-sm font-medium"
            >
                <span
                    class="block size-9 rounded-lg bg-accent text-canvas transition-transform group-hover:-rotate-6"
                >
                    <AppIcon name="logo" class="size-9" />
                </span>
                <!-- Lifted so the handle reads as sitting level with the mark's bottom edge. -->
                <span class="translate-y-[-2.5px] leading-none"
                    >@{{ profile.handle }}</span
                >
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
                    ref="menuButton"
                    type="button"
                    class="grid size-9 place-items-center rounded-full border transition-colors hover:text-ink md:hidden"
                    :class="
                        menuOpen
                            ? 'border-accent bg-accent-soft text-ink'
                            : 'border-line text-muted'
                    "
                    :aria-expanded="menuOpen"
                    aria-controls="mobile-menu"
                    :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
                    @click="menuOpen ? closeMenu(true) : setMenuOpen(true)"
                >
                    <AppIcon :name="menuOpen ? 'close' : 'menu'" class="size-4" />
                </button>
            </div>
        </div>

        <MobileMenu
            :open="menuOpen"
            :active="active"
            @close="closeMenu"
        />
    </header>
</template>
