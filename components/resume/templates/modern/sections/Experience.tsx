import { Experience as ExperienceType } from "../../../types/resume";

interface ExperienceProps {
    experience: ExperienceType[];
}

export default function Experience({ experience }: ExperienceProps) {
    return (
        <section className="resume-modern__section">

            <h2 className="resume-modern__heading">
                Experience
            </h2>

            {experience.map((job) => (

                <article
                    key={job.id}
                    className="resume-modern__experience"
                >

                    <div className="resume-modern__row">

                        <div>

                            <h3 className="resume-modern__role">
                                {job.role}
                                <span className="resume-modern__company-inline">
                                    {" - ("} {job.company} {")"}
                                </span>
                            </h3>

                        </div>

                        <span className="resume-modern__date">
                            {job.startDate} - {job.current ? "Present" : job.endDate}
                        </span>

                    </div>

                    <ul className="resume-modern__list">

                        {job.highlights.map((item, index) => (

                            <li key={index}>
                                {item}
                            </li>

                        ))}

                    </ul>

                </article>

            ))}

        </section>
    );
}