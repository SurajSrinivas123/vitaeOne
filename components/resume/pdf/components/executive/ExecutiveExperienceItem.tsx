import { View, Text } from "@react-pdf/renderer";
import { Experience } from "../../../types/resume";
import { executiveStyles as styles } from "../../executiveStyles";

interface Props {
    job: Experience;
}

export default function ExecutiveExperienceItem({ job }: Props) {
    return (
        <View style={styles.itemBlock}>

            <Text style={styles.company}>
                {job.company}
            </Text>

            <View style={styles.row}>
                <Text style={styles.role}>
                    {job.role}
                </Text>

                <Text style={styles.date}>
                    {job.startDate} - {job.endDate}
                </Text>
            </View>

            <View style={styles.bulletList}>
                {job.highlights.map((item, index) => (
                    <View key={index} style={styles.bulletRow}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>{item}</Text>
                    </View>
                ))}
            </View>

        </View>
    );
}