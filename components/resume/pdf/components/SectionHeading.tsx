import { Text } from "@react-pdf/renderer";
import { styles } from "../styles";

interface SectionHeadingProps {
    title: string;
}

export default function SectionHeading({
    title,
}: SectionHeadingProps) {

    return (

        <Text style={styles.sectionHeading}>
            {title.toUpperCase()}
        </Text>

    );

}