import type { vReveal } from "./directives/reveal";

declare module "vue" {
    interface GlobalDirectives {
        vReveal: typeof vReveal;
    }
}
