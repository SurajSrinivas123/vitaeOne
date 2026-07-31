import { ResumeData } from "../types/resume";
import { buildBlocks } from "./sections";
import { ResumeBlock } from "./types";

const PAGE_HEIGHT = 1040;

const HEADER_GAP = 24;

export interface MinimalResumePage {
    id: number;
    leftBlocks: ResumeBlock[];
    rightBlocks: ResumeBlock[];
}

interface ColumnBlocks {
    left: ResumeBlock[];
    right: ResumeBlock[];
    header: ResumeBlock[];
}

function splitBlocks(blocks: ResumeBlock[]): ColumnBlocks {

    const left: ResumeBlock[] = [];
    const right: ResumeBlock[] = [];
    const header: ResumeBlock[] = [];

    for (const block of blocks) {

        switch (block.column) {

            case "left":
                left.push(block);
                break;

            case "right":
                right.push(block);
                break;

            case "full":
                header.push(block);
                break;
        }
    }

    return {
        left,
        right,
        header,
    };
}

function paginateColumn(
    blocks: ResumeBlock[],
    availableHeight: number
): ResumeBlock[][] {

    const pages: ResumeBlock[][] = [];

    let current: ResumeBlock[] = [];

    let usedHeight = 0;

    for (const block of blocks) {

        if (
            current.length > 0 &&
            usedHeight + block.height > availableHeight
        ) {

            pages.push(current);

            current = [];
            usedHeight = 0;
        }

        current.push(block);

        usedHeight += block.height;
    }

    if (current.length > 0) {

        pages.push(current);

    }

    return pages;
}

export function paginateMinimal(
    data: ResumeData
): MinimalResumePage[] {

    const blocks = buildBlocks(data);

    const {
        left,
        right,
        header,
    } = splitBlocks(blocks);

    const headerHeight = header.reduce(
        (sum, block) => sum + block.height,
        0
    ) + HEADER_GAP;

    const firstPageHeight = PAGE_HEIGHT - headerHeight;

    const otherPageHeight = PAGE_HEIGHT;

    const leftPages = [
        ...paginateColumn(
            left,
            firstPageHeight
        )
    ];

    const rightPages = [
        ...paginateColumn(
            right,
            firstPageHeight
        )
    ];

    const pages: MinimalResumePage[] = [];

    const totalPages = Math.max(
        leftPages.length,
        rightPages.length,
        1
    );

    for (let pageIndex = 0; pageIndex < totalPages; pageIndex++) {

        const leftBlocks =
            leftPages[pageIndex] ?? [];

        const rightBlocks =
            rightPages[pageIndex] ?? [];

        pages.push({

            id: pageIndex + 1,

            leftBlocks:

                pageIndex === 0
                    ? [...header, ...leftBlocks]
                    : leftBlocks,

            rightBlocks,

        });

    }


    while (pages.length > 1) {

        const last = pages[pages.length - 1];

        if (
            last.leftBlocks.length === 0 &&
            last.rightBlocks.length === 0
        ) {

            pages.pop();
            continue;
        }

        break;
    }

    while (pages.length < totalPages) {

        pages.push({

            id: pages.length + 1,

            leftBlocks: [],

            rightBlocks: [],

        });

    }

    return pages;
}