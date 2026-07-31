import { View, Text } from "@react-pdf/renderer";
import { Skill } from "../../../types/resume";
import { minimalStyles } from "../../minimalStyles";

interface Props { skills: Skill[]; }

export default function MinimalSkillsGrid({ skills }: Props) {
    return (
        <View style={minimalStyles.skillsGrid}>
            {skills.map((skill) => (
                <Text key={skill.id} style={minimalStyles.skill}>{skill.name}</Text>
            ))}
        </View>
    );
}