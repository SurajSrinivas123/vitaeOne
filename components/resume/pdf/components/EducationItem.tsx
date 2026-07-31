import { View, Text } from "@react-pdf/renderer";

import { Education } from "../../types/resume";
import { styles } from "../styles";

interface Props {
    education: Education;
}

export default function EducationItem({
    education,
}: Props) {

    return (

        <View style={styles.educationItem}>

            <View style={styles.row}>

                <View style={{ flex: 1 }}>

                    <Text style={styles.field}>
                        {education.field}
                    </Text>

                    <Text style={styles.company}>
                        {education.institution}
                    </Text>

                </View>

                <Text style={styles.date}>
                    {education.startDate} - {education.endDate}
                </Text>

            </View>

        </View>

    );

}