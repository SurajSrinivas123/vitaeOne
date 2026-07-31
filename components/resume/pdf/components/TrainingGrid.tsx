import { View, Text } from "@react-pdf/renderer";

import { Training } from "../../types/resume";
import { styles } from "../styles";

interface Props {
    training: Training[];
}

export default function TrainingGrid({ training }: Props) {

    const rows = [];

    for (let i = 0; i < training.length; i += 3) {
        rows.push(training.slice(i, i + 3));
    }

    return (

        <View>

            {rows.map((row, rowIndex) => (

                <View
                    key={rowIndex}
                    style={styles.trainingRow}
                >

                    {row.map((course) => (

                        <View
                            key={course.id}
                            style={styles.trainingItem}
                        >

                            <Text style={styles.trainingTitle}>
                                {course.title}
                            </Text>

                            <Text style={styles.trainingInstitution}>
                                {course.institution}
                            </Text>

                        </View>

                    ))}

                </View>

            ))}

        </View>

    );

}