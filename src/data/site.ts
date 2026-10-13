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

export const focus = ["TypeScript", "Go", "Rust"];

export const skills: Skill[] = [
    {
        name: "TypeScript",
        blurb: "This is the language I have the most experience with.",
        href: "https://www.typescriptlang.org/",
    },
    {
        name: "React",
        blurb: "One of my favorite ways of building user interfaces.",
        href: "https://react.dev/",
    },
    {
        name: "Next.js",
        blurb: "The React framework I have used for all my major projects.",
        href: "https://nextjs.org/",
    },
    {
        name: "Go",
        blurb: "One of my favorite languages with great ergonomics.",
        href: "https://go.dev/",
    },
    {
        name: "Rust",
        blurb: "My favorite low level language. I am loving the adoption of Rust on modern projects.",
        href: "https://www.rust-lang.org/",
    },
    {
        name: "PostgreSQL",
        blurb: "Most of my SQL experience has been with this database. I have found that it translates perfectly well to other SQL flavors such as MySQL or SQLite.",
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
        name: "PAPA",
        tagline: "A desktop journaling application for fathers.",
        stack: ["JavaScript", "Electron.js"],
        href: "https://github.com/papadavis47/PAPA",
        image: asset("images/ScreenshotPapa.jpg"),
        alt: "Screenshot of the PAPA journaling app",
    },
    {
        name: "coderCoachOrganizer",
        tagline: "An organizational tool for programming mentors.",
        stack: ["JavaScript", "Express.js", "Postgres"],
        href: "https://github.com/papadavis47/coder-coach-organizer",
        image: asset("images/ScreenshotCoderCoach.png"),
        alt: "Screenshot of coderCoachOrganizer",
    },
    {
        name: "Linda's Math Game",
        tagline: "A flash card math game for second and third graders.",
        stack: ["JavaScript", "HTML5", "CSS"],
        href: "https://github.com/papadavis47/lindas-math-game",
        image: asset("images/ScreenshotLindasMathGame.png"),
        alt: "Screenshot of Linda's Math Game",
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
