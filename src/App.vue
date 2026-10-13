<script setup lang="ts">
import AppIcon from "./components/AppIcon.vue";
import HeroSection from "./components/HeroSection.vue";
import PageSection from "./components/PageSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
import { education, joys, projects, skills, tools } from "./data/site";
</script>

<template>
    <a
        href="#main"
        class="sr-only z-50 rounded-md bg-ink px-4 py-2 text-canvas focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >Skip to content</a
    >
    <SiteHeader />

    <main id="main">
        <HeroSection />

        <PageSection
            id="skills"
            index="01"
            title="Skills"
            lede="The languages, frameworks and tools I reach for most."
        >
            <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <li
                    v-for="(skill, i) in skills"
                    :key="skill.name"
                    v-reveal="(i % 3) * 60"
                    :class="i === 0 ? 'lg:col-span-2' : ''"
                >
                    <component
                        :is="skill.href ? 'a' : 'div'"
                        :href="skill.href"
                        :target="skill.href ? '_blank' : undefined"
                        :rel="skill.href ? 'noreferrer' : undefined"
                        class="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5"
                    >
                        <div class="flex items-start justify-between gap-4">
                            <h3 class="text-lg font-semibold">
                                {{ skill.name }}
                            </h3>
                            <AppIcon
                                v-if="skill.href"
                                name="arrow-up-right"
                                class="size-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                            />
                        </div>
                        <p class="mt-2 text-sm leading-relaxed text-muted">
                            {{ skill.blurb }}
                        </p>
                    </component>
                </li>
            </ul>
        </PageSection>

        <PageSection
            id="projects"
            index="02"
            title="Projects"
            lede="A few things I have built. Each one links to its source on GitHub."
        >
            <ul class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <li
                    v-for="(project, i) in projects"
                    :key="project.name"
                    v-reveal="i * 80"
                >
                    <a
                        :href="project.href"
                        target="_blank"
                        rel="noreferrer"
                        class="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5"
                    >
                        <div
                            class="aspect-[16/10] overflow-hidden border-b border-line bg-canvas"
                        >
                            <img
                                :src="project.image"
                                :alt="project.alt"
                                loading="lazy"
                                class="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div class="flex flex-1 flex-col p-6">
                            <div class="flex items-start justify-between gap-4">
                                <h3 class="text-lg font-semibold">
                                    {{ project.name }}
                                </h3>
                                <AppIcon
                                    name="github"
                                    class="size-5 shrink-0 text-muted transition-colors group-hover:text-accent"
                                />
                            </div>
                            <p class="mt-2 text-sm text-muted">
                                {{ project.tagline }}
                            </p>
                            <ul class="mt-auto flex flex-wrap gap-2 pt-5">
                                <li
                                    v-for="tech in project.stack"
                                    :key="tech"
                                    class="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-xs text-ink"
                                >
                                    {{ tech }}
                                </li>
                            </ul>
                        </div>
                    </a>
                </li>
            </ul>
        </PageSection>

        <PageSection id="education" index="03" title="Education">
            <ol class="relative ml-2 border-l border-line">
                <li
                    v-for="(item, i) in education"
                    :key="item.school"
                    v-reveal="i * 80"
                    class="relative pb-10 pl-8 last:pb-0"
                >
                    <span
                        aria-hidden="true"
                        class="absolute top-1.5 -left-[7px] size-3.5 rounded-full border-2 border-accent bg-canvas"
                    />
                    <p class="font-mono text-xs text-muted">{{ item.dates }}</p>
                    <h3 class="mt-1 text-xl font-semibold">{{ item.school }}</h3>
                    <p v-if="item.program" class="mt-0.5 font-medium text-accent">
                        {{ item.program }}
                    </p>
                    <p class="mt-3 max-w-2xl leading-relaxed text-muted">
                        {{ item.summary }}
                    </p>
                </li>
            </ol>
        </PageSection>

        <PageSection
            id="tools"
            index="04"
            title="Favorite tools"
            lede="Links to the docs of the tools I enjoy working with."
        >
            <ul v-reveal class="flex flex-wrap gap-3">
                <li v-for="tool in tools" :key="tool.name">
                    <a
                        :href="tool.href"
                        target="_blank"
                        rel="noreferrer"
                        class="group inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                    >
                        {{ tool.name }}
                        <AppIcon
                            name="arrow-up-right"
                            class="size-3.5 text-muted transition-colors group-hover:text-accent"
                        />
                    </a>
                </li>
            </ul>
        </PageSection>

        <PageSection id="joy" index="05" title="Things that bring me joy">
            <ul class="grid gap-3 sm:grid-cols-2">
                <li
                    v-for="(joy, i) in joys"
                    :key="joy"
                    v-reveal="(i % 2) * 60"
                    class="flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4"
                >
                    <span class="font-mono text-xs text-accent">{{
                        String(i + 1).padStart(2, "0")
                    }}</span>
                    <span class="font-medium">{{ joy }}</span>
                </li>
            </ul>
        </PageSection>
    </main>

    <SiteFooter />
</template>
