<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from "vue";
import AppIcon from "./AppIcon.vue";
import { profile, sections, socials } from "../data/site";

const props = defineProps<{ open: boolean; active: string | null }>();
const emit = defineEmits<{
    /** `restoreFocus` is false when a link was followed, so focus can move with the page. */
    close: [restoreFocus: boolean];
}>();

const panel = ref<HTMLElement | null>(null);

const focusable = () =>
    Array.from(panel.value?.querySelectorAll<HTMLElement>("a[href]") ?? []);

function onKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
        emit("close", true);
        return;
    }
    // Keep Tab inside the panel while it is open.
    if (event.key !== "Tab") return;
    const items = focusable();
    if (items.length === 0) return;
    const first = items[0]!;
    const last = items[items.length - 1]!;
    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus({ preventScroll: true });
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus({ preventScroll: true });
    }
}

watch(
    () => props.open,
    async (open) => {
        if (open) {
            document.addEventListener("keydown", onKeydown);
            await nextTick();
            focusable()[0]?.focus({ preventScroll: true });
        } else {
            document.removeEventListener("keydown", onKeydown);
        }
    },
);

onBeforeUnmount(() => document.removeEventListener("keydown", onKeydown));
</script>

<template>
    <!-- Teleported because the header's backdrop blur would otherwise trap fixed positioning. -->
    <Teleport to="body">
        <Transition
            enter-active-class="transition-opacity duration-200"
            leave-active-class="transition-opacity duration-150"
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
        >
            <div
                v-if="open"
                aria-hidden="true"
                class="fixed inset-0 z-30 bg-canvas/50 backdrop-blur-sm md:hidden"
                @click="emit('close', true)"
            />
        </Transition>

        <Transition
            enter-active-class="transition duration-200 ease-out"
            leave-active-class="transition duration-150 ease-in"
            enter-from-class="opacity-0 scale-95 -translate-y-2"
            leave-to-class="opacity-0 scale-95 -translate-y-2"
        >
            <nav
                v-if="open"
                id="mobile-menu"
                ref="panel"
                aria-label="Sections"
                class="fixed top-[4.5rem] right-4 z-50 w-[min(18rem,calc(100vw-2rem))] origin-top-right rounded-2xl border border-line bg-surface/95 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl md:hidden"
            >
                <ul class="flex flex-col">
                    <li v-for="section in sections" :key="section.id">
                        <a
                            :href="`#${section.id}`"
                            class="flex items-center justify-between rounded-xl px-4 py-3 font-medium transition-colors hover:bg-accent-soft/60 hover:text-ink"
                            :class="
                                active === section.id
                                    ? 'bg-accent-soft text-ink'
                                    : 'text-muted'
                            "
                            :aria-current="
                                active === section.id ? 'location' : undefined
                            "
                            @click="emit('close', false)"
                        >
                            {{ section.label }}
                            <span
                                v-if="active === section.id"
                                aria-hidden="true"
                                class="size-1.5 rounded-full bg-accent"
                            />
                        </a>
                    </li>
                </ul>

                <div class="mx-2 my-2 border-t border-line" />

                <a
                    :href="profile.resume"
                    target="_blank"
                    class="flex items-center gap-2 rounded-xl px-4 py-3 font-medium text-muted transition-colors hover:bg-accent-soft/60 hover:text-ink"
                    @click="emit('close', false)"
                >
                    <AppIcon name="download" class="size-4" />
                    Resume
                </a>

                <ul class="flex items-center gap-1 px-2 pt-1 pb-1">
                    <li v-for="social in socials" :key="social.label">
                        <a
                            :href="social.href"
                            :target="
                                social.icon === 'mail' ? undefined : '_blank'
                            "
                            rel="noreferrer"
                            :aria-label="social.label"
                            :title="social.label"
                            class="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft/60 hover:text-ink"
                            @click="emit('close', false)"
                        >
                            <AppIcon :name="social.icon" class="size-5" />
                        </a>
                    </li>
                </ul>
            </nav>
        </Transition>
    </Teleport>
</template>
