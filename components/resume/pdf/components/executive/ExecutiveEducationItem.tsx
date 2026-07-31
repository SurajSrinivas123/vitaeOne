import { View, Text } from "@react-pdf/renderer";
import { Education } from "../../../types/resume";
import { executiveStyles as styles } from "../../executiveStyles";

interface Props {
    education: Education;
}

export default function ExecutiveEducationItem({ education }: Props) {
    return (
        <View style={styles.itemBlock}>

            <View style={styles.row}>
                <Text style={styles.role}>
                    {education.field || education.degree}
                </Text>

                <Text style={styles.date}>
                    {education.startDate} - {education.endDate}
                </Text>
            </View>

            <Text style={styles.company}>
                {education.institution}
            </Text>

        </View>
    );
}