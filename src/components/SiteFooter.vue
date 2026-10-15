<script setup lang="ts">
import AppIcon from "./AppIcon.vue";
import { profile, socials } from "../data/site";

const year = new Date().getFullYear();
</script>

<template>
    <footer class="border-t border-line/70">
        <div class="mx-auto max-w-6xl px-4 py-11 sm:px-6">
            <div
                v-reveal
                class="flex flex-col gap-6 rounded-3xl border border-line bg-surface p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10"
            >
                <div>
                    <h2 class="text-2xl font-bold tracking-tight">
                        Let's talk.
                    </h2>
                    <p class="mt-1 text-muted">
                        The fastest way to reach me is by email.
                    </p>
                </div>
                <a
                    :href="`mailto:${profile.email}`"
                    class="inline-flex items-center gap-2 self-start rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5 sm:self-auto"
                >
                    <AppIcon name="mail" class="size-4" />
                    {{ profile.email }}
                </a>
            </div>

            <div
                class="mt-10 flex flex-col-reverse items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center"
            >
                <p>
                    &copy; {{ year }} {{ profile.name }} · Built with Vue and
                    Tailwind CSS ·
                    <a
                        :href="profile.source"
                        target="_blank"
                        rel="noreferrer"
                        class="underline decoration-line underline-offset-4 hover:text-ink"
                        >Source</a
                    >
                </p>
                <ul class="flex items-center gap-1">
                    <li v-for="social in socials" :key="social.label">
                        <a
                            :href="social.href"
                            :target="
                                social.icon === 'mail' ? undefined : '_blank'
                            "
                            rel="noreferrer"
                            :aria-label="social.label"
                            :title="social.label"
                            class="grid size-9 place-items-center rounded-full transition-colors hover:bg-surface hover:text-ink"
                        >
                            <AppIcon :name="social.icon" class="size-4" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
