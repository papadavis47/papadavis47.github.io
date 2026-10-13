import { onBeforeUnmount, onMounted, ref } from "vue";

/** Tracks which section is currently in the middle band of the viewport. */
export function useActiveSection(ids: readonly string[]) {
    const active = ref<string | null>(null);
    let observer: IntersectionObserver | undefined;

    onMounted(() => {
        observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) active.value = entry.target.id;
                }
            },
            { rootMargin: "-45% 0px -50% 0px" },
        );
        for (const id of ids) {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        }
    });

    onBeforeUnmount(() => observer?.disconnect());

    return active;
}
