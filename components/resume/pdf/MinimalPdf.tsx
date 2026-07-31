import { Document, Page, View } from "@react-pdf/renderer";

import {
    ResumeData, Experience, Education, Skill, Training, Language,
} from "../types/resume";

import { paginateMinimal } from "../engine/paginateMinimal";
import { ResumeBlock } from "../engine/types";
import { minimalStyles } from "./minimalStyles";

import MinimalHeader from "./components/minimal/MinimalHeader";
import MinimalSummary from "./components/minimal/MinimalSummary";
import MinimalSectionHeading from "./components/minimal/MinimalSectionHeading";
import MinimalExperienceItem from "./components/minimal/MinimalExperienceItem";
import MinimalEducationItem from "./components/minimal/MinimalEducationItem";
import MinimalSkillsGrid from "./components/minimal/MinimalSkillsGrid";
import MinimalTrainingList from "./components/minimal/MinimalTrainingList";
import MinimalLanguagesList from "./components/minimal/MinimalLanguagesList";

interface MinimalPdfProps { data: ResumeData; }

function renderLeftBlock(block: ResumeBlock) {
    switch (block.type) {
        case "experience-heading": return <MinimalSectionHeading key={block.id} title="Experience" />;
        case "experience-item": return <MinimalExperienceItem key={block.id} job={block.payload as Experience} />;
        case "education-heading": return <MinimalSectionHeading key={block.id} title="Education" />;
        case "education-item": return <MinimalEducationItem key={block.id} education={block.payload as Education} />;
        default: return null;
    }
}

function renderRightBlock(block: ResumeBlock, data: ResumeData) {
    switch (block.type) {
        case "summary": return data.summary ? <MinimalSummary key={block.id} summary={data.summary} /> : null;
        case "skills-heading": return <MinimalSectionHeading key={block.id} title="Skills" />;
        case "skills-grid": return <MinimalSkillsGrid key={block.id} skills={block.payload as Skill[]} />;
        case "training-heading": return <MinimalSectionHeading key={block.id} title="Training" />;
        case "training-grid": return <MinimalTrainingList key={block.id} training={block.payload as Training[]} />;
        case "languages-heading": return <MinimalSectionHeading key={block.id} title="Languages" />;
        case "languages-grid": return <MinimalLanguagesList key={block.id} languages={block.payload as Language[]} />;
        default: return null;
    }
}

export default function MinimalPdf({ data }: MinimalPdfProps) {
    const pages = paginateMinimal(data);

    return (
        <Document>
            {pages.map((page, index) => (
                <Page key={page.id} size="A4" style={minimalStyles.page} wrap>

                    <View style={minimalStyles.content}>

                        <View style={minimalStyles.left}>

                            {index === 0 && (
                                <MinimalHeader data={data} />
                            )}

                            {page.leftBlocks
                                .filter(block => block.type !== "header")
                                .map(renderLeftBlock)}

                        </View>

                        <View style={minimalStyles.right}>

                            {page.rightBlocks.map(block =>
                                renderRightBlock(block, data)
                            )}

                        </View>

                    </View>

                </Page>
            ))}
        </Document>
    );
}