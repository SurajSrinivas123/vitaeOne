import { Education as EducationType } from "../../../types/resume";

interface EducationProps {
    education: EducationType[];
}

export default function Education({ education }: EducationProps) {
    return (
        <section className="resume-modern__section">

            <h2 className="resume-modern__heading">
                Education
            </h2>

            {education.map((edu) => (

                <article
                    key={edu.id}
                    className="resume-modern__education"
                >

                    <div className="resume-modern__row">

                        <div>

                            <h3 className="resume-modern__role">
                                {edu.degree}
                            </h3>

                            <p className="resume-modern__company">
                                {edu.institution}
                            </p>

                            <p className="resume-modern__field">
                                {edu.field}
                            </p>

                        </div>

                        <span className="resume-modern__date">
                            {edu.startDate} - {edu.endDate}
                        </span>

                    </div>

                </article>

            ))}

        </section>
    );
}