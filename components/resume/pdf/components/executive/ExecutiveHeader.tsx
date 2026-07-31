import { View, Text, Svg, Path } from "@react-pdf/renderer";
import { ResumeData } from "../../../types/resume";
import { executiveStyles as styles, Colors } from "../../executiveStyles";

interface Props {
    data: ResumeData;
}

export default function ExecutiveHeader({ data }: Props) {
    const { personal } = data;

    const contacts = [
        personal.phone,
        personal.email,
        personal.location,
    ].filter(Boolean);

    return (
        <View style={styles.header}>

            {/* <View style={styles.avatar}>
                <Svg width={px(28)} height={px(28)} viewBox="0 0 24 24">
                    <Path
                        d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.5h19.6v-2.5c0-3.3-6.5-4.9-9.8-4.9z"
                        fill={Colors.avatarIcon}
                    />
                </Svg>
            </View> */}

            <Text style={styles.name}>
                {personal.fullName}
            </Text>

            {personal.title && (
                <Text style={styles.designation}>
                    {personal.title}
                </Text>
            )}

            <View style={styles.contactRow}>
                {contacts.map((item, index) => (
                    <View key={index} style={{ flexDirection: "row" }}>
                        <Text style={styles.contact}>{item}</Text>
                        {index < contacts.length - 1 && (
                            <Text style={styles.separator}>•</Text>
                        )}
                    </View>
                ))}
            </View>

        </View>
    );
}

function px(value: number) {
    return Math.round(value * 0.75 * 100) / 100;
}