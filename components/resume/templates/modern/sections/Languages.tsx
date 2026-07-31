import { Language } from "../../../types/resume";

interface LanguagesProps {
    languages: Language[];
}

export default function Languages({ languages }: LanguagesProps) {
    return (
        <section className="resume-modern__section">

            <h2 className="resume-modern__heading">
                Languages
            </h2>

            <div className="resume-modern__languages">

                {languages.map((language) => (

                    <div
                        key={language.id}
                        className="resume-modern__language"
                    >

                        <strong>
                            {language.name}
                        </strong>

                        <span>
                            {language.level}
                        </span>

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

        </section>
    );
}