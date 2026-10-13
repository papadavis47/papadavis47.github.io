import type { Directive } from "vue";

const observer =
    typeof IntersectionObserver === "undefined"
        ? undefined
        : new IntersectionObserver(
              (entries) => {
                  for (const entry of entries) {
                      if (!entry.isIntersecting) continue;
                      entry.target.classList.add("is-visible");
                      observer?.unobserve(entry.target);
                  }
              },
              { rootMargin: "0px 0px -10% 0px" },
          );

/** Fades an element in the first time it scrolls into view. */
export const vReveal: Directive<HTMLElement, number | undefined> = {
    mounted(el, binding) {
        if (!observer) return;
        el.classList.add("reveal");
        if (binding.value) el.style.transitionDelay = `${binding.value}ms`;
        observer.observe(el);
    },
    beforeUnmount(el) {
        observer?.unobserve(el);
    },
};
