export interface PersonalInfo {
    fullName: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedIn: string;
    github: string;
    portfolio: string;
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    highlights: string[];
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    cgpa: string;
}

export interface Skill {
    id: string;
    name: string;
}

export interface Training {
    id: string;
    title: string;
    institution: string;
}

export interface Language {
    id: string;
    name: string;
    level: string;
    rating: number;
}

export interface ResumeData {
    personal: PersonalInfo;
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: Skill[];
    training: Training[];
    languages: Language[];
}