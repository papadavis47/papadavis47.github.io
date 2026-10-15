/** Resolves a file in public/ against the configured Vite base. */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export interface Social {
    label: string;
    href: string;
    icon: "github" | "stackoverflow" | "bluesky" | "mail";
}

export interface Skill {
    name: string;
    blurb: string;
    href?: string;
}

export interface Project {
    name: string;
    tagline: string;
    stack: string[];
    href: string;
    image: string;
    alt: string;
    /** "logo" centers a mark on a plain panel instead of filling it with a screenshot. */
    imageKind?: "screenshot" | "logo";
    /** Which edge of a cropped screenshot to keep in view. Defaults to the top center. */
    imageAnchor?: "left";
}

export interface Education {
    school: string;
    program?: string;
    dates: string;
    summary: string;
}

export interface Tool {
    name: string;
    href: string;
}

export const profile = {
    name: "John William Davis",
    handle: "papadavis47",
    role: "Software Engineer",
    location: "Seattle, WA",
    email: "jwdavisdeveloper@gmail.com",
    resume: asset("johnwilliamdavis_resume.pdf"),
    source: "https://github.com/papadavis47/papadavis47.github.io/tree/2026-version",
};

export const socials: Social[] = [
    { label: "GitHub", href: "https://github.com/papadavis47", icon: "github" },
    {
        label: "Stack Overflow",
        href: "https://stackoverflow.com/users/9111781/jwdavis",
        icon: "stackoverflow",
    },
    {
        label: "Bluesky",
        href: "https://bsky.app/profile/johnwilliamdavis.com",
        icon: "bluesky",
    },
    { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export const focus = ["Rust", "TypeScript", "Python"];

export const skills: Skill[] = [
    {
        name: "Rust",
        blurb: "My favorite low level language. I am loving the adoption of Rust on modern projects.",
        href: "https://www.rust-lang.org/",
    },
    {
        name: "TypeScript",
        blurb: "I started learning JavaScript in 2017 and have worked exclusively in TypeScript since about 2022. To me, it's the most practical programming language today.",
        href: "https://www.typescriptlang.org/",
    },
    {
        name: "Python",
        blurb: "A clear, versatile language and the one I first learned to code with.",
        href: "https://docs.python.org/3/",
    },
    {
        name: "React",
        blurb: "One of my favorite ways of building user interfaces.",
        href: "https://react.dev/",
    },
    {
        name: "Vue",
        blurb: "The framework this portfolio site is built with.",
        href: "https://vuejs.org/guide/introduction.html",
    },
    {
        name: "Next.js",
        blurb: "The React framework I have used for all my major projects.",
        href: "https://nextjs.org/",
    },
    {
        name: "PostgreSQL",
        blurb: "Most of my SQL experience has been with this database.",
        href: "https://www.postgresql.org/",
    },
    {
        name: "Tailwind CSS",
        blurb: "An amazing way of styling web pages. I have used this for several projects.",
        href: "https://tailwindcss.com/",
    },
    {
        name: "Panda CSS",
        blurb: "I have used this for multiple projects and I love this library.",
        href: "https://panda-css.com/",
    },
];

export const projects: Project[] = [
    {
        name: "Mountains",
        tagline:
            "A terminal training log for trail running. Tracks miles, elevation gain, nutrition, strength and mobility work, and daily notes. Works offline, with optional cloud sync.",
        stack: ["Rust", "Ratatui", "libSQL", "Turso"],
        href: "https://github.com/papadavis47/mountains",
        image: asset("images/projects/mountains.png"),
        alt: "Mountains start screen showing monthly and yearly elevation totals",
    },
    {
        name: "Mija",
        tagline:
            "A full-screen terminal Pomodoro timer. The name is Spanish for \"my daughter\", whose visits remind me to take a break.",
        stack: ["Rust", "Ratatui", "clap"],
        href: "https://github.com/papadavis47/mija",
        image: asset("images/projects/mija-logo.png"),
        alt: "Mija logo: a pomodoro dial around an M",
        imageKind: "logo",
    },
    {
        name: "caleb",
        tagline:
            "A terminal task manager for coding sessions. Each session is saved as a plain Markdown file. Named for a character in Ex Machina.",
        stack: ["Rust", "Ratatui", "jiff"],
        href: "https://github.com/papadavis47/caleb",
        image: asset("images/projects/caleb.png"),
        alt: "caleb session screen with Active and Completed task panes",
        imageAnchor: "left",
    },
];

export const education: Education[] = [
    {
        school: "General Assembly — Seattle",
        program: "Software Engineering Immersive (SEI)",
        dates: "January 2020 – April 2020",
        summary:
            "An intensive, twelve-week, 400+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling and team collaboration strategies.",
    },
    {
        school: "Green River Community College",
        dates: "May 1999 – August 2001",
        summary:
            "Documentary photography coursework. B&W film development and darkroom printing.",
    },
];

export const tools: Tool[] = [
    { name: "React", href: "https://react.dev/" },
    { name: "Next.js", href: "https://nextjs.org/docs" },
    { name: "Nuxt", href: "https://nuxt.com/docs/4.x/getting-started/introduction" },
    { name: "Vue.js", href: "https://vuejs.org/guide/quick-start.html" },
    { name: "Drizzle", href: "https://orm.drizzle.team/docs/get-started" },
    { name: "Supabase", href: "https://supabase.com/docs" },
    { name: "Tailwind CSS", href: "https://tailwindcss.com/docs/installation" },
    { name: "Panda CSS", href: "https://panda-css.com/docs/overview/getting-started" },
    { name: "Pop!_OS", href: "https://pop.system76.com/" },
    { name: "Neovim", href: "https://neovim.io/doc/" },
    { name: "Zed", href: "https://zed.dev/docs/" },
];

export const joys: string[] = [
    "Spending time with my family",
    "Warm sun and exercise",
    "Reading — one of the simplest ways to a richer life",
    "Netflix — world cinema at the click of a button",
    "Water, mountains, desert",
    "Any challenge met and conquered",
    "Sleeping in on weekend mornings",
    "Learning new things",
];

export const sections = [
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "tools", label: "Tools" },
    { id: "joy", label: "Joy" },
] as const;
