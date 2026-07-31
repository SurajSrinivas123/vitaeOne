import { View, Text } from "@react-pdf/renderer";
import { Skill } from "../../../types/resume";
import { executiveStyles as styles } from "../../executiveStyles";

interface Props {
    skills: Skill[];
}

export default function ExecutiveSkillsBox({ skills }: Props) {
    return (
        <View style={styles.skillsBox}>
            <Text style={styles.skillsText}>
                {skills.map((skill) => skill.name).join("  •  ")}
            </Text>
        </View>
    );
}