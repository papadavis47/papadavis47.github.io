import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// papadavis47.github.io is a GitHub Pages *user* site, so it is served from
// the domain root and `base` stays "/".
export default defineConfig({
    base: "/",
    plugins: [vue(), tailwindcss()],
});
