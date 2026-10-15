<script setup lang="ts">
import AppIcon from "./AppIcon.vue";
import { focus, profile, socials } from "../data/site";
</script>

<template>
    <section
        id="top"
        class="relative isolate overflow-hidden border-b border-line/70"
    >
        <!-- Dotted grid fading out from the top, plus a soft accent glow. -->
        <div
            aria-hidden="true"
            class="absolute inset-0 -z-10 bg-[radial-gradient(var(--line)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]"
        />
        <div
            aria-hidden="true"
            class="absolute -top-40 left-1/2 -z-10 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        />

        <div class="mx-auto max-w-6xl px-4 pt-24 pb-14 sm:px-6 sm:pt-32 sm:pb-20">
            <p
                v-reveal
                class="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 font-mono text-xs text-muted"
            >
                <span class="size-1.5 rounded-full bg-emerald-500" />
                {{ profile.location }}
            </p>

            <h1
                v-reveal="80"
                class="mt-6 text-5xl font-bold tracking-tight text-balance sm:text-7xl lg:text-8xl"
            >
                {{ profile.name }}
            </h1>

            <p
                v-reveal="160"
                class="mt-4 font-mono text-lg text-accent sm:text-xl"
            >
                {{ profile.role }}
            </p>

            <p
                v-reveal="240"
                class="mt-6 max-w-2xl text-lg text-pretty text-muted sm:text-xl"
            >
                I am a Seattle based developer — currently focusing on
                <template v-for="(lang, i) in focus" :key="lang">
                    <strong class="font-semibold text-ink">{{ lang }}</strong
                    >{{
                        i < focus.length - 2
                            ? ", "
                            : i === focus.length - 2
                              ? " and "
                              : "."
                    }}
                </template>
            </p>

            <div v-reveal="320" class="mt-10 flex flex-wrap items-center gap-3">
                <a
                    :href="`mailto:${profile.email}`"
                    class="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5"
                >
                    <AppIcon name="mail" class="size-4" />
                    Get in touch
                </a>
                <a
                    :href="profile.resume"
                    target="_blank"
                    class="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                >
                    <AppIcon name="download" class="size-4" />
                    Resume
                </a>

                <ul class="flex items-center gap-1 sm:ml-3">
                    <li v-for="social in socials" :key="social.label">
                        <a
                            :href="social.href"
                            :target="
                                social.icon === 'mail' ? undefined : '_blank'
                            "
                            rel="noreferrer"
                            :aria-label="social.label"
                            :title="social.label"
                            class="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-ink"
                        >
                            <AppIcon :name="social.icon" class="size-5" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
