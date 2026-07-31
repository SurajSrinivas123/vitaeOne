import { View, Text } from "@react-pdf/renderer";
import { ResumeData } from "../../types/resume";
import { styles } from "../styles";

interface HeaderProps {
    data: ResumeData;
}

export default function Header({ data }: HeaderProps) {

    const { personal } = data;

    const contacts = [
        personal.phone,
        personal.email,
        personal.location,
    ].filter(Boolean);

    return (
        <View style={styles.header}>

            <Text style={styles.name}>
                {personal.fullName}
            </Text>

            {personal.title && (
                <Text style={styles.title}>
                    {personal.title}
                </Text>
            )}

            <View style={styles.contactRow}>
                {contacts.map((item, index) => (
                    <Text key={index} style={styles.contact}>
                        {item}
                        {index < contacts.length - 1 ? " | " : ""}
                    </Text>
                ))}
            </View>

        </View>
    );
}