import { ref, watch } from "vue";

type Theme = "light" | "dark";

// index.html sets the class before first paint; start from that.
const theme = ref<Theme>(
    document.documentElement.classList.contains("dark") ? "dark" : "light",
);

watch(theme, (value) => {
    document.documentElement.classList.toggle("dark", value === "dark");
    try {
        localStorage.setItem("theme", value);
    } catch {
        // Storage can be unavailable (private mode); the toggle still works.
    }
});

export function useTheme() {
    const toggle = () => {
        theme.value = theme.value === "dark" ? "light" : "dark";
    };
    return { theme, toggle };
}
