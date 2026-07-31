// ======================================
// Application Metadata
// ======================================

export const APP = {
    name: process.env.NEXT_PUBLIC_APP_NAME || "VitaeOne • by Suraj Srinivas",

    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",

    tagline: "Professional resumes. Zero signups. Complete privacy.",

    description:
        "Create ATS-friendly professional resumes instantly without creating an account. Your resume never leaves your browser.",
};

// ======================================
// Creator
// ======================================

export const CREATOR = {
    name: process.env.NEXT_PUBLIC_CREATOR_NAME || "Suraj",

    title: process.env.NEXT_PUBLIC_CREATOR_TITLE || "Software Engineer",

    github: process.env.NEXT_PUBLIC_GITHUB_URL || "",

    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",

    portfolio: process.env.NEXT_PUBLIC_PORTFOLIO_URL || "",

    upi: process.env.NEXT_PUBLIC_UPI_ID || "",
};

// ======================================
// Resume Limits
// ======================================

export const LIMITS = {
    summary: {
        min: 100,
        max: 500,
    },

    projects: {
        max: 3,
        bullets: 5,
    },

    experience: {
        max: 5,
        bullets: 5,
    },

    education: {
        max: 5,
    },

    skills: {
        max: 10,
    },

    languages: {
        max: 5,
    },

    hobbies: {
        max: 3,
    },

    certifications: {
        max: 5,
    },
};

// ======================================
// Theme
// ======================================

export const COLORS = {
    primary: "#0F172A",

    secondary: "#2563EB",

    accent: "#14B8A6",

    background: "#F8FAFC",

    text: "#111827",

    border: "#E5E7EB",
};