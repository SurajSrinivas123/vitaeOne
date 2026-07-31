import { View, Text } from "@react-pdf/renderer";
import { Training } from "../../../types/resume";
import { executiveStyles as styles } from "../../executiveStyles";

interface Props {
    training: Training[];
}

export default function ExecutiveTrainingList({ training }: Props) {
    return (
        <View>
            {training.map((course) => (
                <View key={course.id} style={styles.trainingItem}>
                    <Text style={styles.trainingTitle}>
                        {course.title}
                    </Text>
                    <Text style={styles.trainingSeparator}>—</Text>
                    <Text style={styles.trainingInstitution}>
                        {course.institution}
                    </Text>
                </View>
            ))}
        </View>
    );
}