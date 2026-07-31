import { View, Text } from "@react-pdf/renderer";
import { Skill } from "../../types/resume";
import { styles } from "../styles";

interface Props {
    skills: Skill[];
}

export default function SkillsGrid({ skills }: Props) {

    const rows = [];

    for (let i = 0; i < skills.length; i += 5) {
        rows.push(skills.slice(i, i + 5));
    }

    return (
        <View>

            {rows.map((row, rowIndex) => (

                <View
                    key={rowIndex}
                    style={styles.skillsRow}
                >

                    {row.map((skill) => (

                        <Text
                            key={skill.id}
                            style={styles.skill}
                        >
                            {skill.name}
                        </Text>

                    ))}

                </View>

            ))}

        </View>
    );

}