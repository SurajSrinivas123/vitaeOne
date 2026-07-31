import { View, Text } from "@react-pdf/renderer";
import { executiveStyles as styles } from "../../executiveStyles";
import ExecutiveSectionHeading from "./ExecutiveSectionHeading";

interface Props {
    summary: string;
}

export default function ExecutiveSummary({ summary }: Props) {
    if (!summary) return null;

    return (
        <View style={styles.section}>

            <ExecutiveSectionHeading title="Summary" />

            <View style={styles.summaryBox}>
                <Text style={styles.summary}>
                    {summary}
                </Text>
            </View>

        </View>
    );
}