import { View, Text } from "@react-pdf/renderer";

import { styles } from "../styles";
import SectionHeading from "./SectionHeading";

interface Props {
    summary: string;
}

export default function Summary({
    summary,
}: Props) {

    if (!summary)
        return null;

    return (

        <View style={styles.section}>

            <SectionHeading
                title="Summary"
            />

            <Text style={styles.summary}>
                {summary}
            </Text>

        </View>

    );

}