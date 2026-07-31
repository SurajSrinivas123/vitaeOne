import { View, Text } from "@react-pdf/renderer";
import { Experience } from "../../../types/resume";
import { minimalStyles } from "../../minimalStyles";

interface Props { job: Experience; }

export default function MinimalExperienceItem({ job }: Props) {
    return (
        <View style={minimalStyles.experienceItem} wrap={false}>
            <Text style={minimalStyles.role}>{job.role}</Text>

            <View style={minimalStyles.meta}>
                <Text style={minimalStyles.company}>{job.company}</Text>
                <Text style={minimalStyles.metaSeparator}>{" • "}</Text>
                <Text style={minimalStyles.date}>{job.startDate} - {job.endDate}</Text>
            </View>

            {!!job.highlights?.length && (
                <View style={minimalStyles.bulletList}>
                    {job.highlights.map((item, index) => (
                        <View key={index} style={minimalStyles.bulletRow}>
                            <Text style={minimalStyles.bullet}>•</Text>
                            <Text style={minimalStyles.bulletText}>{item}</Text>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
}