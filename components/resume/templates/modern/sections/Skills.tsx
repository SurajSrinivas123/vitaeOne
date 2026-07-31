import { Skill } from "../../../types/resume";

interface SkillsProps {
    skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
    return (
        <section className="resume-modern__section">

            <h2 className="resume-modern__heading">
                Skills
            </h2>

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

        </section>
    );
}