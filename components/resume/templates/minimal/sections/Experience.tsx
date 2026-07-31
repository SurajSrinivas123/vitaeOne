import { Experience as ExperienceType } from "../../../types/resume";

import { formatDate } from "@/lib/utils";

interface ExperienceProps {
    experience: ExperienceType[];
}

export default function Experience({
    experience,
}: ExperienceProps) {

    return (

        <section className="minimal-section">

            <h2 className="minimal-section__title">
                Experience
            </h2>

            <div className="minimal-section__divider" />

            {experience.map((job) => (

                <article
                    key={job.id}
                    className="minimal-experience"
                >

                    <h3 className="minimal-experience__role">
                        {job.role}
                    </h3>

                    <div className="minimal-experience__company">

                        {job.company}

                    </div>

                    <div className="minimal-experience__date">

                        {formatDate(job.startDate)} - {job.current ? "Present" : formatDate(job.endDate)}

                    </div>

                    <ul className="minimal-experience__list">

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