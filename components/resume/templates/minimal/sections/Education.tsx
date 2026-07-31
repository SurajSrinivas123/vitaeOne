import { Education as EducationType } from "../../../types/resume";

import { formatDate } from "@/lib/utils";

interface EducationProps {
    education: EducationType[];
}

export default function Education({
    education,
}: EducationProps) {

    return (

        <section className="minimal-section">

            <h2 className="minimal-section__title">
                Education
            </h2>

            <div className="minimal-section__divider" />

            {education.map((item) => (

                <article
                    key={item.id}
                    className="minimal-education"
                >

                    <h3 className="minimal-education__degree">
                        {item.degree}
                    </h3>

                    <div className="minimal-education__field">
                        {item.field}
                    </div>

                    <div className="minimal-education__institution">
                        {item.institution}
                    </div>

                    <div className="minimal-education__date">
                        {formatDate(item.startDate)} - {formatDate(item.endDate)}
                    </div>

                    {item.cgpa && (
                        <div className="minimal-education__cgpa">
                            CGPA: {item.cgpa}
                        </div>
                    )}

                </article>

            ))}

        </section>

    );

}