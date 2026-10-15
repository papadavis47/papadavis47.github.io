<script setup lang="ts">
import { computed } from "vue";

export type IconName =
    | "logo"
    | "github"
    | "stackoverflow"
    | "bluesky"
    | "mail"
    | "sun"
    | "moon"
    | "arrow-up-right"
    | "menu"
    | "close"
    | "download";

interface IconDef {
    viewBox: string;
    paths: string[];
    // Brand marks are filled shapes; UI glyphs are 2px strokes.
    filled?: boolean;
    strokeWidth?: number;
}

const icons: Record<IconName, IconDef> = {
    // The "summit prompt": a mountain peak drawn as a caret, beside a terminal cursor.
    // Drawn on the same 32x32 grid as public/favicon.svg.
    logo: {
        viewBox: "0 0 32 32",
        strokeWidth: 3,
        paths: ["M7.5 19 L13.75 10.5 L20 19", "M19.5 24 H25.5"],
    },
    github: {
        viewBox: "0 0 32 32",
        filled: true,
        paths: [
            "M16.003 0C7.17 0 .008 7.162.008 15.997c0 7.067 4.582 13.063 10.94 15.179.8.146 1.052-.328 1.052-.752 0-.38.008-1.442 0-2.777-4.449.967-5.371-2.107-5.371-2.107-.727-1.848-1.775-2.34-1.775-2.34-1.452-.992.109-.973.109-.973 1.605.113 2.451 1.649 2.451 1.649 1.427 2.443 3.743 1.737 4.654 1.329.146-1.034.56-1.739 1.017-2.139-3.552-.404-7.286-1.776-7.286-7.906 0-1.747.623-3.174 1.646-4.292-.165-.404-.715-2.031.157-4.234 0 0 1.343-.43 4.398 1.641a15.31 15.31 0 0 1 4.005-.538c1.359.006 2.727.183 4.005.538 3.055-2.07 4.396-1.641 4.396-1.641.872 2.203.323 3.83.159 4.234 1.023 1.118 1.644 2.545 1.644 4.292 0 6.146-3.74 7.498-7.304 7.893C19.479 23.548 20 24.508 20 26v4.428c0 .428.258.901 1.07.746C27.422 29.055 32 23.062 32 15.997 32 7.162 24.838 0 16.003 0z",
        ],
    },
    stackoverflow: {
        viewBox: "-1163 1657.697 56.693 56.693",
        filled: true,
        paths: [
            "m-1126.04 1689.533-16.577-9.778 2.088-3.54 16.577 9.778zM-1127.386 1694.635l-18.586-4.996 1.068-3.97 18.586 4.996zM-1127.824 1700.137l-19.165-1.767.377-4.093 19.165 1.767zM-1147.263 1701.293h19.247v4.111h-19.247z",
            "M-1121.458 1710.947s0 .96-.032.96v.016h-30.796s-.96 0-.96-.016h-.032v-20.03h3.288v16.805h25.244v-16.804h3.288v19.07zM-1130.667 1667.04l10.844 15.903-3.396 2.316-10.844-15.902zM-1118.313 1663.044l3.29 18.963-4.05.703-3.29-18.963z",
        ],
    },
    bluesky: {
        viewBox: "0 0 64 64",
        filled: true,
        paths: [
            "M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805zm36.254 0C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745z",
        ],
    },
    mail: {
        viewBox: "0 0 24 24",
        paths: ["M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25z", "m3.5 6.5 8.5 6 8.5-6"],
    },
    sun: {
        viewBox: "0 0 24 24",
        paths: [
            "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
            "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41",
        ],
    },
    moon: {
        viewBox: "0 0 24 24",
        paths: ["M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"],
    },
    "arrow-up-right": {
        viewBox: "0 0 24 24",
        paths: ["M7 17 17 7M8 7h9v9"],
    },
    menu: {
        viewBox: "0 0 24 24",
        paths: ["M4 7h16M4 12h16M4 17h16"],
    },
    close: {
        viewBox: "0 0 24 24",
        paths: ["M6 6l12 12M18 6 6 18"],
    },
    download: {
        viewBox: "0 0 24 24",
        paths: ["M12 4v11M7 10l5 5 5-5M5 20h14"],
    },
};

const props = defineProps<{ name: IconName }>();
const icon = computed(() => icons[props.name]);
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="icon.viewBox"
        aria-hidden="true"
        focusable="false"
        :fill="icon.filled ? 'currentColor' : 'none'"
        :stroke="icon.filled ? undefined : 'currentColor'"
        :stroke-width="icon.filled ? undefined : (icon.strokeWidth ?? 2)"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path v-for="(d, i) in icon.paths" :key="i" :d="d" />
    </svg>
</template>
