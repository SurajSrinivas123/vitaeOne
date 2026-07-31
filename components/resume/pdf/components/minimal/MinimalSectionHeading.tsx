import { View, Text } from "@react-pdf/renderer";
import { minimalStyles } from "../../minimalStyles";

interface Props { title: string; }

export default function MinimalSectionHeading({ title }: Props) {
    return (
        <View style={minimalStyles.sectionHeading}>
            <Text style={minimalStyles.sectionTitle}>{title.toUpperCase()}</Text>
            <View style={minimalStyles.sectionDivider} />
        </View>
    );
}