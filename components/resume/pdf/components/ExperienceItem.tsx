import { View, Text } from "@react-pdf/renderer";

import { Experience } from "../../types/resume";
import { styles } from "../styles";

interface Props {
    job: Experience;
}

export default function ExperienceItem({
    job,
}: Props) {

    return (

        <View
            style={styles.experienceItem}
        >

            <View style={styles.row}>

                <View style={{ flex: 1 }}>

                    <Text style={styles.role}>

                        {job.role}

                        <Text style={styles.companyInline}>
                            {" - ("}
                            {job.company}
                            {")"}
                        </Text>

                    </Text>

                </View>

                <Text style={styles.date}>
                    {job.startDate} - {job.endDate}
                </Text>

            </View>

            <View style={styles.bulletList}>

                {job.highlights.map((item, index) => (

                    <View
                        key={index}
                        style={styles.bulletRow}
                    >

                        <Text style={styles.bullet}>
                            •
                        </Text>

                        <Text style={styles.bulletText}>
                            {item}
                        </Text>

                    </View>

                ))}

            </View>

        </View>

    );

}