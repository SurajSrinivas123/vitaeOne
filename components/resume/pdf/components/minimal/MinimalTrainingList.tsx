import { View, Text } from "@react-pdf/renderer";
import { Training } from "../../../types/resume";
import { minimalStyles } from "../../minimalStyles";

interface Props { training: Training[]; }

export default function MinimalTrainingList({ training }: Props) {
    return (
        <View style={minimalStyles.trainingList}>
            {training.map((course) => (
                <View key={course.id} style={minimalStyles.trainingItem} wrap={false}>
                    <Text style={minimalStyles.trainingTitle}>{course.title}</Text>
                    <Text style={minimalStyles.trainingInstitution}>{course.institution}</Text>
                </View>
            ))}
        </View>
    );
}