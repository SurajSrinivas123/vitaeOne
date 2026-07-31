import { View, Text } from "@react-pdf/renderer";
import { minimalStyles } from "../../minimalStyles";
import MinimalSectionHeading from "./MinimalSectionHeading";

interface Props { summary: string; }

export default function MinimalSummary({ summary }: Props) {
    if (!summary) return null;
    return (
        <View style={minimalStyles.section} wrap={false}>
            <MinimalSectionHeading title="Summary" />
            <Text style={minimalStyles.summary}>{summary}</Text>
        </View>
    );
}