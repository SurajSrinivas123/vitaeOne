import { ResumeData, Experience, Education, Skill, Training, Language } from "../../types/resume";
import { ResumeBlock } from "../../engine/types";
import { formatDate } from "@/lib/utils";

import Header from "./sections/Header";
import Summary from "./sections/Summary";

interface ModernProps {
    data: ResumeData;
    blocks: ResumeBlock[];
}

export default function Modern({
    data,
    blocks,
}: ModernProps) {
    return (
        <main className="resume-modern">
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
            })}
        </main>
    );
}

function SectionHeading({ title }: { title: string }) {
    return (
        <section className="resume-modern__section">
            <h2 className="resume-modern__heading">
                {title}
            </h2>
        </section>
    );
}

function ExperienceItem({ job }: { job: Experience }) {
    return (
        <article className="resume-modern__experience">
            <div className="resume-modern__row">
                <div>
                    <h3 className="resume-modern__role">
                        {job.role}
                        <span className="resume-modern__company-inline">
                            {" - ("}{job.company}{")"}
                        </span>
                    </h3>
                </div>

                <span className="resume-modern__date">
                    {formatDate(job.startDate)} - {job.current ? "Present" : formatDate(job.endDate)}
                </span>
            </div>

            <ul className="resume-modern__list">
                {job.highlights.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </article>
    );
}

function EducationItem({ education }: { education: Education }) {
    return (
        <article className="resume-modern__education">
            <div className="resume-modern__row">
                <div>

                    <p className="resume-modern__field">
                        {education.field}
                    </p>

                    <p className="resume-modern__company">
                        {education.institution}
                    </p>

                </div>

                <span className="resume-modern__date">
                    {formatDate(education.startDate)} - {formatDate(education.endDate)}
                </span>
            </div>
        </article>
    );
}

function SkillsGrid({ skills }: { skills: Skill[] }) {
    return (
        <div className="resume-modern__skills">
            {skills.map((skill) => (
                <div
                    key={skill.id}
                    className="resume-modern__skill"
                >
                    {skill.name}
                </div>
            ))}
        </div>
    );
}

function TrainingGrid({ training }: { training: Training[] }) {
    return (
        <div className="resume-modern__training">
            {training.map((course) => (
                <div
                    key={course.id}
                    className="resume-modern__training-item"
                >
                    <h4>{course.title}</h4>
                    <p>{course.institution}</p>
                </div>
            ))}
        </div>
    );
}

function LanguagesGrid({ languages }: { languages: Language[] }) {
    return (
        <div className="resume-modern__languages">
            {languages.map((language) => (
                <div
                    key={language.id}
                    className="resume-modern__language"
                >
                    <strong>{language.name}</strong>

                    <span>{language.level}</span>

                    <div className="resume-modern__rating">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span
                                key={index}
                                className={
                                    index < language.rating
                                        ? "resume-modern__dot resume-modern__dot--filled"
                                        : "resume-modern__dot"
                                }
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}