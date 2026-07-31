import {
    ResumeData,
    Experience,
    Education,
    Skill,
    Training,
    Language,
} from "../../types/resume";

import { formatDate } from "@/lib/utils";

import { ResumeBlock } from "../../engine/types";

import Header from "./sections/Header";

interface MinimalProps {
    data: ResumeData;
    leftBlocks: ResumeBlock[];
    rightBlocks: ResumeBlock[];
    showHeader?: boolean;
}

interface SectionHeadingProps {
    title: string;
}

function SectionHeading({
    title,
}: SectionHeadingProps) {
    return (
        <section className="minimal-section">
            <h2 className="minimal-section__title">
                {title}
            </h2>

            <div className="minimal-section__divider" />
        </section>
    );
}

interface SummaryBlockProps {
    summary: string;
}

function SummaryBlock({
    summary,
}: SummaryBlockProps) {

    if (!summary?.trim()) {
        return null;
    }

    return (
        <section className="minimal-section">

            <h2 className="minimal-section__title">
                Summary
            </h2>

            <div className="minimal-section__divider" />

            <p className="minimal-summary">
                {summary}
            </p>

        </section>
    );
}

interface ExperienceItemProps {
    job: Experience;
}

function ExperienceItem({
    job,
}: ExperienceItemProps) {

    return (

        <article className="minimal-experience">

            <h3 className="minimal-experience__role">
                {job.role}
            </h3>

            <div className="minimal-experience__meta">

                <span className="minimal-experience__company">
                    {job.company}
                </span>

                <span className="minimal-experience__date">
                    {" • "}
                    {formatDate(job.startDate)}
                    {" - "}
                    {job.current ? "Present" : formatDate(job.endDate)}
                </span>

            </div>

            {!!job.highlights?.length && (

                <ul className="minimal-experience__list">

                    {job.highlights.map((highlight, index) => (

                        <li key={index}>
                            {highlight}
                        </li>

                    ))}

                </ul>

            )}

        </article>

    );

}

interface EducationItemProps {
    education: Education;
}

function EducationItem({
    education,
}: EducationItemProps) {

    return (

        <article className="minimal-education">

            {/* <h3 className="minimal-education__degree">
                {education.degree}
            </h3> */}

            <div className="minimal-education__field">
                {education.field}
            </div>

            <div className="minimal-education__institution">
                {education.institution}
            </div>

            <div className="minimal-education__date">
                {formatDate(education.startDate)}
                {" - "}
                {formatDate(education.endDate)}
            </div>

            {/* {education.cgpa && (

                <div className="minimal-education__cgpa">
                    CGPA: {education.cgpa}
                </div>

            )} */}

        </article>

    );

}

interface SkillsGridProps {
    skills: Skill[];
}

function SkillsGrid({
    skills,
}: SkillsGridProps) {

    if (!skills?.length) {
        return null;
    }

    return (
        <section className="minimal-section">

            <div className="minimal-skills">

                {skills.map((skill) => (

                    <div
                        key={skill.id}
                        className="minimal-skill"
                    >
                        {skill.name}
                    </div>

                ))}

            </div>

        </section>
    );

}

interface TrainingGridProps {
    training: Training[];
}

function TrainingGrid({
    training,
}: TrainingGridProps) {

    if (!training?.length) {
        return null;
    }

    return (
        <section className="minimal-section">

            <div className="minimal-training">

                {training.map((course) => (

                    <article
                        key={course.id}
                        className="minimal-training__item"
                    >

                        <h4>
                            {course.title}
                        </h4>

                        <p>
                            {course.institution}
                        </p>

                    </article>

                ))}

            </div>

        </section>
    );

}

interface LanguagesGridProps {
    languages: Language[];
}

function LanguagesGrid({
    languages,
}: LanguagesGridProps) {

    if (!languages?.length) {
        return null;
    }

    return (
        <section className="minimal-section">

            <div className="minimal-languages">

                {languages.map((language) => (

                    <article
                        key={language.id}
                        className="minimal-language"
                    >

                        <strong>
                            {language.name}
                        </strong>

                        <div>
                            {language.level}
                        </div>

                        <div className="minimal-language__rating">

                            {Array.from({ length: 5 }).map((_, index) => (

                                <span
                                    key={index}
                                    className={
                                        index < language.rating
                                            ? "minimal-dot minimal-dot--filled"
                                            : "minimal-dot"
                                    }
                                />

                            ))}

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );

}

function renderLeftBlock(
    block: ResumeBlock
): React.ReactNode {

    switch (block.type) {

        case "experience-heading":
            return (
                <SectionHeading
                    key={block.id}
                    title="Experience"
                />
            );

        case "experience-item":
            return (
                <ExperienceItem
                    key={block.id}
                    job={block.payload as Experience}
                />
            );

        case "education-heading":
            return (
                <SectionHeading
                    key={block.id}
                    title="Education"
                />
            );

        case "education-item":
            return (
                <EducationItem
                    key={block.id}
                    education={block.payload as Education}
                />
            );

        default:
            return null;

    }

}

function renderRightBlock(
    block: ResumeBlock,
    data: ResumeData
): React.ReactNode {

    switch (block.type) {

        case "summary":
            return (
                <SummaryBlock
                    key={block.id}
                    summary={data.summary}
                />
            );

        case "skills-heading":
            return (
                <SectionHeading
                    key={block.id}
                    title="Skills"
                />
            );

        case "skills-grid":
            return (
                <SkillsGrid
                    key={block.id}
                    skills={block.payload as Skill[]}
                />
            );

        case "training-heading":
            return (
                <SectionHeading
                    key={block.id}
                    title="Training"
                />
            );

        case "training-grid":
            return (
                <TrainingGrid
                    key={block.id}
                    training={block.payload as Training[]}
                />
            );

        case "languages-heading":
            return (
                <SectionHeading
                    key={block.id}
                    title="Languages"
                />
            );

        case "languages-grid":
            return (
                <LanguagesGrid
                    key={block.id}
                    languages={block.payload as Language[]}
                />
            );

        default:
            return null;

    }

}

export default function Minimal({
    data,
    leftBlocks,
    rightBlocks,
    showHeader = true,
}: MinimalProps) {


    return (

        <div className="resume-minimal">



            <div className="resume-minimal__content">

                <div className="resume-minimal__left">

                    {showHeader && (
                        <Header data={data} />
                    )}

                    {leftBlocks.map(renderLeftBlock)}

                </div>

                <div className="resume-minimal__right">

                    {rightBlocks
                        .filter((block) => block.type === "summary")
                        .map((block) =>
                            renderRightBlock(block, data)
                        )}

                    {rightBlocks
                        .filter((block) => block.type !== "summary")
                        .map((block) =>
                            renderRightBlock(block, data)
                        )}

                </div>

            </div>

        </div>

    );

}