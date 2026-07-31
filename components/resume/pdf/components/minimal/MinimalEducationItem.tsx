import { View, Text } from "@react-pdf/renderer";
import { Education } from "../../../types/resume";
import { minimalStyles } from "../../minimalStyles";

interface Props { education: Education; }

export default function MinimalEducationItem({ education }: Props) {
    return (
        <View style={minimalStyles.educationItem} wrap={false}>
            <Text style={minimalStyles.field}>{education.field}</Text>
            <Text style={minimalStyles.institution}>{education.institution}</Text>
            <Text style={minimalStyles.educationDate}>{education.startDate} - {education.endDate}</Text>
        </View>
    );
}