export const RESUME_TEMPLATES = [
    {
        id: "modern",
        name: "Modern",
    },
    {
        id: "minimal",
        name: "Minimal",
    },
    {
        id: "executive",
        name: "Executive",
    },
] as const;

export type ResumeTemplate = typeof RESUME_TEMPLATES[number]["id"];