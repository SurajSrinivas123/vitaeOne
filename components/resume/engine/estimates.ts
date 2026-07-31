import { ResumeData } from "../types/resume";

export function estimateResume(data: ResumeData) {

    return {

        header: 120,

        summary: 130,

        experience:

            40 +

            data.experience.length * 140,

        education:

            40 +

            data.education.length * 65,

        skills:
            10 +
            Math.ceil(data.skills.length / 5) * 16,


        training:
            20 +
            Math.ceil(data.training.length / 3) * 28,

        languages:

            20 +

            Math.ceil(data.languages.length / 2) * 24,

    };

}