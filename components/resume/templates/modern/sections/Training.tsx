import { Training } from "../../../types/resume";

interface TrainingProps {
    training: Training[];
}

export default function Training({ training }: TrainingProps) {
    return (
        <section className="resume-modern__section">

            <h2 className="resume-modern__heading">
                Training
            </h2>

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

        </section>
    );
}