import { ResumeData } from "../types/resume";
import { estimateResume } from "./estimates";

import {
    ResumeBlock,
} from "./types";

export function buildBlocks(
    data: ResumeData
): ResumeBlock[] {

    const estimate = estimateResume(data);

    const blocks: ResumeBlock[] = [];

    //
    // Header
    //

    blocks.push({

        id: "header",

        type: "header",

        height: estimate.header,

        column: "full",

    });

    //
    // Summary
    //

    if (data.summary?.trim()) {

        blocks.push({

            id: "summary",

            type: "summary",

            height: estimate.summary,

            column: "right",

        });

    }

    //
    // Experience Heading + Items
    //

    if (data.experience.length > 0) {

        blocks.push({

            id: "experience-heading",

            type: "experience-heading",

            height: 40,

            column: "left",

        });

        data.experience.forEach((job) => {

            blocks.push({

                id: `experience-${job.id}`,

                type: "experience-item",

                height: 140,

                payload: job,

                column: "left",

            });

        });

    }

    //
    // Education Heading + Items
    //

    if (data.education.length > 0) {

        blocks.push({

            id: "education-heading",

            type: "education-heading",

            height: 40,

            column: "left",

        });

        data.education.forEach((education) => {

            blocks.push({

                id: `education-${education.id}`,

                type: "education-item",

                height: 65,

                payload: education,

                column: "left",

            });

        });

    }

    //
    // Skills
    //

    if (data.skills.length > 0) {

        blocks.push({

            id: "skills-heading",

            type: "skills-heading",

            height: 40,

            column: "right",

        });

        blocks.push({

            id: "skills-grid",

            type: "skills-grid",

            height: estimate.skills,

            payload: data.skills,

            column: "right",

        });

    }

    //
    // Training
    //

    if (data.training.length > 0) {

        blocks.push({

            id: "training-heading",

            type: "training-heading",

            height: 40,

            column: "right",

        });

        blocks.push({

            id: "training-grid",

            type: "training-grid",

            height: estimate.training,

            payload: data.training,

            column: "right",

        });

    }

    //
    // Languages
    //

    if (data.languages.length > 0) {

        blocks.push({

            id: "languages-heading",

            type: "languages-heading",

            height: 40,

            column: "right",

        });

        blocks.push({

            id: "languages-grid",

            type: "languages-grid",

            height: estimate.languages,

            payload: data.languages,

            column: "right",

        });

    }

    return blocks;

}