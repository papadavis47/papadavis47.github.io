import { createApp } from "vue";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./style.css";
import App from "./App.vue";
import { vReveal } from "./directives/reveal";

createApp(App).directive("reveal", vReveal).mount("#app");
