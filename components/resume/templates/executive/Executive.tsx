import { ResumeData, Experience, Education, Skill, Training, Language } from "../../types/resume";
import { ResumeBlock } from "../../engine/types";

import { formatDate } from "@/lib/utils";

interface ExecutiveProps {
    data: ResumeData;
    blocks: ResumeBlock[];
}

export default function Executive({
    data,
    blocks,
}: ExecutiveProps) {
    return (
        <main className="resume-executive">
            {blocks.map((block) => {
                switch (block.type) {
                    case "header":
                        return (
                            <Header
                                key={block.id}
                                personal={data.personal}
                            />
                        );

                    case "summary":
                        return (
                            <Summary
                                key={block.id}
                                summary={data.summary}
                            />
                        );

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

                    case "skills-heading":
                        return (
                            <SectionHeading
                                key={block.id}
                                title="Skills"
                            />
                        );

                    case "skills-grid":
                        return (
                            <SkillsBox
                                key={block.id}
                                skills={block.payload as Skill[]}
                            />
                        );

                    case "training-heading":
                        return (
                            <SectionHeading
                                key={block.id}
                                title="Training / Courses"
                            />
                        );

                    case "training-grid":
                        return (
                            <TrainingList
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
            })}
        </main>
    );
}

function Header({ personal }: { personal: ResumeData["personal"] }) {
    return (
        <header className="resume-executive__header">
            {/* <div className="resume-executive__avatar">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.5h19.6v-2.5c0-3.3-6.5-4.9-9.8-4.9z" />
                </svg>
            </div> */}

            <h1 className="resume-executive__name">
                {personal.fullName}
            </h1>

            <p className="resume-executive__designation">
                {personal.title}
            </p>

            <div className="resume-executive__contact">
                {personal.phone && <span>{personal.phone}</span>}

                {personal.phone && personal.email && (
                    <span className="resume-executive__separator">•</span>
                )}

                {personal.email && <span>{personal.email}</span>}

                {personal.location && (
                    <>
                        <span className="resume-executive__separator">•</span>
                        <span>{personal.location}</span>
                    </>
                )}
            </div>
        </header>
    );
}

function SectionHeading({ title }: { title: string }) {
    return (
        <section className="resume-executive__section">
            <h2 className="resume-executive__heading">
                {title}
            </h2>
        </section>
    );
}

function Summary({ summary }: { summary: string }) {
    if (!summary) return null;

    return (
        <>
            <section className="resume-executive__section">
                <h2 className="resume-executive__heading">
                    Summary
                </h2>
            </section>

            <div className="resume-executive__summary-box">
                <p className="resume-executive__summary">
                    {summary}
                </p>
            </div>
        </>
    );
}

function ExperienceItem({ job }: { job: Experience }) {
    return (
        <article className="resume-executive__experience">
            <p className="resume-executive__company">
                {job.company}
            </p>

            <div className="resume-executive__row">
                <h3 className="resume-executive__role">
                    {job.role}
                </h3>

                <span className="resume-executive__date">
                    {formatDate(job.startDate)} - {job.current ? "Present" : formatDate(job.endDate)}
                </span>
            </div>

            <ul className="resume-executive__list">
                {job.highlights.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </article>
    );
}

function EducationItem({ education }: { education: Education }) {
    return (
        <article className="resume-executive__education">
            <div className="resume-executive__row">
                <h3 className="resume-executive__degree">
                    {education.field || education.degree}
                </h3>

                <span className="resume-executive__date">
                    {formatDate(education.startDate)} - {formatDate(education.endDate)}
                </span>
            </div>

            <p className="resume-executive__institution">
                {education.institution}
            </p>
        </article>
    );
}

function SkillsBox({ skills }: { skills: Skill[] }) {
    return (
        <div className="resume-executive__skills-box">
            <p className="resume-executive__skills-text">
                {skills.map((skill) => skill.name).join("  •  ")}
            </p>
        </div>
    );
}

function TrainingList({ training }: { training: Training[] }) {
    return (
        <div className="resume-executive__training">
            {training.map((course) => (
                <p
                    key={course.id}
                    className="resume-executive__training-item"
                >
                    <span className="resume-executive__training-title">
                        {course.title}
                    </span>
                    <span className="resume-executive__separator"> - </span>
                    <span className="resume-executive__training-institution">
                        {course.institution}
                    </span>
                </p>
            ))}
        </div>
    );
}

function LanguagesGrid({ languages }: { languages: Language[] }) {
    return (
        <div className="resume-executive__languages">
            {languages.map((language) => (
                <div
                    key={language.id}
                    className="resume-executive__language"
                >
                    <strong>{language.name}</strong>
                    {/* <span className="resume-executive__language-level">
                        {language.level}
                    </span> */}

                    <div className="resume-executive__rating">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span
                                key={index}
                                className={
                                    index < language.rating
                                        ? "resume-executive__dot resume-executive__dot--filled"
                                        : "resume-executive__dot"
                                }
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}