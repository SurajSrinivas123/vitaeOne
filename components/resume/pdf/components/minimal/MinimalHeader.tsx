import { View, Text } from "@react-pdf/renderer";
import { ResumeData } from "../../../types/resume";
import { minimalStyles } from "../../minimalStyles";

interface Props { data: ResumeData; }

export default function MinimalHeader({ data }: Props) {
    const { personal } = data;
    const contacts = [personal.phone, personal.email, personal.location].filter(Boolean);

    return (
        <View style={minimalStyles.header}>
            <Text style={minimalStyles.name}>{personal.fullName}</Text>

            {personal.title && (
                <Text style={minimalStyles.title}>{personal.title}</Text>
            )}

            <View style={minimalStyles.contactRow}>
                {contacts.map((item, index) => (
                    <Text key={index} style={minimalStyles.contact}>
                        {item}{index < contacts.length - 1 ? "  |  " : ""}
                    </Text>
                ))}
            </View>

            {/* <View style={minimalStyles.headerDivider} /> */}
        </View>
    );
}