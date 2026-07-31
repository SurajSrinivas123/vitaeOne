import { ResumeData } from "../types/resume";
import { buildBlocks } from "./sections";
import { ResumeBlock, ResumePage } from "./types";

const PAGE_HEIGHT = 1040;


function isSectionHeading(block: ResumeBlock) {
    return block.type.endsWith("-heading");
}

function isSectionContent(
    heading: ResumeBlock,
    content: ResumeBlock
) {
    return content.type.startsWith(
        heading.type.replace("-heading", "")
    );
}


export function paginate(data: ResumeData): ResumePage[] {
    const blocks = buildBlocks(data);

    const pages: ResumePage[] = [];

    let currentPage: ResumePage = {
        id: 1,
        blocks: [],
    };

    let usedHeight = 0;

    let lastHeading: ResumeBlock | null = null;

    for (let i = 0; i < blocks.length; i++) {

        const block = blocks[i];

        const isHeading = block.type.endsWith("-heading");

        const nextBlock = blocks[i + 1];

        const headingGroupHeight =
            isHeading && nextBlock
                ? block.height + nextBlock.height
                : block.height;

        if (isHeading) {
            lastHeading = block;
        }

        if (usedHeight + headingGroupHeight > PAGE_HEIGHT) {

            pages.push(currentPage);

            currentPage = {
                id: pages.length + 1,
                blocks: [],
            };

            usedHeight = 0;

            // Repeat the current section heading
            if (
                lastHeading &&
                !isHeading &&
                block.type.startsWith(lastHeading.type.replace("-heading", ""))
            ) {
                currentPage.blocks.push(lastHeading);
                usedHeight += lastHeading.height;
            }
        }

        currentPage.blocks.push(block);
        usedHeight += block.height;


        if (
            isHeading &&
            nextBlock &&
            (
                nextBlock.type === "skills-grid" ||
                nextBlock.type === "training-grid" ||
                nextBlock.type === "languages-grid"
            )
        ) {

            currentPage.blocks.push(nextBlock);
            usedHeight += nextBlock.height;
            i++;

        }



    }



    if (currentPage.blocks.length) {
        pages.push(currentPage);
    }

    return pages;
}