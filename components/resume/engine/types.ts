export type ResumeBlockType =
    | "header"
    | "summary"
    | "experience-heading"
    | "experience-item"
    | "education-heading"
    | "education-item"
    | "skills-heading"
    | "skills-grid"
    | "training-heading"
    | "training-grid"
    | "languages-heading"
    | "languages-grid";

export interface ResumeBlock {
    id: string;
    type: string;
    height: number;
    payload?: unknown;

    column: "left" | "right" | "full";
}

export interface ResumePage {

    id: number;

    blocks: ResumeBlock[];

}